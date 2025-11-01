"use client"

import React from "react"

export default function TabsV1({ value, onChange }) {
  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="flex justify-center gap-12 px-3 py-2">
        {/* Links Tab */}
        <button
          onClick={() => onChange("links")}
          className={`pb- px-2 font-semibold transition-all relative ${
            value === "links"
              ? "text-gray-900"
              : "text-gray-400 hover:text-gray-700"
          }`}
        >
          Links
          {value === "links" && (
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF0000]" />
          )}
        </button>

        {/* Menu Tab */}
        <button
          onClick={() => onChange("menu")}
          className={`pb- px-2 font-semibold transition-all relative ${
            value === "menu"
              ? "text-gray-900"
              : "text-gray-400 hover:text-gray-700"
          }`}
        >
          Menu
          {value === "menu" && (
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF0000] " />
          )}
        </button>
      </div>
    </div>
  )
}
