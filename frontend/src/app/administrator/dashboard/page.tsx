export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-800">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
            Admin Dashboard
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Hospital Management Overview
          </h1>
          <p className="mt-2 text-slate-600">
            Monitor hospital data and manage doctors, departments, and appointments.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Doctors</p>
            <h3 className="mt-2 text-3xl font-bold text-sky-700">24</h3>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Departments</p>
            <h3 className="mt-2 text-3xl font-bold text-emerald-600">8</h3>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Today&apos;s Appointments</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900">32</h3>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Pending Requests</p>
            <h3 className="mt-2 text-3xl font-bold text-orange-600">5</h3>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="text-xl font-semibold text-slate-900">
              Recent Activity
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="font-medium text-slate-900">
                  New appointment request
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Patient booked a consultation with Dr. Sarah Johnson.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-4">
                <p className="font-medium text-slate-900">
                  Doctor profile updated
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Dr. Michael Lee&apos;s schedule was updated.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Management Menu
            </h2>

            <div className="mt-6 space-y-3">
              <a
                href="/admin/doctors"
                className="block rounded-xl bg-sky-700 px-4 py-3 text-center font-semibold text-white hover:bg-sky-800"
              >
                Manage Doctors
              </a>

              <a
                href="/admin/departments"
                className="block rounded-xl border border-slate-300 px-4 py-3 text-center font-semibold text-slate-700 hover:bg-slate-50"
              >
                Manage Departments
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}