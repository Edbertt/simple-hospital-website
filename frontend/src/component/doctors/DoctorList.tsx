import Link from "next/link"
import { doctors } from "@/app/data"

export default async function DoctorList() {
  await new Promise((resolve) => setTimeout(resolve, 1500))

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {doctors.map((doctor) => (
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
              <span className="font-semibold text-slate-800">Department:</span>{" "}
              {doctor.department}
            </p>
            <p>
              <span className="font-semibold text-slate-800">Experience:</span>{" "}
              {doctor.experience}
            </p>
          </div>

          <Link
            href={`/doctors/${doctor.id}`}
            className="mt-6 inline-block rounded-xl bg-sky-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-800"
          >
            View Profile
          </Link>
        </div>
      ))}
    </div>
  )
}