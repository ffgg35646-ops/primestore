import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

export default function NewArrivals() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Just Arrived
          </span>

          <h2 className="mt-5 text-4xl font-black">
            New Arrivals
          </h2>

          <p className="mt-4 text-gray-600">
            Fresh products carefully selected for our customers.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

        <div className="mt-12 text-center">

          <Link
            href="/products"
            className="inline-flex rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
          >
            Browse All Products
          </Link>

        </div>

      </div>
    </section>
  );
}
