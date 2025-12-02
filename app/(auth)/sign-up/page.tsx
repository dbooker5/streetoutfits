import { AuthForm } from "@/components/AuthForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - StreetOutfits",
  description: "Create your account",
};

export default function SignUpPage() {
  return <AuthForm type="signup" />;
}
