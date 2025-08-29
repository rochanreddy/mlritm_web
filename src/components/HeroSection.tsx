"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Trophy, GraduationCap } from "lucide-react"
import { motion, easeOut } from "framer-motion"
import { StaggerAnimation } from "@/components/ui/scroll-animation"
import { AnimatedStat } from "@/components/ui/counter-simple"

interface StatisticProps {
  icon: React.ReactNode
  value: string
  label: string
}

const Statistic = ({ icon, value, label }: StatisticProps) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-primary">
      {icon}
    </div>
    <div className="text-2xl font-bold text-white md:text-3xl">{value}</div>
    <div className="text-sm text-white">{label}</div>
  </div>
)

interface HeroSectionProps {
  className?: string
}

export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={`relative overflow-hidden py-20 ${className || ""}`}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/video/Untitled design.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 max-w-7xl mx-auto px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main headline */}
          <motion.h1 
            className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            Empowering Innovation Through{" "}
            <span className="text-primary">Academic Excellence</span>
          </motion.h1>
          
          {/* Sub-headline */}
          <motion.p 
            className="mb-8 text-lg text-gray-200 md:text-xl lg:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
          >
            Marri Laxman Reddy Institute of Technology & Management shapes tomorrow's leaders through cutting-edge education, innovative research, and industry partnerships.
          </motion.p>
          
          {/* Call-to-action buttons */}
          <motion.div 
            className="mb-16 flex flex-col gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
          >
            <Button size="lg" className="text-base font-semibold">
              Explore Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-base font-semibold text-white border-white hover:bg-white hover:text-black bg-transparent">
              Admissions
            </Button>
          </motion.div>
          
          {/* Statistics */}
          <StaggerAnimation
            staggerDelay={0.2}
            delay={0.6}
            className="flex flex-col items-center gap-10 sm:flex-row sm:justify-center"
          >
            {[
              <AnimatedStat
                key="trophy"
                icon={<Trophy className="h-6 w-6" />}
                value={25}
                label="Years of Excellence"
                suffix="+"
              />,
              <AnimatedStat
                key="graduation"
                icon={<GraduationCap className="h-6 w-6" />}
                value={95}
                label="Placement Rate"
                suffix="%"
              />,
              <AnimatedStat
                key="users"
                icon={<Users className="h-6 w-6" />}
                value={2000}
                label="Alumni Network"
                suffix="+"
              />
            ]}
          </StaggerAnimation>
        </div>
      </div>
    </section>
  )
}