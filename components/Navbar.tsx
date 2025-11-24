"use client";

import { useCartStore } from "@/lib/store/cart";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
    const count = useCartStore((state) => state.getcount());
    const [mounted, setMounted] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white">
            <div className="mx-auto flex h-[60px] max-w-[1440px] items-center justify-between px-6 md:px-12">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/logo.svg"
                        alt="Nike"
                        width={60}
                        height={24}
                        className="h-auto w-[60px]"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 font-medium text-black md:flex">
                    <Link href="#" className="text-base hover:opacity-70">
                        Men
                    </Link>
                    <Link href="#" className="text-base hover:opacity-70">
                        Women
                    </Link>
                    <Link href="#" className="text-base hover:opacity-70">
                        Kids
                    </Link>
                    <Link href="#" className="text-base hover:opacity-70">
                        Collections
                    </Link>
                    <Link href="#" className="text-base hover:opacity-70">
                        Contact
                    </Link>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6 font-medium text-black">
                    <button className="hidden text-base hover:opacity-70 md:block">
                        Search
                    </button>
                    <button className="flex items-center gap-1 text-base hover:opacity-70">
                        My Cart
                        <span>({mounted ? count : 0})</span>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="block md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute left-0 top-[60px] h-screen w-full bg-white px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-6 text-lg font-medium text-black">
                        <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
                            Men
                        </Link>
                        <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
                            Women
                        </Link>
                        <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
                            Kids
                        </Link>
                        <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
                            Collections
                        </Link>
                        <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
                            Contact
                        </Link>
                        <button className="text-left">Search</button>
                    </div>
                </div>
            )}
        </nav>
    );
}
