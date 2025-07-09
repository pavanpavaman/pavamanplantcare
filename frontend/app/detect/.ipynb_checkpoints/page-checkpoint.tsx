"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UploadSection } from "@/components/upload-section"
import { ResultsPanel } from "@/components/results-panel"
import { motion } from "framer-motion"

interface PredictionResult {
  disease: string
  confidence: number
  description: string
  treatment: string
}

export default function DetectPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<PredictionResult | null>(null)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleImageUpload = async (file: File) => {
    setIsLoading(true)
    setResult(null)
    setError(null)

    // Create image preview
    const imageUrl = URL.createObjectURL(file)
    setUploadedImage(imageUrl)

    try {
      const formData = new FormData()
      formData.append("file", file) // ✅ FIXED: was "image", changed to "file"

      // Call Flask backend
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/predict`, {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error("Error:", error)
      setError("Failed to analyze image. Please make sure the Flask backend is running on http://localhost:5000")

      // Fallback to mock data for demo purposes
      const mockResult = {
        disease: "Tomato - Early Blight",
        confidence: 0.87,
        description:
          "Early blight is a common fungal disease that affects tomato plants. It appears as dark spots with concentric rings on older leaves, eventually causing yellowing and leaf drop.",
        treatment:
          "Remove affected leaves immediately. Apply fungicide spray every 7-14 days. Improve air circulation around plants. Water at soil level to avoid wetting leaves.",
      }
      setResult(mockResult)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Plant Disease Detection</h1>
            <p className="text-xl text-green-600 max-w-2xl mx-auto">
              Upload an image of a plant leaf to detect potential diseases using our AI-powered system
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <UploadSection onImageUpload={handleImageUpload} uploadedImage={uploadedImage} isLoading={isLoading} />
            <ResultsPanel result={result} isLoading={isLoading} error={error} />
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
