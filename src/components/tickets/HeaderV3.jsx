import Image from "next/image"
import React from "react"
import profilePic from "../../../public/dec.logo.jpg"

export default function HeaderV3() {
  return (
    <section className="px-4 py-4 bg-white space-y-2">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* ✅ Profile image */}
         <div className="overflow-hidden rounded-full w-[70px] h-[70px] border-2 border-gray-200">
  <Image
    src={profilePic}
    alt="DNA by Gaza profile"
    width={70}
    height={70}
    className="object-cover w-full h-full"
    priority
  />
</div>

          <div>
            <div className="text-[18px] mb-2 leading-tight text-black font-bold">
              Dettycember Rave
            </div>
            <div className="text-[12px] font-thin text-gray-500">@Dettycember</div>
          </div>
        </div>
      </header>
    </section>
  )
}
