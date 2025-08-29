"use client"

import { motion, useInView, easeOut } from "framer-motion"
import { useRef } from "react"

interface TextRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  staggerDelay?: number
}

export function TextReveal({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.8,
  staggerDelay = 0.05
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  // Handle both string and ReactNode children
  const textContent = typeof children === 'string' ? children : ''
  const words = textContent.split(" ")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: easeOut,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function CharacterReveal({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.8,
  staggerDelay = 0.03
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  // Ensure children is a string for character splitting
  const textContent = typeof children === 'string' ? children : ''
  const characters = textContent.split("")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const characterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: easeOut,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={characterVariants}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  )
}
