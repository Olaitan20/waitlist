import Image from "next/image"
import React from "react"
import profilePic from "../../../public/logo.png"

export default function HeaderV1() {
  return (
    <section className="px-4 py-4 bg-white space-y-2">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* ✅ Profile image */}
          <Image
            src={profilePic}
            alt="DNA by Gaza profile"
            width={70}
            height={70}
            className="rounded-full object-cover"
            priority
          />

          <div>
            <div className="text-[18px] leading-tight text-black font-bold">
              DNA BY GAZA
            </div>
            <div className="text-[12px] font-thin text-gray-500">@dnabygaza</div>
          </div>
        </div>
      </header>

      <p className="text-[10px] font-medium text-black leading-none">
        Club Dna By Gaza- Where the music is always good and <br /> champagne is always cold.
      </p>

      {/* ✅ Compact location pill with pin icon */}
<a
  href="https://www.google.com/maps/place/62+Adetokunbo+Ademola+Street,+Victoria+Island,+Lagos+101241,+Lagos,+Nigeria/@6.4280563,3.4211123,17z/data=!3m1!4b1!4m5!3m4!1s0x103bf486fbc6f2b5:0x8e5f6f2c1e8e4e0!8m2!3d6.4280519!4d3.423301?hl=en"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-1 px-2 py-1 border border-gray-200 text-[#ececf5] text-[10px] w-fit hover:bg-gray-100 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-700"
  >
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
  <span>Victoria Island, Lagos</span>
</a>

    </section>
  )
}
