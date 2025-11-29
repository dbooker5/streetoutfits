import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side - Branding */}
      <div className="hidden w-1/2 flex-col justify-between bg-dark-900 p-12 lg:flex">
        <div>
           <Link href="/" className="inline-block rounded-xl bg-white p-3">
            <Image
              src="/logo.svg"
              alt="StreetOutfits Logo"
              width={24}
              height={24}
            />
          </Link>
        </div>
        
        <div className="max-w-md">
            <h1 className="mb-4 text-heading-2 font-bold text-white">Live In Style</h1>
            <p className="mb-8 text-lead text-white/80">
                Join millions of athletes and fitness enthusiasts who trust StreetOutfits for their performance needs.
            </p>
            <div className="flex gap-2">
                <div className="h-2 w-2 rounded-full bg-white"></div>
                <div className="h-2 w-2 rounded-full bg-white/50"></div>
                <div className="h-2 w-2 rounded-full bg-white/50"></div>
            </div>
        </div>
        
        <div>{/* Bottom spacer or footer links if needed */}</div>
      </div>

      {/* Right Side - Form */}
      <div className="flex w-full flex-col justify-center bg-light-100 px-4 py-12 sm:px-6 lg:w-1/2 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
            {children}
        </div>
      </div>
    </div>
  );
}
