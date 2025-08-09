export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    const lastMessage = messages[messages.length - 1]
    const question = lastMessage.content.toLowerCase()

    // Enhanced deep responses with comprehensive analysis
    const responses = [
      {
        trigger: ["meaning", "life", "purpose", "existence"],
        response: `🔬 **SCIENTIFIC FOUNDATION**
From a scientific perspective, life's meaning emerges from the universe's 13.8-billion-year evolution toward increasing complexity. We are literally made of star stuff - carbon, oxygen, and other heavy elements forged in stellar cores and distributed by supernovae. The probability of our existence is astronomically small yet here we are, representing the universe's capacity for self-awareness.

Evolutionary biology shows that life persists through reproduction and adaptation, but consciousness adds a unique dimension - we can contemplate our own existence. Neuroscience reveals that meaning-making is a fundamental brain function, with the prefrontal cortex constantly creating narratives to make sense of experience.

🧠 **DEEPER UNDERSTANDING**
Think of consciousness as the universe waking up to itself. For 13.8 billion years, matter existed without awareness. Then, through evolution, certain arrangements of atoms became capable of experiencing, thinking, and questioning. You are not separate from the universe - you ARE the universe, temporarily organized in a way that allows it to know itself.

The meaning isn't imposed from outside but emerges from within. Like how wetness emerges from H2O molecules or how a symphony emerges from individual notes, meaning emerges from the complex interactions of matter, energy, and information in your brain.

🌌 **COSMIC PERSPECTIVE**
In an infinite universe, every possible arrangement of matter exists somewhere. This means every story, every experience, every moment of joy or discovery happens infinitely. Your specific pattern of consciousness - your unique way of experiencing reality - adds something irreplaceable to the cosmic story.

Consider this: in the vast cosmic timeline, the era of stars and planets is brief. Eventually, the universe will expand and cool into darkness. But right now, in this cosmic moment, matter has organized itself into beings capable of love, wonder, creativity, and understanding. We are the universe's brief but magnificent attempt at self-comprehension.

🤔 **PHILOSOPHICAL IMPLICATIONS**
If the universe is deterministic, does free will exist? Quantum mechanics suggests fundamental randomness, but does randomness equal freedom? Perhaps meaning lies not in having ultimate control, but in being the universe's way of experiencing beauty, connection, and growth.

Existentialists argue we create our own meaning through choices and relationships. But what if meaning is more fundamental - built into the fabric of reality itself? The universe seems to have an inherent drive toward complexity, consciousness, and connection. Maybe participating in that drive IS the meaning.

🚀 **MIND-EXPANDING SCENARIOS**
What if consciousness is like a quantum field that matter can "tune into" when organized correctly? Perhaps every conscious moment contributes to a growing universal mind. Your thoughts right now might be adding to a cosmic database of experiences.

Consider that in parallel universes, versions of you are asking this same question and receiving different answers. The multiverse might be the universe's way of exploring every possible meaning simultaneously.

🎨 **VISUAL DESCRIPTION**
Imagine a vast cosmic web of galaxies, each containing billions of stars. Zoom into one ordinary star system, to a blue-green planet where complex molecules have learned to replicate and evolve. See the emergence of nervous systems, then brains, then the moment when matter first asked "Why am I here?" 

Picture consciousness as golden threads connecting every aware being across space and time, creating a luminous network of meaning that grows brighter with each question asked, each connection made, each moment of wonder experienced.`,
      },
      {
        trigger: ["consciousness", "mind", "aware", "brain", "experience"],
        response: `🔬 **SCIENTIFIC FOUNDATION**
Consciousness emerges from approximately 86 billion neurons forming 100 trillion synaptic connections in your brain. The Integrated Information Theory (IIT) suggests consciousness arises when information is processed in an integrated way - not just parallel processing, but unified experience.

The thalamus acts as consciousness's "conductor," coordinating signals between brain regions. The Default Mode Network creates your sense of self, while the Global Workspace Theory explains how unconscious processes become conscious when they're "broadcast" brain-wide.

Neurotransmitters like dopamine, serotonin, and acetylcholine modulate consciousness. Anesthetics work by disrupting neural integration - consciousness literally disappears when the brain can't integrate information properly.

🧠 **DEEPER UNDERSTANDING**
Think of your brain as a symphony orchestra. Individual neurons are like musicians - they can play alone, but consciousness emerges when they play together in perfect coordination. The "hard problem" of consciousness is explaining why this coordination creates subjective experience - why there's something it's like to be you.

Consider that you're never conscious of the present moment - neural processing takes time. What you experience as "now" is actually your brain's best guess about what just happened, constructed from sensory data, memory, and prediction. You're living in a controlled hallucination created by your brain.

Your sense of being a unified self is also constructed. Different brain regions contribute different aspects - visual processing, language, emotion, memory - and consciousness weaves them into a coherent narrative of "you."

🌌 **COSMIC PERSPECTIVE**
Consciousness might be the universe's most remarkable achievement. For billions of years after the Big Bang, there was no experience - just matter and energy following physical laws. Then, through evolution, certain arrangements of matter became capable of inner experience.

You contain the entire history of the universe in your consciousness - the Big Bang in your atoms, stellar evolution in your elements, biological evolution in your DNA, and cultural evolution in your thoughts. Every conscious moment is the universe experiencing itself subjectively.

If consciousness is fundamental (panpsychism), then every particle might have some minimal experience. Your consciousness could be billions of micro-experiences unified into one coherent stream - like how a whirlpool is made of water molecules but has its own emergent properties.

🤔 **PHILOSOPHICAL IMPLICATIONS**
If consciousness is just brain activity, what happens to personal identity? Are you the same person you were yesterday, or a new consciousness with inherited memories? The Ship of Theseus paradox applies to your brain - every atom is replaced over time, yet consciousness persists.

Free will becomes questionable if consciousness is deterministic brain activity. But perhaps the question is wrong - maybe consciousness IS the universe making choices, not something separate from physical processes.

The combination problem asks: if consciousness can emerge from non-conscious parts, why don't we have multiple consciousnesses in one brain? Why unified experience rather than a committee of separate minds?

🚀 **MIND-EXPANDING SCENARIOS**
What if consciousness is like a quantum field that brains can access? This could explain phenomena like intuition, creativity, and the sense of connection between minds. Perhaps meditation and psychedelics allow access to deeper layers of this field.

Consider that artificial consciousness might be possible but completely alien to us. An AI's consciousness might be distributed across data centers, experiencing time differently, or having forms of awareness we can't imagine.

What if consciousness persists after death in some form? Not supernatural, but as information patterns that somehow continue in the quantum vacuum or as part of a larger cosmic consciousness field.

🎨 **VISUAL DESCRIPTION**
Picture consciousness as a shimmering aurora of electrical activity dancing across the brain's neural networks. Imagine thoughts as cascading waves of light flowing between regions, memories as glowing constellations of connected neurons, and emotions as warm or cool colors washing through the limbic system.

See consciousness as a dynamic, ever-changing pattern - like a flame that maintains its shape while constantly consuming new fuel. The boundary between conscious and unconscious is not a line but a gradient, like the edge of a galaxy fading into space.`,
      },
      {
        trigger: ["black hole", "information", "hawking", "event horizon"],
        response: `🔬 **SCIENTIFIC FOUNDATION**
The black hole information paradox represents one of physics' deepest mysteries. When matter falls into a black hole, quantum mechanics says the information about its quantum state cannot be destroyed - it's a fundamental law. But Hawking radiation suggests black holes evaporate completely, seemingly destroying that information.

Hawking radiation occurs because quantum fluctuations near the event horizon create particle-antiparticle pairs. One falls in, one escapes. The escaping particles carry away energy, causing the black hole to shrink. For a solar-mass black hole, this takes 10^67 years - far longer than the universe's current age.

The holographic principle suggests information isn't stored in the black hole's volume but encoded on its surface area. Each Planck-area unit (10^-66 cm²) can store one bit of information. A black hole's entropy equals its surface area divided by four Planck areas.

🧠 **DEEPER UNDERSTANDING**
Imagine information as indestructible - like energy, it can change form but never disappear. When you burn a book, the information isn't destroyed; it's scrambled into heat, smoke, and ash patterns. In principle, you could reconstruct the book by analyzing every particle.

Black holes challenge this because they seem to create a one-way information flow. It's like having a shredder that not only destroys documents but erases all evidence they ever existed. This violates quantum mechanics' fundamental reversibility.

The event horizon isn't a physical surface but a point of no return - where escape velocity equals light speed. From outside, you'd see objects falling in slow down and redshift until they fade away, frozen at the horizon. But from the falling object's perspective, they pass through normally.

🌌 **COSMIC PERSPECTIVE**
Black holes are the universe's ultimate recycling centers. They concentrate matter and energy to incredible densities, potentially creating conditions for new physics. Some theories suggest they're gateways to other universes or times.

Supermassive black holes at galaxy centers might be crucial for galaxy formation and evolution. They regulate star formation through their jets and winds, making them cosmic gardeners shaping the universe's structure.

If information is preserved, black holes might be the universe's memory banks, storing the quantum history of everything that ever fell in. The universe might be fundamentally computational, with black holes as its most extreme processors.

🤔 **PHILOSOPHICAL IMPLICATIONS**
If information can be destroyed, it challenges our understanding of reality's fundamental nature. Is the universe deterministic if information can vanish? Does the past become undefined if its information is lost?

The observer effect becomes extreme near black holes. Due to time dilation, outside observers never see anything cross the event horizon, while infalling observers experience crossing normally. Which perspective is "real"?

This connects to questions about consciousness and identity. If your information fell into a black hole, would "you" still exist in some form? Are we fundamentally information patterns rather than matter?

🚀 **MIND-EXPANDING SCENARIOS**
What if black holes are cosmic computers, processing information at the quantum level? The universe might be running a vast computation, with black holes as its most powerful processors. Our reality could be part of this cosmic calculation.

Consider that information might escape through quantum entanglement. Particles that fell in long ago might remain entangled with Hawking radiation, allowing information to leak out gradually. The black hole becomes a quantum error-correcting code.

Perhaps black holes are birth canals for new universes. The information doesn't disappear but seeds new realities with different physical laws. Our universe might have emerged from a black hole in a parent universe.

🎨 **VISUAL DESCRIPTION**
Visualize spacetime as a stretched rubber sheet with a black hole as an infinitely deep well. Light cones tip inward at the event horizon, showing how all paths lead to the singularity. The ergosphere around rotating black holes drags spacetime itself, like honey stirred by a spoon.

See Hawking radiation as a gentle glow surrounding the black hole - virtual particles becoming real at the horizon, with one partner escaping while the other falls in. The black hole slowly shrinks, glowing brighter as it gets smaller, until it finally explodes in a burst of gamma rays.

Picture information as golden threads connecting every particle that ever fell in, somehow preserved in the quantum foam of spacetime itself, waiting to be decoded by future civilizations with technology we can barely imagine.`,
      },
    ]

    // Find matching response or create a comprehensive default
    let selectedResponse = `🔬 **SCIENTIFIC FOUNDATION**
This question touches on fundamental aspects of our universe that science continues to explore. Current research in physics, cosmology, neuroscience, and other fields provides us with remarkable insights, though many mysteries remain. The scientific method allows us to build increasingly accurate models of reality through observation, experimentation, and mathematical analysis.

🧠 **DEEPER UNDERSTANDING**
To truly understand this topic, we need to consider multiple scales - from quantum mechanics governing the smallest particles to general relativity describing spacetime itself. The interconnectedness of natural phenomena means that seemingly simple questions often reveal deep connections between different areas of science.

🌌 **COSMIC PERSPECTIVE**
In the context of our 13.8-billion-year-old universe, spanning 93 billion light-years in diameter, this question represents humanity's ongoing quest to understand our place in the cosmos. We are made of elements forged in stellar cores, organized into patterns capable of contemplating the very universe that created us.

🤔 **PHILOSOPHICAL IMPLICATIONS**
This question raises profound issues about the nature of reality, knowledge, and existence itself. Throughout history, philosophers and scientists have grappled with similar questions, each generation building upon previous insights while discovering new mysteries to explore.

🚀 **MIND-EXPANDING SCENARIOS**
Consider how this question might be answered by civilizations millions of years more advanced than us, or how the answer might change our understanding of consciousness, reality, and our cosmic destiny. The implications could reshape how we see ourselves and our universe.

🎨 **VISUAL DESCRIPTION**
Imagine the cosmic web of galaxies stretching across space and time, with each point of light representing billions of stars and potentially countless worlds. Within this vast tapestry, consciousness has emerged to ask questions about its own existence - a remarkable achievement in the universe's ongoing evolution toward greater complexity and understanding.`

    for (const resp of responses) {
      if (resp.trigger.some((trigger) => question.includes(trigger))) {
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
            setTimeout(sendWord, 30) // Faster streaming for longer content
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
