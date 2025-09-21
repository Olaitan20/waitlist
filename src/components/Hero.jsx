"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const [email, setEmail] = useState("")

  // refs for GSAP
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const paragraphRef = useRef(null)
  const formRef = useRef(null)
  const logoLeftRef = useRef(null)
  const logoRightRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // entrance animations
      gsap.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })

      gsap.from(subtitleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      })

      gsap.from(paragraphRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      })

      gsap.from(formRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.7,
      })

      gsap.from(logoLeftRef.current, {
        x: -150,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      })

      gsap.from(logoRightRef.current, {
        x: 150,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      })

      // scroll animation (fade out hero as user scrolls)
      gsap.to(sectionRef.current, {
        opacity: 0.8,
        scale: 0.97,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50"
    >
      {/* Decorative curved element (BIG Logo) */}
      <div ref={logoLeftRef} className="absolute top-0 left-0">
        <Image
          src="/icons/Vector.svg"
          alt="A logo"
          width={500}
          height={500}
          className="w-[200px] h-[200px] md:w-[250px] md:h-[250px]"
          priority
        />
      </div>

      <div ref={logoRightRef} className="absolute -bottom-8 right-0">
        <Image
          src="/icons/Vector1.svg"
          alt="A logo"
          width={500}
          height={500}
          className="w-[300px] h-[300px]"
          priority
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] md:min-h-[100vh] px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1
            ref={titleRef}
            className="text-[45px] md:text-7xl trialheader font-semibold text-[#5D2D2B] mb-2 md:mb-4"
          >
            A New Era 
          </h1>
          <h2
            ref={subtitleRef}
            className="text-3xl trial2 md:text-5xl trial font-light italic text-[#5D2D2B] mb-4"
          >
            of Networking is coming.
          </h2>

          <p
            ref={paragraphRef}
            className="text-[12px] text-center md:text-[16px] font-thin text-[#5D2D2B] mb-8 max-w-lg mx-auto"
          >Join a new meta where linkinbio tool meets NFC, abio.site is link-in bio tool 
            that lets you showcase your social, contact links all shared seamlessly 
            with Acard. One link, One card, Endless connections.
          </p>

          {/* Waitlist Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative w-full max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="w-full px-4 py-3 pr-36 border-2 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <button
              type="submit"
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#FED45C] shadow-[2px_2px_0px_0px_#000000] text-[#FF0000] px-4 py-2 font-semibold hover:bg-yellow-600 transition-colors"
            >
              Join waitlist
            </button>
          </form>
           <p
            ref={paragraphRef}
            className="text-[12px] text-center mt-4 md:text-[16px] font-thin text-[#5D2D2B] mb-8 max-w-lg mx-auto"
          >Be the first to know when we launch. Join the waitlist 
            and get exclusive early access.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero


