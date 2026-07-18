"use client";

import { useEffect, useState } from "react";
import { CreditCard, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {

  const router = useRouter();

  const { cart } = useCart();

  const [loading, setLoading] = useState(true);

  const [loggedIn, setLoggedIn] = useState(false);


  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );


  useEffect(() => {

    async function checkUser() {

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


      setLoggedIn(true);

      setLoading(false);

    }


    checkUser();


  }, [router]);



  if (loading || !loggedIn) {

    return (

      <main className="flex min-h-screen items-center justify-center">

        Loading...

      </main>

    );

  }



  return (

    <main className="min-h-screen bg-slate-50 py-16">

      <div className="mx-auto max-w-5xl px-6">

        <h1 className="mb-10 text-4xl font-black">
          Checkout
        </h1>


        <div className="grid gap-8 lg:grid-cols-2">


          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="mb-6 text-2xl font-bold">
              Payment Information
            </h2>


            <div className="space-y-4">


              <input
                placeholder="Card Holder"
                className="w-full rounded-xl border p-4"
              />


              <input
                placeholder="Card Number"
                className="w-full rounded-xl border p-4"
              />


              <div className="grid grid-cols-2 gap-4">

                <input
                  placeholder="MM/YY"
                  className="rounded-xl border p-4"
                />


                <input
                  placeholder="CVV"
                  className="rounded-xl border p-4"
                />

              </div>


             <button
  onClick={() => alert("Payment completed successfully")}
  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-bold text-white"
>

                <Lock size={18}/>

                Confirm Payment

              </button>


            </div>


          </div>



          <div className="rounded-3xl bg-white p-8 shadow">


            <h2 className="mb-6 text-2xl font-bold">
              Order Summary
            </h2>


            <div className="space-y-4">


              <div className="flex justify-between">

                <span>
                  Products
                </span>

                <span>
                  {cart.length}
                </span>

              </div>


              <div className="flex justify-between">

                <span>
                  Shipping
                </span>

                <span>
                  Free
                </span>

              </div>


              <hr />


              <div className="flex justify-between text-xl font-black">

                <span>
                  Total
                </span>


                <span className="text-blue-600">
                  ${total}
                </span>

              </div>


            </div>


          </div>


        </div>


      </div>


    </main>

  );

}
