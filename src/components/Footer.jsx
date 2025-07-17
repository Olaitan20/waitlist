"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "../app/data/index.jsx";
import Logo from "./shared/Logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="container mx-auto px-4 md:px-10 lg:px-0 pt-10 space-y-6 text-[13px] md:text-[15px]">
      {/* Social Icons for mobile only - above the line */}
      <div className="flex justify-center gap-4 xl:hidden">
        {socialLinks.map((link) => (
          <Link
            href={link.url}
            key={link.alt + "-mobile-footer"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#7140EB] transition-colors"
          >
            <Image
              src={link.src}
              width={50}
              height={50}
              alt={link.alt}
              className="size-8 transition-colors"
            />
          </Link>
        ))}
      </div>

      {/* Divider */}
      <hr className="bg-[#B698FF]" />

      {/* Logo + Copyright */}
      <div className="space-y-4 text-center md:text-center">
        <div className="flex justify-center xl:hidden">
          <Logo showText />
        </div>

        <div className="font-medium xl:hidden">
          ©{year} A.bio.Inc. <span className="">All rights reserved</span>
        </div>
      </div>

      {/* Terms + Cookie Policy */}
      <div className="flex justify-center xl:hidden gap-6 text-sm ">
        <Link href="/terms" className="hover:text-[#7140EB]">Terms</Link>
        <Link href="/policy" className="hover:text-[#7140EB]">Policy</Link>
      </div>

      {/* Desktop Footer Row (Logo, Icons, Copyright) */}
      <div className="hidden xl:flex justify-between items-center">
        <div className="text-sm">
          ©{year} A.bio.Inc. All rights reserved
        </div>
        <div className="flex gap-3">
            
          {socialLinks.map((link) => (
            <Link
              href={link.url}
              key={link.alt + "-desktop-footer"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7140EB] transition-colors"
            >
              <Image
                src={link.src}
                width={50}
                height={50}
                alt={link.alt}
                className="size-8 transition-colors"
              />
            </Link>
          ))}
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;


