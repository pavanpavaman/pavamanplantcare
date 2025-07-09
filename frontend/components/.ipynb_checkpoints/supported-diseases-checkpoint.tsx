"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

const supportedDiseases: Record<string, { emoji: string; diseases: string[] }> = {
  Tomato: {
    emoji: "🍅",
    diseases: [
      "Bacterial Spot", "Early Blight", "Late Blight", "Leaf Mold", "Septoria Leaf Spot",
      "Target Spot", "Yellow Leaf Curl Virus", "Mosaic Virus", "Spider Mites", "Healthy"
    ]
  },
  Grape: {
    emoji: "🍇",
    diseases: ["Black Rot", "Esca (Black Measles)", "Leaf Blight (Isariopsis Leaf Spot)", "Healthy"]
  },
  Apple: {
    emoji: "🍎",
    diseases: ["Apple Scab", "Black Rot", "Cedar Apple Rust", "Healthy"]
  },
  Corn: {
    emoji: "🌽",
    diseases: ["Cercospora Leaf Spot (Gray Leaf Spot)", "Common Rust", "Northern Leaf Blight", "Healthy"]
  },
  Peach: { emoji: "🍑", diseases: ["Bacterial Spot", "Healthy"] },
  Orange: { emoji: "🍊", diseases: ["Citrus Greening (Haunglongbing)"] },
  Potato: { emoji: "🥔", diseases: ["Early Blight", "Late Blight", "Healthy"] },
  Strawberry: { emoji: "🍓", diseases: ["Leaf Scorch", "Healthy"] },
  Cherry: { emoji: "🍒", diseases: ["Powdery Mildew", "Healthy"] },
  Blueberry: { emoji: "🫐", diseases: ["Healthy"] },
  BellPepper: { emoji: "🫑", diseases: ["Bacterial Spot", "Healthy"] },
  Soybean: { emoji: "🫘", diseases: ["Healthy"] },
  Squash: { emoji: "🎃", diseases: ["Powdery Mildew"] },
  Raspberry: { emoji: "🍇", diseases: ["Healthy"] }
}

export function SupportedDiseases() {
  const [openCrop, setOpenCrop] = useState<string | null>(null)

  const toggleCrop = (crop: string) => {
    setOpenCrop(openCrop === crop ? null : crop)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-4">Supported Crops and Diseases</h2>
        <p className="text-green-600 mb-10 text-lg">
          Our model can identify diseases across a variety of crops. Click a crop to view its supported diseases.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {Object.entries(supportedDiseases).map(([crop, { emoji, diseases }]) => {
            const isOpen = openCrop === crop

            return (
              <div
                key={crop}
                className="border border-green-200 bg-white shadow-sm rounded-xl transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleCrop(crop)}
                  className="w-full flex items-center justify-between px-5 py-4 font-semibold text-green-800 hover:bg-green-50 text-lg"
                >
                  <span>
                    {emoji} {crop}
                  </span>
                  {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-4 pt-2"
                    >
                      <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                        {diseases.map((disease) => (
                          <li key={disease}>{disease}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
