'use client'

import { useState } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { doctors } from "@/app/data"
import apiRouter from "@/api/router"
import { useRouter } from "next/navigation"

export default function BookAppointmentPage() {
  const router = useRouter()
  const queryClient = useQueryClient()

  const [full_name, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone_number, setPhoneNumber] = useState("")
  const [date, setDate] = useState("")
  const [appointment_time, setAppointmentTime] = useState("")
  const [doctor_id, setDoctorId] = useState()
  const [notes, setNotes] = useState("")

  const { data: doctors } = useQuery({
    queryKey: ['getDoctors'],
    queryFn: apiRouter.doctors.getDoctors,
  })

  const addAppointmentMutation = useMutation({
    mutationFn: () => 
      apiRouter.appointments.createAppointment({
        full_name,
        email,
        phone_number,
        date,
        appointment_time,
        doctor_id,
        notes
      }),
    onSuccess: () => {
      alert("Appointment created Successfully!")
      queryClient.invalidateQueries({queryKey: ["getAppointments"]})
      router.push("/user/appointments")
    },
    onError: (err: any) => {
      alert("Failed to create Appointment!")
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addAppointmentMutation.mutate()
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-800">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900">Book New Appointment</h1>
        <p className="mt-2 text-slate-600">
          Fill the form to request a new appointment.
        </p>

        <form className="mt-8 space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Preferred Date
              </label>
              <input
                type="date"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Preferred Time
              </label>
              <input
                type="time"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                value={appointment_time}
                onChange={(e) => setAppointmentTime(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Select Doctor
            </label>
            <select
            value={doctor_id ?? ""}
            onChange={(e) => setDoctorId(Number(e.target.value))}
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100">
              <option value="">Choose doctor</option>
              {doctors?.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name} - {doctor.speciality_caption}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Symptoms / Notes
            </label>
            <textarea
              rows={5}
              placeholder="Describe your symptoms or reason for appointment"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-sky-700 px-6 py-3 text-white font-semibold shadow hover:bg-sky-800"
          >
            Submit Appointment Request
          </button>
        </form>
      </div>
    </main>
  )
}