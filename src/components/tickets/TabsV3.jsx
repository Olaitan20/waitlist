"use client"

import React from "react"

export default function TabsV3({ value, onChange }) {
  return (
    <div className="sticky top-0 z-50 bg-black/60 ">
      {/* ✅ Centered tabs */}
      <div className="flex justify-start gap-8 px-6 py-2">
        {/* Links Tab */}
        <button
          onClick={() => onChange("links")}
          className={`-pb-2 px-2 font-semibold transition-all relative ${
            value === "links"
              ? "text-gray-900"
              : "text-gray-400 hover:text-gray-700"
          }`}
        >
          Tickets
          {value === "links" && (
            <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#FF0000]" />
          )}
        </button>

        
      </div>
    </div>
  )
}


