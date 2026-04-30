export default function UserDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-800">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
            Patient Dashboard
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Welcome back, Patient
          </h1>
          <p className="mt-2 text-slate-600">
            Manage your appointments and access hospital services.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="text-xl font-semibold text-slate-900">
              Upcoming Appointment
            </h2>

            <div className="mt-6 rounded-xl border border-slate-200 p-5">
              <p className="text-sm text-slate-500">Next Appointment</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Cardiology Consultation
              </h3>
              <p className="mt-2 text-slate-600">
                Dr. Sarah Johnson • Monday, 12 May 2026 • 10:00 AM
              </p>
              <span className="mt-4 inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                Confirmed
              </span>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Quick Actions
            </h2>

            <div className="mt-6 space-y-3">
              <a
                href="/user/book-appointment"
                className="block rounded-xl bg-sky-700 px-4 py-3 text-center font-semibold text-white hover:bg-sky-800"
              >
                Book Appointment
              </a>
              <a
                href="/user/appointments"
                className="block rounded-xl border border-slate-300 px-4 py-3 text-center font-semibold text-slate-700 hover:bg-slate-50"
              >
                View Appointments
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Total Appointments</p>
            <h3 className="mt-2 text-3xl font-bold text-sky-700">8</h3>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Upcoming</p>
            <h3 className="mt-2 text-3xl font-bold text-emerald-600">1</h3>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Completed</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900">7</h3>
          </div>
        </div>
      </div>
    </main>
  )
}