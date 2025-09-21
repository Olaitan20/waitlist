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
      question: "Do I need an app to use Abio?",
      answer:
        "No, Abio works directly in your browser. You can access and manage your bio link from any device without downloading an app.",
    },
    {
      question: "What is a linkinbio tool?",
      answer:
        "A linkinbio tool allows you to create a single link that houses multiple links, perfect for social media profiles where you can only add one clickable link.",
    },
    {
      question: "What kind of content can I put on my Abio profile?",
      answer:
        "You can add links to your social media, websites, portfolios, products, videos, music, and any other online content you want to showcase.",
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
      // Title fade in
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })

      // FAQ cards stagger
      gsap.from(faqRefs.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      })

      // Initialize answers hidden
      answerRefs.current.forEach((el) => {
        gsap.set(el, { height: 0, opacity: 0 })
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
                <span className="text-2xl text-gray-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                ref={(el) => addToAnswerRefs(el, index)}
                className="px-6 pb-4 text-gray-700 leading-relaxed overflow-hidden"
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

