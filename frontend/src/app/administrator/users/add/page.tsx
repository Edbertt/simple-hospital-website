'use client'

import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import apiRouter from "@/api/router"
import { useRouter } from "next/navigation"

export default function AdminAddUserPage() {
  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [type_id, setTypeId] = useState("Patient")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  // Mutation to create a new user
  const addUserMutation = useMutation({
    mutationFn: () =>
      apiRouter.users.register({
        name,
        email,
        type_id,
        password,
      }),
    onSuccess: () => {
      setSuccess("User created successfully!")
      setError(null)
      router.push("/administrator/users")
    },
    onError: (err: any) => {
      setError(
        err.response?.data?.errors?.join(", ") || "Failed to create user"
      )
      setSuccess(null)
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addUserMutation.mutate()
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-800">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900">Add New User</h1>
        <p className="mt-2 text-slate-600">
          Fill the form below to create a new user account.
        </p>

        <form
          className="mt-8 space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Role</label>
            <select
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              value={type_id}
              onChange={(e) => setTypeId(e.target.value)}
            >
              <option value="0">Patient</option>
              <option value="1">Admin</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <button
            type="submit"
            className="w-full rounded-xl bg-sky-700 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-sky-800"
            disabled={addUserMutation.isLoading}
          >
            {addUserMutation.isLoading ? "Adding..." : "Add User"}
          </button>
        </form>
      </div>
    </main>
  )
}