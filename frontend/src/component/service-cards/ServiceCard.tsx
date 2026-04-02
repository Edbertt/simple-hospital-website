import { Service } from "@/app/data";

type Props = {
    service: Service
}

export default function ServiceCard({ service }: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="text-4xl">{service.icon}</div>

      <h4 className="mt-4 text-xl font-semibold text-slate-900">
        {service.title}
      </h4>

      <p className="mt-3 text-slate-600">{service.description}</p>
    </div>
  )
}