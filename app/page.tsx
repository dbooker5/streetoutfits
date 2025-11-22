import { db } from "@/lib/db";
import { products } from "@/lib/db/schema";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { AddToCartButton } from "@/components/AddToCartButton";
import { type InferSelectModel } from "drizzle-orm";

type Product = InferSelectModel<typeof products>;

export default async function Home() {
  let allProducts: Product[] = [];
  try {
    allProducts = await db.select().from(products);
  } catch (e) {
    console.error("Failed to fetch products:", e);
  }

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1344,c_limit/1d5395a4-3d46-4025-933e-28e78372636e/nike-just-do-it.jpg')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="relative z-10 text-center space-y-6 max-w-3xl px-4">
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none">Just Do It</h1>
          <p className="text-xl md:text-2xl font-medium text-gray-200">Engineered for world-class athletes.</p>
          <div className="pt-4">
            <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition transform hover:scale-105">Shop New Arrivals</button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Trending Now</h2>
          <a href="#" className="text-sm font-medium hover:underline">Shop All</a>
        </div>

        {allProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 bg-white rounded-2xl border border-dashed border-gray-300">
            <div className="p-4 bg-gray-50 rounded-full mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Database Empty or Disconnected</h3>
            <p className="text-gray-500 mt-1 max-w-md text-center">Please configure your .env file and run the seed script to see products here.</p>
            <code className="mt-4 px-4 py-2 bg-gray-100 rounded text-sm font-mono text-gray-700">npm run db:seed</code>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {allProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-square bg-[#f5f5f5] rounded-xl overflow-hidden mb-6">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-8 mix-blend-multiply group-hover:scale-110 transition duration-500 ease-out"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
                  )}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <AddToCartButton product={product} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-lg text-gray-900 group-hover:text-gray-600 transition">{product.name}</h3>
                    <p className="font-semibold text-gray-900">${(product.price / 100).toFixed(2)}</p>
                  </div>
                  <p className="text-gray-500 text-sm">{product.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
