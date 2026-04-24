"use client"

import { useState } from "react"
import Link from "next/link"
import { doctors } from "../data"

export default function DoctorsPage() {
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

        {filteredDoctors.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-2xl">
                    👨‍⚕️
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-sky-700">{doctor.specialty}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-2 text-sm text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-800">
                      Department:
                    </span>{" "}
                    {doctor.department}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">
                      Experience:
                    </span>{" "}
                    {doctor.experience}
                  </p>
                </div>

                <Link
                  href={`/doctor/${doctor.id}`}
                  className="mt-6 inline-block rounded-xl bg-sky-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-800"
                >
                  View Profile
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center">
            <h3 className="text-lg font-semibold text-slate-900">
              No doctors found
            </h3>
            <p className="mt-2 text-slate-600">
              Try searching with another name, specialty, or department.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}