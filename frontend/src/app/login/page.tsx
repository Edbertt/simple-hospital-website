'use client'

import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import Link from "next/link"
import { useRouter } from "next/navigation"
import apiRouter from "@/api/router";

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const loginMutation = useMutation({
    mutationFn: () =>
      apiRouter.users.login({
        email,
        password,
      }),
    onSuccess: (data) => {
      // Save JWT token for future requests
      localStorage.setItem("token", data.token)
      alert("Login Successful!")
      // Redirect to a protected page (dashboard, home, etc.)
      if (data.user.type_id === 1) {
        router.push("/administrator/dashboard")
      } else {
        router.push("/user/dashboard")
      }
    },
    onError: (err: any) => {
      // Show error from Rails or generic message
      alert("Login failed")
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    loginMutation.mutate()
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-6 py-16">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">Login</h1>
          <p className="mt-2 text-sm text-slate-600">
            Welcome back to MediCare Hospital
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full text-black rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-2 w-full text-black rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loginMutation.isLoading}
            className="w-full rounded-xl bg-sky-700 px-4 py-3 font-semibold text-white shadow hover:bg-sky-800"
          >
            {loginMutation.isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-sky-700 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </main>
  )
}