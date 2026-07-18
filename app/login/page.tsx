"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    const res = await fetch(
      "/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await res.json();

    alert(data.message);

    if (res.ok) {
      router.push("/");
      router.refresh();
    }

  }


  return (

    <main className="min-h-screen bg-slate-50 py-16">

      <div className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow">

        <h1 className="mb-8 text-center text-3xl font-black">
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full rounded-xl border p-4"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full rounded-xl border p-4"
            required
          />

          <button
            className="w-full rounded-xl bg-blue-600 py-4 font-bold text-white"
          >
            Login
          </button>

        </form>

        <p className="mt-6 text-center">

          Don't have an account?{" "}

          <Link
            href="/register"
            className="font-bold text-blue-600"
          >
            Register
          </Link>

        </p>

      </div>

    </main>

  );

}
