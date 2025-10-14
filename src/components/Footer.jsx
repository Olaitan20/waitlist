"use client";

import Link from "next/link";
import { FaInstagram, FaTiktok, FaPinterest, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#331400] text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <img
                src="/icons/logo2.svg"
                alt="Abio Logo"
                className="cursor-pointer w-28 md:w-32"
              />
            </Link>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold trial text-xl mb-4">Product</h3>
            <div className="flex flex-col space-y-4 font-thin text-[13px]">
              <Link href="#">Features</Link>
              <Link href="#">How it works</Link>
              <Link href="#">Setup</Link>
              <Link href="#">FAQ</Link>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold trial text-xl mb-4">Legal</h3>
            <div className="flex flex-col space-y-4 font-thin text-[13px]">
              <Link href="#">Terms of Service</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Community Guidelines</Link>
              <Link href="#">Cookie Policy</Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#FED45C] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm mb-4 md:mb-0">
              © {currentYear} A.Bio site. One Link Endless Connections
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 text-lg">
              <a
                href="https://www.instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-800 p-2  hover:bg-[#E4405F] transition-all"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-800 p-2  hover:bg-black transition-all"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.pinterest.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-800 p-2  hover:bg-[#E60023] transition-all"
              >
                <FaPinterest />
              </a>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-800 p-2  hover:bg-[#1DA1F2] transition-all"
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



