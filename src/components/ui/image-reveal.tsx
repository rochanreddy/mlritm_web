"use client"

import { motion, useInView, easeOut } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { useState, useEffect } from "react"

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
  delay?: number
  duration?: number
  direction?: "left" | "right" | "up" | "down"
  distance?: number
}

export function ImageReveal({
  src,
  alt,
  className = "",
  delay = 0,
  duration = 0.8,
  direction = "up",
  distance = 50
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const getVariants = () => {
    const baseVariants = {
      hidden: {
        opacity: 0,
        y: direction === "up" ? distance : direction === "down" ? -distance : 0,
        x: direction === "left" ? distance : direction === "right" ? -distance : 0,
        scale: 0.8,
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
      className={`overflow-hidden rounded-lg ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        className="w-full h-auto object-cover"
      />
    </motion.div>
  )
}

interface ImageParallaxProps {
  src: string
  alt: string
  className?: string
  speed?: number
}

export function ImageParallax({
  src,
  alt,
  className = "",
  speed = 0.5
}: ImageParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden rounded-lg ${className}`}
      style={{
        y: useParallax(speed, ref),
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        className="w-full h-auto object-cover"
      />
    </motion.div>
  )
}

function useParallax(speed: number, ref: React.RefObject<HTMLDivElement | null>) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let ticking = false

    const updateOffset = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const rate = scrolled * -speed
        setOffset(rate)
      }
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateOffset)
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [speed, ref])

  return offset
}
