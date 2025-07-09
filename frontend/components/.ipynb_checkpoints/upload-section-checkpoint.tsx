"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Upload, Camera, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface UploadSectionProps {
  onImageUpload: (file: File) => void
  uploadedImage: string | null
  isLoading: boolean
}

export function UploadSection({ onImageUpload, uploadedImage, isLoading }: UploadSectionProps) {
  const [dragActive, setDragActive] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = e.dataTransfer.files
    if (files && files[0]) {
      handleFileSelect(files[0])
    }
  }

  const handleFileSelect = (file: File) => {
    if (file.type.startsWith("image/")) {
      setSelectedFile(file)
      console.log("📤 Automatically uploading selected file:", file)
      onImageUpload(file) // ✅ Automatically triggers upload
    }
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files[0]) {
      handleFileSelect(files[0])
    }
  }

  const handleUpload = () => {
    if (selectedFile) {
      console.log("📤 Manually uploading selected file:", selectedFile)
      onImageUpload(selectedFile)
    } else {
      console.error("❌ No file selected when 'Analyze' clicked")
    }
  }

  const clearSelection = () => {
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Upload Plant Image</h2>

        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
            dragActive
              ? "border-green-500 bg-green-50 scale-105"
              : "border-green-300 hover:border-green-400 hover:bg-green-50"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {selectedFile ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
              <div className="relative">
                <img
                  src={URL.createObjectURL(selectedFile) || "/placeholder.svg"}
                  alt="Selected plant"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-2 right-2 bg-white shadow-md"
                  onClick={clearSelection}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div>
                <p className="text-green-700 font-medium">{selectedFile.name}</p>
                <p className="text-green-600 text-sm">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
              <Button
                onClick={handleUpload}
                disabled={isLoading}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Camera className="h-4 w-4 mr-2" />
                    Analyze Plant
                  </>
                )}
              </Button>
            </motion.div>
          ) : (
            <div className="space-y-4">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="text-green-400"
              >
                <Upload className="h-16 w-16 mx-auto" />
              </motion.div>
              <div>
                <p className="text-lg font-medium text-green-800 mb-2">Drop your plant image here</p>
                <p className="text-green-600 text-sm mb-4">or click to browse files</p>
                <Button
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Choose File
                </Button>
              </div>
              <p className="text-xs text-green-500">Supports JPG, PNG, WebP up to 10MB</p>
            </div>
          )}
        </div>

        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileInputChange} className="hidden" />
      </div>

      {/* Tips Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-xl p-6"
      >
        <h3 className="font-semibold text-green-800 mb-4 flex items-center">
          <Camera className="h-5 w-5 mr-2" />
          Tips for Best Results
        </h3>
        <ul className="text-sm text-green-700 space-y-2">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            Take photos in good lighting conditions
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            Focus on the affected leaf or area
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            Ensure the image is clear and not blurry
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            Include the entire leaf in the frame
          </li>
        </ul>
      </motion.div>
    </motion.div>
  )
}
