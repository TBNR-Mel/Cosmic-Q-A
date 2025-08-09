"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Sparkles, Shuffle, Loader2, Map, Share2, Zap } from "lucide-react"
import { EnhancedResponseDisplay } from "@/components/enhanced-response-display"

const randomQuestions = [
  "What is the meaning of life in the context of an infinite universe?",
  "How did consciousness emerge from matter and why does it exist?",
  "What happens to information that falls into a black hole and why does it matter?",
  "Are we living in a simulation and how could we test this hypothesis?",
  "What existed before the Big Bang and what does 'before' even mean?",
  "Is time travel theoretically possible and what are the paradoxes?",
  "How many dimensions does our universe actually have and why can't we perceive them all?",
  "What is dark matter, why can't we detect it, and what does it do?",
  "Could there be life forms based on silicon instead of carbon and what would they be like?",
  "What would happen if the laws of physics were slightly different?",
]

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export default function AskPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)
    setInput("")

    try {
      const response = await fetch("/api/ask-universe", {
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
    } catch (error) {
      console.error("Error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "I apologize, but I'm having trouble connecting to the cosmic knowledge base right now. Please try again in a moment.",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * randomQuestions.length)
    const question = randomQuestions[randomIndex]
    setInput(question)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Universe
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-white">Ask the Universe</h1>
          <Link href="/what-if">
            <Button
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
            >
              What If Simulator
            </Button>
          </Link>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {/* Enhanced Question Input */}
          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-purple-400" />
                Ask the Universe Anything
              </CardTitle>
              <p className="text-gray-300 text-sm">
                Get comprehensive, multi-perspective answers with scientific depth, philosophical insights, and visual
                explanations
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask deep questions about existence, consciousness, physics, the cosmos, or anything that makes you wonder..."
                  className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-gray-400 min-h-[120px] text-lg"
                />
                <div className="flex gap-2">
                  <Button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        The Universe is thinking...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Ask the Universe
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={getRandomQuestion}
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                  >
                    <Shuffle className="mr-2 h-4 w-4" />
                    Random Deep Question
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Enhanced Messages */}
          <div className="space-y-6">
            {messages.map((message, index) => (
              <div key={message.id} className="space-y-4">
                {message.role === "user" ? (
                  <Card className="bg-purple-800/30 border-purple-500/30 ml-12 backdrop-blur-sm">
                    <CardContent className="pt-6">
                      <div className="text-purple-200">
                        <div className="font-semibold mb-2 text-purple-300 flex items-center gap-2">
                          <Zap className="h-4 w-4" />
                          Your Cosmic Question:
                        </div>
                        <div className="text-lg">{message.content}</div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="mr-12">
                    <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm mb-4">
                      <CardHeader>
                        <CardTitle className="text-purple-400 flex items-center gap-2">
                          <Sparkles className="h-5 w-5" />
                          The Universe Responds with Deep Wisdom
                        </CardTitle>
                      </CardHeader>
                    </Card>

                    <EnhancedResponseDisplay content={message.content} question={messages[index - 1]?.content || ""} />

                    {/* Curiosity Path for assistant messages */}
                    {index === messages.length - 1 && (
                      <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm mt-6">
                        <CardHeader>
                          <CardTitle className="text-white flex items-center gap-2">
                            <Map className="h-5 w-5 text-purple-400" />
                            Continue Your Cosmic Journey
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <Button
                              variant="outline"
                              className="border-purple-400/30 text-purple-300 hover:bg-purple-400/20 text-left justify-start h-auto p-4 bg-transparent"
                              onClick={() =>
                                setInput("How does quantum mechanics relate to consciousness and free will?")
                              }
                            >
                              🔬 How does quantum mechanics relate to consciousness?
                            </Button>
                            <Button
                              variant="outline"
                              className="border-purple-400/30 text-purple-300 hover:bg-purple-400/20 text-left justify-start h-auto p-4 bg-transparent"
                              onClick={() =>
                                setInput(
                                  "What is the relationship between entropy, time, and the heat death of the universe?",
                                )
                              }
                            >
                              ⏳ What connects entropy, time, and cosmic death?
                            </Button>
                            <Button
                              variant="outline"
                              className="border-purple-400/30 text-purple-300 hover:bg-purple-400/20 text-left justify-start h-auto p-4 bg-transparent"
                              onClick={() =>
                                setInput("Could there be forms of life and intelligence we haven't even imagined yet?")
                              }
                            >
                              👽 What forms of life haven't we imagined?
                            </Button>
                            <Button
                              variant="outline"
                              className="border-purple-400/30 text-purple-300 hover:bg-purple-400/20 text-left justify-start h-auto p-4 bg-transparent"
                              onClick={() =>
                                setInput("What would it truly mean if we proved we're living in a simulation?")
                              }
                            >
                              💻 What if we proved we're in a simulation?
                            </Button>
                          </div>

                          <div className="mt-6 p-4 bg-gradient-to-r from-purple-800/20 to-pink-800/20 rounded-lg border border-purple-500/20">
                            <div className="flex items-center gap-2 mb-3">
                              <Share2 className="h-4 w-4 text-purple-400" />
                              <span className="text-purple-400 font-semibold">Share This Cosmic Wisdom</span>
                            </div>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                              onClick={() => {
                                const cardData = {
                                  question: messages[index - 1]?.content,
                                  answer: message.content.slice(0, 300) + "...",
                                  timestamp: new Date().toLocaleDateString(),
                                }
                                console.log("Generating shareable card:", cardData)
                                alert("Cosmic wisdom card generated! ✨🌌 Ready to inspire others!")
                              }}
                            >
                              Generate Wisdom Card
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced Question of the Day */}
          {messages.length === 0 && (
            <Card className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 border-purple-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-yellow-400" />
                  Today's Deep Cosmic Question
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4 text-lg">
                  "What is the meaning of life in the context of an infinite universe, and how does consciousness fit
                  into the cosmic story?"
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  This question will receive a comprehensive analysis covering scientific foundations, philosophical
                  implications, and mind-expanding scenarios.
                </p>
                <Button
                  onClick={() => {
                    const question =
                      "What is the meaning of life in the context of an infinite universe, and how does consciousness fit into the cosmic story?"
                    setInput(question)
                  }}
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  Explore This Deep Question
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
