'use client'

import { doctors } from "@/app/data"
import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import apiRouter from "@/api/router";
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function AdminAddDoctorPage() {
  const router = useRouter()
  const queryClient = useQueryClient()

  const [name, setName] = useState("")
  const [speciality_id, setSpecialityId] = useState()
  const [department_id, setDepartmentId] = useState()
  const [experience, setExperience] = useState()

  const { data: departments } = useQuery({
    queryKey: ['getDepartments'],
    queryFn: apiRouter.departments.getDepartments,
  })

  const { data: specialities } = useQuery({
    queryKey: ['speciality'],
    queryFn: apiRouter.doctors.speciality,
  })

  const addDoctorMutation = useMutation({
    mutationFn: () =>
      apiRouter.doctors.createDoctor({
        name,
        speciality_id,
        department_id,
        experience,
      }),
    onSuccess: () => {
      alert("Doctor created Successfully!")
      queryClient.invalidateQueries({queryKey: ["getDoctors"]})
      router.push("/administrator/doctors")
    },
    onError: (err: any) => {
      alert("Failed to craete doctor!")
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addDoctorMutation.mutate()
  }

  console.log(departments)
  console.log(specialities)

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-800">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900">Add New Doctor</h1>
        <p className="mt-2 text-slate-600">
          Fill in the form below to add a new doctor to the hospital.
        </p>

        <form className="mt-8 space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="text-sm font-medium text-slate-700">
              Full Name
            </label>
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
            <label className="text-sm font-medium text-slate-700">
              Speciality
            </label>
            <select 
            value={speciality_id ?? ""}
            onChange={(e) => setSpecialityId(Number(e.target.value))}
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100">
              <option value="">Select Speciality</option>
              {specialities?.map((speciality) => (
                <option key={speciality.id} value={speciality.id}>
                  {speciality.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Department
            </label>
            <select 
            value={department_id ?? ""}
            onChange={(e) => setDepartmentId(Number(e.target.value))}
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100">
              <option value="">Select Department</option>
              {departments?.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Experience (years)
            </label>
            <input
              type="number"
              placeholder="Enter experience in years"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-sky-700 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-sky-800"
          >
            Add Doctor
          </button>
        </form>
      </div>
    </main>
  )
}