"use client"

import { motion } from "framer-motion"
import { Upload, Scan, FileText } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Image",
      description: "Take a clear photo of the affected plant leaf and upload it to our platform.",
    },
    {
      icon: Scan,
      title: "AI Analysis",
      description: "Our advanced machine learning model analyzes the image using deep learning algorithms.",
    },
    {
      icon: FileText,
      title: "Get Results",
      description: "Receive detailed diagnosis with treatment recommendations and confidence scores.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">How It Works</h2>
          <p className="text-xl text-green-600 max-w-2xl mx-auto">
            Get accurate plant disease detection in three simple steps using our AI-powered system
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <step.icon className="h-10 w-10 text-green-600" />
              </motion.div>
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold shadow-lg">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">{step.title}</h3>
              <p className="text-green-600">{step.description}</p>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-green-200 -translate-x-1/2 z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
