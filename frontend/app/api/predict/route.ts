import { type NextRequest, NextResponse } from "next/server"

// Dummy disease data for demonstration
const diseases = [
  {
    disease: "Tomato - Early Blight",
    confidence: 0.92,
    description:
      "Early blight is a common fungal disease that affects tomato plants. It appears as dark spots with concentric rings on older leaves, eventually causing yellowing and leaf drop.",
    causes:
      "Caused by the fungus Alternaria solani. Thrives in warm, humid conditions with poor air circulation. Often spreads through water splash and contaminated tools.",
    treatment:
      "Remove affected leaves immediately. Apply fungicide spray every 7-14 days. Improve air circulation around plants. Water at soil level to avoid wetting leaves. Consider resistant varieties for future planting.",
  },
  {
    disease: "Potato - Late Blight",
    confidence: 0.88,
    description:
      "Late blight is a devastating disease that can quickly destroy potato crops. It appears as water-soaked lesions on leaves that turn brown and black, often with white fuzzy growth on leaf undersides.",
    causes:
      "Caused by Phytophthora infestans. Spreads rapidly in cool, wet weather. Can survive in infected tubers and spread through wind and rain.",
    treatment:
      "Apply preventive fungicide before symptoms appear. Remove and destroy infected plants. Ensure good drainage and air circulation. Harvest tubers in dry weather and cure properly before storage.",
  },
  {
    disease: "Apple - Apple Scab",
    confidence: 0.85,
    description:
      "Apple scab is a fungal disease that causes dark, scabby lesions on leaves and fruit. Leaves may yellow and drop prematurely, and fruit can become cracked and deformed.",
    causes:
      "Caused by Venturia inaequalis fungus. Overwinters in fallen leaves and spreads through spring rains. Favored by cool, wet weather during leaf emergence.",
    treatment:
      "Rake and destroy fallen leaves in autumn. Apply dormant oil spray before bud break. Use fungicide sprays during wet periods in spring. Choose scab-resistant apple varieties.",
  },
  {
    disease: "Corn - Northern Corn Leaf Blight",
    confidence: 0.9,
    description:
      "Northern corn leaf blight appears as long, elliptical lesions on corn leaves. The lesions are grayish-green to tan in color and can significantly reduce yield if severe.",
    causes:
      "Caused by the fungus Exserohilum turcicum. Favored by moderate temperatures and high humidity. Spreads through wind-blown spores and can overwinter in crop residue.",
    treatment:
      "Plant resistant corn hybrids. Rotate crops to reduce inoculum. Apply foliar fungicides if conditions favor disease development. Remove crop residue after harvest.",
  },
  {
    disease: "Grape - Black Rot",
    confidence: 0.87,
    description:
      "Black rot causes circular brown spots on grape leaves and can destroy entire grape clusters. Infected berries shrivel into hard, black mummies.",
    causes:
      "Caused by Guignardia bidwellii fungus. Overwinters in mummified berries and infected canes. Spreads through rain splash during warm, wet weather.",
    treatment:
      "Remove mummified berries and prune infected canes. Apply fungicide sprays from bud break through fruit set. Ensure good air circulation through proper pruning and training.",
  },
  {
    disease: "Healthy Plant",
    confidence: 0.95,
    description:
      "The plant appears to be healthy with no visible signs of disease. The leaves show good color and structure typical of a well-maintained plant.",
    causes:
      "No disease detected. The plant shows signs of proper care including adequate nutrition, water, and growing conditions.",
    treatment:
      "Continue current care practices. Monitor regularly for any changes. Maintain proper watering, fertilization, and pest management. Ensure good air circulation and appropriate lighting.",
  },
]

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const image = formData.get("image") as File

    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 })
    }

    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Return a random disease prediction for demonstration
    const randomDisease = diseases[Math.floor(Math.random() * diseases.length)]

    return NextResponse.json(randomDisease)
  } catch (error) {
    console.error("Error processing image:", error)
    return NextResponse.json({ error: "Failed to process image" }, { status: 500 })
  }
}
