'use server';

import { z } from 'zod';
import { cookies, headers } from 'next/headers';
import { auth } from '../auth';
import { db } from '../db';
import { guest } from '../db/schema';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';

const signUpSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function createGuestSession() {
  const sessionToken = crypto.randomUUID();
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

  await db.insert(guest).values({
    sessionToken,
    expiresAt,
  });

  (await cookies()).set('guest_session', sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  return sessionToken;
}

export async function getGuestSession() {
  return (await cookies()).get('guest_session')?.value;
}

async function mergeGuestCartWithUserCart() {
  const guestToken = await getGuestSession();
  if (!guestToken) return;

  // Placeholder: Logic to merge guest cart with user cart
  // const guestCart = await db.query.carts.findFirst({ where: eq(carts.guestToken, guestToken) });
  // if (guestCart) { ... }

  // Clean up guest session
  await db.delete(guest).where(eq(guest.sessionToken, guestToken));
  (await cookies()).delete('guest_session');
}

export async function getCurrentUser() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    return session?.user ?? null;
  } catch (error) {
    return null;
  }
}

export async function signUp(formData: z.infer<typeof signUpSchema>) {
  const validatedFields = signUpSchema.safeParse(formData);

  if (!validatedFields.success) {
    return { error: 'Invalid fields' };
  }

  const { name, email, password } = validatedFields.data;

  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
      headers: await headers(),
    });
    
    await mergeGuestCartWithUserCart();
    
  } catch {
    return { error: 'Failed to create account' };
  }
  
  redirect('/');
}

export async function signIn(formData: z.infer<typeof signInSchema>) {
  const validatedFields = signInSchema.safeParse(formData);

  if (!validatedFields.success) {
    return { error: 'Invalid fields' };
  }

  const { email, password } = validatedFields.data;

  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
      headers: await headers(),
    });

    await mergeGuestCartWithUserCart();

  } catch {
    return { error: 'Failed to sign in' };
  }

  redirect('/');
}

export async function signOut() {
  await auth.api.signOut({
    headers: await headers(),
  });
  redirect('/sign-in');
}
