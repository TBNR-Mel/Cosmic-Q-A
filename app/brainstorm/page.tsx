"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { ArrowLeft, ThumbsUp, MessageCircle, Trophy, Plus, FlameIcon as Fire } from "lucide-react"

interface Scenario {
  id: string
  title: string
  description: string
  author: string
  votes: number
  comments: number
  isHot: boolean
}

const mockScenarios: Scenario[] = [
  {
    id: "1",
    title: "What if humans could hibernate like bears?",
    description:
      "Imagine if humans could enter a hibernation state for months at a time. How would this change society, space travel, and our biology?",
    author: "CosmicExplorer",
    votes: 247,
    comments: 34,
    isHot: true,
  },
  {
    id: "2",
    title: "What if Earth's magnetic field suddenly reversed?",
    description:
      "The magnetic poles flip overnight. What immediate and long-term effects would this have on technology, navigation, and life itself?",
    author: "QuantumThinker",
    votes: 189,
    comments: 28,
    isHot: true,
  },
  {
    id: "3",
    title: "What if we discovered plants that could think?",
    description:
      "Sentient plant life with complex communication networks. How would this change our understanding of consciousness and ethics?",
    author: "BioPhilosopher",
    votes: 156,
    comments: 19,
    isHot: false,
  },
]

export default function BrainstormPage() {
  const [scenarios, setScenarios] = useState<Scenario[]>(mockScenarios)
  const [newScenario, setNewScenario] = useState({ title: "", description: "" })
  const [showForm, setShowForm] = useState(false)
  const [sortBy, setSortBy] = useState<"hot" | "votes" | "recent">("hot")

  const submitScenario = () => {
    if (newScenario.title && newScenario.description) {
      const scenario: Scenario = {
        id: Date.now().toString(),
        title: newScenario.title,
        description: newScenario.description,
        author: "You",
        votes: 1,
        comments: 0,
        isHot: false,
      }
      setScenarios([scenario, ...scenarios])
      setNewScenario({ title: "", description: "" })
      setShowForm(false)
    }
  }

  const voteScenario = (id: string) => {
    setScenarios(scenarios.map((s) => (s.id === id ? { ...s, votes: s.votes + 1 } : s)))
  }

  const sortedScenarios = [...scenarios].sort((a, b) => {
    if (sortBy === "hot") return (b.isHot ? 1 : 0) - (a.isHot ? 1 : 0) || b.votes - a.votes
    if (sortBy === "votes") return b.votes - a.votes
    return Number.parseInt(b.id) - Number.parseInt(a.id) // recent
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Universe
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-white">Cosmic Brainstorm</h1>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Scenario
          </Button>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Leaderboard */}
          <Card className="bg-gradient-to-r from-yellow-800/30 to-orange-800/30 border-yellow-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-400" />
                Top Contributors This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="text-yellow-400">
                  <div className="text-2xl font-bold">🥇</div>
                  <div className="text-sm">CosmicExplorer</div>
                  <div className="text-xs text-gray-300">247 votes</div>
                </div>
                <div className="text-gray-300">
                  <div className="text-2xl font-bold">🥈</div>
                  <div className="text-sm">QuantumThinker</div>
                  <div className="text-xs text-gray-400">189 votes</div>
                </div>
                <div className="text-orange-400">
                  <div className="text-2xl font-bold">🥉</div>
                  <div className="text-sm">BioPhilosopher</div>
                  <div className="text-xs text-gray-400">156 votes</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Add Scenario Form */}
          {showForm && (
            <Card className="bg-slate-800/50 border-green-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Submit Your Cosmic Scenario</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="What if... (scenario title)"
                  value={newScenario.title}
                  onChange={(e) => setNewScenario({ ...newScenario, title: e.target.value })}
                  className="bg-slate-700/50 border-green-500/30 text-white"
                />
                <Textarea
                  placeholder="Describe your scenario in detail..."
                  value={newScenario.description}
                  onChange={(e) => setNewScenario({ ...newScenario, description: e.target.value })}
                  className="bg-slate-700/50 border-green-500/30 text-white min-h-[100px]"
                />
                <div className="flex gap-2">
                  <Button onClick={submitScenario} className="bg-green-600 hover:bg-green-700">
                    Submit Scenario
                  </Button>
                  <Button
                    onClick={() => setShowForm(false)}
                    variant="outline"
                    className="border-gray-400 text-gray-400"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Sort Options */}
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={sortBy === "hot" ? "default" : "outline"}
              onClick={() => setSortBy("hot")}
              className={sortBy === "hot" ? "bg-orange-600" : "border-orange-400 text-orange-400"}
            >
              <Fire className="mr-1 h-3 w-3" />
              Hot
            </Button>
            <Button
              size="sm"
              variant={sortBy === "votes" ? "default" : "outline"}
              onClick={() => setSortBy("votes")}
              className={sortBy === "votes" ? "bg-green-600" : "border-green-400 text-green-400"}
            >
              <ThumbsUp className="mr-1 h-3 w-3" />
              Top Voted
            </Button>
            <Button
              size="sm"
              variant={sortBy === "recent" ? "default" : "outline"}
              onClick={() => setSortBy("recent")}
              className={sortBy === "recent" ? "bg-blue-600" : "border-blue-400 text-blue-400"}
            >
              Recent
            </Button>
          </div>

          {/* Scenarios List */}
          <div className="space-y-4">
            {sortedScenarios.map((scenario) => (
              <Card key={scenario.id} className="bg-slate-800/50 border-green-500/20 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-white font-semibold">{scenario.title}</h3>
                        {scenario.isHot && (
                          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                            <Fire className="h-3 w-3" />
                            Hot
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 mb-3">{scenario.description}</p>
                      <div className="text-sm text-gray-400">by {scenario.author}</div>
                    </div>
                    <div className="flex flex-col items-center gap-2 ml-4">
                      <Button
                        size="sm"
                        onClick={() => voteScenario(scenario.id)}
                        className="bg-green-600 hover:bg-green-700 px-3"
                      >
                        <ThumbsUp className="h-4 w-4" />
                      </Button>
                      <span className="text-white font-semibold">{scenario.votes}</span>
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <MessageCircle className="h-3 w-3" />
                        {scenario.comments}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
