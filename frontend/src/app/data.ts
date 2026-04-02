export type Service = {
  title: string
  description: string
  icon: string
}

export type Doctor = {
  name: string
  specialty: string
}

export const services: Service[] = [
  {
    title: "Emergency Care",
    description:
      "24/7 emergency services with fast response and experienced medical teams.",
    icon: "🚑",
  },
  {
    title: "Cardiology",
    description:
      "Advanced heart care, diagnostics, and treatment plans for every patient.",
    icon: "❤️",
  },
  {
    title: "Pediatrics",
    description:
      "Compassionate care for infants, children, and adolescents.",
    icon: "🧸",
  },
  {
    title: "Laboratory",
    description:
      "Accurate and timely diagnostic testing with modern equipment.",
    icon: "🧪",
  },
]

export const doctors: Doctor[] = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
  },
  {
    name: "Dr. Michael Lee",
    specialty: "Pediatrician",
  },
  {
    name: "Dr. Aisha Rahman",
    specialty: "General Surgeon",
  },
]