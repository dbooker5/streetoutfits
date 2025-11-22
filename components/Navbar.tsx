"use client";

import { useCartStore } from "@/lib/store/cart";
import { useEffect, useState } from "react";

export function Navbar() {
    const count = useCartStore((state) => state.getcount());
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="text-2xl font-black tracking-tighter italic">NIKE</div>
            <div className="hidden md:flex space-x-8 font-medium text-sm text-gray-900">
                <a href="#" className="hover:opacity-70 transition">New & Featured</a>
                <a href="#" className="hover:opacity-70 transition">Men</a>
                <a href="#" className="hover:opacity-70 transition">Women</a>
                <a href="#" className="hover:opacity-70 transition">Kids</a>
                <a href="#" className="hover:opacity-70 transition">Sale</a>
            </div>
            <div className="flex gap-4 text-sm font-medium items-center">
                <button className="hover:opacity-70 transition">Search</button>
                <button className="hover:opacity-70 transition flex items-center gap-1">
                    Bag
                    {mounted && count > 0 && (
                        <span className="bg-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                            {count}
                        </span>
                    )}
                </button>
            </div>
        </nav>
    );
}
