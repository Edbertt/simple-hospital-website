import type { Metadata } from "next";
import { doctors } from "@/app/data"

export const metadata: Metadata = {
  title: "Hospital Website - About",
  description: "This is profile page of simple hospital website for demostration",
};

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
              About MediCare Hospital
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              MediCare Hospital is committed to providing the best healthcare services with compassion and innovation. We aim to improve the lives of our patients through world-class treatment and a caring environment.
            </p>
          </div>
        </div>
      </section>

      {/* Hospital Mission Section */}
      <section id="mission" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-3xl font-bold text-slate-900 text-center">
            Our Mission
          </h3>
          <p className="mt-4 text-lg text-slate-600 text-center max-w-2xl mx-auto">
            At MediCare Hospital, our mission is to provide accessible, high-quality, and compassionate healthcare to everyone. We prioritize patient care with an emphasis on continuous improvement and technological advancement.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section id="values" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-3xl font-bold text-slate-900 text-center">
            Our Core Values
          </h3>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="text-xl font-semibold text-slate-900">Compassion</h4>
              <p className="mt-2 text-slate-600">We care deeply about the well-being of our patients, providing empathy and comfort at every step of their healthcare journey.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="text-xl font-semibold text-slate-900">Innovation</h4>
              <p className="mt-2 text-slate-600">We embrace cutting-edge technology and new treatment methods to offer the best possible healthcare solutions.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="text-xl font-semibold text-slate-900">Excellence</h4>
              <p className="mt-2 text-slate-600">Our skilled team of doctors, nurses, and staff strive for excellence in all aspects of patient care and hospital operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section id="history" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-3xl font-bold text-slate-900 text-center">
            Our History
          </h3>
          <p className="mt-4 text-lg text-slate-600 text-center max-w-2xl mx-auto">
            Founded in 2000, MediCare Hospital has been a trusted name in healthcare, providing top-tier services across various medical disciplines. Our journey began with a vision to make healthcare accessible to everyone, and over the years, we've expanded our services and facilities to serve our community better.
          </p>
        </div>
      </section>

      {/* Meet Our Doctors Section */}
      <section id="doctors" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-slate-900">
            Meet Our Experts
          </h3>
          <p className="mt-4 text-lg text-slate-600">
            Our dedicated team of healthcare professionals is committed to providing personalized and expert care.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sky-100 text-3xl">
                👨‍⚕️
              </div>
              <h4 className="mt-4 text-xl font-semibold text-slate-900">
                {doctor.name}
              </h4>
              <p className="mt-2 text-slate-600">{doctor.specialty}</p>
              <button className="mt-6 rounded-xl bg-sky-700 px-5 py-2 font-medium text-white hover:bg-sky-800">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}