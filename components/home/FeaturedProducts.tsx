import Link from "next/link";

import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 flex items-center justify-between">

          <div>
            <h2 className="text-4xl font-black">
              Featured Products
            </h2>

            <p className="mt-3 text-gray-600">
              Hand-picked products selected for you.
            </p>
          </div>

          <Link
            href="/products"
            className="font-semibold text-blue-600 hover:underline"
          >
            View All
          </Link>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
