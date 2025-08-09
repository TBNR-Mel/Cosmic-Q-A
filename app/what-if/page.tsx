"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Zap, Shuffle, Loader2, Map, Share2 } from "lucide-react"
import { InteractiveVisualization } from "@/components/interactive-visualization"

const whatIfScenarios = [
  "What if Earth had two suns?",
  "What if we traveled near light speed?",
  "What if gravity was twice as strong?",
  "What if the Moon was twice as close to Earth?",
  "What if humans could photosynthesize like plants?",
  "What if time moved backwards for one day?",
  "What if we could breathe underwater?",
  "What if Earth's rotation stopped?",
  "What if we discovered a parallel universe?",
  "What if black holes were portals to other dimensions?",
]

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export default function WhatIfPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [isGeneratingImage, setIsGeneratingImage] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    }

    const currentInput = input.trim()
    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)
    setInput("")
    setGeneratedImage(null)

    try {
      const response = await fetch("/api/what-if-simulator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let assistantContent = ""

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
      }

      setMessages((prev) => [...prev, assistantMessage])

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value)
          const lines = chunk.split("\n")

          for (const line of lines) {
            if (line.startsWith("0:")) {
              try {
                const data = JSON.parse(line.slice(2))
                if (data.content) {
                  assistantContent += data.content
                  setMessages((prev) =>
                    prev.map((m) => (m.id === assistantMessage.id ? { ...m, content: assistantContent } : m)),
                  )
                }
              } catch (e) {
                // Ignore parsing errors
              }
            }
          }
        }
      }

      // Generate image after getting the response
      setIsGeneratingImage(true)
      try {
        const imageResponse = await fetch("/api/generate-image", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ scenario: currentInput }),
        })
        const imageData = await imageResponse.json()
        if (imageData.imageUrl) {
          setGeneratedImage(imageData.imageUrl)
        }
      } catch (error) {
        console.error("Error generating image:", error)
      } finally {
        setIsGeneratingImage(false)
      }
    } catch (error) {
      console.error("Error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I apologize, but I'm having trouble running the simulation right now. Please try again in a moment.",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const getRandomScenario = () => {
    const randomIndex = Math.floor(Math.random() * whatIfScenarios.length)
    const scenario = whatIfScenarios[randomIndex]
    setInput(scenario)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Universe
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-white">What If Simulator</h1>
          <Link href="/ask">
            <Button
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
            >
              Cosmic Q&A
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Scenario Input */}
          <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-400" />
                What scenario would you like to explore?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="What if Earth had two suns? What if we traveled near light speed?"
                  className="bg-slate-700/50 border-blue-500/30 text-white placeholder:text-gray-400 min-h-[100px]"
                />
                <div className="flex gap-2">
                  <Button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Simulating...
                      </>
                    ) : (
                      <>
                        <Zap className="mr-2 h-4 w-4" />
                        Run Simulation
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={getRandomScenario}
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                  >
                    <Shuffle className="mr-2 h-4 w-4" />
                    Random Scenario
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Messages and Visualizations */}
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={message.id} className="space-y-4">
                <Card
                  className={`${
                    message.role === "user"
                      ? "bg-blue-800/30 border-blue-500/30 ml-12"
                      : "bg-slate-800/50 border-blue-500/20 mr-12"
                  } backdrop-blur-sm`}
                >
                  <CardContent className="pt-6">
                    <div className={`${message.role === "user" ? "text-blue-200" : "text-white"}`}>
                      {message.role === "user" ? (
                        <div>
                          <div className="font-semibold mb-2 text-blue-300">Scenario:</div>
                          <div>{message.content}</div>
                        </div>
                      ) : (
                        <div>
                          <div className="font-semibold mb-2 text-blue-400 flex items-center gap-2">
                            <Zap className="h-4 w-4" />
                            Simulation Results:
                          </div>
                          <div className="prose prose-invert max-w-none">
                            {message.content.split("\n").map((line, i) => (
                              <p key={i} className="mb-2">
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Show interactive visualization and curiosity path for the latest response */}
                {message.role === "assistant" && index === messages.length - 1 && (
                  <>
                    <InteractiveVisualization scenario={messages[index - 1]?.content || ""} />

                    <Card className="bg-slate-800/50 border-cyan-500/20 backdrop-blur-sm mr-12">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center gap-2">
                          <Map className="h-5 w-5 text-cyan-400" />
                          Curiosity Path - Explore Further
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <Button
                            variant="outline"
                            className="border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/20 text-left justify-start h-auto p-3 bg-transparent"
                            onClick={() => setInput("What if we could manipulate gravity at will?")}
                          >
                            🌌 What if we could manipulate gravity at will?
                          </Button>
                          <Button
                            variant="outline"
                            className="border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/20 text-left justify-start h-auto p-3 bg-transparent"
                            onClick={() => setInput("What if time flowed differently in different regions of space?")}
                          >
                            ⏰ What if time flowed differently in space?
                          </Button>
                          <Button
                            variant="outline"
                            className="border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/20 text-left justify-start h-auto p-3 bg-transparent"
                            onClick={() => setInput("What if we discovered a way to communicate faster than light?")}
                          >
                            📡 What if we could communicate faster than light?
                          </Button>
                          <Button
                            variant="outline"
                            className="border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/20 text-left justify-start h-auto p-3 bg-transparent"
                            onClick={() => setInput("What if consciousness could exist without a physical brain?")}
                          >
                            🧠 What if consciousness didn't need a brain?
                          </Button>
                        </div>

                        <div className="mt-4 p-3 bg-gradient-to-r from-cyan-800/20 to-blue-800/20 rounded-lg border border-cyan-500/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Share2 className="h-4 w-4 text-cyan-400" />
                            <span className="text-cyan-400 font-semibold">Share This Discovery</span>
                          </div>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                            onClick={() => {
                              // Generate shareable card
                              const cardData = {
                                question: messages[index - 1]?.content,
                                answer: message.content.slice(0, 200) + "...",
                                timestamp: new Date().toLocaleDateString(),
                              }
                              console.log("Generating shareable card:", cardData)
                              // In a real app, this would generate and download/share an image
                              alert("Cosmic card generated! 🌌✨")
                            }}
                          >
                            Generate Cosmic Card
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Sample Scenarios */}
          {messages.length === 0 && (
            <Card className="bg-gradient-to-r from-blue-800/30 to-cyan-800/30 border-blue-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Zap className="h-5 w-5 text-cyan-400" />
                  Popular Scenarios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {whatIfScenarios.slice(0, 6).map((scenario, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/20 text-left justify-start h-auto p-3 bg-transparent"
                      onClick={() => setInput(scenario)}
                    >
                      {scenario}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
