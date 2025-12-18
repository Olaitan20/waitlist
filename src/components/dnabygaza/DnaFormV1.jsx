'use client'
import React, { useState } from 'react'

export default function DnaFormV1() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [dob, setDob] = useState('') // 👈 New state for Date of Birth
  const [status, setStatus] = useState('idle')

  async function submit(e) {
    e.preventDefault()
    try {
      const res = await fetch('https://sheetdb.io/api/v1/02p8r1kfblerq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [
            {
              name,
              phone,
              dob, // 👈 include DOB in the data sent to SheetDB
            },
          ],
        }),
      })

      if (res.ok) {
        setStatus('ok')
        setName('')
        setPhone('')
        setDob('')
      } else {
        setStatus('err')
      }
    } catch (err) {
      console.error(err)
      setStatus('err')
    }
  }

  return (
    <div className="relative">
      <form
        onSubmit={submit}
        className="p-3 bg-[#000000]/35 backdrop-blur-md space-y-4 text-center border border-white/10"
      >
        <h2 className="text-lg font-semibold text-white tracking-wide">
          DNA Checkup
        </h2>

        {/* Name */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="w-full p-3 bg-white/10 border border-white/70 text-sm placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
          required
        />

        {/* DOB */}
        <div className="text-left">
          <label className="text-xs text-white mb-1 block">Date of Birth</label>
          <input
            type="number"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder='DD/MM'
            className="w-full p-3 bg-white/10 border border-white/70 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
            required
          />
        </div>

        {/* Phone number */}
        <div className="text-left">
          <label className="text-xs text-white mb-1 block">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+234"
            className="w-full p-3 bg-white/10 border border-white/70 text-sm placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-white text-black font-semibold transition active:scale-[0.98]"
        >
          Submit
        </button>

        {status === 'ok' && (
          <p className="text-green-300 text-xs animate-pulse mt-2">
            ✅ Thanks, we received it!
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


