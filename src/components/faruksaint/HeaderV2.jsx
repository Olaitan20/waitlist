import Image from "next/image"
import React from "react"
import profilePic from "../../../public/lala.jpg"

export default function HeaderV2() {
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
              Mr A
            </div>
            <div className="text-[12px] font-thin text-gray-500">@faruksaint</div>
          </div>
        </div>
      </header>

      <p className="text-[14px] font-medium text-black leading-5">
        🅰 Polymath
      </p>

      {/* ✅ Compact location pill with pin icon */}
<a
  href="https://maps.app.goo.gl/Dor99She1GMEJzh7A"
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
  <span>Akoka, Lagos</span>
</a>

    </section>
  )
}
