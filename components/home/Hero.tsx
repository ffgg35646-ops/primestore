import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">

        {/* Left */}
        <div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            New Collection 2026
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight lg:text-6xl">
            Shop Smarter,
            <br />
            Live Better.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Explore premium products with a clean shopping experience,
            fast checkout, and unbeatable prices.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/products"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Shop Now
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/categories"
              className="flex items-center gap-2 rounded-xl border px-7 py-4 font-semibold transition hover:bg-gray-100"
            >
              Browse Categories
            </Link>

          </div>

        </div>

        {/* Right */}
        <div className="relative">

          <div className="overflow-hidden rounded-3xl border bg-white shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200"
              alt="Hero Product"
              className="h-[520px] w-full object-cover"
            />

          </div>

          <div className="absolute -left-8 top-8 rounded-2xl bg-white p-5 shadow-xl">
            <ShoppingBag className="mb-2 h-8 w-8 text-blue-600" />

            <p className="text-sm text-gray-500">
              Products
            </p>

            <h3 className="text-2xl font-bold">
              500+
            </h3>
          </div>

          <div className="absolute -right-6 bottom-8 rounded-2xl bg-white p-5 shadow-xl">
            <p className="text-sm text-gray-500">
              Happy Customers
            </p>

            <h3 className="text-2xl font-bold">
              12K+
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
}
