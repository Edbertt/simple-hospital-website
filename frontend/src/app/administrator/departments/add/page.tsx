'use client'

import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import apiRouter from "@/api/router"
import { useRouter } from "next/navigation"

export default function AdminAddDepartmentPage() {
  const router = useRouter()
  const queryClient = useQueryClient()

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [head_doctor_id, setHeadDoctor] = useState()

  const addDepartmentMutation = useMutation({
    mutationFn: () =>
        apiRouter.departments.createDepartment({
            name,
            description,
            head_doctor_id,
        }),
    onSuccess: () => {
        alert("Department created Successfully!")
        queryClient.invalidateQueries({queryKey: ["getDepartments"]})
        router.push("/administrator/departments")
    },
    onError: (err: any) => {
        alert("Failed to create department")
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addDepartmentMutation.mutate()
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-800">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900">Add New Department</h1>
        <p className="mt-2 text-slate-600">
          Fill in the form below to create a new hospital department.
        </p>

        <form className="mt-8 space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            onSubmit={handleSubmit}
        >
          <div>
            <label className="text-sm font-medium text-slate-700">
              Department Name
            </label>
            <input
              type="text"
              placeholder="Enter department name"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Description
            </label>
            <textarea
              placeholder="Enter department description"
              rows={4}
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Head Doctor
            </label>
            <input
              type="text"
              placeholder="Enter head doctor name"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              value={head_doctor_id}
              onChange={(e) => setHeadDoctor(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-sky-700 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-sky-800"
          >
            Add Department
          </button>
        </form>
      </div>
    </main>
  )
}