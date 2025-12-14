'use client'

import { ArrowLeft, Upload } from 'lucide-react'

export default function RepostTask({ onBack }) {
  return (
    <div className="fixed inset-0 z-[100] text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/Rectangle40.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-4">
          <button onClick={onBack} aria-label="Go back">
            <ArrowLeft size={22} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-4 pb-40">
          <h1 className="text-2xl font-bold leading-tight">
            Tasks <br /> Repost The Flyer
          </h1>

          {/* Card */}
          <div className="mt-6 border border-white/30 p-4 space-y-4">
            <span className="inline-block bg-[#FED45C] text-black text-xs font-bold px-3 py-1">
              Instruction:
            </span>

            <p className="text-[13px] text-white/90 leading-relaxed">
              Repost the official giveaway flyer on your story or feed.
              Tag <span className="font-semibold">@clubdnabygaza</span>
            </p>

            {/* Link input */}
            <input
              type="text"
              placeholder="Paste link to post/story"
              className="w-full bg-transparent border border-[#FED45C] px-3 py-3 text-[12px] outline-none"
            />

            {/* Upload box */}
            <label className="block border border-[#FED45C] h-[140px] cursor-pointer">
              <input type="file" hidden accept="image/png,image/jpeg" />
              <div className="h-full flex flex-col items-center justify-center text-center gap-2">
                <Upload size={22} />
                <p className="text-[12px]">
                  Click to upload or drag and drop
                </p>
                <p className="text-[10px] text-white/60">PNG or JPG</p>
              </div>
            </label>

            <p className="text-[11px] text-white/60">Optional*</p>

            {/* Checkbox */}
            <label className="flex items-start gap-3 text-[12px]">
              <input type="checkbox" className="mt-1" />
              <span>
                I confirm i reposted and tagged correctly
              </span>
            </label>
          </div>
        </div>

        {/* Floating CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-20 px-4 pb-6">
          <button className="w-full bg-[#FED45C] text-black font-semibold py-4">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}
