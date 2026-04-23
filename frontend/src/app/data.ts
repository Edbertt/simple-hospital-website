export type Service = {
  title: string
  description: string
  icon: string
}

export type Doctor = {
  name: string
  specialty: string
}

export type Department = {
  name: string;
  description: string;
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

export const departments: Department[] = [
  {
    name: "Cardiology",
    description:
      "Our cardiology department provides advanced heart care, from diagnostic testing to complex surgeries and long-term management of heart conditions.",
  },
  {
    name: "Pediatrics",
    description:
      "Our pediatrics department is dedicated to the health and well-being of children, from newborns to adolescents, with specialized care for their unique needs.",
  },
  {
    name: "Emergency Care",
    description:
      "Our emergency care department is open 24/7 to provide immediate treatment for urgent health conditions, ensuring rapid response and expert care.",
  },
  {
    name: "Laboratory",
    description:
      "The laboratory department offers a full range of diagnostic tests, including blood work, imaging, and pathology, to help diagnose and monitor health conditions.",
  },
  {
    name: "Orthopedics",
    description:
      "Our orthopedics department specializes in the diagnosis and treatment of bone, joint, and muscle conditions, from fractures to chronic musculoskeletal diseases.",
  },
];