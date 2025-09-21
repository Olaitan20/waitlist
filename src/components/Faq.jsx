"use client"

import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const faqRefs = useRef([])
  faqRefs.current = []
  const answerRefs = useRef([])

  const faqData = [
    {
      question: "What is Abio.site?",
      answer:
        "Abio.site is a link-in-bio tool that lets you create a beautiful profile to showcase your social, contact, business, and other information. We seamlessly combine this with an NFC-enabled card, called an Acard, that allows for one-tap sharing of your profile.",
    },
    {
      question: "How does the NFC card work? ",
      answer:
        "The Acard is a contactless card that, when tapped on an NFC-enabled smartphone (both iOS and Android), instantly pulls up your personal link. This loads your dynamic Abio.site/yourname profile, where the person you're networking with can select and connect with your social media, portfolio, or other links",
    },
    {
      question: "How will I be notified when Abio is ready?",
      answer:
        "You will receive an email notification as soon as Abio.site is launched and ready for you to sign up and get your Acard.",
    },
    {
      question: "Is there a cost associated with joining the waitlist?",
      answer:
        "No, joining the waitlist is completely free!",
    },
  ]

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      // closing
      gsap.to(answerRefs.current[index], {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      })
      setOpenIndex(null)
    } else {
      // close any open item first
      if (openIndex !== null) {
        gsap.to(answerRefs.current[openIndex], {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        })
      }

      // open new one
      gsap.to(answerRefs.current[index], {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      })
      setOpenIndex(index)
    }
  }

  const addToFaqRefs = (el) => {
    if (el && !faqRefs.current.includes(el)) {
      faqRefs.current.push(el)
    }
  }

  const addToAnswerRefs = (el, index) => {
    if (el) {
      answerRefs.current[index] = el
    }
  }

  useEffect(() => {
  const ctx = gsap.context(() => {
    // Title fade in (scroll both ways)
    gsap.fromTo(
      titleRef.current,
      { opacity: 10, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%", // controls scroll distance
          scrub: true,    // active on scroll up & down
        },
      }
    )

    // FAQ cards stagger (scroll both ways)
    gsap.fromTo(
      faqRefs.current,
      { opacity: 10, y: 40 },
      {
        opacity: 79,
        y: 0,
        ease: "none",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 35%",
          scrub: true,
        },
      }
    )

    // Initialize answers hidden
    answerRefs.current.forEach((el) => {
      gsap.set(el, { height: 0, opacity:0 })
    })
  }, sectionRef)

  return () => ctx.revert()
}, [])


  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-pink-50 to-purple-50"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8 ">
          <h2
            ref={titleRef}
            className="text-[30px] md:text-5xl font-bold trialheader text-red-600 md:mb-4"
          >
            Got Questions ?
          </h2>
          {/* <p className="text-lg trial text-gray-600">
            Everything you need to know about A
          </p> */}
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              ref={addToFaqRefs}
              className="bg-[#FED45C] overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-yellow-400 transition-colors"
              >
                <span className="font-semibold text-gray-800">
                  {faq.question}
                </span>
                <span className="text-xl text-gray-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                ref={(el) => addToAnswerRefs(el, index)}
                className="px-6 pb-4 text-gray-700 text-[12px] leading-relaxed overflow-hidden"
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

