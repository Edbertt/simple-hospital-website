'use client'

import Link from "next/link"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import apiRouter from "@/api/router";

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const registerMutation = useMutation({
    mutationFn: () =>
      apiRouter.users.register({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    onSuccess: (data) => {
      // store the token for authenticated requests
      localStorage.setItem("token", data.token)
      setSuccess("Account created successfully!")
      setError(null)
    },
    onError: (err: any) => {
      // handle errors
      setError(err.response?.data?.errors?.join(", ") || "Registration failed")
      setSuccess(null)
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== passwordConfirmation) {
      setError("Passwords do not match")
      return
    }
    registerMutation.mutate()
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-6 py-16">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">Create Account</h1>
          <p className="mt-2 text-sm text-slate-600">
            Register as a MediCare Hospital patient
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="mt-2 w-full text-black rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="mt-2 w-full text-black rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="mt-2 w-full text-black rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <button
            type="submit"
            className="w-full rounded-xl bg-sky-700 px-4 py-3 font-semibold text-white shadow hover:bg-sky-800"
            disabled={registerMutation.isLoading}
          >
            {registerMutation.isLoading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-sky-700 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  )
}