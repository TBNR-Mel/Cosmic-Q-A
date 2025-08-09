"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Microscope, Brain, Telescope, Lightbulb, Rocket, ImageIcon, BookOpen, Calculator, Atom } from "lucide-react"
import Image from "next/image"

interface EnhancedResponseProps {
  content: string
  question: string
  onGenerateVisual?: (type: string) => void
}

export function EnhancedResponseDisplay({ content, question, onGenerateVisual }: EnhancedResponseProps) {
  const [activeTab, setActiveTab] = useState("full")
  const [generatedImages, setGeneratedImages] = useState<{ [key: string]: string }>({})
  const [loadingImages, setLoadingImages] = useState<{ [key: string]: boolean }>({})

  const generateImage = async (type: string, prompt: string) => {
    setLoadingImages((prev) => ({ ...prev, [type]: true }))

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scenario: prompt, type }),
      })

      const data = await response.json()
      if (data.imageUrl) {
        setGeneratedImages((prev) => ({ ...prev, [type]: data.imageUrl }))
      }
    } catch (error) {
      console.error("Error generating image:", error)
    } finally {
      setLoadingImages((prev) => ({ ...prev, [type]: false }))
    }
  }

  const generateConceptDiagram = async () => {
    setLoadingImages((prev) => ({ ...prev, concept: true }))

    try {
      const response = await fetch("/api/generate-concept-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ concept: question, style: "educational" }),
      })

      const data = await response.json()
      if (data.imageUrl) {
        setGeneratedImages((prev) => ({ ...prev, concept: data.imageUrl }))
      }
    } catch (error) {
      console.error("Error generating concept image:", error)
    } finally {
      setLoadingImages((prev) => ({ ...prev, concept: false }))
    }
  }

  // Parse the structured response
  const sections = {
    scientific: content.match(/🔬 \*\*SCIENTIFIC FOUNDATION\*\*(.*?)(?=🧠|\n\n|$)/s)?.[1]?.trim() || "",
    understanding: content.match(/🧠 \*\*DEEPER UNDERSTANDING\*\*(.*?)(?=🌌|\n\n|$)/s)?.[1]?.trim() || "",
    cosmic: content.match(/🌌 \*\*COSMIC PERSPECTIVE\*\*(.*?)(?=🤔|\n\n|$)/s)?.[1]?.trim() || "",
    philosophical: content.match(/🤔 \*\*PHILOSOPHICAL IMPLICATIONS\*\*(.*?)(?=🚀|\n\n|$)/s)?.[1]?.trim() || "",
    scenarios: content.match(/🚀 \*\*MIND-EXPANDING SCENARIOS\*\*(.*?)(?=🎨|\n\n|$)/s)?.[1]?.trim() || "",
    visual: content.match(/🎨 \*\*VISUAL DESCRIPTION\*\*(.*?)(?=\n\n|$)/s)?.[1]?.trim() || "",
  }

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-slate-800/50">
          <TabsTrigger value="full" className="text-xs">
            Full Response
          </TabsTrigger>
          <TabsTrigger value="scientific" className="text-xs">
            Science
          </TabsTrigger>
          <TabsTrigger value="concepts" className="text-xs">
            Concepts
          </TabsTrigger>
          <TabsTrigger value="visuals" className="text-xs">
            Visuals
          </TabsTrigger>
        </TabsList>

        <TabsContent value="full" className="space-y-4">
          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="prose prose-invert max-w-none">
                {content.split("\n").map((line, i) => (
                  <p key={i} className="mb-2 text-gray-200">
                    {line}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scientific" className="space-y-4">
          <div className="grid gap-4">
            {sections.scientific && (
              <Card className="bg-slate-800/50 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-400">
                    <Microscope className="h-5 w-5" />
                    Scientific Foundation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">{sections.scientific}</p>
                </CardContent>
              </Card>
            )}

            {sections.understanding && (
              <Card className="bg-slate-800/50 border-green-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-400">
                    <Brain className="h-5 w-5" />
                    Deeper Understanding
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">{sections.understanding}</p>
                </CardContent>
              </Card>
            )}

            {sections.cosmic && (
              <Card className="bg-slate-800/50 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-400">
                    <Telescope className="h-5 w-5" />
                    Cosmic Perspective
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">{sections.cosmic}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="concepts" className="space-y-4">
          <div className="grid gap-4">
            {sections.philosophical && (
              <Card className="bg-slate-800/50 border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-yellow-400">
                    <Lightbulb className="h-5 w-5" />
                    Philosophical Implications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">{sections.philosophical}</p>
                </CardContent>
              </Card>
            )}

            {sections.scenarios && (
              <Card className="bg-slate-800/50 border-orange-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-400">
                    <Rocket className="h-5 w-5" />
                    Mind-Expanding Scenarios
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">{sections.scenarios}</p>
                </CardContent>
              </Card>
            )}

            <Card className="bg-slate-800/50 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-cyan-400">
                  <Calculator className="h-5 w-5" />
                  Generate Concept Diagram
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300">Get a visual explanation of the key concepts</p>
                  <Button
                    onClick={generateConceptDiagram}
                    disabled={loadingImages.concept}
                    className="bg-cyan-600 hover:bg-cyan-700"
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    {loadingImages.concept ? "Generating..." : "Create Concept Diagram"}
                  </Button>

                  {generatedImages.concept && (
                    <div className="mt-4">
                      <Image
                        src={generatedImages.concept || "/placeholder.svg"}
                        alt="Concept diagram"
                        width={600}
                        height={400}
                        className="w-full rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="visuals" className="space-y-4">
          <div className="grid gap-4">
            {sections.visual && (
              <Card className="bg-slate-800/50 border-pink-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-pink-400">
                    <ImageIcon className="h-5 w-5" />
                    Visual Description
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 mb-4">{sections.visual}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button
                      onClick={() => generateImage("realistic", question)}
                      disabled={loadingImages.realistic}
                      className="bg-pink-600 hover:bg-pink-700"
                    >
                      <Atom className="mr-2 h-4 w-4" />
                      {loadingImages.realistic ? "Generating..." : "Realistic Visualization"}
                    </Button>

                    <Button
                      onClick={() => generateImage("artistic", question)}
                      disabled={loadingImages.artistic}
                      variant="outline"
                      className="border-pink-400 text-pink-400"
                    >
                      <ImageIcon className="mr-2 h-4 w-4" />
                      {loadingImages.artistic ? "Generating..." : "Artistic Interpretation"}
                    </Button>
                  </div>

                  <div className="grid gap-4 mt-4">
                    {generatedImages.realistic && (
                      <div>
                        <Badge className="mb-2 bg-pink-600">Realistic Visualization</Badge>
                        <Image
                          src={generatedImages.realistic || "/placeholder.svg"}
                          alt="Realistic visualization"
                          width={768}
                          height={512}
                          className="w-full rounded-lg"
                        />
                      </div>
                    )}

                    {generatedImages.artistic && (
                      <div>
                        <Badge className="mb-2 bg-purple-600">Artistic Interpretation</Badge>
                        <Image
                          src={generatedImages.artistic || "/placeholder.svg"}
                          alt="Artistic interpretation"
                          width={768}
                          height={512}
                          className="w-full rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
