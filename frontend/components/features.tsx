"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Clock, Smartphone, BarChart, Users } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Instant Detection",
      description: "Get results in seconds with our lightning-fast AI processing powered by TensorFlow.",
    },
    {
      icon: Shield,
      title: "High Accuracy",
      description: "Over 95% accuracy rate trained on thousands of plant disease images using deep learning.",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Access plant disease detection anytime, anywhere you need it with our cloud-based system.",
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Works perfectly on all devices - desktop, tablet, and mobile with responsive design.",
    },
    {
      icon: BarChart,
      title: "Confidence Scores",
      description: "Get confidence levels for each diagnosis to make informed treatment decisions.",
    },
    {
      icon: Users,
      title: "Expert Backed",
      description: "Developed with input from agricultural experts and plant pathologists worldwide.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">Powerful Features</h2>
          <p className="text-xl text-green-600 max-w-2xl mx-auto">
            Everything you need for comprehensive plant disease detection and management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4"
              >
                <feature.icon className="h-6 w-6 text-green-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">{feature.title}</h3>
              <p className="text-green-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
