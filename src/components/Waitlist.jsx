"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "./shared/Logo";

gsap.registerPlugin(ScrollTrigger);

// Counter component with scroll-triggered animation
const Counter = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    const increment = end / (duration / 16); // ~60fps
    let frame;

    const animateCount = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(animateCount);
      } else {
        setCount(end);
        cancelAnimationFrame(frame);
      }
    };

    const trigger = ScrollTrigger.create({
      trigger: counterRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => requestAnimationFrame(animateCount),
    });

    return () => {
      cancelAnimationFrame(frame);
      trigger.kill();
    };
  }, [target, duration]);

  return (
    <span ref={counterRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);
  stepsRef.current = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Waitlist email submitted:", email);
  };

  const steps = [
    { icon: "📝", title: "Join Waitlist", description: "Sign up with your email" },
    { icon: "🔔", title: "Get Notified", description: "We'll let you know we launch" },
    { icon: "🚀", title: "Start Connecting", description: "Join A.bio and connect seamlessly" },
  ];

  const addToStepsRefs = (el) => {
    if (el && !stepsRef.current.includes(el)) {
      stepsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade-in
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      // Stagger steps animation
      gsap.from(stepsRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="waitlist" ref={sectionRef} className="py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-[40px] trial2 md:text-5xl trial font-semibold text-[#5D2D2B] mb-2 md:mb-4 italic">
          Join our Waitlist
        </h2>

        <p className="text-[14px] md:text-[15px]">Showcase your links, get closer to your audience faster.</p>
        <p className="text-[14px] md:text-[15px] mb-4">All possible with Abio.site</p>
        
        {/* Statistics */}
        <div className="grid grid-cols-1 bg-[#FFDCE3] md:grid-cols-3 gap-8 mb-12">
          <div className="p-6">
            <div className="text-3xl font-bold text-gray-800 mb-2">
              <Counter target={10000} />
            </div>
            <div className="text-gray-600">People on Waitlist</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-gray-800 mb-2">
              <Counter target={2000} />
            </div>
            <div className="text-gray-600">Joined Recently</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-gray-800 mb-2">
              <Counter target={100} suffix="%" />
            </div>
            <div className="text-gray-600">From Countries</div>
          </div>
        </div>

        {/* Email signup */}
        <form onSubmit={handleSubmit} className="relative w-full mb-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            className="w-full px-4 py-3 pr-36 border-2 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <button
            type="submit"
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#FED45C] shadow-[2px_2px_0px_0px_#000000] text-[#FF0000] px-4 py-2 font-semibold hover:bg-yellow-600 transition-colors"
          >
            Join waitlist
          </button>
        </form>

        <p className="text-[15px] mb-10">We'll only use your email to notify you when A.bio launches</p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} ref={addToStepsRefs} className="text-center">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Large A.Bio branding */}
        <div className="mt-20 opacity-10">
          <div className="text-6xl md:text-9xl font-bold text-gray-400 tracking-wider">
            <Logo width={400} height={400} showText={true} textSize="text-20xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;

