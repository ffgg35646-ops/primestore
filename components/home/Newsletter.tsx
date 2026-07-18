export default function Newsletter() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">

        <h2 className="text-4xl font-black text-white">
          Stay Updated
        </h2>

        <p className="mt-4 text-gray-300">
          Subscribe to receive the latest products and exclusive offers.
        </p>

        <form className="mt-10 flex flex-col gap-4 sm:flex-row">

          <input
            type="email"
            placeholder="Enter your email"
            className="h-14 flex-1 rounded-xl border-0 px-5 outline-none"
          />

          <button
            className="h-14 rounded-xl bg-blue-600 px-8 font-semibold text-white transition hover:bg-blue-700"
          >
            Subscribe
          </button>

        </form>

      </div>
    </section>
  );
}
