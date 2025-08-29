"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface BackgroundAnimationProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function BackgroundAnimation({
  children,
  className = "",
  speed = 0.5
}: BackgroundAnimationProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3])

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ y, opacity }}
    >
      {children}
    </motion.div>
  )
}

interface FloatingShapesProps {
  className?: string
}

export function FloatingShapes({ className = "" }: FloatingShapesProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-primary/10 rounded-full"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/5 rounded-full"
        animate={{
          y: [0, -10, 0],
          x: [0, 8, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  )
}
