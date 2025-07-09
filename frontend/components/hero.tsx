"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100" />
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-200 rounded-full opacity-20 animate-pulse delay-1000" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-2 mb-6"
            >
              <div className="bg-green-100 rounded-full p-2">
                <Sparkles className="h-5 w-5 text-green-600" />
              </div>
              <span className="text-green-600 font-medium">AI-Powered Plant Care</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-green-800 mb-6 leading-tight"
            >
              Detect Plant Diseases
              <span className="text-green-600 block">Instantly</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-green-700 mb-8 leading-relaxed"
            >
              Upload a photo of your plant and get instant AI-powered disease detection with treatment recommendations.
              Help your plants thrive with cutting-edge machine learning technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/detect">
                  Start Detection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center space-x-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-green-800">95%</div>
                <div className="text-sm text-green-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-800">50+</div>
                <div className="text-sm text-green-600">Plant Diseases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-800">10k+</div>
                <div className="text-sm text-green-600">Happy Users</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop"
                alt="Plant disease detection interface"
                className="w-full h-80 object-cover rounded-lg"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-800">AI Analysis Active</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
