"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Head from "next/head";
// import Form from "@/components/Form";
import Services from "../components/Services";
import Image from "next/image";
import Footer from "../components/Footer";
import Logo from "../components/shared/Logo";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Faq from "../components/Faq";
import Waitlist from "../components/Waitlist";
import UseCases from "../components/UseCases";

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
    <section>
      <Header/>
      <Hero />
      <Feature />
      <Faq />
      <UseCases/>
      <Waitlist />
      <Footer />
    </section>
  );
}

