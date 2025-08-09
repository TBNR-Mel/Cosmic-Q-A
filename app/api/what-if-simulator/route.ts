export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    const lastMessage = messages[messages.length - 1]
    const scenario = lastMessage.content.toLowerCase()

    // Enhanced physics-based responses with comprehensive analysis
    const responses = [
      {
        trigger: ["two suns", "binary star", "double sun"],
        response: `⚡ **IMMEDIATE EFFECTS**
Within hours of Earth entering a binary star system, dramatic temperature swings would begin. If both stars were Sun-sized and Earth orbited at 1.5 AU, surface temperatures could fluctuate between -40°C and 80°C depending on stellar positions. The complex gravitational dance would create chaotic seasons - some regions experiencing perpetual summer while others freeze.

Tidal forces would increase by 200-400%, causing ocean levels to vary by 10-15 meters. Coastal cities would flood twice daily. The atmosphere would experience violent convection currents as temperature gradients shift rapidly. Weather patterns would become completely unpredictable.

🔬 **PHYSICS DEEP DIVE**
In a P-type orbit (circumbinary), Earth would orbit both stars with a period determined by the combined mass: P² ∝ a³/(M₁ + M₂). For two solar masses at 1.5 AU separation, Earth's orbital period would be about 1.8 years. The gravitational potential energy varies as U = -GM₁m/r₁ - GM₂m/r₂, creating complex orbital mechanics.

Stellar radiation follows the inverse square law: F = L/(4πr²). With two sources, total flux = L₁/(4πr₁²) + L₂/(4πr₂²). When stars align, Earth receives maximum radiation; when opposite, minimum. This creates extreme seasonal variations unlike anything in our solar system.

The Roche limit becomes critical - if Earth ventures too close to either star, tidal forces would exceed gravitational binding: d = 2.44R₁(ρ₁/ρ₂)^(1/3), where R₁ is the star's radius and ρ represents densities.

🌍 **CASCADING CONSEQUENCES**
Within months, Earth's climate system would collapse. The jet streams, driven by temperature gradients, would become chaotic. Hurricanes and tornadoes would be constant as the atmosphere struggles to equilibrate rapidly changing heat inputs.

Plant life would face impossible challenges. Photosynthesis depends on consistent light cycles, but with two suns, some regions might have 40-hour days while others experience rapid day-night alternations. Most ecosystems would collapse within a year.

Ocean currents, driven by temperature and salinity differences, would become turbulent. The thermohaline circulation would break down, potentially triggering ice ages in some regions while others become uninhabitably hot.

🧮 **MATHEMATICAL ANALYSIS**
Energy balance equation: Ein = Eout becomes complex with two sources. Stefan-Boltzmann law: j = σT⁴ shows that small temperature changes create large energy differences. A 20°C increase means 1.3x more radiated energy.

Orbital stability requires the Hill sphere radius: rH = a(m/3M)^(1/3) to remain larger than Earth's radius. For our scenario: rH ≈ 0.01 AU = 1.5 million km. Earth's 6,371 km radius is safely within this, ensuring orbital stability.

Tidal heating from varying gravitational fields: dE/dt = (21/2)nGm²R⁵e²/a⁶, where e is orbital eccentricity. This could add significant internal heating, potentially triggering increased volcanism.

🌌 **COSMIC IMPLICATIONS**
This scenario reveals how finely tuned our solar system is for life. The "Goldilocks zone" becomes a complex, time-varying region rather than a stable band. Most binary systems would be hostile to life as we know it.

However, life might evolve differently. Organisms could develop rapid adaptation mechanisms, seasonal hibernation, or even photosynthetic systems optimized for variable light. Evolution would favor extreme flexibility over specialization.

The scenario also demonstrates how stellar evolution affects habitability. As stars age and change luminosity, the habitable zone shifts. In binary systems, this creates even more complex long-term challenges for life.

🎨 **VISUAL SIMULATION**
Picture skies painted with impossible colors - double sunrises where one sun appears orange-red while the other blazes white-hot. Shadows dance in complex patterns as two light sources create multiple, shifting shadow zones.

Landscapes shimmer with heat mirages as temperature gradients create optical distortions. The horizon wavers between brilliant illumination and deep twilight zones. At night, when both suns set, the sky might glow with aurora-like effects from charged particles trapped in Earth's magnetic field, now distorted by dual stellar winds.

Weather becomes a spectacular, terrifying display - massive storm systems with lightning that arcs between temperature zones, tornadoes that form and dissipate within hours, and cloud formations that spiral in impossible geometries as they're pulled by competing thermal currents.

🤯 **MIND-BENDING EXTRAS**
This scenario teaches us that habitability is incredibly fragile. The precise balance of forces that makes Earth livable - stable orbit, consistent energy input, predictable seasons - is rarer than we might think.

It also suggests that if we ever find life around binary stars, it would likely be radically different from Earth life. Such organisms might have evolved mechanisms we can't imagine - perhaps rapid genetic switching, extreme temperature tolerance, or even the ability to enter suspended animation during unfavorable stellar configurations.

The philosophical implication: our existence depends on cosmic accidents of incredible precision. The universe is vast and mostly hostile to life, making our blue oasis even more precious and remarkable.`,
      },
      {
        trigger: ["light speed", "relativistic", "near light", "speed of light"],
        response: `⚡ **IMMEDIATE EFFECTS**
At 99% light speed (0.99c = 296,794,533 m/s), time dilation becomes extreme. The Lorentz factor γ = 1/√(1-v²/c²) = 7.09, meaning time passes 7 times slower for you. A 1-year journey for you equals 7 years on Earth. Your mass approaches infinity, requiring infinite energy for further acceleration.

Length contraction shrinks everything in your direction of travel to 14% of its rest length. A 100-meter spaceship becomes 14 meters long to outside observers. From your perspective, the entire universe ahead compresses into a thin disk.

The Doppler effect becomes extreme. Light from stars ahead blue-shifts to dangerous gamma rays, while stars behind red-shift to radio waves. The cosmic microwave background radiation becomes a deadly forward beam of high-energy photons.

🔬 **PHYSICS DEEP DIVE**
Special relativity governs everything. The energy-momentum relation E² = (pc)² + (mc²)² shows that at 0.99c, your kinetic energy is 6.09mc² - over 6 times your rest mass energy. For a 70kg person, that's 3.8 × 10¹⁸ joules - equivalent to 100 billion tons of TNT.

The relativistic momentum p = γmv becomes enormous. At 0.99c, p = 7.09 × 70kg × 0.99c = 1.47 × 10¹¹ kg⋅m/s. This momentum makes course corrections nearly impossible - you become a cosmic bullet.

Acceleration becomes increasingly difficult. The force needed for constant proper acceleration a is F = γ³ma, where γ³ = 356 at 0.99c. To maintain 1g acceleration, you'd need 356 times more force than at rest.

🌍 **CASCADING CONSEQUENCES**
Communication with Earth becomes impossible due to extreme time dilation and Doppler effects. Radio signals you send are red-shifted to undetectable frequencies. Signals from Earth are blue-shifted to gamma rays that would destroy your equipment.

Your biological processes slow dramatically from Earth's perspective. Your heartbeat, neural activity, and cellular metabolism all run at 1/7th normal speed. You age 1 year while Earth ages 7.

The cosmic ray environment becomes lethal. Normally harmless particles become high-energy radiation due to your motion. The interstellar medium - mostly hydrogen atoms - becomes a deadly particle beam requiring massive shielding.

🧮 **MATHEMATICAL ANALYSIS**
Time dilation: Δt = γΔt₀ = 7.09 × 1 year = 7.09 years on Earth per year of your time.
Length contraction: L = L₀/γ = L₀/7.09 = 0.141L₀
Relativistic mass: m = γm₀ = 7.09m₀

Energy requirements are staggering. To accelerate 1000kg to 0.99c requires:
ΔE = (γ - 1)mc² = 6.09 × 1000kg × (3×10⁸)² = 5.48 × 10¹⁹ joules
This equals the total energy output of the Sun for 1.7 seconds, or 13 billion tons of matter converted to pure energy.

🌌 **COSMIC IMPLICATIONS**
At these speeds, you become a time traveler to the future. A round trip to Proxima Centauri (4.24 light-years) would take 8.5 years from Earth's perspective but only 1.2 years for you. You'd return to find Earth 7.3 years older than when you left.

This reveals the universe's fundamental asymmetry between space and time. Space can be traversed, but time flows in only one direction. High-speed travel is essentially one-way time travel to the future.

The scenario demonstrates why faster-than-light travel is impossible with conventional physics. As v approaches c, energy requirements approach infinity. The universe seems designed to prevent causality violations.

🎨 **VISUAL SIMULATION**
The universe ahead compresses into a brilliant blue-white ring of light - the "relativistic beaming" effect. Stars behind stretch into red trails. The cosmic microwave background becomes visible as a forward-pointing searchlight of blue-shifted radiation.

Space itself appears to bend around you as photons struggle to keep up with your incredible velocity. The normal star field disappears, replaced by a tunnel of light with a brilliant disk ahead and darkness behind.

Your spaceship's hull glows white-hot from impacts with interstellar hydrogen atoms, each collision releasing energy equivalent to a small bomb. The view through your windows shows a universe transformed - distances compressed, colors shifted, time itself flowing like thick honey.

🤯 **MIND-BENDING EXTRAS**
This scenario reveals that space and time are not separate but unified in spacetime. Your motion through space becomes motion through time. The faster you move through space, the slower you move through time.

It also shows that the universe has a built-in speed limit that's not arbitrary but fundamental to reality's structure. This limit connects space, time, matter, and energy in ways that prevent paradoxes and maintain causality.

Perhaps most profound: it suggests that consciousness itself might be relativistic. Your thoughts, memories, and experiences all slow down together, so you never notice the time dilation. Reality is always relative to the observer - there is no universal "now" or absolute reference frame.`,
      },
    ]

    // Find matching response or create comprehensive default
    let selectedResponse = `⚡ **IMMEDIATE EFFECTS**
This scenario would create immediate and dramatic changes to the fundamental systems that govern our reality. The initial moments would see cascading effects as natural laws and physical constants adjust to the new conditions, creating a chain reaction of consequences.

🔬 **PHYSICS DEEP DIVE**
The underlying physics involves complex interactions between fundamental forces, energy conservation laws, and the mathematical relationships that govern natural phenomena. Understanding this scenario requires analyzing how changes propagate through interconnected systems.

🌍 **CASCADING CONSEQUENCES**
Over time, these initial changes would ripple through biological, geological, and atmospheric systems. The interconnected nature of Earth's systems means that seemingly small changes can have profound long-term effects on climate, evolution, and the possibility of life itself.

🧮 **MATHEMATICAL ANALYSIS**
The mathematical relationships governing this scenario involve complex equations describing energy transfer, momentum conservation, and the statistical mechanics of large-scale systems. Precise calculations would require advanced modeling of multiple interacting variables.

🌌 **COSMIC IMPLICATIONS**
This scenario demonstrates the delicate balance of forces that make our universe habitable. It reveals how finely tuned the constants of physics are, and how different conditions might lead to entirely different forms of matter, energy, and potentially life.

🎨 **VISUAL SIMULATION**
The visual effects would be spectacular and alien, with familiar landscapes transformed by new physical laws. Colors, lighting, and the very appearance of matter and energy would change in ways that challenge our normal perception of reality.

🤯 **MIND-BENDING EXTRAS**
This thought experiment reveals deep truths about the nature of reality and our place in the cosmos. It shows how the universe's apparent stability masks an underlying complexity and interconnectedness that we're only beginning to understand.`

    for (const resp of responses) {
      if (resp.trigger.some((trigger) => scenario.includes(trigger))) {
        selectedResponse = resp.response
        break
      }
    }

    // Create a readable stream for the response
    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      start(controller) {
        const words = selectedResponse.split(" ")
        let index = 0

        const sendWord = () => {
          if (index < words.length) {
            const word = words[index] + (index < words.length - 1 ? " " : "")
            const chunk = `0:${JSON.stringify({ content: word })}\n`
            controller.enqueue(encoder.encode(chunk))
            index++
            setTimeout(sendWord, 25) // Faster streaming for physics content
          } else {
            controller.close()
          }
        }

        sendWord()
      },
    })

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "no-cache",
      },
    })
  } catch (error) {
    console.error("API Error:", error)
    return Response.json({ error: "Failed to process request" }, { status: 500 })
  }
}
