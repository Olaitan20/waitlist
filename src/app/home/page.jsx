"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Head from "next/head";
import Form from "@/components/Form";
import Services from "@/components/Services";
import Image from "next/image";
import Footer from "@/components/Footer";
import Logo from "@/components/shared/Logo";

export default function Home() {
  const cloudTopLeftRef = useRef(null);
  const cloudBottomRightRef = useRef(null);
  const iconTopRightRef = useRef(null);
  const iconBottomLeftRef = useRef(null);
  const mainTextRef = useRef(null);
  const logoRef = useRef(null);
  const servicesRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Clouds
    gsap.fromTo(
      cloudTopLeftRef.current,
      { opacity: 0, y: -100 },
      { opacity: 0.3, y: 0, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      cloudBottomRightRef.current,
      { opacity: 0, y: 100 },
      { opacity: 0.3, y: 0, duration: 1.5, ease: "power3.out", delay: 0.3 }
    );

    // Icons
    gsap.fromTo(
      iconTopRightRef.current,
      { opacity: 0, x: 50 },
      { opacity: 0.7, x: 0, duration: 1.5, ease: "power3.out", delay: 0.4 }
    );

    gsap.fromTo(
      iconBottomLeftRef.current,
      { opacity: 0, x: -50 },
      { opacity: 0.7, x: 0, duration: 1.5, ease: "power3.out", delay: 0.6 }
    );

    // Logo
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    // Main text
    gsap.fromTo(
      mainTextRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.7 }
    );

    // Services
    gsap.fromTo(
      servicesRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 85%",
        },
      }
    );

    // Footer
    // gsap.fromTo(
    //   footerRef.current,
    //   { opacity: 0, y: 80 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 2,
    //     ease: "power3.out",
    //     scrollTrigger: {
    //       trigger: footerRef.current,
    //       start: "top 90%",
    //     },
    //   }
    // );
  }, []);

  return (
    <main className="relative w-full p-6 overflow-hidden flex flex-col items-center justify-center">
      {/* Cloud Gradient (Top Left) */}
          <div
        ref={cloudTopLeftRef}
        className="absolute -top-30 -left-30 z-10 size-[25rem] lg:size-[22rem] rounded-full bg-gradient-to-r from-[#7140EB] to-[#FB8E8E] opacity-30 blur-3xl"
      />
      {/* cloud */}
      <Image
        ref={iconTopRightRef}
        src="/icons/cloud.png"
        width={400}
        height={400}
        alt="Top layer icon"
        className="absolute hidden lg:flex opacity-30 -top-10 left-0 z-10 pointer-events-none"
      />


      {/* Opposite Icon (Top Right) */}
      <Image
        ref={iconTopRightRef}
        src="/icons/Layer.svg"
        width={200}
        height={200}
        alt="Top layer icon"
        className="absolute hidden lg:flex top-0 right-0 z-10 opacity-70 pointer-events-none lg:top-5"
      />

      {/* Cloud Gradient (Bottom Right) */}
      <div
        ref={cloudBottomRightRef}
        className="absolute bottom-50 right-0 size-[15rem] lg:size-[22rem] rounded-full bg-gradient-to-r from-[#7140EB] to-[#FB8E8E] opacity-30 blur-3xl"
      />
      {/* cloud */}
      <Image
        ref={iconTopRightRef}
        src="/icons/cloud.png"
        width={400}
        height={400}
        alt="Top layer icon"
        className="absolute hidden lg:flex opacity-10  bottom-55 -right-15 z-0 pointer-events-none mix-blend-screen"
      />

      {/* Opposite Icon (Bottom Left) */}
      <Image
        ref={iconBottomLeftRef}
        src="/icons/Layer.svg"
        width={200}
        height={200}
        alt="Bottom layer icon"
        className="hidden lg:flex absolute bottom-40 left-0 z-10 opacity-70 pointer-events-none"
      />

      {/* Logo */}
      <div ref={logoRef}>
        <Logo showText className=" hidden lg:flex my-6" />
      </div>

      {/* Main Text */}
      <div ref={mainTextRef} className="relative z-20 text-center">
        <p className="inline-flex items-center gap-2 border border-[#7E4FF3] text-[#7140EB] px-2 lg:px-4 py-1  text-[10px] lg:text-sm font-medium mb-6">
          🌍 Connecting the world
        </p>
        <h1 className="text-[30px] xl:text-[55px] leading-none capitalize text-[#000] font-[700] mb-6">
          The Amazing link <br /> For everything
        </h1>
        <p className="mb-6 max-w-xl w-full text-center text-gray-600 font-[300] text-[13px] lg:text-[18px]">
          We're getting ready to launch something exciting a smarter way to manage your online presence with custom links beautiful pages, and powerful features tailored just for you.
        </p>
        <Form />
      </div>

      {/* Services with scroll animation */}
      <div ref={servicesRef} className="w-full">
        <Services />
      </div>

      {/* Footer with scroll animation */}
      <div ref={footerRef} className="w-full">
        <Footer />
      </div>
    </main>
  );
}

