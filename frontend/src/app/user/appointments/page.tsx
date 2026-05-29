const appointments = [
  {
    id: 1,
    department: "Cardiology",
    doctor: "Dr. Sarah Johnson",
    date: "12 May 2026",
    time: "10:00 AM",
    status: "Confirmed",
  },
  {
    id: 2,
    department: "Pediatrics",
    doctor: "Dr. Michael Lee",
    date: "20 May 2026",
    time: "02:30 PM",
    status: "Pending",
  },
  {
    id: 3,
    department: "General Surgery",
    doctor: "Dr. Aisha Rahman",
    date: "5 April 2026",
    time: "09:00 AM",
    status: "Completed",
  },
]

export default function AppointmentsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-800">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-slate-900">My Appointments</h1>
        <p className="mt-2 text-slate-600">
          View your upcoming and previous hospital appointments.
        </p>

        <div className="mt-8 space-y-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-sky-700">
                    {appointment.department}
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    {appointment.doctor}
                  </h2>
                  <p className="mt-2 text-slate-600">
                    {appointment.date} • {appointment.time}
                  </p>
                </div>

                <span className="w-fit rounded-full bg-sky-100 px-4 py-1 text-sm font-medium text-sky-700">
                  {appointment.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}