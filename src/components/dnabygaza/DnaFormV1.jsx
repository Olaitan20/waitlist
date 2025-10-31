'use client'
import React, { useState } from 'react'

export default function DnaFormV1() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState('idle') // removed TypeScript type annotation

  async function submit(e) {
    e.preventDefault()
    try {
      await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify({ name, phone }),
        headers: { 'Content-Type': 'application/json' },
      })
      setStatus('ok')
    } catch (err) {
      setStatus('err')
    }
  }

  return (
    <div className="relative">
      <form
        onSubmit={submit}
        className="p-6 bg-white/30 backdrop-blur-md space-y-4 text-center border border-white/10 rounded-xl"
      >
        <h2 className="text-lg font-semibold text-white tracking-wide">
          DNA Checkup
        </h2>

        {/* Name */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="w-full p-3 bg-white/10 border border-white/20 text-sm placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-[#FF0000] rounded-md"
          required
        />

        {/* Phone number (optional) */}
        <div className="text-left">
          <label className="text-xs text-gray-200 mb-1 block">
            Phone Number (optional)
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+234 801 234 5678"
            className="w-full p-3 bg-white/10 border border-white/20 text-sm placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-[#FF0000] rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-white text-black font-semibold rounded-md transition active:scale-[0.98]"
        >
          Submit
        </button>

        {status === 'ok' && (
          <p className="text-green-300 text-xs animate-pulse mt-2">
            ✅ Thanks — we received it!
          </p>
        )}
        {status === 'err' && (
          <p className="text-red-400 text-xs animate-pulse mt-2">
            ⚠️ Something went wrong. Try again.
          </p>
        )}
      </form>
    </div>
  )
}
