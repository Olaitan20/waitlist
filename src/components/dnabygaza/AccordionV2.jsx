'use client'
import { useRef, useLayoutEffect } from 'react'

export default function AccordionV2({ title, items, isOpen, onToggle }) {
  const ref = useRef(null)
  const height = ref.current?.scrollHeight || 0

  return (
    <div className="overflow-hidden border border-white/10 mb-4 backdrop-blur-sm">
      {/* Header */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center px-4 py-2 bg-white/30 transition-all duration-300"
      >
        <span className="text-[14px] font-semibolduppercase text-white">
          {title}
        </span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </button>

      {/* Content */}
      <div
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out bg-[#500019]"
        style={{ maxHeight: isOpen ? `${height}px` : '0' }}
      >
        <div ref={ref} className="p-4 space-y-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center px-4 py-3 transition-all"
            >
              <span className="text-sm text-white">{item.name}</span>
              <span className="text-[#FFD700] font-semibold text-sm">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

