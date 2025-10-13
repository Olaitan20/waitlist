"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import Image from "next/image"
// import logo from "../public/icons/logo.png" 

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
  { href: "#waitlist", label: "Waitlist" },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const mobileMenuRef = useRef(null)
  const menuItemsRef = useRef([])
  const hamburgerLinesRef = useRef([])

  const addToMenuRefs = (el) => {
    if (el && !menuItemsRef.current.includes(el)) {
      menuItemsRef.current.push(el)
    }
  }

  const addToHamburgerRefs = (el, index) => {
    if (el) {
      hamburgerLinesRef.current[index] = el
    }
  }

  useEffect(() => {
    if (!mobileMenuRef.current) return

    if (menuOpen) {
      const tl = gsap.timeline()

      tl.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0, pointerEvents: "none" },
        { height: "auto", opacity: 1, pointerEvents: "auto", duration: 0.4, ease: "power2.out" }
      ).fromTo(
        menuItemsRef.current,
        { y: -20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.3, stagger: 0.1, ease: "back.out(1.2)" },
        "-=0.2"
      )

      tl.to(hamburgerLinesRef.current[0], { rotation: 45, y: 6, duration: 0.3, ease: "power2.out" }, "-=0.4")
        .to(hamburgerLinesRef.current[1], { opacity: 0, duration: 0.2, ease: "power2.out" }, "-=0.3")
        .to(hamburgerLinesRef.current[2], { rotation: -45, y: -6, duration: 0.3, ease: "power2.out" }, "-=0.3")
    } else {
      const tl = gsap.timeline()

      tl.to(menuItemsRef.current, {
        y: -20,
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
        stagger: 0.05,
        ease: "power2.in",
      }).to(
        mobileMenuRef.current,
        { height: 0, opacity: 0, pointerEvents: "none", duration: 0.3, ease: "power2.in" },
        "-=0.1"
      )

      tl.to(hamburgerLinesRef.current[0], { rotation: 0, y: 0, duration: 0.3, ease: "power2.out" }, "-=0.3")
        .to(hamburgerLinesRef.current[1], { opacity: 1, duration: 0.2, ease: "power2.out" }, "-=0.2")
        .to(hamburgerLinesRef.current[2], { rotation: 0, y: 0, duration: 0.3, ease: "power2.out" }, "-=0.3")
    }
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) menuItemsRef.current = []
  }, [menuOpen])

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-[#FED45C] shadow-md overflow-hidden">
        <div className="px-6 py-4 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center space-x-20">
            <Link href="/">
              <Image
                src="/icons/logo.svg"
                alt="Abio Logo"
                width={120}
                height={120}
                className="cursor-pointer"
                priority
              />
            </Link>
          </div>

          {/* Right: Waitlist Button */}
          <div className="flex items-center space-x-4">
            <button
              ref={addToMenuRefs}
              className="bg-red-500 text-white px-4 py-2 shadow-[4px_4px_0px_0px_#000000] hover:bg-red-600 hover:shadow-[2px_2px_0px_0px_#000000] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] self-start"
              onClick={handleLinkClick}
            >
              Waitlist
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header




