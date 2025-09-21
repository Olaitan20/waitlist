"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Features = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])
  const starsRef = useRef([])
  cardsRef.current = []
  starsRef.current = []

  const addCardRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

  const addStarRef = (el) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el)
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
// title
gsap.fromTo(
  titleRef.current,
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    ease: "none", // keeps it linear
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 80%",
      end: "top 30%", // controls how long it animates
      scrub: true,    // allows both directions
    },
  }
)

// feature cards
gsap.fromTo(
  cardsRef.current,
  { opacity: 0, y: 60, scale: 0.95 },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    ease: "none",
    stagger: 0.2,
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 70%",
      end: "top 20%",
      scrub: true,   // smooth back-and-forth
    },
  }
)


      // decorative stars/icons (subtle float)
      starsRef.current.forEach((star, i) => {
        gsap.to(star, {
          rotation: i % 2 === 0 ? 15 : -15,
          yoyo: true,
          repeat: -1,
          duration: 3 + i,
          ease: "sine.inOut",
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-10 relative md:py-20 -mt-10 md:-mt-20 mb-4 md:mx-10 bg-[#FFDCE3]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* <Image
          src="/icons/Star 6.svg"
          alt=""
          height="50"
          width="50"
          
          className="hidden md:block md:w-30 absolute -top-6 md:top-0 -left-4 md:left-0 md:h-30"
        />
        <Image
          src="/icons/Star 6.svg"
          alt=""
          height="50"
          width="50"
          
          className="hidden md:block md:w-30 absolute -top-6 md:-top-2 rotate-90 -right-1 md:h-30"
        /> */}

        <h2
          ref={titleRef}
          className="text-center trialheader text-[40px] md:text-5xl font-bold mb-2 text-[#4B2C2C]"
        >
          Features
        </h2>

        <div className="flex gap-2 items-center justify-center mb-10">
          <div className="w-4 h-3 bg-[#D9D9D9]" />
          <div className="w-10 h-3 bg-[#FF854A]" />
          <div className="w-4 h-3 bg-[#D9D9D9]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {/* Dynamic Profile Feature - Large card */}
          <div
            ref={addCardRef}
            className="lg:row-span-2 bg-[#FF854A] px-8 pt-8 text-white relative overflow-hidden flex flex-col items-center"
          >
            <div className="relative z-10 text-left w-full">
              <h3 className="text-2xl trial2 italic mt-1">Dynamic</h3>
              <h3 className="text-4xl trial2 italic font-bold mt-2">Profile</h3>
              <p className="text-2xl trial2 italic mt-1">in One Link</p>
              {/* <p className="bg-white text-black text-sm inline-block px-3 py-1 italic font-semibold">
                one easy bio link.
              </p> */}
            </div>

            {/* Phone mockup */}
            <div className="relative w-full flex justify-center mt-6">
              <Image
                src="/icons/den.svg"
                alt="Phone"
                width={180}
                height={500}
                className="object-contain w-[180px]"
              />
            </div>

            {/* Decorative gear */}
            <Image
              src="/icons/gear1.svg"
              alt="gear"
              width={180}
              height={500}
              className="object-contain w-10 absolute top-4 right-4 bg-opacity-40"
            />
          </div>

          {/* Realtime Content Updates */}
          <div
            ref={addCardRef}
            className="bg-[#582C29] md:col-span-2 p-8 text-white relative overflow-hidden"
          >
            <h3 className="md:text-4xl text-2xl trial2 italic font-bold">Realtime</h3>
            <p className="text-[20px] md:text-[30px] trial2 italic opacity-90">Content Updates...</p>
            <div className="absolute bottom-4  right-0 space-y-2">
              <Image
                src="/icons/gear2.svg"
                alt="gear"
                width={180}
                height={100}
              />
            </div>
          </div>

          {/* Multiple Integration */}
          <div
            ref={addCardRef}
            className="bg-[#44A479] p-8 text-white relative overflow-hidden"
          >
            <h3 className="text-2xl md:text-4xl trial2 italic font-bold">Multiple</h3>
            <p className="text-[20px] md:text-[30px] trial2  italic opacity-90">Integration...</p>
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <div className="w-6 h-6 bg-white bg-opacity-30 rounded-full" />
              <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full" />
            </div>
          </div>

          {/* Analytics & Performance */}
          <div
            ref={addCardRef}
            className="bg-[#FFD05C] p-6 text-white relative overflow-hidden"
          >
            <h3 className="text-2xl md:text-4xl trial2 italic font-bold">Analytics</h3>
            <p className="text-[20px] md:text-[30px] trial2 italic ">& Engagement</p>
            <div className="absolute bottom-4 right-4">
              <div className="flex items-end space-x-1">
                <div className="w-2 h-6 bg-white bg-opacity-30 rounded-t" />
                <div className="w-2 h-8 bg-white bg-opacity-40 rounded-t" />
                <div className="w-2 h-4 bg-white bg-opacity-30 rounded-t" />
                <div className="w-2 h-10 bg-white bg-opacity-50 rounded-t" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features



