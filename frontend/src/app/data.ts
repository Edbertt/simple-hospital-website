export type Service = {
  title: string
  description: string
  icon: string
}

export type Doctor = {
  id: string
  name: string
  specialty: string
  department: string
  experience: string
}

export type Department = {
  id: string
  name: string
  description: string
  headDoctor: string
  totalDoctors: number
  status: string
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
    id: "sarah-johnson",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    department: "Cardiology",
    experience: "12 Years",
  },
  {
    id: "michael-lee",
    name: "Dr. Michael Lee",
    specialty: "Pediatrician",
    department: "Pediatrics",
    experience: "9 Years",
  },
  {
    id: "aisha-rahman",
    name: "Dr. Aisha Rahman",
    specialty: "General Surgeon",
    department: "Surgery",
    experience: "15 Years",
  },
  {
    id: "daniel-wong",
    name: "Dr. Daniel Wong",
    specialty: "Neurologist",
    department: "Neurology",
    experience: "11 Years",
  },
  {
    id: "emily-clark",
    name: "Dr. Emily Clark",
    specialty: "Dermatologist",
    department: "Dermatology",
    experience: "8 Years",
  },
  {
    id: "james-wilson",
    name: "Dr. James Wilson",
    specialty: "Orthopedic Surgeon",
    department: "Orthopedics",
    experience: "14 Years",
  },
]

export const departments: Department[] = [
  {
    id: "cardiology",
    name: "Cardiology",
    description:
      "Provides diagnosis, treatment, and prevention of heart and vascular diseases.",
    headDoctor: "Dr. Sarah Johnson",
    totalDoctors: 5,
    status: "Active",
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    description:
      "Offers medical care for infants, children, and adolescents.",
    headDoctor: "Dr. Michael Lee",
    totalDoctors: 4,
    status: "Active",
  },
  {
    id: "surgery",
    name: "General Surgery",
    description:
      "Handles surgical procedures, pre-operative care, and post-operative recovery.",
    headDoctor: "Dr. Aisha Rahman",
    totalDoctors: 6,
    status: "Active",
  },
  {
    id: "neurology",
    name: "Neurology",
    description:
      "Focuses on disorders of the brain, nerves, spine, and nervous system.",
    headDoctor: "Dr. Daniel Wong",
    totalDoctors: 3,
    status: "Active",
  },
]