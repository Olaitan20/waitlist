import React from 'react'
import { FaTiktok, FaInstagram, FaWhatsapp, FaSnapchatGhost } from 'react-icons/fa'

export default function LinkListV1() {
  const items = [
    {
      label: 'TikTok',
      icon: <FaTiktok size={22} color="#000000" />, // Black TikTok icon
      href: 'https://www.tiktok.com/@clubdnalagos?_t=ZS-90MieW3lHCZ&_r=1',
    },
    {
      label: 'Follow Our Instagram',
      icon: <FaInstagram size={22} color="#E1306C" />, // Instagram pink
      href: 'https://www.instagram.com/clubdnalagos',
    },
    {
      label: 'WhatsApp',
      icon: <FaWhatsapp size={22} color="#25D366" />, // WhatsApp green
      href: 'https://wa.link/k7egap',
    },
    {
      label: 'Add On Snapchat',
      icon: <FaSnapchatGhost size={22} color="#FFFC00" />, // Snapchat yellow
      href: 'https://snapchat.com/t/finKlDlh',
    },
  ]

  return (
    <div className="space-y-4">
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#FFFFFF]/30 text-white px-4 py-3 font-medium shadow-md active:scale-[0.98] transition-transform duration-150"
        >
          <div className="flex-shrink-0">{it.icon}</div>
          <span className="truncate">{it.label}</span>
        </a>
      ))}

      {/* ✅ Website button */}
      <a
        href="https://dnabygaza.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center bg-[#FFFFFF]/30 text-white font-bold py-3 my-6 shadow-md active:scale-[0.97] transition-transform duration-150"
      >
        Checkout our website
      </a>
    </div>
  )
}

