"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Leaf, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Detect", href: "/detect" },
    { name: "Services", href: "/services" }, // ✅ Added here
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-green-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="bg-green-600 rounded-full p-2"
            >
              <Leaf className="h-6 w-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold text-green-800">Pavaman Plant Care</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors relative ${
                  pathname === item.href ? "text-green-600" : "text-green-700 hover:text-green-600"
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600"
                  />
                )}
              </Link>
            ))}
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="/detect">Try Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-green-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-green-100"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href ? "text-green-600" : "text-green-700 hover:text-green-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white w-fit">
                <Link href="/detect" onClick={() => setIsOpen(false)}>
                  Try Now
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
