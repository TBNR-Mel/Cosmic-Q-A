export async function POST(req: Request) {
  try {
    const { concept, style = "educational" } = await req.json()

    let prompt = ""

    if (style === "educational") {
      prompt = `Create a beautiful educational diagram explaining: "${concept}"

Style: Modern scientific infographic with cosmic theme
Elements to include:
- Clear visual hierarchy with headers and sections
- Diagrams showing relationships and processes
- Relevant equations or formulas in elegant typography
- Color-coded elements for easy understanding
- Icons and symbols that enhance comprehension
- Flowing layout that guides the eye naturally
- Deep space colors (navy, purple, gold, cyan)

Make it look like it belongs in a premium science textbook or planetarium display.`
    } else if (style === "artistic") {
      prompt = `Create an artistic interpretation of the scientific concept: "${concept}"

Style: Abstract scientific art with cosmic elements
Elements to include:
- Flowing, organic shapes representing scientific processes
- Particle effects and energy flows
- Cosmic backgrounds with stars and nebulae
- Mathematical beauty made visual
- Sacred geometry and natural patterns
- Rich color gradients and lighting effects
- Sense of scale from quantum to cosmic

Make it scientifically inspired art that captures the beauty of the universe's underlying patterns.`
    }

    // For now, return a placeholder
    const encodedConcept = encodeURIComponent(concept)
    const imageUrl = `/placeholder.svg?height=400&width=600&text=📊 ${encodedConcept.slice(0, 40)}...`

    return Response.json({ imageUrl })
  } catch (error) {
    console.error("Error generating concept image:", error)
    return Response.json({ error: "Failed to generate concept image" }, { status: 500 })
  }
}
