import { AuthForm } from "@/components/AuthForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - StreetOutfits",
  description: "Sign in to your account",
};

export default function SignInPage() {
  return <AuthForm type="signin" />;
}
