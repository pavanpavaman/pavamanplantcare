import { AlertTriangle, CheckCircle, Info, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ResultCardProps {
  result: {
    disease: string
    confidence: number
    description: string
    treatment: string
    causes: string
  }
}

export function ResultCard({ result }: ResultCardProps) {
  const isHealthy = result.disease.toLowerCase().includes("healthy")
  const confidenceColor =
    result.confidence >= 0.8 ? "text-green-600" : result.confidence >= 0.6 ? "text-yellow-600" : "text-red-600"
  const confidenceIcon =
    result.confidence >= 0.8 ? CheckCircle : result.confidence >= 0.6 ? AlertTriangle : AlertTriangle

  const ConfidenceIcon = confidenceIcon

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-green-800">Analysis Results</h2>
        <div className={`flex items-center space-x-2 ${confidenceColor}`}>
          <ConfidenceIcon className="h-5 w-5" />
          <span className="font-semibold">{Math.round(result.confidence * 100)}% Confidence</span>
        </div>
      </div>

      <div
        className={`p-4 rounded-lg mb-6 ${isHealthy ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
      >
        <div className="flex items-center space-x-3">
          {isHealthy ? (
            <CheckCircle className="h-8 w-8 text-green-600" />
          ) : (
            <AlertTriangle className="h-8 w-8 text-red-600" />
          )}
          <div>
            <h3 className={`text-xl font-bold ${isHealthy ? "text-green-800" : "text-red-800"}`}>{result.disease}</h3>
            <p className={`text-sm ${isHealthy ? "text-green-600" : "text-red-600"}`}>
              {isHealthy ? "No disease detected" : "Disease detected"}
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description" className="flex items-center space-x-2">
            <Info className="h-4 w-4" />
            <span>Description</span>
          </TabsTrigger>
          <TabsTrigger value="causes" className="flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4" />
            <span>Causes</span>
          </TabsTrigger>
          <TabsTrigger value="treatment" className="flex items-center space-x-2">
            <Lightbulb className="h-4 w-4" />
            <span>Treatment</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Disease Description</h4>
            <p className="text-blue-700 text-sm leading-relaxed">{result.description}</p>
          </div>
        </TabsContent>

        <TabsContent value="causes" className="mt-4">
          <div className="bg-orange-50 rounded-lg p-4">
            <h4 className="font-semibold text-orange-800 mb-2">Causes & Conditions</h4>
            <p className="text-orange-700 text-sm leading-relaxed">{result.causes}</p>
          </div>
        </TabsContent>

        <TabsContent value="treatment" className="mt-4">
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">Treatment Recommendations</h4>
            <p className="text-green-700 text-sm leading-relaxed">{result.treatment}</p>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-6 flex space-x-3">
        <Button variant="outline" className="flex-1 border-green-600 text-green-600 hover:bg-green-50">
          Save Results
        </Button>
        <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">Get Expert Help</Button>
      </div>

      {!isHealthy && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-800 text-sm">
            <strong>Note:</strong> This is an AI-generated diagnosis. For severe cases or persistent problems, consult
            with a local agricultural extension agent or plant pathologist.
          </p>
        </div>
      )}
    </div>
  )
}
