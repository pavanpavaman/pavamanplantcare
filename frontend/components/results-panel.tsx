"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  AlertTriangle,
  CheckCircle,
  Info,
  Lightbulb,
  Loader2,
  AlertCircle,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown"

interface ResultsPanelProps {
  result: {
    disease: string
    confidence: number
    description: string
  } | null
  isLoading: boolean
  error: string | null
}

export function ResultsPanel({ result, isLoading, error }: ResultsPanelProps) {
  const [prevention, setPrevention] = useState<string | null>(null)
  const [treatment, setTreatment] = useState<string | null>(null)
  const [loadingType, setLoadingType] = useState<"prevention" | "treatment" | null>(null)

  useEffect(() => {
    setPrevention(null)
    setTreatment(null)
    setLoadingType(null)
  }, [result])

  const fetchInfo = async (type: "prevention" | "treatment") => {
    if (!result) return
    setLoadingType(type)
    const endpoint = type === "treatment" ? "get-treatment" : "get-prevention"

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label: result.disease }),
      })
      const data = await res.json()
      if (type === "treatment") {
        setTreatment(data.treatment)
      } else {
        setPrevention(data.prevention)
      }
    } catch {
      if (type === "treatment") {
        setTreatment("⚠️ Error fetching treatment info")
      } else {
        setPrevention("⚠️ Error fetching prevention info")
      }
    } finally {
      setLoadingType(null)
    }
  }

  if (isLoading) {
    return (
      <motion.div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Loader2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Analyzing Image...</h3>
        <p className="text-green-600">Our AI is examining your plant for potential diseases</p>
      </motion.div>
    )
  }

  if (error) {
    return (
      <motion.div className="bg-white rounded-2xl shadow-xl p-8">
        <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-red-800 mb-2">Connection Error</h3>
        <p className="text-red-600 text-sm">{error}</p>
      </motion.div>
    )
  }

  if (result) {
    const isHealthy = result.disease.toLowerCase().includes("healthy")
    const confidenceColor =
      result.confidence >= 80 ? "text-green-600" : result.confidence >= 60 ? "text-yellow-600" : "text-red-600"
    const ConfidenceIcon =
      result.confidence >= 80 ? CheckCircle : result.confidence >= 60 ? AlertTriangle : AlertTriangle

    return (
      <motion.div className="bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-green-800">Analysis Results</h2>
          <div className={`flex items-center space-x-2 ${confidenceColor}`}>
            <ConfidenceIcon className="h-5 w-5" />
            <span className="font-semibold">{result.confidence.toFixed(2)}% Confidence</span>
          </div>
        </div>

        {/* Result Box */}
        <div
          className={`p-6 rounded-xl mb-6 ${
            isHealthy ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
          }`}
        >
          <div className="flex items-center space-x-4">
            {isHealthy ? (
              <CheckCircle className="h-10 w-10 text-green-600" />
            ) : (
              <AlertTriangle className="h-10 w-10 text-red-600" />
            )}
            <div>
              <h3
                className={`text-2xl font-bold ${
                  isHealthy ? "text-green-800" : "text-red-800"
                }`}
              >
                {result.disease}
              </h3>
              <p
                className={`text-sm ${
                  isHealthy ? "text-green-600" : "text-red-600"
                }`}
              >
                {isHealthy ? "No disease detected" : "Disease detected"}
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-blue-50 rounded-xl p-6 mb-4 prose prose-blue max-w-none">
          <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
            <Info className="h-5 w-5 mr-2" /> Disease Description
          </h4>
          <ReactMarkdown>{result.description}</ReactMarkdown>
        </div>

        {/* Prevention Info */}
        <div className="bg-yellow-50 rounded-xl p-6 mb-4 prose prose-yellow max-w-none">
          <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
            <ShieldCheck className="h-5 w-5 mr-2" /> Preventive Measures
          </h4>
          {prevention ? (
            <ReactMarkdown>{prevention}</ReactMarkdown>
          ) : (
            <Button
              className="bg-yellow-600 text-white mt-2"
              onClick={() => fetchInfo("prevention")}
              disabled={loadingType === "prevention"}
            >
              {loadingType === "prevention" ? "Loading..." : "Get Prevention Info"}
            </Button>
          )}
        </div>

        {/* Treatment Info */}
        <div className="bg-green-50 rounded-xl p-6 prose prose-green max-w-none">
          <h4 className="font-semibold text-green-800 mb-2 flex items-center">
            <Lightbulb className="h-5 w-5 mr-2" /> Treatment Recommendations
          </h4>
          {treatment ? (
            <ReactMarkdown>{treatment}</ReactMarkdown>
          ) : (
            <Button
              className="bg-green-600 text-white mt-2"
              onClick={() => fetchInfo("treatment")}
              disabled={loadingType === "treatment"}
            >
              {loadingType === "treatment" ? "Loading..." : "Get Treatment Info"}
            </Button>
          )}
        </div>
      </motion.div>
    )
  }

  return null
}
