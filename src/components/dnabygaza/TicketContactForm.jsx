'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, Upload, CheckCircle, X, ChevronLeft, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function TicketContactForm({ onBack }) {
  const [step, setStep] = useState('contact') // 'contact', 'repost', or 'done'
  const [isVisible, setIsVisible] = useState(true)
  const fileInputRef = useRef(null)

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  }

  const pageVariants = {
    initial: { x: 50, opacity: 0 },
    enter: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5
      }
    },
    exit: { 
      x: -50, 
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  }

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  }

  const inputVariants = {
    focus: { 
      scale: 1.02,
      boxShadow: "0 0 0 2px rgba(254, 212, 92, 0.3)",
      transition: { duration: 0.2 }
    }
  }

  // Close form with animation
  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      if (onBack) onBack()
    }, 300)
  }

  const handleBack = () => {
    if (step === 'repost') {
      setStep('contact')
    } else if (step === 'done') {
      setStep('repost')
    } else {
      handleClose()
    }
  }

  const handleFinish = () => {
    // Animation before closing
    const button = document.querySelector('.finish-button')
    if (button) {
      button.style.transform = 'scale(0.95)'
      setTimeout(() => {
        button.style.transform = 'scale(1)'
        handleClose()
      }, 150)
    } else {
      handleClose()
    }
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Animation for file upload
      console.log('File selected:', file.name)
      // You could add state for file preview here
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] overflow-hidden bg-black/50 backdrop-blur-sm"
        >
          <AnimatePresence mode="wait">
            {/* Contact Information Step */}
            {step === 'contact' && (
              <motion.div
                key="contact"
                variants={pageVariants}
                initial="initial"
                animate="enter"
                exit="exit"
                className="bg-white text-black flex flex-col h-full"
              >
                {/* Animated Header */}
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center justify-between px-4 py-4 border-b border-gray-200"
                >
                  <button 
                    onClick={handleBack}
                    aria-label="Go back"
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <ArrowLeft size={22} />
                  </button>
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="text-[16px] font-bold"
                  >
                    Step 1 of 3
                  </motion.div>
                  <button 
                    onClick={handleClose}
                    aria-label="Close"
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={22} />
                  </button>
                </motion.div>

                {/* Content with staggered animation */}
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex-1 overflow-y-auto px-4 pt-4 pb-40"
                >
                  <motion.h1 
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold"
                  >
                    Contact Information
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="text-[13px] mt-2 mb-6"
                  >
                    Fill in all required fields correctly so we can contact you and
                    confirm your free ticket. Missing or wrong details may disqualify 
                    your entry.
                  </motion.p>

                  <div className="space-y-6">
                    {['Full Name', 'Email Address', 'Phone Number'].map((field, index) => (
                      <motion.div
                        key={field}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.01 }}
                      >
                        <label className="block text-sm font-medium mb-2">
                          {field}<span className="text-black">*</span>
                        </label>
                        <motion.input
                          whileFocus="focus"
                          variants={inputVariants}
                          type={field.includes('Email') ? 'email' : field.includes('Phone') ? 'tel' : 'text'}
                          placeholder={field}
                          className="w-full border border-gray-300 px-3 py-3 text-[12px] placeholder:text-gray-400 outline-none focus:border-[#FED45C] focus:ring-2 focus:ring-[#FED45C]/20 transition-all"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Floating Bottom bar with animation */}
                <motion.div 
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
                  className="fixed bottom-6 left-0 right-0 z-[110] px-4"
                >
                  <div className="bg-[#FED45C] flex items-center justify-between px-4 py-4 shadow-lg  mx-2 overflow-hidden">
                    <motion.span 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="text-xl font-bold"
                    >
                      Free
                    </motion.span>
                    <motion.button
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => setStep('repost')}
                      className="bg-[#331400] text-[#FED45C] text-[12px] px-6 py-3 font-semibold relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Continue
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 0.5 }}
                        >
                          <ChevronLeft size={16} className="rotate-180" />
                        </motion.span>
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Repost Step */}
            {step === 'repost' && (
              <motion.div
                key="repost"
                variants={pageVariants}
                initial="initial"
                animate="enter"
                exit="exit"
                className="text-white h-full relative"
              >
                {/* Animated Background */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <img
                    src="/Rectangle40.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black"
                  />
                </motion.div>

                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-[2px] h-[2px] bg-[#FED45C]/50 rounded-full"
                      initial={{ 
                        x: Math.random() * 100 + '%', 
                        y: Math.random() * 100 + '%',
                        opacity: 0 
                      }}
                      animate={{ 
                        y: [null, `-${Math.random() * 100 + 50}px`],
                        opacity: [0, 0.8, 0]
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex items-center justify-between px-4 py-4"
                  >
                    <button 
                      onClick={handleBack}
                      aria-label="Go back"
                      className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="text-[16px] font-bold bg-white/10 px-3 py-1 rounded-full"
                    >
                      Step 2 of 3
                    </motion.div>
                    <div className="w-10" /> {/* Spacer */}
                  </motion.div>

                  {/* Scrollable body */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex-1 overflow-y-auto px-4 mt-4 pb-40"
                  >
                    <motion.h1 
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl font-bold leading-tight"
                    >
                      Tasks <br /> Repost The Flyer
                    </motion.h1>

                    {/* Card with animation */}
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4, type: "spring" }}
                      whileHover={{ scale: 1.005 }}
                      className="mt-10 border border-white/30 p-4 space-y-4 backdrop-blur-sm bg-black/40"
                    >
                      <motion.span 
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="inline-block bg-[#FED45C] text-black text-xs font-bold px-3 py-1"
                      >
                        Instruction:
                      </motion.span>

                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-[12px] text-white leading-relaxed"
                      >
                        Repost the official giveaway flyer on your story or feed.
                        Tag <span className="font-semibold text-[#FED45C]">@clubdnabygaza</span>
                      </motion.p>

                      {/* Link input */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <input
                          type="text"
                          placeholder="Paste link to post/story"
                          className="w-full bg-white/10 text-white border-2 border-[#FED45C]/50 px-3 py-3 text-[12px] outline-none focus:border-[#FED45C] focus:bg-white/20 transition-all placeholder:text-white/60"
                        />
                      </motion.div>

                      {/* Upload box */}
                      <motion.label 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.7, type: "spring" }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="block bg-white/10 border-2 border-dashed border-[#FED45C]/50 h-[140px] cursor-pointer hover:bg-white/20 hover:border-[#FED45C] transition-all"
                      >
                        <input 
                          ref={fileInputRef}
                          type="file" 
                          hidden 
                          accept="image/png,image/jpeg" 
                          onChange={handleFileUpload}
                        />
                        <div className="h-full flex flex-col items-center justify-center text-center gap-2">
                          <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          >
                            <Upload size={22} className="text-[#FED45C]" />
                          </motion.div>
                          <p className="text-[12px]">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-[10px] text-white/60">PNG or JPG</p>
                        </div>
                      </motion.label>

                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-[12px] text-white/70"
                      >
                        Optional*
                      </motion.p>

                      {/* Checkbox */}
                      <motion.label 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="flex items-center gap-3 text-[12px] cursor-pointer group"
                      >
                        <motion.div
                          whileTap={{ scale: 0.9 }}
                          className="relative"
                        >
                          <input type="checkbox" className="mt-1 opacity-0 absolute" />
                          <div className="w-4 h-4 border border-white/50 group-hover:border-[#FED45C]  flex items-center justify-center">
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-[#FED45C]  hidden"
                            />
                          </div>
                        </motion.div>
                        <span className="group-hover:text-[#FED45C] transition-colors">
                          I confirm I reposted and tagged correctly
                        </span>
                      </motion.label>
                    </motion.div>
                  </motion.div>

                  {/* Floating CTA */}
                  <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
                    className="fixed bottom-0 left-0 right-0 z-20 px-4 pb-6"
                  >
                    <motion.button
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => setStep('done')}
                      className="w-full bg-[#FED45C] text-black font-semibold py-4  relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Continue
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <ChevronLeft size={18} className="rotate-180" />
                        </motion.span>
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Done Step */}
            {step === 'done' && (
              <motion.div
                key="done"
                variants={pageVariants}
                initial="initial"
                animate="enter"
                exit="exit"
                className="bg-white text-black flex flex-col h-full"
              >
                {/* Header */}
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="flex items-center gap-3 px-4 py-4 border-b border-gray-200"
                >
                  <button 
                    onClick={handleBack}
                    aria-label="Go back"
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="text-[16px] font-bold"
                  >
                    Step 3 of 3
                  </motion.div>
                </motion.div>

                {/* Success Content */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex-1 flex flex-col items-center justify-center px-4 text-center overflow-y-auto py-8"
                >
                  {/* Animated checkmark */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.3
                    }}
                    className="mb-6 relative"
                  >
                    <div className="relative">
                      <CheckCircle size={70} className="text-green-500" />
                      {/* Pulsing ring effect */}
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 0.5
                        }}
                        className="absolute inset-0 border-4 border-green-300 rounded-full"
                      />
                    </div>
                    {/* Floating sparkles */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-yellow-400"
                        initial={{ 
                          x: 0, 
                          y: 0, 
                          scale: 0,
                          opacity: 0 
                        }}
                        animate={{ 
                          x: Math.cos(i * 60 * Math.PI/180) * 60,
                          y: Math.sin(i * 60 * Math.PI/180) * 60,
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 1,
                          delay: 0.5 + i * 0.1,
                          repeat: Infinity,
                          repeatDelay: 2
                        }}
                      >
                        <Sparkles size={16} />
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.h1 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl font-bold mb-2"
                  >
                    All Done Goodluck!
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.45 }}
                    className="text-[12px] text-gray-600 max-w-md mb-8"
                  >
                    Keep an eye out. Winners will be notified within 48hrs. Your chance to snag this free ticket could just be around the corner.
                  </motion.p>

                  

                  {/* Tips */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    className="w-full max-w-sm p-4 bg-yellow-50 border border-yellow-100 "
                  >
                    <h3 className="font-semibold text-sm mb-2">What's Next?</h3>
                    <ul className="text-left text-[12px] text-gray-700 space-y-1">
                      {[
                        'Keep an eye on your email for updates',
                        'Winners will be notified 48 hours before the event',
                        'Make sure your social media account is public'
                      ].map((tip, index) => (
                        <motion.li 
                          key={tip}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <span className="text-yellow-600 mt-0.5">•</span>
                          {tip}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>

                {/* Finish Button */}
                <motion.div 
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
                  className="fixed bottom-0 left-0 right-0 z-20 px-4 pb-6"
                >
                  <motion.button 
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={handleFinish}
                    className="finish-button w-full bg-[#FED45C] text-black text-[14px] shadow-[3px_3px_0px_0px_#000000] font-semibold py-4 text-lg  relative overflow-hidden group"
                  >
                    <span className="relative z-10">Finished</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FED45C]/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    {/* Confetti effect on hover */}
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 pointer-events-none"
                      >
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute text-[#FED45C]"
                            initial={{ 
                              x: '50%', 
                              y: '50%',
                              rotate: 0,
                              scale: 0 
                            }}
                            animate={{ 
                              x: `${Math.random() * 100}%`,
                              y: `${Math.random() * -100}%`,
                              rotate: 360,
                              scale: [0, 1, 0]
                            }}
                            transition={{ 
                              duration: 0.8,
                              delay: i * 0.1 
                            }}
                          >
                            <Sparkles size={12} />
                          </motion.div>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}