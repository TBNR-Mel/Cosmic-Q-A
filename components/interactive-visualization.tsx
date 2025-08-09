"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw } from "lucide-react"

interface VisualizationProps {
  scenario: string
  onParameterChange?: (params: any) => void
}

export function InteractiveVisualization({ scenario, onParameterChange }: VisualizationProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [parameters, setParameters] = useState({
    starMass: 1,
    planetDistance: 1,
    speed: 0.5,
    gravity: 1,
  })

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setTime((t) => t + 0.1)
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const resetSimulation = () => {
    setTime(0)
    setIsPlaying(false)
  }

  const updateParameter = (key: string, value: number[]) => {
    const newParams = { ...parameters, [key]: value[0] }
    setParameters(newParams)
    onParameterChange?.(newParams)
  }

  const renderVisualization = () => {
    if (scenario.toLowerCase().includes("two suns")) {
      return (
        <div className="relative w-full h-64 bg-gradient-to-b from-blue-900 to-black rounded-lg overflow-hidden">
          {/* Stars */}
          <div
            className="absolute w-8 h-8 bg-yellow-400 rounded-full shadow-lg"
            style={{
              left: `${30 + 20 * Math.cos(time * parameters.speed)}%`,
              top: `${40 + 10 * Math.sin(time * parameters.speed)}%`,
              boxShadow: "0 0 20px #fbbf24",
            }}
          />
          <div
            className="absolute w-6 h-6 bg-orange-400 rounded-full shadow-lg"
            style={{
              left: `${60 + 15 * Math.cos(time * parameters.speed * 1.5)}%`,
              top: `${50 + 8 * Math.sin(time * parameters.speed * 1.5)}%`,
              boxShadow: "0 0 15px #fb923c",
            }}
          />
          {/* Planet */}
          <div
            className="absolute w-4 h-4 bg-blue-500 rounded-full"
            style={{
              left: `${45 + parameters.planetDistance * 25 * Math.cos(time * parameters.speed * 0.3)}%`,
              top: `${45 + parameters.planetDistance * 15 * Math.sin(time * parameters.speed * 0.3)}%`,
            }}
          />
          {/* Orbit path */}
          <div
            className="absolute border border-gray-600 rounded-full opacity-30"
            style={{
              left: `${45 - parameters.planetDistance * 25}%`,
              top: `${45 - parameters.planetDistance * 15}%`,
              width: `${parameters.planetDistance * 50}%`,
              height: `${parameters.planetDistance * 30}%`,
            }}
          />
        </div>
      )
    }

    if (scenario.toLowerCase().includes("light speed")) {
      return (
        <div className="relative w-full h-64 bg-gradient-to-r from-black via-purple-900 to-black rounded-lg overflow-hidden">
          {/* Spaceship */}
          <div
            className="absolute w-6 h-3 bg-gray-300 rounded-full"
            style={{
              left: `${10 + ((time * parameters.speed * 10) % 80)}%`,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
          {/* Speed lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-0.5 bg-white opacity-60"
              style={{
                left: `${(i * 5 - time * parameters.speed * 50) % 100}%`,
                top: `${45 + Math.random() * 10}%`,
                width: `${2 + parameters.speed * 3}px`,
              }}
            />
          ))}
          {/* Time dilation effect */}
          <div className="absolute bottom-4 left-4 text-white text-sm">
            Time Dilation: {(1 / Math.sqrt(1 - parameters.speed * parameters.speed * 0.99)).toFixed(2)}x
          </div>
        </div>
      )
    }

    return (
      <div className="relative w-full h-64 bg-gradient-to-b from-purple-900 to-black rounded-lg flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-4xl mb-2">🌌</div>
          <div>Interactive visualization for:</div>
          <div className="font-semibold">{scenario}</div>
        </div>
      </div>
    )
  }

  return (
    <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          Interactive Simulation
          <div className="flex gap-2">
            <Button size="sm" onClick={() => setIsPlaying(!isPlaying)} className="bg-blue-600 hover:bg-blue-700">
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button
              size="sm"
              onClick={resetSimulation}
              variant="outline"
              className="border-blue-400 text-blue-400 bg-transparent"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {renderVisualization()}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-white text-sm mb-2 block">Speed: {parameters.speed.toFixed(1)}</label>
            <Slider
              value={[parameters.speed]}
              onValueChange={(value) => updateParameter("speed", value)}
              max={1}
              min={0.1}
              step={0.1}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-white text-sm mb-2 block">Distance: {parameters.planetDistance.toFixed(1)}</label>
            <Slider
              value={[parameters.planetDistance]}
              onValueChange={(value) => updateParameter("planetDistance", value)}
              max={2}
              min={0.5}
              step={0.1}
              className="w-full"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
