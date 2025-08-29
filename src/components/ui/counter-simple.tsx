"use client"

import { motion, useMotionValue, useTransform, animate, useMotionValueEvent, easeOut, useInView } from "framer-motion"
import { useEffect, useState, useRef } from "react"

interface AnimatedStatProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
  prefix?: string
  className?: string
}

export function AnimatedStat({ 
  icon, 
  value, 
  label, 
  suffix = "", 
  prefix = "",
  className = ""
}: AnimatedStatProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const count = useMotionValue(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: easeOut })
      return controls.stop
    } else {
      count.set(0)
      setDisplayValue(0)
    }
  }, [value, count, isInView])

  useMotionValueEvent(count, "change", (latest) => {
    setDisplayValue(Math.round(latest))
  })

  return (
    <motion.div 
      className={`flex flex-col items-center text-center ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <motion.div 
        className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {icon}
      </motion.div>
      <div ref={ref} className="text-2xl font-bold text-white md:text-3xl">
        {prefix}{displayValue}{suffix}
      </div>
      <motion.div 
        className="text-sm text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        {label}
      </motion.div>
    </motion.div>
  )
}
