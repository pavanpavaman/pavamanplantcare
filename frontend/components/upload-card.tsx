"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, Camera, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface UploadCardProps {
  onImageUpload: (file: File) => void
}

export function UploadCard({ onImageUpload }: UploadCardProps) {
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
      onImageUpload(selectedFile)
    }
  }

  const clearSelection = () => {
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-green-800 mb-6">Upload Plant Image</h2>

      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive ? "border-green-500 bg-green-50" : "border-green-300 hover:border-green-400"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {selectedFile ? (
          <div className="space-y-4">
            <div className="relative">
              <img
                src={URL.createObjectURL(selectedFile) || "/placeholder.svg"}
                alt="Selected plant"
                className="w-full h-48 object-cover rounded-lg"
              />
              <Button variant="outline" size="sm" className="absolute top-2 right-2 bg-white" onClick={clearSelection}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div>
              <p className="text-green-700 font-medium">{selectedFile.name}</p>
              <p className="text-green-600 text-sm">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
            <Button onClick={handleUpload} className="w-full bg-green-600 hover:bg-green-700 text-white">
              <Camera className="h-4 w-4 mr-2" />
              Analyze Plant
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-green-400">
              <Upload className="h-16 w-16 mx-auto" />
            </div>
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

      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <h3 className="font-semibold text-green-800 mb-2">Tips for best results:</h3>
        <ul className="text-sm text-green-700 space-y-1">
          <li>• Take photos in good lighting conditions</li>
          <li>• Focus on the affected leaf or area</li>
          <li>• Ensure the image is clear and not blurry</li>
          <li>• Include the entire leaf in the frame</li>
        </ul>
      </div>
    </div>
  )
}
