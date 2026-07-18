import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12">
          <h1 className="text-4xl font-black">
            All Products
          </h1>

          <p className="mt-3 text-gray-600">
            Explore our latest products and best offers.
          </p>
        </div>


        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </main>
  );
}
