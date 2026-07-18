import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">

        <div>
          <h2 className="text-2xl font-black">
            Prime<span className="text-blue-600">Store</span>
          </h2>

          <p className="mt-4 text-sm text-gray-600">
            Modern online shopping experience with quality products.
          </p>
        </div>


        <div>
          <h3 className="mb-4 font-bold">
            Shop
          </h3>

          <div className="flex flex-col gap-2 text-sm text-gray-600">

            <Link href="/products">
              Products
            </Link>

            <Link href="/cart">
              Cart
            </Link>

            <Link href="/checkout">
              Checkout
            </Link>

          </div>
        </div>


        <div>
          <h3 className="mb-4 font-bold">
            Account
          </h3>

          <div className="flex flex-col gap-2 text-sm text-gray-600">

            <Link href="/login">
              Login
            </Link>

            <Link href="/profile">
              Profile
            </Link>

            <Link href="/orders">
              Orders
            </Link>

          </div>
        </div>


        <div>
          <h3 className="mb-4 font-bold">
            Contact
          </h3>

          <p className="text-sm text-gray-600">
            support@primestore.com
          </p>

        </div>

      </div>


      <div className="border-t py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PrimeStore. All rights reserved.
      </div>

    </footer>
  );
}
