"use client";

import Image from "next/image";

interface CardProps {
    title: string;
    price: number;
    // Existing props (made optional to support new usage)
    category?: string;
    image?: string;
    colorCount?: number;
    isBestSeller?: boolean;
    // New props to support the usage causing error
    subtitle?: string;
    imageSrc?: string;
    meta?: string;
    badge?: {
        label: string;
        tone: "orange" | "red" | "green";
    };
}

export function Card({
    title,
    category,
    subtitle,
    price,
    image,
    imageSrc,
    colorCount,
    meta,
    isBestSeller,
    badge,
}: CardProps) {
    const displayImage = image || imageSrc;
    const displayCategory = category || subtitle;
    const displayMeta = meta || (colorCount ? `${colorCount} Colour` : null);

    return (
        <div className="group cursor-pointer rounded-2xl border border-neutral-200 bg-white overflow-hidden transition-all hover:shadow-lg">
            <div className="relative aspect-square w-full bg-light-200">
                {isBestSeller && (
                    <div className="absolute left-4 top-4 z-10 rounded-full bg-light-100 px-3 py-1 text-sm font-medium text-dark-900">
                        Best Seller
                    </div>
                )}
                {displayImage && (
                    <Image
                        src={displayImage}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                )}
            </div>
            <div className="flex flex-col gap-1 p-4">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-base font-medium text-dark-900">{title}</h3>
                        <p className="text-base text-dark-500">{displayCategory}</p>
                    </div>
                    <p className="text-base font-medium text-dark-900">
                        ${price.toFixed(2)}
                    </p>
                </div>
                {displayMeta && (
                    <p className="text-base text-dark-500">{displayMeta}</p>
                )}
            </div>
        </div>
    );
}
