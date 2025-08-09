export async function POST(req: Request) {
  try {
    const { scenario, type = "scenario" } = await req.json()

    let prompt = ""

    if (type === "scenario") {
      prompt = `Create a scientifically accurate, visually stunning illustration of: "${scenario}"

Style: Photorealistic scientific visualization with dramatic cosmic lighting
Requirements:
- Show accurate physics and scale relationships
- Include relevant scientific details and phenomena
- Use rich colors and dramatic lighting effects
- Make it educational yet visually captivating
- Include labels or visual cues that help explain the science
- Cinematic composition with depth and atmosphere

The image should help viewers understand the scientific concepts while being absolutely breathtaking to look at.`
    } else if (type === "concept") {
      prompt = `Create an educational scientific diagram illustrating: "${scenario}"

Style: Clean, modern scientific illustration with infographic elements
Requirements:
- Clear visual explanation of the concept
- Include diagrams, arrows, and labels
- Use a cosmic color palette (deep blues, purples, golds)
- Show relationships between different elements
- Make complex ideas visually accessible
- Include relevant formulas or measurements if helpful

The image should be like a beautiful textbook illustration that makes learning exciting.`
    }

    // For now, return a placeholder with the scenario encoded
    // In production, you would use DALL-E or another image generation service
    const encodedScenario = encodeURIComponent(scenario)
    const imageUrl = `/placeholder.svg?height=512&width=768&text=🌌 ${encodedScenario.slice(0, 50)}...`

    return Response.json({ imageUrl })
  } catch (error) {
    console.error("Error generating image:", error)
    return Response.json({ error: "Failed to generate image" }, { status: 500 })
  }
}
