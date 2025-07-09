"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
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
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Get in Touch</h1>
            <p className="text-xl text-green-600 max-w-2xl mx-auto">
              Have questions about our plant disease detection system? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold text-green-800 mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-green-700 mb-2">First Name</label>
                    <Input placeholder="John" className="border-green-200 focus:border-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-700 mb-2">Last Name</label>
                    <Input placeholder="Doe" className="border-green-200 focus:border-green-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="border-green-200 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-2">Subject</label>
                  <Input placeholder="How can we help you?" className="border-green-200 focus:border-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className="border-green-200 focus:border-green-500"
                  />
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-green-800 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-3">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800">Email</h3>
                      <p className="text-green-600">support@pavamanai.com</p>
                      <p className="text-green-600">partnerships@pavamanai.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-3">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800">Phone</h3>
                      <p className="text-green-600">+1 (555) 123-4567</p>
                      <p className="text-green-600 text-sm">Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800">Address</h3>
                      <p className="text-green-600">Pavaman Technologies, Kapil Kavuri Hub,2nd Floor</p>
                      <p className="text-green-600">Financial District, Nanakramguda, Hyderabad, Telangana, INDIA – 500 032</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-green-800 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">How accurate is the disease detection?</h4>
                    <p className="text-green-600 text-sm">
                      Our AI model achieves over 95% accuracy on common plant diseases, trained on thousands of images.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">What image formats are supported?</h4>
                    <p className="text-green-600 text-sm">We support JPG, PNG, and WebP formats up to 10MB in size.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Is there a mobile app?</h4>
                    <p className="text-green-600 text-sm">
                      Our web app is fully mobile-responsive. Native iOS and Android apps are coming soon!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">How do I get the best results?</h4>
                    <p className="text-green-600 text-sm">
                      Take clear, well-lit photos of affected leaves. Ensure the entire leaf is visible in the frame.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
