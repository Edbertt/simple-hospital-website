import { departments } from "@/app/data"; // Assuming you have a list of departments in data.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospital Website - Department",
  description: "This is department page of simple hospital website for demostration",
};

export default function DepartmentPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* Hero Section */}
      <section
        id="hero"
        className="bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-20"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900">Our Departments</h2>
          <p className="mt-4 text-lg text-slate-600">
            At MediCare Hospital, we offer a range of specialized departments
            to ensure comprehensive medical care for all of our patients.
          </p>
        </div>
      </section>

      {/* Department List */}
      <section id="departments" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-3xl font-bold text-slate-900 text-center">
            Explore Our Medical Departments
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 text-center">
            Learn about the various departments and specialties we offer, from
            emergency care to advanced diagnostics and treatment options.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {departments.map((department) => (
              <div
                key={department.name}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <h4 className="text-xl font-semibold text-slate-900">{department.name}</h4>
                <p className="mt-3 text-slate-600">{department.description}</p>
                <a
                  href={`#${department.name.toLowerCase()}`}
                  className="mt-4 inline-block text-sky-700 font-semibold hover:underline"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}