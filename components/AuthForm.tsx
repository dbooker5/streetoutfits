"use client";

import React from "react";
import Link from "next/link";
import { SocialProviders } from "./SocialProviders";

interface AuthFormProps {
  type: "signin" | "signup";
}

export function AuthForm({ type }: AuthFormProps) {
  const isSignIn = type === "signin";

  return (
    <div className="w-full">
      <div className="mb-8 text-center lg:text-center">
        <h2 className="text-heading-3 font-bold text-dark-900">
          {isSignIn ? "Welcome Back!" : "Join StreetOutfits Today!"}
        </h2>
        <p className="mt-2 text-body text-dark-700">
          {isSignIn
            ? "Please sign in to your account"
            : "Create your account to start your fitness journey"}
        </p>
      </div>

      <SocialProviders />

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-light-400"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-light-100 px-2 text-dark-700">
            Or {isSignIn ? "sign in" : "sign up"} with
          </span>
        </div>
      </div>

      <form className="space-y-6">
        {!isSignIn && (
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-dark-900"
            >
              Full Name
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Enter your full name"
                className="block w-full rounded-lg border border-light-400 px-4 py-3 text-dark-900 placeholder-dark-500 focus:border-dark-900 focus:ring-dark-900 sm:text-sm"
              />
            </div>
          </div>
        )}

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-dark-900"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="johndoe@gmail.com"
              className="block w-full rounded-lg border border-light-400 px-4 py-3 text-dark-900 placeholder-dark-500 focus:border-dark-900 focus:ring-dark-900 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-dark-900"
          >
            Password
          </label>
          <div className="mt-1 relative">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete={isSignIn ? "current-password" : "new-password"}
              required
              placeholder="minimum 8 characters"
              className="block w-full rounded-lg border border-light-400 px-4 py-3 text-dark-900 placeholder-dark-500 focus:border-dark-900 focus:ring-dark-900 sm:text-sm"
            />
            <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-500 hover:text-dark-900"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
            </button>
          </div>
        </div>

        {isSignIn && (
            <div className="flex items-center justify-end">
                <div className="text-sm">
                    <a href="#" className="font-medium text-dark-700 hover:text-dark-900">
                        Forgot your password?
                    </a>
                </div>
            </div>
        )}

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-full bg-dark-900 px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-dark-500 focus:ring-offset-2"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm">
        <p className="text-dark-700">
          {isSignIn ? "Don't have an account? " : "Already have an account? "}
          <Link
            href={isSignIn ? "/sign-up" : "/sign-in"}
            className="font-semibold text-dark-900 hover:underline"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </Link>
        </p>
      </div>
      
      {!isSignIn && (
          <div className="mt-6 text-center text-xs text-dark-500">
              By signing up, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>
          </div>
      )}
    </div>
  );
}
