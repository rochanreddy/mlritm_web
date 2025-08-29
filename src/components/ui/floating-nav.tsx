"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronLeft, X, Home, Users, BookOpen, Award, Heart, Building, GraduationCap, Phone, MapPin } from "lucide-react"

interface FloatingNavProps {
  className?: string
}

export function FloatingNav({ className = "" }: FloatingNavProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling down
      setIsVisible(window.scrollY > 300)

      // Update active section based on scroll position
      const sections = [
        { id: "hero", element: document.getElementById("hero") },
        { id: "about", element: document.getElementById("about") },
        { id: "academics", element: document.getElementById("academics") },
        { id: "faculty", element: document.getElementById("faculty") },
        { id: "student-life", element: document.getElementById("student-life") },
        { id: "placements", element: document.getElementById("placements") },
        { id: "research", element: document.getElementById("research") },
        { id: "campus", element: document.getElementById("campus") },
        { id: "contact", element: document.getElementById("contact") },
      ]

      const currentSection = sections.find(({ element }) => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
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
    { id: "campus", icon: MapPin, label: "Campus" },
    { id: "contact", icon: Phone, label: "Contact" },
  ]

  return (
    <div className="hidden md:block">
      <AnimatePresence>
        {isVisible && !isCollapsed && (
          <motion.div
            className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 ${className}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-3 items-center">
              {/* Collapse button */}
              <motion.button
                onClick={() => setIsCollapsed(true)}
                className="p-2 bg-white/90 text-gray-700 rounded-full shadow hover:bg-gray-100 transition-colors border border-gray-200"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                title="Hide menu"
                aria-label="Hide menu"
              >
                <X className="w-4 h-4" />
              </motion.button>

              {/* Scroll to top button */}
              <motion.button
                onClick={scrollToTop}
                className="p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Scroll to top"
              >
                <ChevronUp className="w-5 h-5" />
              </motion.button>

              {/* Navigation dots */}
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.id
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
                      isActive 
                        ? "bg-primary text-white scale-110" 
                        : "bg-white/80 text-gray-600 hover:bg-primary/10 hover:text-primary"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title={item.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Re-open tab when collapsed */}
      <AnimatePresence>
        {isVisible && isCollapsed && (
          <motion.button
            className="fixed right-2 top-1/2 -translate-y-1/2 z-50 p-2 bg-white/95 text-gray-700 rounded-l-full shadow border border-gray-200"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsCollapsed(false)}
            title="Show menu"
            aria-label="Show menu"
          >
            <ChevronLeft className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
