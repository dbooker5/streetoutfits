"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
    const footerLinks = {
        Featured: [
            "Air Force 1",
            "Huarache",
            "Air Max 90",
            "Air Max 95",
        ],
        Shoes: [
            "All Shoes",
            "Custom Shoes",
            "Jordan Shoes",
            "Running Shoes",
        ],
        Clothing: [
            "All Clothing",
            "Modest Wear",
            "Hoodies & Pullovers",
            "Shirts & Tops",
        ],
        "Kids'": [
            "Infant & Toddler Shoes",
            "Kids' Shoes",
            "Kids' Jordan Shoes",
            "Kids' Basketball Shoes",
        ],
    };

    return (
        <footer className="bg-black px-6 py-12 text-white md:px-12">
            <div className="mx-auto max-w-[1440px]">
                {/* Top Section */}
                <div className="flex flex-col justify-between gap-12 lg:flex-row">
                    {/* Logo */}
                    <div className="mb-8 lg:mb-0">
                        <Link href="/">
                            <Image
                                src="/wlogo.svg"
                                alt="StreetOutfits"
                                width={60}
                                height={60}
                                className="h-auto w-[60px]"
                            />
                        </Link>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-16">
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category}>
                                <h3 className="mb-4 font-bold uppercase text-white">
                                    {category}
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <Link
                                                href="#"
                                                className="text-sm text-[#757575] hover:text-white"
                                            >
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4">
                        <Link href="#" className="rounded-full bg-[#757575] p-2 hover:bg-white hover:text-black">
                            <Image src="/x.svg" alt="X" width={24} height={24} className="h-6 w-6" />
                        </Link>
                        <Link href="#" className="rounded-full bg-[#757575] p-2 hover:bg-white hover:text-black">
                            <Image src="/facebook.svg" alt="Facebook" width={24} height={24} className="h-6 w-6" />
                        </Link>
                        <Link href="#" className="rounded-full bg-[#757575] p-2 hover:bg-white hover:text-black">
                            <Image src="/instagram.svg" alt="Instagram" width={24} height={24} className="h-6 w-6" />
                        </Link>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#757575] pt-8 text-xs text-[#757575] md:flex-row md:items-center">
                    <div className="flex items-center gap-2">
                        <span className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span className="font-medium text-white">Kenya</span>
                        <span>© 2025 StreetOutfits, Inc. All Rights Reserved</span>
                    </div>
                    <div className="flex flex-wrap gap-6">
                        <Link href="#" className="hover:text-white">Guides</Link>
                        <Link href="#" className="hover:text-white">Terms of Sale</Link>
                        <Link href="#" className="hover:text-white">Terms of Use</Link>
                        <Link href="#" className="hover:text-white">StreetOutfits Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
