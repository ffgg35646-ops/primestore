import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  image: string;
  category: string;
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border bg-white transition hover:-translate-y-2 hover:shadow-xl">

      <div className="relative">

        <Link href={`/products/${product.id}`}>

          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          />

        </Link>

        <button className="absolute right-4 top-4 rounded-full bg-white p-3 shadow">
          <Heart size={18} />
        </button>

      </div>


      <div className="p-6">

        <span className="text-sm font-semibold text-blue-600">
          {product.category}
        </span>


        <h3 className="mt-2 text-xl font-bold">
          {product.name}
        </h3>


        <div className="mt-3 flex items-center gap-1">

          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />

          <span>
            {product.rating}
          </span>

        </div>


        <div className="mt-4 flex gap-3">

          <span className="text-2xl font-black text-blue-600">
            ${product.price}
          </span>

          <span className="text-gray-400 line-through">
            ${product.oldPrice}
          </span>

        </div>


        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white">

          <ShoppingCart size={18} />

          Add to Cart

        </button>

      </div>

    </div>
  );
}
