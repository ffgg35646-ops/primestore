"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    const res = await fetch(
      "/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const data = await res.json();

    alert(data.message);

    if (res.ok) {
      router.push("/login");
    }

  }

  return (

    <main className="min-h-screen bg-slate-50 py-16">

      <div className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow">

        <h1 className="mb-8 text-center text-3xl font-black">
          Create Account
        </h1>

        <form
          onSubmit={handleRegister}
          className="space-y-4"
        >

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full rounded-xl border p-4"
            required
          />

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
            Create Account
          </button>

        </form>

        <p className="mt-6 text-center">

          Already have an account?{" "}

          <Link
            href="/login"
            className="font-bold text-blue-600"
          >
            Login
          </Link>

        </p>

      </div>

    </main>

  );

}
