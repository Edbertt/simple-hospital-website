'use client'

import Link from "next/link"
import {useQuery} from "@tanstack/react-query";
import apiRouter from "@/api/router";
import { useRouter } from "next/navigation"

export default function AppointmentsPage() {
  const router = useRouter();
  
  const { data: appointments } = useQuery({
    queryKey: ['getAppointments'],
    queryFn: apiRouter.appointments.getAppointments,
  }) 

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-800">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-slate-900">My Appointments</h1>
        <p className="mt-2 text-slate-600">
          View and manage your hospital appointments.
        </p>

        <div className="mt-8 space-y-4">
          {appointments?.map((appointment) => (
            <div
              key={appointment.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-sky-700">
                    {appointment.department_name}
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    {appointment.doctor?.name}
                  </h2>
                  <p className="mt-2 text-slate-600">
                    {appointment.date} • {appointment.appointment_time_format}
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <span className="w-fit rounded-full bg-sky-100 px-4 py-1 text-sm font-medium text-sky-700">
                    {appointment.status}
                  </span>
                  <Link
                    href={`/user/appointments/edit/${appointment.id}`}
                    className="rounded-xl bg-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-300"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Link
            href="/user/book-appointment"
            className="inline-block rounded-xl bg-sky-700 px-6 py-3 text-white font-semibold shadow hover:bg-sky-800"
          >
            Book New Appointment
          </Link>
        </div>
      </div>
    </main>
  )
}