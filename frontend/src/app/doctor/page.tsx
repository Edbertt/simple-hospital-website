import { Suspense } from "react"
import DoctorList from "@/component/doctors/DoctorList"
import DoctorListSkeleton from "@/component/preloader/DoctorListSkeleton"

export default function DoctorsPage() {
  
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

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Doctor Directory
          </h2>
          <p className="mt-1 text-slate-600">
            Meet our team of trusted medical professionals.
          </p>
        </div>

        <Suspense fallback={<DoctorListSkeleton />}>
          <DoctorList />
        </Suspense>
      </section>
    </main>
  )
}