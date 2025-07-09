"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Organic Farmer",
      content:
        "Pavaman Plant Care has revolutionized how I manage crop diseases. The accuracy is incredible and the treatment recommendations have saved my harvest multiple times. The confidence scores help me prioritize which plants need immediate attention.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Mike Chen",
      role: "Home Gardener",
      content:
        "As a beginner gardener, this tool has been invaluable. I can quickly identify what's wrong with my plants and get expert advice on treatment. The mobile-friendly interface makes it easy to use right in my garden.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Agricultural Extension Agent",
      content:
        "I recommend Pavaman Plant Care to all the farmers I work with. It's like having a plant pathologist in your pocket. The deep learning technology behind it is impressive, and the results are consistently reliable.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
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
          <h2 className="text-4xl font-bold text-green-800 mb-4">What Our Users Say</h2>
          <p className="text-xl text-green-600 max-w-2xl mx-auto">
            Trusted by farmers, gardeners, and agricultural professionals worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-green-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="h-8 w-8 text-green-300 mb-4" />
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-green-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-green-800">{testimonial.name}</div>
                  <div className="text-sm text-green-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
