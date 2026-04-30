import { services, doctors } from "./data";
import ServiceCard from "@/component/service-cards/ServiceCard";
import Link from "next/link"


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* Hero */}
      <section
        id="home"
        className="bg-gradient-to-br from-sky-50 via-white to-emerald-50"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block rounded-full bg-sky-100 px-4 py-1 text-sm font-medium text-sky-700">
              24/7 Medical Support
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Quality Healthcare for a Better Tomorrow
            </h2>

            <p className="mt-6 max-w-xl text-lg text-slate-600">
              MediCare Hospital provides modern facilities, experienced doctors,
              and patient-centered care to help you and your family stay healthy.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#appointment"
                className="rounded-xl bg-sky-700 px-6 py-3 font-semibold text-white shadow hover:bg-sky-800"
              >
                Make an Appointment
              </a>
              <a
                href="#services"
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
              >
                Explore Department
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              <div className="rounded-2xl border bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold text-sky-700">50+</p>
                <p className="text-sm text-slate-500">Expert Doctors</p>
              </div>
              <div className="rounded-2xl border bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold text-sky-700">24/7</p>
                <p className="text-sm text-slate-500">Emergency Care</p>
              </div>
              <div className="rounded-2xl border bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold text-sky-700">10k+</p>
                <p className="text-sm text-slate-500">Patients Served</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
            Our Services
          </p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            Comprehensive Medical Services
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            We provide a wide range of healthcare services designed to support
            prevention, diagnosis, treatment, and recovery.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
              About Us
            </p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900">
              Compassionate Care, Advanced Medicine
            </h3>
            <p className="mt-4 text-slate-600">
              At MediCare Hospital, we combine experienced professionals,
              advanced medical technology, and a patient-first approach to
              deliver trusted healthcare services.
            </p>
            <p className="mt-4 text-slate-600">
              Our mission is to improve lives through quality treatment,
              preventive care, and a welcoming healing environment for every
              patient.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-sky-700 p-6 text-white shadow">
              <h4 className="text-lg font-semibold">Modern Facilities</h4>
              <p className="mt-2 text-sm text-sky-100">
                Equipped with advanced diagnostic and treatment technology.
              </p>
            </div>
            <div className="rounded-2xl bg-emerald-600 p-6 text-white shadow">
              <h4 className="text-lg font-semibold">Patient First</h4>
              <p className="mt-2 text-sm text-emerald-100">
                Focused on safety, comfort, and personalized treatment plans.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow">
              <h4 className="text-lg font-semibold text-slate-900">
                Experienced Team
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                Skilled doctors, nurses, and specialists across departments.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow">
              <h4 className="text-lg font-semibold text-slate-900">
                Trusted Community Care
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                Serving families with reliable and compassionate healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
            Our Doctors
          </p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            Meet Our Specialists
          </h3>
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
              <Link
                href={`/doctor/${doctor.id}`}
                className="mt-6 inline-block rounded-xl bg-sky-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-800"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="appointment" className="bg-sky-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="text-3xl font-bold md:text-4xl">
            Need Medical Attention?
          </h3>
          <p className="mt-4 text-sky-100">
            Book an appointment today and receive care from our trusted medical
            professionals.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-sky-700 shadow hover:bg-slate-100"
          >
            Contact Us
          </a>
        </div>
      </section>
     
    </main>
  );
}