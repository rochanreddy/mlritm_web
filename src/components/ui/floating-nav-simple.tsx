"use client"

import { useState, useEffect } from "react"
import { ChevronUp, Home, Users, BookOpen, Award, Heart, Building, GraduationCap, Phone } from "lucide-react"

interface FloatingNavProps {
  className?: string
}

export function FloatingNav({ className = "" }: FloatingNavProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navItems = [
    { id: "hero", icon: Home, label: "Home" },
    { id: "about", icon: Users, label: "About" },
    { id: "academics", icon: BookOpen, label: "Academics" },
    { id: "faculty", icon: Award, label: "Faculty" },
    { id: "student-life", icon: Heart, label: "Student Life" },
    { id: "placements", icon: GraduationCap, label: "Placements" },
    { id: "research", icon: Building, label: "Research" },
    { id: "campus", icon: Building, label: "Campus" },
    { id: "contact", icon: Phone, label: "Contact" },
  ]

  if (!isVisible) return null

  return (
    <div className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 ${className}`}>
      <div className="flex flex-col gap-3">
        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors"
          title="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>

        {/* Navigation dots */}
        {navItems.map((item) => {
          const Icon = item.icon
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="p-3 rounded-full shadow-lg bg-white/80 text-gray-600 hover:bg-primary/10 hover:text-primary transition-all duration-300"
              title={item.label}
            >
              <Icon className="w-5 h-5" />
            </button>
          )
        })}
      </div>
    </div>
  )
}
