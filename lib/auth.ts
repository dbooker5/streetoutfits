import { betterAuth, BetterAuthOptions } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import { v4 as uuidv4 } from "uuid";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            user: "user",
            session: "session",
            account: "account",
            verification: "verification",
        }
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,    
    },
    socialProviders:{},
    session:{
        cookieCache: {
            enabled: true,
            maxAge: 60 * 60 * 24 * 7,
        }
    },

    advanced: {
        cookies: {
            sessionToken: {
                name: "auth_session",
                attributes: {
                    httpOnly: true,
                    sameSite: "strict",
                    path: "/",
                    secure: process.env.NODE_ENV === "production",
                    maxAge: 60 * 60 * 24 * 7,
                }
            },
        },
        database: {
            generateId: () => uuidv4(),
        }
    },
    plugins: [nextCookies()],
} satisfies BetterAuthOptions);
