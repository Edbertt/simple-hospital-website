'use client'

import { useEffect, useState } from "react"
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query"
import apiRouter from "@/api/router"
import { useRouter, useParams } from "next/navigation"

export default function EditAppointmentPage() {
  const router = useRouter()
  const params = useParams()
  const queryClient = useQueryClient()
  const appointmentId = params?.idAppointment

  const [full_name, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [appointment_time, setAppointmentTime] = useState("")
  const [doctor_id, setDoctorId] = useState()

  const { data: doctors } = useQuery({
    queryKey: ['getDoctors'],
    queryFn: apiRouter.doctors.getDoctors,
  })

  console.log(doctors)

  const { data, isLoading, refetch, status } = useQuery({
    queryKey: ['getAppointment', appointmentId],
    queryFn: () => apiRouter.appointments.getAppointment(Number(appointmentId))
  })

  const editAppointmentMutation = useMutation({
    mutationFn: () =>
        apiRouter.appointments.updateAppointment({
            id: data?.id,
            full_name,
            email,
            date,
            appointment_time,
            doctor_id
        }),
    onSuccess: () => {
        alert("Appointment Update Successfully")
        queryClient.invalidateQueries({queryKey: ["getAppointments"]})
        router.push("/user/appointments")
    },
    onError: (err: any) => {
        alert("Failed to update Appointment")
    },
  })

    useEffect(() => {
        if (status === 'success'){
            setFullName(data.full_name)
            setEmail(data.email)
            setDate(data.date || "")
            setAppointmentTime(data.appointment_time_format || "")
            setDoctorId(data.doctor_id)
        }
    }, [status])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    editAppointmentMutation.mutate()
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-800">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900">Edit Appointment</h1>
        <p className="mt-2 text-slate-600">
          Update details for your appointment.
        </p>

        <form className="mt-8 space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        onSubmit={handleSubmit}
        >
          <div>
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <input
              type="text"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none"
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">Date</label>
              <input
                type="date"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Time</label>
              <input
                type="time"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none"
                value={appointment_time}
                onChange={(e) => setAppointmentTime(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Doctor</label>
            <select 
            value={doctor_id ?? ""}
            onChange={(e) => setDoctorId(Number(e.target.value))}
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none">
              <option value="">Select Doctor</option>
              {doctors?.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                    {doctor.name} - {doctor.speciality_caption}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-sky-700 px-6 py-3 text-white font-semibold shadow hover:bg-sky-800"
          >
            Update Appointment
          </button>
        </form>
      </div>
    </main>
  )
}