import Link from "next/link"
import { doctors } from "@/app/data"

export default function AdminDoctorsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-800">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
              Administrator
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              Manage Doctors
            </h1>
            <p className="mt-2 text-slate-600">
              View, add, edit, and manage hospital doctor profiles.
            </p>
          </div>

          <button className="rounded-xl bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-sky-800">
            + Add Doctor
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Doctor List
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-6 py-4 font-semibold">Doctor</th>
                  <th className="px-6 py-4 font-semibold">Specialty</th>
                  <th className="px-6 py-4 font-semibold">Department</th>
                  <th className="px-6 py-4 font-semibold">Experience</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 text-right font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {doctors.map((doctor) => (
                  <tr key={doctor.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-lg">
                          👨‍⚕️
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">
                            {doctor.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            ID: {doctor.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-slate-600">
                      {doctor.specialty}
                    </td>

                    <td className="px-6 py-4 text-slate-600">
                      {doctor.department}
                    </td>

                    <td className="px-6 py-4 text-slate-600">
                      {doctor.experience}
                    </td>

                    <td className="px-6 py-4">
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                        Active
                      </span>
                    </td>

                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/doctor/${doctor.id}`}
                          className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                        >
                          View
                        </Link>

                        <button className="rounded-lg bg-sky-700 px-3 py-2 text-xs font-medium text-white hover:bg-sky-800">
                          Edit
                        </button>

                        <button className="rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-100">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}