"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Leaf, Facebook, Twitter, Instagram, Mail, Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="bg-green-600 rounded-full p-2"
              >
                <Leaf className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold">Pavaman Plant Care</span>
            </Link>
            <p className="text-green-200 mb-6 leading-relaxed">
              Empowering farmers and gardeners with AI-powered plant disease detection for healthier crops and better
              yields.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Github, Linkedin, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-green-200 hover:text-white transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/detect" className="text-green-200 hover:text-white transition-colors">
                  Disease Detection
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-green-200 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <a href="#" className="text-green-200 hover:text-white transition-colors">
                  API Access
                </a>
              </li>
              <li>
                <a href="#" className="text-green-200 hover:text-white transition-colors">
                  Mobile App
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-green-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-green-200 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-green-200 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-green-200 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-green-200 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-green-200 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-green-200 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-green-700 mt-8 pt-8 text-center"
        >
          <p className="text-green-200">
            © 2024 Pavaman Plant Care. All rights reserved. Built with ❤️ for healthier plants and sustainable agriculture.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
