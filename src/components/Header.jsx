"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import Logo from "./shared/Logo"

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

  // Helpers to collect refs
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

  // Animate menu open/close
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

      // Animate hamburger into "X"
      tl.to(
        hamburgerLinesRef.current[0],
        { rotation: 45, y: 6, duration: 0.3, ease: "power2.out" },
        "-=0.4"
      )
        .to(
          hamburgerLinesRef.current[1],
          { opacity: 0, duration: 0.2, ease: "power2.out" },
          "-=0.3"
        )
        .to(
          hamburgerLinesRef.current[2],
          { rotation: -45, y: -6, duration: 0.3, ease: "power2.out" },
          "-=0.3"
        )
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
        {
          height: 0,
          opacity: 0,
          pointerEvents: "none",
          duration: 0.3,
          ease: "power2.in",
        },
        "-=0.1"
      )

      // Animate hamburger back
      tl.to(
        hamburgerLinesRef.current[0],
        { rotation: 0, y: 0, duration: 0.3, ease: "power2.out" },
        "-=0.3"
      )
        .to(
          hamburgerLinesRef.current[1],
          { opacity: 1, duration: 0.2, ease: "power2.out" },
          "-=0.2"
        )
        .to(
          hamburgerLinesRef.current[2],
          { rotation: 0, y: 0, duration: 0.3, ease: "power2.out" },
          "-=0.3"
        )
    }
  }, [menuOpen])

  // Handle link clicks (auto close)
  const handleLinkClick = () => setMenuOpen(false)

  // Reset refs when closing
  useEffect(() => {
    if (!menuOpen) menuItemsRef.current = []
  }, [menuOpen])

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-[#FED45C] shadow-md overflow-hidden">
        <div className="px-6 py-4 flex items-center justify-between">
          {/* Left: Logo + Nav */}
          <div className="flex items-center space-x-20">
            <div className="flex items-center space-x-2">
              <Logo width={40} height={40} />
              <span className="font-bold text-black text-lg">A.Bio</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-black hover:text-gray-700 transition-colors font-medium text-[15px] relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Button + Hamburger */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-red-500 text-white px-6 py-2 shadow-[4px_4px_0px_0px_#000000] hover:bg-red-600 hover:shadow-[2px_2px_0px_0px_#000000] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px]">
              Join Waitlist
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col space-y-1 p-2 relative z-10"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span ref={(el) => addToHamburgerRefs(el, 0)} className="w-6 h-0.5 bg-black origin-center"></span>
              <span ref={(el) => addToHamburgerRefs(el, 1)} className="w-6 h-0.5 bg-black origin-center"></span>
              <span ref={(el) => addToHamburgerRefs(el, 2)} className="w-6 h-0.5 bg-black origin-center"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu (always mounted, hidden with GSAP) */}
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-[#FED45C] border-t border-yellow-500 overflow-hidden"
          style={{ height: 0, opacity: 0, pointerEvents: "none" }}
        >
          <nav className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                ref={addToMenuRefs}
                href={link.href}
                className="text-black font-medium hover:text-red-600 transition-colors relative group"
                onClick={handleLinkClick}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <button
              ref={addToMenuRefs}
              className="mt-4 bg-red-500 text-white px-6 py-2 shadow-[4px_4px_0px_0px_#000000] hover:bg-red-600 hover:shadow-[2px_2px_0px_0px_#000000] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] self-start"
              onClick={handleLinkClick}
            >
              Join Waitlist
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header



