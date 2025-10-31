'use client'

import { useState, useRef, useLayoutEffect } from 'react'

export default function AccordionV2({ title, items }) {
  const ref = useRef(null)
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    if (ref.current) setHeight(ref.current.scrollHeight)
  }, [open])

  return (
    <div className="overflow-hidden border border-white/10 mb-4 backdrop-blur-sm">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex justify-between items-center px-4 py-2 bg-white/30 transition-all duration-300"
      >
        <span className="text-[14px] font-medium uppercase">{title}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </button>

      {/* Content */}
      <div
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out bg-[#500019]"
        style={{ maxHeight: open ? `${height}px` : '0' }}
      >
        <div ref={ref} className="p-4 space-y-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center px-4 py-3 border border-white/10 transition-all"
            >
              <span className="text-sm">{item.name}</span>
              <span className="text-[#FFD700] font-semibold text-sm">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
