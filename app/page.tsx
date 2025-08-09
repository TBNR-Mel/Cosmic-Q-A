import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Zap, Globe, Users, Target, Map } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/starry-night-cosmos.png')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Ask the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Universe
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Explore the cosmos through interactive simulations, community brainstorms, and mind-bending daily
                challenges
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Link href="/ask">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white w-full h-16"
                >
                  <Sparkles className="mb-1 h-5 w-5" />
                  <span className="text-sm">Cosmic Q&A</span>
                </Button>
              </Link>
              <Link href="/what-if">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent w-full h-16"
                >
                  <Zap className="mb-1 h-5 w-5" />
                  <span className="text-sm">What If?</span>
                </Button>
              </Link>
              <Link href="/brainstorm">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white bg-transparent w-full h-16"
                >
                  <Users className="mb-1 h-5 w-5" />
                  <span className="text-sm">Brainstorm</span>
                </Button>
              </Link>
              <Link href="/challenge">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent w-full h-16"
                >
                  <Target className="mb-1 h-5 w-5" />
                  <span className="text-sm">Daily Challenge</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Globe className="h-6 w-6 text-purple-400" />
                Interactive Visuals
              </CardTitle>
              <CardDescription className="text-gray-300">Manipulate cosmic parameters in real-time</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300 text-sm">
              <ul className="space-y-1">
                <li>• Animated simulations</li>
                <li>• Parameter controls</li>
                <li>• Real-time physics</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-green-500/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Users className="h-6 w-6 text-green-400" />
                Community Hub
              </CardTitle>
              <CardDescription className="text-gray-300">Collaborate on cosmic mysteries</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300 text-sm">
              <ul className="space-y-1">
                <li>• Submit scenarios</li>
                <li>• Vote & comment</li>
                <li>• Leaderboards</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-yellow-500/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Target className="h-6 w-6 text-yellow-400" />
                Daily Challenges
              </CardTitle>
              <CardDescription className="text-gray-300">Test your cosmic intuition</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300 text-sm">
              <ul className="space-y-1">
                <li>• Guess outcomes</li>
                <li>• Reveal answers</li>
                <li>• Streak tracking</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-cyan-500/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Map className="h-6 w-6 text-cyan-400" />
                Curiosity Paths
              </CardTitle>
              <CardDescription className="text-gray-300">Follow endless discovery trails</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300 text-sm">
              <ul className="space-y-1">
                <li>• Related questions</li>
                <li>• Learning journeys</li>
                <li>• Shareable cards</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed top-4 right-4 z-50">
        <div className="flex gap-2">
          <Link href="/ask">
            <Button variant="ghost" className="text-white hover:bg-white/10 text-xs">
              Q&A
            </Button>
          </Link>
          <Link href="/what-if">
            <Button variant="ghost" className="text-white hover:bg-white/10 text-xs">
              What If?
            </Button>
          </Link>
          <Link href="/brainstorm">
            <Button variant="ghost" className="text-white hover:bg-white/10 text-xs">
              Community
            </Button>
          </Link>
          <Link href="/challenge">
            <Button variant="ghost" className="text-white hover:bg-white/10 text-xs">
              Challenge
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
