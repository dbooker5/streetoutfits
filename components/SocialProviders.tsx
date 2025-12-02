import React from "react";

export function SocialProviders() {
  return (
    <div className="space-y-3">
      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-light-400 bg-white px-4 py-3 text-body font-medium text-dark-900 transition hover:bg-light-200 focus:outline-none focus:ring-2 focus:ring-dark-500 focus:ring-offset-2"
      >
        {/* Google Icon */}
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Continue with Google
      </button>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-light-400 bg-white px-4 py-3 text-body font-medium text-dark-900 transition hover:bg-light-200 focus:outline-none focus:ring-2 focus:ring-dark-500 focus:ring-offset-2"
      >
        {/* Apple Icon */}
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74s2.57-.99 4.31-.82c.72.03 2.81.29 4.14 2.24-3.54 2.13-2.95 6.75.62 8.23-.69 1.77-1.66 3.51-2.98 4.86zM12.03 5.31c-.97 1.21-2.6 1.91-4.14 1.82-.24-1.62.93-3.17 2.07-4.2 1.15-1.03 2.86-1.7 4.09-1.56.13 1.73-1.05 2.73-2.02 3.94z" />
        </svg>
        Continue with Apple
      </button>
    </div>
  );
}
