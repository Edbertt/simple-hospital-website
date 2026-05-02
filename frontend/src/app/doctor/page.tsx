'use client'

import { Suspense } from "react"
import { useState } from "react"
import DoctorList from "@/component/doctors/DoctorList"
import DoctorListSkeleton from "@/component/preloader/DoctorListSkeleton"
import { doctors } from '@/app/data'

export default function DoctorsPage() {
  // await new Promise((resolve) => setTimeout(resolve, 1000))

  const [search, setSearch] = useState("")

  const filteredDoctors = doctors.filter((doctor) => {
    const keyword = search.toLowerCase().trim()
    return (
      doctor.name.toLowerCase().includes(keyword) ||
      doctor.specialty.toLowerCase().includes(keyword) ||
      doctor.department.toLowerCase().includes(keyword)
    )
  })

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
            Our Doctors
          </p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900 md:text-5xl">
            Meet Our Medical Experts
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Find experienced specialists across a wide range of departments,
            dedicated to delivering compassionate and high-quality care.
          </p>
        </div>
      </section>

            <section className="relative z-40 mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Doctor Directory
            </h2>
            <p className="mt-1 text-slate-600">
              Search by doctor name, specialty, or department.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="w-full md:max-w-md">
            <input
              type="text"
              placeholder="Search doctors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="relative z-50 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />
          </div>
        </div>

        <Suspense fallback={<DoctorListSkeleton />}>
          <DoctorList doctors={filteredDoctors} />
        </Suspense>
      </section>
    </main>
  )
}