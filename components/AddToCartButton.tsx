"use client";

import { useCartStore } from "@/lib/store/cart";

interface Product {
    id: number;
    name: string;
    price: number;
    image?: string | null;
}

export function AddToCartButton({ product }: { product: Product }) {
    const addItem = useCartStore((state) => state.addItem);

    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                addItem(product);
            }}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-transform active:scale-95"
            aria-label="Add to cart"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
        </button>
    );
}
