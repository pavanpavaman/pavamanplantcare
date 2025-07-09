"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Leaf, Users, Target, Award, Brain, Camera, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">About Pavaman Plant Care</h1>
            <p className="text-xl text-green-600 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing agriculture through artificial intelligence, helping farmers and gardeners protect their
              crops with cutting-edge plant disease detection technology.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-green-800 mb-6">Our Mission</h2>
              <p className="text-green-700 mb-6 text-lg leading-relaxed">
                We believe that technology can help create a more sustainable and productive agricultural future. Our
                AI-powered plant disease detection system helps farmers and gardeners identify plant diseases early,
                enabling timely treatment and reducing crop losses.
              </p>
              <p className="text-green-700 text-lg leading-relaxed">
                By making advanced plant pathology accessible to everyone, we're democratizing agricultural knowledge
                and helping feed the world more efficiently.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl p-8 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=400&fit=crop"
                  alt="Farmers using technology in field"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: Leaf,
                title: "Plant Health",
                description: "Advanced AI algorithms trained on thousands of plant disease images",
              },
              {
                icon: Users,
                title: "Community",
                description: "Serving farmers, gardeners, and agricultural professionals worldwide",
              },
              {
                icon: Target,
                title: "Accuracy",
                description: "High precision disease detection with confidence scoring",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Committed to continuous improvement and innovation",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">{value.title}</h3>
                <p className="text-green-600">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Technology Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-20"
          >
            <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Our Technology</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Deep Learning",
                  description:
                    "Convolutional Neural Networks trained on extensive plant disease datasets using TensorFlow and Keras",
                },
                {
                  icon: Camera,
                  title: "Image Processing",
                  description: "Advanced computer vision techniques for accurate leaf analysis and feature extraction",
                },
                {
                  icon: Shield,
                  title: "Reliable Detection",
                  description: "Robust model architecture ensuring consistent and accurate disease identification",
                },
              ].map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <tech.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">{tech.title}</h3>
                  <p className="text-green-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-xl p-8 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Impact by Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "95%", label: "Accuracy Rate" },
                { number: "50+", label: "Disease Types" },
                { number: "10k+", label: "Happy Users" },
                { number: "24/7", label: "Availability" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-green-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
