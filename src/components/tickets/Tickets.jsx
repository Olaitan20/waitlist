'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Calendar, Clock, MapPin, ChevronRight, Sparkles, Ticket } from 'lucide-react'
import TicketContactForm from '../dnabygaza/TicketContactForm'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'

export default function Tickets() {
  const [showForm, setShowForm] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [buttonGlow, setButtonGlow] = useState(false)
  const containerRef = useRef(null)
  
  const { scrollY } = useScroll({ container: containerRef })
  const parallaxY = useTransform(scrollY, [0, 500], [0, -50])
  const springParallax = useSpring(parallaxY, { stiffness: 100, damping: 30 })
  
  const details = [
    { icon: Calendar, text: "Tuesday 23rd December, 2025" },
    { icon: Clock, text: "8:00pm – 3:00am" },
    { icon: MapPin, text: "Oriental Hotel, Waterside carpark" },
  ]
  
  const lineup = [
    { name: 'Burna Boy', role: 'Guest Host', img: '/burna-boy.png' },
    { name: 'Phyno', role: 'Guest Host', img: '/seyi-vibez.JPG' },
    { name: 'Seyi Vibez', role: 'Performing Live', img: '/phyno.jpg' },
    { name: 'Poco Lee', role: 'Performing Live', img: '/Pocolee.png' },
  ]
  
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    const timer = setTimeout(() => setIsLoaded(true), 100)
    
    const glowInterval = setInterval(() => {
      setButtonGlow(true)
      setTimeout(() => setButtonGlow(false), 1000)
    }, 3000)
    
    return () => {
      document.body.style.overflow = ''
      clearTimeout(timer)
      clearInterval(glowInterval)
    }
  }, [showForm])
  
  if (showForm) return <TicketContactForm onBack={() => setShowForm(false)} />
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  }
  
  const buttonVariants = {
    initial: { scale: 1 },
    tap: { scale: 0.95 },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 15 } }
  }

  return (
    <motion.div 
      ref={containerRef}
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative w-full min-h-[100svh] text-white flex flex-col overflow-y-auto"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <motion.div style={{ y: springParallax }} className="absolute inset-0">
          <Image
            src="/Rectangle40.png"
            alt="Dettycember Rave"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/90"
        />
        
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[1px] h-[1px] bg-white/30 "
              initial={{ x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%`, opacity: 0 }}
              animate={{ y: `-${Math.random() * 50 + 20}px`, opacity: [0, 0.5, 0] }}
              transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div variants={containerVariants} className="relative z-10 px-4 pt-6 pb-24 space-y-6 flex-grow">
        <motion.h1 variants={itemVariants} className="text-2xl capitalize font-bold leading-tight">
          Dettycember Rave
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[2px] bg-[#FED45C] mt-2"
          />
        </motion.h1>

        {/* Event Image Added Here */}
        <motion.div 
          variants={itemVariants}
          className="relative w-full h-48 md:h-64 lg:h-72 rounded-xl overflow-hidden shadow-2xl border border-white/10"
        >
          <Image
            src="/eventflyer.png" // Replace with your actual event image path
            alt="Dettycember Rave Event"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          />
          {/* Optional: Gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          {/* Optional: Event badge/tag */}
          <div className="absolute top-3 right-3 bg-[#FED45C] text-[#331400] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Premium Event
          </div>
        </motion.div>
          <motion.h1 variants={itemVariants} className="text-xl capitalize font-medium leading-tight">
          win a free ticket!
          
          <p className='text-[10px] leading-tight text-white/90 my-2'>Hurry up! Fill in your details, complete the task and be at the top of the list. You stand a chance to win a free ticket to see your favs at Dettycember Rave.</p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[2px] bg-[#FED45C] mt-2"
          />
        </motion.h1>
        <motion.div variants={containerVariants} className="space-y-3 text-[12px]">
          {details.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex items-center gap-3"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <item.icon size={16} className="flex-shrink-0" />
              <span>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
          
        <motion.div variants={itemVariants} className="pt-4">
          <h2 className="text-[16px] font-bold uppercase tracking-wide mb-3">Lineup</h2>
          <div className="grid grid-cols-4 gap-3">
            {lineup.map((artist, index) => (
              <motion.div
                key={artist.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 400 } }}
                className="text-center space-y-4 group cursor-pointer"
              >
                <motion.div 
                  className="relative aspect-square overflow-hidden "
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={artist.img}
                    alt={artist.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                </motion.div>
                <div>
                  <motion.p className="text-[11px] uppercase font-medium leading-tight" whileHover={{ color: "#FED45C" }}>
                    {artist.name}
                  </motion.p>
                  <p className="text-[10px] mt-2 border text-white/80">{artist.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="pt-6">
          <h2 className="text-[16px] font-bold uppercase tracking-wide mb-2">About</h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-[12px] text-white/80 leading-relaxed"
          >
            Dettycember Rave is where lagos luxury meets pure night life energy. An exclusive night curated for those who love premium
            vibes and iconic performances. On December 23rd, the Oriental Hotel Waterside transforms into a high powered celebration headlined by Burna Boy, with electrifying performances from Seyi Vibez and Poco Lee and Phyno hosting the night. This isn't 
            just a concert, it's a premium December experience with limited 
            access, elite tables and an unmatched lineup. Don't miss out!
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="pt-6 space-y-3"
        >
          <h2 className="text-[16px] font-bold uppercase tracking-wide">Directions</h2>
          <motion.div 
            className="relative w-full h-[220px] overflow-hidden border border-black/20 "
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <iframe
              title="Oriental Hotel Location"
              src="https://www.google.com/maps?q=Oriental+Hotel+Lagos&output=embed"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <motion.div 
              className="absolute inset-0 pointer-events-none"
              initial={{ background: "rgba(0,0,0,0.3)" }}
              animate={{ background: "rgba(0,0,0,0)" }}
              transition={{ delay: 1.5, duration: 1 }}
            />
          </motion.div>
          <p className="text-[12px] text-white/70 leading-relaxed">
            Oriental Hotel, Waterside Car Park, Ozumba Mbadiwe Road, Victoria Island, Lagos.
          </p>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-30 pointer-events-none"
        >
          <div className="p-4 pointer-events-auto">
            <motion.div
              animate={{ scale: buttonGlow ? [1, 1.1, 1] : 1, opacity: buttonGlow ? [0.3, 0.8, 0.3] : 0 }}
              transition={{ duration: 1, times: [0, 0.5, 1] }}
              className="absolute inset-0 bg-[#FED45C] blur-xl  mx-4"
            />
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="relative w-full bg-[#FED45C] text-[#331400] font-semibold py-4 shadow-xl  overflow-hidden group"
              onClick={() => setShowForm(true)}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-10"
                style={{ background: "conic-gradient(from 0deg, transparent, #fff, transparent)" }}
              />
              <span className="relative flex items-center justify-center gap-2">
                <Ticket size={18} />
                Win a Free Ticket
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                >
                  <ChevronRight size={18} />
                </motion.span>
              </span>
              <AnimatePresence>
                {buttonGlow && [...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="absolute"
                    style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
                  >
                    <Sparkles size={12} className="text-white" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}