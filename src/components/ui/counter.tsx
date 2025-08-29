"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

interface CounterProps {
  from: number
  to: number
  duration?: number
  delay?: number
  className?: string
  suffix?: string
  prefix?: string
}

export function Counter({ 
  from, 
  to, 
  duration = 2, 
  delay = 0, 
  className = "",
  suffix = "",
  prefix = ""
}: CounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })
  const [count, setCount] = useState(from)

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now()
      const endTime = startTime + duration * 1000

      const updateCount = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / (duration * 1000), 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(from + (to - from) * easeOutQuart)
        
        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(updateCount)
        }
      }

      const timeoutId = setTimeout(() => {
        requestAnimationFrame(updateCount)
      }, delay * 1000)

      return () => clearTimeout(timeoutId)
    } else {
      // Reset so it animates again on re-enter
      setCount(from)
    }
  }, [isInView, from, to, duration, delay])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  )
}

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
  return (
    <motion.div 
      className={`flex flex-col items-center text-center ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
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
      <div className="text-2xl font-bold text-foreground md:text-3xl">
        <Counter 
          from={0} 
          to={value} 
          duration={2} 
          delay={0.4}
          suffix={suffix}
          prefix={prefix}
        />
      </div>
      <motion.div 
        className="text-sm text-muted-foreground"
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
