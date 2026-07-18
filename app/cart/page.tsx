"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingCart } from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function CartPage() {

  const {
    cart,
    removeFromCart,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  if (cart.length === 0) {

    return (

      <main className="flex min-h-screen items-center justify-center bg-slate-50">

        <div className="rounded-3xl bg-white p-12 text-center shadow-xl">

          <ShoppingCart
            size={70}
            className="mx-auto text-slate-400"
          />

          <h1 className="mt-6 text-3xl font-black">

            Your cart is empty

          </h1>

          <p className="mt-3 text-slate-500">

            Add some products and come back.

          </p>

          <Link
            href="/products"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700"
          >
            Continue Shopping
          </Link>

        </div>

      </main>

    );

  }

  return (

    <main className="min-h-screen bg-slate-50 py-16">

      <div className="mx-auto max-w-7xl px-6">

        <h1 className="mb-10 text-4xl font-black">

          Shopping Cart

        </h1>

        <div className="grid gap-10 lg:grid-cols-3">

          <div className="space-y-5 lg:col-span-2">

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex items-center gap-5 rounded-3xl bg-white p-5 shadow-sm"
              >

                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="rounded-2xl object-cover"
                />

                <div className="flex-1">

                  <h2 className="text-xl font-bold">

                    {item.name}

                  </h2>

                  <p className="mt-2 font-bold text-blue-600">

                    ${item.price}

                  </p>
                  <div className="mt-4">

                    <span className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold">

                      Quantity: 1

                    </span>

                  </div>

                </div>


                <button
                  onClick={() => removeFromCart(item.id)}
                  className="rounded-xl p-3 text-red-500 transition hover:bg-red-50"
                >

                  <Trash2 size={22} />

                </button>


              </div>

            ))}

          </div>


          <div className="h-fit rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="text-2xl font-black">

              Order Summary

            </h2>


            <div className="mt-6 flex justify-between">

              <span>
                Subtotal
              </span>

              <span className="font-bold">
                ${total}
              </span>

            </div>


            <div className="mt-4 flex justify-between">

              <span>
                Shipping
              </span>

              <span className="font-bold">
                Free
              </span>

            </div>


            <hr className="my-6" />


            <div className="flex justify-between text-xl">

              <span className="font-black">
                Total
              </span>

              <span className="font-black text-blue-600">
                ${total}
              </span>

            </div>


            <Link
              href="/checkout"
              className="mt-8 block rounded-xl bg-blue-600 py-4 text-center font-bold text-white transition hover:bg-blue-700"
            >

              Proceed To Checkout

            </Link>


          </div>


        </div>


      </div>

    </main>

  );

}
