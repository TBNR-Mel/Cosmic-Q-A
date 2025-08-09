"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Target, Trophy, Flame, Eye, EyeOff } from "lucide-react"

interface Challenge {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: "Easy" | "Medium" | "Hard"
}

const dailyChallenges: Challenge[] = [
  {
    id: "1",
    question: "What would happen if the Moon suddenly disappeared?",
    options: [
      "Earth's days would become 8 hours long",
      "Earth's days would become 6 hours long",
      "Earth's days would become 4 hours long",
      "Earth's rotation wouldn't change",
    ],
    correctAnswer: 0,
    explanation:
      "Without the Moon's gravitational drag (tidal friction), Earth would spin much faster. Our days would shrink from 24 hours to about 8 hours! The Moon has been gradually slowing Earth's rotation over billions of years.",
    difficulty: "Medium",
  },
  {
    id: "2",
    question: "If you could fold a piece of paper 50 times, how thick would it be?",
    options: [
      "About as tall as a building",
      "About as tall as a mountain",
      "About the distance to the Moon",
      "About the distance to the Sun",
    ],
    correctAnswer: 3,
    explanation:
      "Each fold doubles the thickness. Starting with 0.1mm paper: 2^50 × 0.1mm = about 112 million kilometers - roughly 3/4 the distance to the Sun! This demonstrates the incredible power of exponential growth.",
    difficulty: "Hard",
  },
]

export default function ChallengePage() {
  const [currentChallenge, setCurrentChallenge] = useState<Challenge>(dailyChallenges[0])
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [streak, setStreak] = useState(7)
  const [score, setScore] = useState(1250)
  const [hasAnswered, setHasAnswered] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    if (hasAnswered) return
    setSelectedAnswer(answerIndex)
  }

  const revealAnswer = () => {
    if (selectedAnswer === null) return

    setShowAnswer(true)
    setHasAnswered(true)

    if (selectedAnswer === currentChallenge.correctAnswer) {
      setStreak(streak + 1)
      setScore(
        score + (currentChallenge.difficulty === "Hard" ? 100 : currentChallenge.difficulty === "Medium" ? 75 : 50),
      )
    } else {
      setStreak(0)
    }
  }

  const nextChallenge = () => {
    const nextIndex = (dailyChallenges.indexOf(currentChallenge) + 1) % dailyChallenges.length
    setCurrentChallenge(dailyChallenges[nextIndex])
    setSelectedAnswer(null)
    setShowAnswer(false)
    setHasAnswered(false)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-400 border-green-400"
      case "Medium":
        return "text-yellow-400 border-yellow-400"
      case "Hard":
        return "text-red-400 border-red-400"
      default:
        return "text-gray-400 border-gray-400"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Universe
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-white">Daily Challenge</h1>
          <div className="text-right">
            <div className="text-yellow-400 font-bold">Score: {score.toLocaleString()}</div>
            <div className="text-orange-400 text-sm flex items-center gap-1">
              <Flame className="h-3 w-3" />
              {streak} day streak
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="bg-gradient-to-r from-yellow-800/30 to-orange-800/30 border-yellow-500/30 backdrop-blur-sm">
              <CardContent className="pt-6 text-center">
                <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{score.toLocaleString()}</div>
                <div className="text-sm text-gray-300">Total Score</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-800/30 to-red-800/30 border-orange-500/30 backdrop-blur-sm">
              <CardContent className="pt-6 text-center">
                <Flame className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{streak}</div>
                <div className="text-sm text-gray-300">Day Streak</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="pt-6 text-center">
                <Target className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">85%</div>
                <div className="text-sm text-gray-300">Accuracy</div>
              </CardContent>
            </Card>
          </div>

          {/* Challenge Card */}
          <Card className="bg-slate-800/50 border-yellow-500/20 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Today's Mind-Bender</CardTitle>
                <span
                  className={`px-3 py-1 rounded-full text-sm border ${getDifficultyColor(currentChallenge.difficulty)}`}
                >
                  {currentChallenge.difficulty}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-xl text-white font-medium">{currentChallenge.question}</div>

              <div className="space-y-3">
                {currentChallenge.options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    variant="outline"
                    className={`w-full text-left justify-start h-auto p-4 ${
                      selectedAnswer === index
                        ? "border-yellow-400 bg-yellow-400/20 text-yellow-300"
                        : showAnswer && index === currentChallenge.correctAnswer
                          ? "border-green-400 bg-green-400/20 text-green-300"
                          : showAnswer && selectedAnswer === index && index !== currentChallenge.correctAnswer
                            ? "border-red-400 bg-red-400/20 text-red-300"
                            : "border-gray-600 text-gray-300 hover:border-yellow-400/50"
                    }`}
                    disabled={hasAnswered}
                  >
                    <span className="mr-3 font-bold">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </Button>
                ))}
              </div>

              {!showAnswer ? (
                <Button
                  onClick={revealAnswer}
                  disabled={selectedAnswer === null}
                  className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Reveal Answer
                </Button>
              ) : (
                <div className="space-y-4">
                  <Card className="bg-slate-700/50 border-blue-500/30">
                    <CardContent className="pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <EyeOff className="h-4 w-4 text-blue-400" />
                        <span className="text-blue-400 font-semibold">Explanation</span>
                      </div>
                      <p className="text-gray-200">{currentChallenge.explanation}</p>
                    </CardContent>
                  </Card>

                  {selectedAnswer === currentChallenge.correctAnswer ? (
                    <div className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                      <div className="text-2xl mb-2">🎉</div>
                      <div className="text-green-400 font-bold">Correct! Great cosmic intuition!</div>
                      <div className="text-sm text-gray-300">
                        +
                        {currentChallenge.difficulty === "Hard"
                          ? 100
                          : currentChallenge.difficulty === "Medium"
                            ? 75
                            : 50}{" "}
                        points
                      </div>
                    </div>
                  ) : (
                    <div className="text-center p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                      <div className="text-2xl mb-2">🤔</div>
                      <div className="text-red-400 font-bold">Not quite! The universe is tricky.</div>
                      <div className="text-sm text-gray-300">Streak reset - try again tomorrow!</div>
                    </div>
                  )}

                  <Button
                    onClick={nextChallenge}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    Next Challenge
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Coming Tomorrow */}
          <Card className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 border-purple-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Coming Tomorrow</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                🌌 "What would happen if we could see all electromagnetic wavelengths with our eyes?"
              </p>
              <p className="text-sm text-gray-400 mt-2">Come back tomorrow for another mind-bending challenge!</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
