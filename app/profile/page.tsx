"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  CreditCard,
  LogOut,
  Save,
} from "lucide-react";

type CurrentUser = {
  name: string;
  email: string;
};

export default function ProfilePage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState<CurrentUser | null>(null);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("+20 100 000 0000");

  useEffect(() => {
    async function loadUser() {
      const res = await fetch("/api/auth/me", {
        cache: "no-store",
      });

      if (!res.ok) {
        router.push("/login");
        return;
      }

      const data = await res.json();

      setUser(data.user);

      setName(data.user.name);

      setEmail(data.user.email);

      setLoading(false);
    }

    loadUser();
  }, [router]);

  function logout() {
    document.cookie =
      "primestore_token=; Max-Age=0; path=/";

    router.push("/login");

    router.refresh();
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center text-xl font-bold">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-14">

      <div className="mx-auto max-w-5xl rounded-3xl bg-white shadow-2xl overflow-hidden">

        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 p-10 text-white">

          <div className="flex items-center gap-6">

            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white text-blue-700 shadow-xl">

              <User size={60} />

            </div>

            <div>

              <h1 className="text-4xl font-black">
                {name}
              </h1>

              <p className="mt-2 text-blue-100">
                Premium Customer
              </p>

              <p className="mt-1 text-blue-200">
                Manage your account information
              </p>

            </div>

          </div>

        </div>

        <div className="grid gap-10 p-10 lg:grid-cols-2">

          <div>

            <h2 className="mb-6 text-2xl font-black">
              Personal Information
            </h2>

            <div className="space-y-6">

              <div>

                <label className="mb-2 flex items-center gap-2 font-semibold">

                  <User size={18} />

                  Full Name

                </label>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
                />

              </div>

              <div>

                <label className="mb-2 flex items-center gap-2 font-semibold">

                  <Mail size={18} />

                  Email Address

                </label>

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
                />

              </div>

              <div>

                <label className="mb-2 flex items-center gap-2 font-semibold">

                  <Phone size={18} />

                  Phone Number

                </label>

                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
                />

              </div>
            </div>

          </div>

          <div>

            <h2 className="mb-6 text-2xl font-black">
              Payment Method
            </h2>

            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 text-white shadow-xl">

              <div className="flex items-center justify-between">

                <CreditCard size={42} />

                <span className="rounded-full bg-white/20 px-4 py-1 text-sm">
                  Default
                </span>

              </div>

              <p className="mt-10 text-2xl tracking-[6px]">
                •••• •••• •••• 4242
              </p>

              <div className="mt-8 flex justify-between">

                <div>

                  <p className="text-xs uppercase text-slate-300">
                    Card Holder
                  </p>

                  <p className="mt-1 font-semibold">
                    {name}
                  </p>

                </div>

                <div>

                  <p className="text-xs uppercase text-slate-300">
                    Expires
                  </p>

                  <p className="mt-1 font-semibold">
                    12 / 28
                  </p>

                </div>

              </div>

            </div>

            <button
              className="mt-6 w-full rounded-xl border-2 border-blue-600 py-4 font-bold text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              Change Payment Method
            </button>

            <div className="mt-10 flex gap-4">

              <button
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                <Save size={20} />
                Save Changes
              </button>

              <button
                onClick={logout}
                className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-8 font-bold text-white transition hover:bg-red-700"
              >
                <LogOut size={20} />
                Logout
              </button>

            </div>

            <p className="mt-8 text-sm text-slate-500">
              Your personal information is securely stored and used only
              for order processing and account management.
            </p>

          </div>

        </div>

      </div>

    </main>

  );

}
