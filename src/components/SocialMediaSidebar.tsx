"use client"

import { motion } from "framer-motion"
import { 
  Facebook, 
  Instagram, 
  Linkedin
} from "lucide-react"

interface SocialMediaSidebarProps {
  className?: string
}

// Simple 360-degree text icon
const VR360Icon = () => (
  <div className="w-5 h-5 flex items-center justify-center text-xs font-bold">
    360°
  </div>
)

export default function SocialMediaSidebar({ className = "" }: SocialMediaSidebarProps) {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/mlritm",
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/mlritm",
      color: "hover:bg-pink-600 hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/mlritm",
      color: "hover:bg-blue-700 hover:text-white"
    },
    {
      name: "360° Tour",
      icon: VR360Icon,
      href: "#campus",
      color: "hover:bg-purple-600 hover:text-white"
    }
  ]

  return (
    <div className={`hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-40 ${className}`}>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col gap-3 items-center"
      >
        {socialLinks.map((link, index) => {
          const Icon = link.icon
          return (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.name === "360° Tour" ? "_self" : "_blank"}
              rel={link.name === "360° Tour" ? "" : "noopener noreferrer"}
              className={`p-3 bg-white/90 text-gray-700 rounded-full shadow-lg border border-gray-200 transition-all duration-300 ${link.color}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          )
        })}
      </motion.div>
    </div>
  )
}
