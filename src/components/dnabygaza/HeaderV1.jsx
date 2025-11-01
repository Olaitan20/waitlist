import Image from "next/image"
import React from "react"
import profilePic from "../../../public/logo.png"

export default function HeaderV1() {
  return (
    <section className="px-4 py-4 bg-white space-y-4">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* ✅ Profile image */}
          <Image
            src={profilePic}
            alt="DNA by Gaza profile"
            width={80}
            height={80}
            className="rounded-full object-cover"
            priority
          />

          <div>
            <div className="text-[20px] leading-tight text-black font-bold">
              DNA BY GAZA
            </div>
            <div className="text-[14px] text-gray-500">@dnabygaza</div>
          </div>
        </div>
      </header>

      <p className="text-[13px] font-medium text-black leading-none">
        A vibrant nightlife destination located in the heart <br /> of Lagos, Nigeria.
      </p>

      {/* ✅ Compact location pill with pin icon */}
      <div className="inline-flex items-center gap-1 px-2 py-1 border border-[#989898] text-black text-[10px] w-fit shadow-sm">
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
      </div>
    </section>
  )
}
