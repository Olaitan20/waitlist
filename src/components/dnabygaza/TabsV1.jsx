'use client'

import React, { useRef, useEffect, useState } from "react"

export default function TabsV1({ value, onChange }) {
  const [underlineStyle, setUnderlineStyle] = useState({})
  const containerRef = useRef(null)

  // Update underline position on value change
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const activeButton = container.querySelector(`[data-tab="${value.toLowerCase()}"]`)
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton
      setUnderlineStyle({
        left: offsetLeft,
        width: offsetWidth,
      })
    }
  }, [value])

  return (
    <div className="top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 relative">
      <div ref={containerRef} className="flex justify-start gap-8 px-6 py-2 relative">
        {/* Links Tab */}
        <button
          data-tab="links"
          onClick={() => onChange("links")}
          className={`-pb-1 px-2 font-semibold transition-colors ${
            value === "links" ? "text-black" : "text-gray-400 hover:text-gray-700"
          }`}
        >
          Links
        </button>

        {/* Menu Tab */}
        <button
          data-tab="menu"
          onClick={() => onChange("menu")}
          className={`-pb-1 px-2 font-semibold transition-colors ${
            value === "menu" ? "text-black" : "text-gray-400 hover:text-gray-700"
          }`}
        >
          Menu
        </button>

        

        {/* Sliding Underline */}
        <span
          className="absolute bottom-0 h-[3px] bg-[#FF0000] transition-all duration-300 ease-in-out"
          style={{
            left: underlineStyle.left || 0,
            width: underlineStyle.width || 0,
          }}
        />
      </div>
    </div>
  )
}
