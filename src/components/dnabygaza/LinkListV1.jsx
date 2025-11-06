import Image from "next/image";
import React from "react";

export default function LinkListV1() {
  const items = [
    {
      label: "TikTok",
      icon: "/icons/tiktok.svg",
      href: "https://www.tiktok.com/@clubdnalagos?_t=ZS-90MieW3lHCZ&_r=1",
    },
    {
      label: "Follow Our Instagram",
      icon: "/icons/instagram.svg",
      href: "https://www.instagram.com/clubdnalagos",
    },
    {
      label: "Reservation",
      icon: "/icons/whatsapp.svg",
      href: "https://wa.link/k7egap",
    },
    {
      label: "Add Us On Snapchat",
      icon: "/icons/snapchat.svg",
      href: "https://snapchat.com/t/finKlDlh",
    },
  ];

  return (
    <div className="space-y-4">
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-[13px] gap-3 bg-[#FFFFFF]/30 text-white px-4 py-3 font-semibold shadow-md active:scale-[0.98] transition-transform duration-150"
        >
          <div className="flex-shrink-0">
            <Image
              src={it.icon}
              alt={it.label}
              width={22}
              height={22}
              className="object-contain"
            />
          </div>
          <span className="truncate">{it.label}</span>
        </a>
      ))}

      {/* ✅ Website button */}
      <a
        href="https://dnabygaza.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-[13px] bg-[#FFFFFF]/30 text-white font-bold px-12 py-3 my-6 shadow-md active:scale-[0.97] transition-transform duration-150"
      >
        Checkout our website
      </a>
    </div>
  );
}

