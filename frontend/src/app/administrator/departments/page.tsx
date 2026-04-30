import { departments } from "@/app/data"

export default function AdminDepartmentsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-800">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
              Administrator
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              Manage Departments
            </h1>
            <p className="mt-2 text-slate-600">
              View and manage hospital department information.
            </p>
          </div>

          <button className="rounded-xl bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-sky-800">
            + Add Department
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {departments.map((department) => (
            <div
              key={department.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {department.name}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {department.description}
                  </p>
                </div>

                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                  {department.status}
                </span>
              </div>

              <div className="mt-6 space-y-3 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
                <p>
                  <span className="font-semibold text-slate-800">
                    Head Doctor:
                  </span>{" "}
                  {department.headDoctor}
                </p>
                <p>
                  <span className="font-semibold text-slate-800">
                    Total Doctors:
                  </span>{" "}
                  {department.totalDoctors}
                </p>
              </div>

              <div className="mt-6 flex gap-2">
                <button className="flex-1 rounded-xl bg-sky-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-sky-800">
                  Edit
                </button>
                <button className="flex-1 rounded-xl bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-100">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}