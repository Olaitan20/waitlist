import Image from "next/image"
import React from "react"
import profilePic from "../../../public/fabs.jpg"

export default function HeaderV3() {
  return (
    <section className="px-4 py-4 bg-white space-y-2">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* ✅ Profile image */}
          <Image
            src={profilePic}
            alt="ootn profile"
            width={70}
            height={70}
            className="rounded-full w-[70px] h-[70px] object-cover"
            priority
          />

          <div>
            <div className="text-[18px] leading-tight text-black font-bold">
              One Of Those Nights
            </div>
            <div className="text-[12px] font-thin text-gray-500">@ootn</div>
          </div>
        </div>
      </header>

      <p className="text-[10px] font-medium text-black leading-5">
        {/* Club Dna By Gaza- Where the music is always good and <br /> champagne is always cold. */}
      </p>

      {/* ✅ Compact location pill with pin icon */}
<a
  href="https://maps.app.goo.gl/DPNcMftaARxmkSwN6"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-1 px-2 py-1 border border-gray-200 text-gray-600 text-[10px] w-fit hover:bg-gray-100 transition"
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
    className="text-gray-600"
  >
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
  <span>Mecury, Lagos</span>
</a>

    </section>
  )
}
