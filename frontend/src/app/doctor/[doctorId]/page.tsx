import Link from "next/link"
import { notFound } from "next/navigation"
import { doctors } from "../../data"

export function generateStaticParams() {
  return doctors.map((doctor) => ({
    doctorId: doctor.id,
  }))
}

type DoctorDetailPageProps = {
  params: Promise<{
    doctorId: string
  }>
}

export default async function DoctorDetailPage({
  params,
}: DoctorDetailPageProps) {
  const { doctorId } = await params

  const doctor = doctors.find((item) => item.id === doctorId)


  if (!doctor) {
    notFound()
  }

  return (
     <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Link
            href="/doctor"
            className="inline-block text-sm font-medium text-sky-700 hover:underline"
          >
            ← Back to Doctors
          </Link>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-sky-100 text-4xl">
              👨‍⚕️
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
                Doctor Profile
              </p>
              <h1 className="mt-2 text-4xl font-bold text-slate-900">
                {doctor.name}
              </h1>
              <p className="mt-2 text-lg text-slate-600">
                {doctor.specialty}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Content */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-1">
            <h2 className="text-xl font-semibold text-slate-900">
              Professional Information
            </h2>

            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-slate-800">Name:</span>{" "}
                {doctor.name}
              </p>
              <p>
                <span className="font-semibold text-slate-800">Specialty:</span>{" "}
                {doctor.specialty}
              </p>
              <p>
                <span className="font-semibold text-slate-800">Department:</span>{" "}
                {doctor.department}
              </p>
              <p>
                <span className="font-semibold text-slate-800">Experience:</span>{" "}
                {doctor.experience}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="text-xl font-semibold text-slate-900">
              About {doctor.name}
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              {doctor.name} is an experienced {doctor.specialty.toLowerCase()} in the{" "}
              {doctor.department} department at MediCare Hospital. With{" "}
              {doctor.experience.toLowerCase()} of experience, {doctor.name} is
              committed to delivering compassionate, patient-centered, and
              evidence-based medical care.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              At MediCare Hospital, {doctor.name} works closely with patients to
              provide accurate diagnosis, effective treatment plans, and
              continuous support throughout their healthcare journey.
            </p>

            <div className="mt-8 rounded-2xl bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Book a Consultation
              </h3>
              <p className="mt-2 text-slate-600">
                Contact our hospital team to schedule an appointment with{" "}
                {doctor.name}.
              </p>

              <Link
                href="/contact"
                className="mt-4 inline-block rounded-xl bg-sky-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-800"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}