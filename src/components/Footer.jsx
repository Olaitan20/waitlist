"use client";

import Link from "next/link";
import { FaInstagram, FaTiktok, FaPinterest, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#331400] text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Brand & Legal Section */}
<div className="flex justify-between items-center gap-6 mb-6 w-full flex-nowrap">
  {/* Brand Section */}
  <div className="flex items-center justify-start">
    <Link href="/" className="inline-block">
      <img
        src="/icons/logo2.svg"
        alt="Abio Logo"
        className="cursor-pointer w-28 md:w-32"
      />
    </Link>
  </div>

  {/* Legal Links */}
  <div className="flex justify-end">
    <Link
      href="#"
      className="font-bold trial text-[16px] md:text-[20px] hover:underline whitespace-nowrap"
    >
      Privacy Policy
    </Link>
  </div>
</div>


        {/* Bottom Section */}
        <div className="border-t border-[#FED45C] pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white font-semibold text-[12px] text-center md:text-left">
              © {currentYear} abio.site — One Link, Endless Connections
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 text-lg">
              <a
                href="https://www.instagram.com/abio.site?igsh=MXhjYmtvOWlvbXBpeg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#fff] shadow-[1px_1px_0px_0px_#fff] p-2 hover:opacity-80 transition-all"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@abio.site?_t=ZS-90XaM2rHhp4&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#fff] shadow-[1px_1px_0px_0px_#fff] p-2 hover:opacity-80 transition-all"
              >
                <FaTiktok />
              </a>
              <a
                href="https://pin.it/4rk3x7b28"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#fff] shadow-[1px_1px_0px_0px_#fff] p-2 hover:opacity-80 transition-all"
              >
                <FaPinterest />
              </a>
              <a
                href="https://x.com/abioprofile?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#fff] shadow-[1px_1px_0px_0px_#fff] p-2 hover:opacity-80 transition-all"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




