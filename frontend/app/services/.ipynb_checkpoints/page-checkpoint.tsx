"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Plane, ShoppingCart, Leaf, Wrench } from "lucide-react" // ✅ All valid

const services = [
  {
    title: "Drone Spraying",
    icon: <Plane className="h-8 w-8 text-green-600" />,
    description: "Precision agricultural spraying using smart drone technology.",
    href: "/services/drone-spraying"
  },
  {
    title: "Drone Sales",
    icon: <ShoppingCart className="h-8 w-8 text-green-600" />,
    description: "High-performance agricultural drones available for purchase.",
    href: "/services/drone-sales"
  },
  {
    title: "Crop Health Monitoring",
    icon: <Leaf className="h-8 w-8 text-green-600" />,
    description: "Real-time health insights and analytics using aerial data.",
    href: "/services/crop-health"
  },
  {
    title: "Drone Maintenance",
    icon: <Wrench className="h-8 w-8 text-green-600" />,
    description: "Expert support and repair services for agri-drones.",
    href: "/services/drone-maintenance"
  }
]

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-2">Our Services</h1>
        <p className="text-green-600 text-lg">Empowering agriculture with smart drone solutions</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, idx) => (
          <Link key={idx} href={service.href}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow hover:shadow-md p-6 transition border border-green-100 cursor-pointer"
            >
              <div className="flex items-center justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2 text-center">{service.title}</h3>
              <p className="text-sm text-green-600 text-center">{service.description}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </main>
  )
}
