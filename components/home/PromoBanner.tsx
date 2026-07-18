import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-slate-900 via-slate-800 to-blue-700">

          <div className="grid items-center gap-10 px-10 py-14 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
                Limited Time Offer
              </span>

              <h2 className="mt-6 text-5xl font-black leading-tight text-white">
                Save up to
                <br />
                50% OFF
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-gray-200">
                Discover our biggest deals on premium electronics,
                accessories and everyday essentials.
              </p>

              <Link
                href="/products"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-slate-900 transition hover:scale-105"
              >
                Shop Now

                <ArrowRight size={18} />
              </Link>

            </div>

            <div>

              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200"
                alt="Promotion"
                className="rounded-3xl object-cover shadow-2xl"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
