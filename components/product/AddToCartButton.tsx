"use client";

import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";

import { useCart } from "@/context/CartContext";

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  image: string;
  category: string;
};

export default function AddToCartButton({
  product,
}: {
  product: Product;
}) {

  const router = useRouter();

  const { addToCart } = useCart();


  async function handleAddToCart() {

    const res = await fetch(
      "/api/auth/me",
      {
        cache: "no-store",
      }
    );


    if (!res.ok) {

      alert("Please login first");

      router.push("/login");

      return;

    }


    addToCart(product);

    alert("Product added to cart");

  }


  return (

    <button
      onClick={handleAddToCart}
      className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-4 text-lg font-bold text-white transition hover:bg-blue-700"
    >

      <ShoppingCart size={22} />

      Add To Cart

    </button>

  );

}
