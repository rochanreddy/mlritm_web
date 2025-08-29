"use client"

import { useRef, useEffect, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  direction = "up"
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "up": return "translateY(50px)"
        case "down": return "translateY(-50px)"
        case "left": return "translateX(50px)"
        case "right": return "translateX(-50px)"
        default: return "translateY(50px)"
      }
    }
    return "translateY(0px)"
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
      }}
    >
      {children}
    </div>
  )
}

export function StaggerAnimation({
  children,
  className = "",
  staggerDelay = 100,
  delay = 0,
}: {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const totalItems = children.length
          for (let i = 0; i < totalItems; i++) {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, i])
            }, delay * 1000 + i * staggerDelay)
          }
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [children.length, delay, staggerDelay])

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className="transition-all duration-500 ease-out"
          style={{
            opacity: visibleItems.includes(index) ? 1 : 0,
            transform: visibleItems.includes(index) ? "translateY(0px)" : "translateY(30px)",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

export function AnimatedStat({ 
  icon, 
  value, 
  label, 
  suffix = "", 
  prefix = "",
  className = ""
}: {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
  prefix?: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate counter
          let start = 0
          const increment = value / 50
          const timer = setInterval(() => {
            start += increment
            if (start >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 40)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value])

  return (
    <div 
      ref={ref}
      className={`flex flex-col items-center text-center ${className}`}
    >
      <div 
        className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-500"
        style={{
          transform: isVisible ? "scale(1) rotate(0deg)" : "scale(0) rotate(-180deg)",
        }}
      >
        {icon}
      </div>
      <div className="text-2xl font-bold text-foreground md:text-3xl">
        {prefix}{count}{suffix}
      </div>
      <div 
        className="text-sm text-muted-foreground transition-opacity duration-500"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        {label}
      </div>
    </div>
  )
}
