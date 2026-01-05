'use client'
import React, { useState } from 'react'

export default function Forms() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
//   const [dob, setDob] = useState('') // 👈 New state for Date of Birth
  const [status, setStatus] = useState('idle')

  async function submit(e) {
    e.preventDefault()
    try {
      const res = await fetch('https://sheetdb.io/api/v1/lpvj7ygi5lctp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [
            {
              name,
              email,
            },
          ],
        }),
      })

      if (res.ok) {
        setStatus('ok')
        setName('')
        setEmail('')
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
        className="py-3 px-8 bg-[#000000]/35 backdrop-blur-md space-y-6 text-center border border-white/10"
      >
        <h2 className="text-lg capitalize font-semibold text-white tracking-wide">
          RSVP Now
        </h2>

        {/* Name */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="w-full p-3 bg-white/10 border border-white text-sm placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
          required
        />

      

        {/* emailr */}
        <div className="text-left">
          {/* <label className="text-xs text-white mb-1 block">Phone Number</label> */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 bg-white/10 border border-white text-sm placeholder-gray-300 text-white focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
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


