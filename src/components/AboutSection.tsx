"use client"

import { Users, Trophy, BookOpen, GraduationCap, Award, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { StaggerAnimation } from '@/components/ui/scroll-animation'
import { Counter } from '@/components/ui/counter'
import { useEffect, useRef, useState } from 'react'

interface StatCardProps {
  icon: React.ReactNode
  value: string
  value2?: string
  label: string
}

const StatCard = ({ icon, value, value2, label }: StatCardProps) => {
  // Check if the value is numeric (contains numbers)
  const isNumeric = /\d/.test(value);
  
  // Extract numeric part and suffix for counting
  const numericMatch = value.match(/(\d+(?:,\d+)?)(.*)/);
  const numericValue = numericMatch ? parseInt(numericMatch[1].replace(/,/g, '')) : 0;
  const suffix = numericMatch ? numericMatch[2] : '';
  
  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-accent/50 border border-border/50 px-6 py-3">
      <div className="text-primary scale-100">
        {icon}
      </div>
      <div className="flex flex-col items-start">
        <span className="text-base font-bold text-foreground">
          {isNumeric ? (
            <Counter 
              from={0} 
              to={numericValue} 
              duration={2} 
              delay={0.2}
              suffix={suffix}
              className="text-base font-bold text-foreground"
            />
          ) : (
            <>
              {value}
              {value2 && (
                <span className="ml-1 text-primary font-bold">{value2}</span>
              )}
            </>
          )}
        </span>
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
    </div>
  );
};

// (old ValueItem removed – redesigned into a clean stepper below)

export default function AboutSection() {
  const stats = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      value: "10,000+",
      label: "Students"
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "500+",
      label: "Faculty Members"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      value: "NAAC",
      value2: "A+",
      label: "Accreditation"
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "NBA",
      label: "Accredited Programs"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      value: "50+",
      label: "Programs Offered"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      value: "25+",
      label: "Years of Excellence"
    }
  ]

  const coreValues = [
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'World-class teaching with an industry-aligned, outcomes-focused curriculum.'
    },
    {
      icon: Trophy,
      title: 'Innovation & Research',
      description: 'A culture that turns ideas into impact through labs, projects, and publications.'
    },
    {
      icon: Users,
      title: 'Holistic Development',
      description: 'Leadership, teamwork, and wellbeing—growth beyond the classroom.'
    },
    {
      icon: Award,
      title: 'Industry Integration',
      description: 'Partnerships, internships, and mentorship to bridge campus and career.'
    }
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary">MLRITM</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A premier institution committed to academic excellence, innovation, and holistic development 
            of students for over two decades.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-start mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Left Column - Image */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <CarouselInline />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Founding Story */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Legacy</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Established in 1998, MLR Institute of Technology and Management has grown from a 
                visionary dream to become one of the leading technical institutions in the region. 
                Founded with the mission to provide quality education and create industry-ready professionals.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to excellence has been recognized through numerous accreditations and 
                rankings, making us a preferred choice for students seeking world-class technical education.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide quality technical education, foster innovation and research, and develop 
                competent professionals who can contribute meaningfully to society and the global economy 
                while upholding the highest standards of integrity and ethics.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-center text-foreground mb-6">Our Achievements</h3>
          <StaggerAnimation staggerDelay={0.06} delay={0.9}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-start">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </StaggerAnimation>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Our Core Values</h3>
          <StaggerAnimation staggerDelay={0.1} delay={1.3}>
            <div className="relative max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreValues.map((v, i) => {
                  const Icon = v.icon
                  return (
                    <div key={v.title} className="relative">
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold aspect-square">
                          {i + 1}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <h4 className="font-semibold text-foreground">{v.title}</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                            {v.description}
                          </p>
                        </div>
                      </div>
                      {i < coreValues.length - 1 && (
                        <span className="hidden lg:block absolute top-4 -right-3 w-6 h-px bg-border" />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </StaggerAnimation>
        </motion.div>

        
      </div>
    </section>
  )
}

function CarouselInline() {
  const slides = [
    { src: '/images/campus.jpg', alt: 'MLRITM Campus' },
    { src: '/images/mlrs-batch-2025.jpg', alt: 'MLRS Batch 2025' },
    { src: '/images/placement.jpg', alt: 'Placement Success' },
  ]

  const [index, setIndex] = useState(0)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    timeoutRef.current && window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 3500)
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [index])

  // Handle drag gestures for carousel
  const handleDrag = (event: any, info: any) => {
    const swipeThreshold = 50
    if (info.offset.x > swipeThreshold) {
      // Swipe right - go to previous slide
      setIndex((prev) => (prev - 1 + slides.length) % slides.length)
    } else if (info.offset.x < -swipeThreshold) {
      // Swipe left - go to next slide
      setIndex((prev) => (prev + 1) % slides.length)
    }
  }

  return (
    <motion.div 
      className="relative rounded-xl overflow-hidden"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.1}
      onDragEnd={handleDrag}
      style={{ cursor: "grab" }}
      whileDrag={{ cursor: "grabbing" }}
    >
      <div className="relative aspect-[4/3]">
        {slides.map((s, i) => (
          <img
            key={s.alt + i}
            src={s.src}
            alt={s.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-primary' : 'w-2 bg-muted-foreground/40'}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </motion.div>
  )
}