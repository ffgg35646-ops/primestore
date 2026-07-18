"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  ShoppingCart,
  LogIn,
  CircleUserRound,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function Navbar() {

  const { cartCount } = useCart();

  const pathname = usePathname();

  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {

    fetch("/api/auth/me", {
      cache: "no-store",
    })
      .then((res) => {

        setLoggedIn(res.ok);

      })
      .catch(() => {

        setLoggedIn(false);

      });

  }, [pathname]);


  const isAuthPage =
    pathname === "/login" ||
    pathname === "/register";


  return (

    <nav className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900 shadow-lg">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Link
          href="/"
          className="text-3xl font-black text-white"
        >
          PrimeStore
        </Link>


        <div className="hidden items-center gap-8 text-slate-300 md:flex">

          <Link href="/" className="hover:text-white">
            Home
          </Link>

          <Link href="/categories" className="hover:text-white">
            Categories
          </Link>

          <Link href="/products" className="hover:text-white">
            Products
          </Link>

        </div>


        <div className="flex items-center gap-4">


          {loggedIn && !isAuthPage ? (

            <Link
              href="/profile"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white"
            >

              <CircleUserRound size={20} />

              <span className="hidden md:block">
                Profile
              </span>

            </Link>


          ) : (

            <Link
              href="/login"
              className="flex items-center gap-2 rounded-xl border border-slate-600 px-4 py-3 text-white"
            >

              <LogIn size={20} />

              <span className="hidden md:block">
                Login
              </span>

            </Link>

          )}


          <Link
            href="/cart"
            className="relative rounded-xl bg-blue-600 p-3 text-white"
          >

            <ShoppingCart size={20} />

            {cartCount > 0 && (

              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold">

                {cartCount}

              </span>

            )}

          </Link>


        </div>

      </div>

    </nav>

  );

}
