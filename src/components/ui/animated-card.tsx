"use client"

import { motion, useInView, easeOut } from "framer-motion"
import { useRef } from "react"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  hoverEffect?: boolean
}

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 30,
  hoverEffect = true
}: AnimatedCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const getVariants = () => {
    const baseVariants = {
      hidden: {
        opacity: 0,
        y: direction === "up" ? distance : direction === "down" ? -distance : 0,
        x: direction === "left" ? distance : direction === "right" ? -distance : 0,
        scale: 0.95,
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: easeOut,
        },
      },
    }
    return baseVariants
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      className={className}
      whileHover={hoverEffect ? { 
        y: -5, 
        scale: 1.02,
        transition: { duration: 0.2 }
      } : {}}
    >
      {children}
    </motion.div>
  )
}

interface StaggeredCardsProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
  delay?: number
}

export function StaggeredCards({
  children,
  className = "",
  staggerDelay = 0.1,
  delay = 0
}: StaggeredCardsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
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
      {children.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
