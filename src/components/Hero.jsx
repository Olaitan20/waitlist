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
        opacity: 0.6,     // fades more clearly
        scale: 0.95,      // slight zoom out
        ease: "none",     // keeps it linear
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,    // scrubs BOTH directions
            markers: false, // turn on (true) if you want to debug
        },
        })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative -mb-24 md:min-h-screen overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50"
    >
      {/* Decorative curved element (BIG Logo) */}
      <div ref={logoLeftRef} className="absolute -top-12 left-0">
        <Image
          src="/icons/Vector.svg"
          alt="A logo"
          width={500}
          height={500}
          className="w-[180px] h-[180px] md:w-[250px] md:h-[250px]"
          priority
        />
      </div>

     

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center mt-8 justify-center min-h-[90vh] md:min-h-[100vh] px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1
            ref={titleRef}
            className="text-[40px] md:text-7xl trialheader  text-[#5D2D2B] -mb-2"
          >
            A New Era 
          </h1>
         
            <div className="relative inline-block">
            <h2
                ref={subtitleRef}
                className="text-5xl md:text-5xl trial2 font-light italic text-[#5D2D2B] mb-4"
            >
                Of Networking is Coming.
            </h2>
            <Image
                src="/icons/scribble.svg"
                alt="Text underline decoration"
                width={200}
                height={200}
                className="absolute left-1/2 md:left-100 -translate-x-1/2 top-full mt-[-0.5rem] w-[150px] h-auto"
            />
            </div>
          <p
            ref={paragraphRef}
            className="text-[15px]  text-center font-thin text-[#5D2D2B] mt-4 mb-6 max-w-xl mx-auto"
          >TIred of juggling multiple links and hoping someone types your name correctly? Abio.site
          is a new platform that combines the power of a link-in-bio tool with
          NFC tech for seamless/instant sharing.
          </p>

          {/* Waitlist Form */}
          <form
            
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
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#FED45C] shadow-[2px_2px_0px_0px_#000000] text-[#FF0000] px-4 py-2 font-semibold"
            >
              Waitlist
            </button>
          </form>
         
        </div>
      </div>
    </section>
  )
}

export default Hero


