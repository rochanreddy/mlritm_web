"use client"

import { useEffect } from "react"

interface SmoothScrollProps {
  children: React.ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Add smooth scrolling behavior to the entire page
    document.documentElement.style.scrollBehavior = "smooth"
    
    // Custom smooth scroll for better performance
    const smoothScrollTo = (target: Element, duration: number = 1000) => {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset
      const startPosition = window.pageYOffset
      const distance = targetPosition - startPosition
      let startTime: number | null = null

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration)
        window.scrollTo(0, run)
        if (timeElapsed < duration) requestAnimationFrame(animation)
      }

      requestAnimationFrame(animation)
    }

    // Easing function for smooth animation
    const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
      t /= d / 2
      if (t < 1) return (c / 2) * t * t * t + b
      t -= 2
      return (c / 2) * (t * t * t + 2) + b
    }

    // Add smooth scroll to all anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const targetId = target.getAttribute("href")?.slice(1)
        if (targetId) {
          const targetElement = document.getElementById(targetId)
          if (targetElement) {
            smoothScrollTo(targetElement)
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return <>{children}</>
}
