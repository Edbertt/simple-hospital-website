'use client'

import { useEffect, useState } from "react"
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query"
import apiRouter from "@/api/router"
import { useRouter, useParams } from "next/navigation"

export default function AdminEditDepartmentPage() {
  const router = useRouter()
  const params = useParams()
  const queryClient = useQueryClient()
  const departmentId = params?.departmentId

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [head_doctor_id, setHeadDoctor] = useState()

  const { data, isLoading, refetch, status } = useQuery({ 
    queryKey: ['getDepartment', departmentId], 
    queryFn: () => apiRouter.departments.getDepartment(Number(departmentId)),
  })

  const editDepartmentMutation = useMutation({
    mutationFn: () =>
        apiRouter.departments.updateDepartment({
            id: data?.id,
            name,
            description,
            head_doctor_id,
        }),
    onSuccess: () => {
        alert("Department update Successfully!")
        queryClient.invalidateQueries({queryKey: ["getDepartments"]})
        router.push("/administrator/departments")
    },
    onError: (err: any) => {
        alert("Failed to update Department!")
    },
  })

   useEffect(() => {
        if (status === 'success'){
            setName(data.name)
            setDescription(data.description)
            setHeadDoctor(data.head_doctor_id || "")
        }
    }, [status])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    editDepartmentMutation.mutate()
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
            Update Department
          </button>
        </form>
      </div>
    </main>
  )
}