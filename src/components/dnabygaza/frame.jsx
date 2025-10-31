'use client'
import React, { useEffect, useState } from 'react'

export default function Frame({ children }) {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth <= 480)
    checkSize()
    window.addEventListener('resize', checkSize)
    return () => window.removeEventListener('resize', checkSize)
  }, [])

  if (!isMobile) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-black text-white text-center p-6">
        <div>
          <div className="text-lg font-bold mb-2">Mobile Only</div>
          <p className="text-sm text-gray-400">Please open DNA by Gaza on a mobile device.</p>
        </div>
      </div>
    )
  }

  return <div className="frame shadow-md">{children}</div>
}
