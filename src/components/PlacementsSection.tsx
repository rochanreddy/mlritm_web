"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Building2, TrendingUp, Users, Award, ChevronRight, Mail, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatedStatCard } from "@/components/ui/animated-stat-card"
import { LogoLoop } from "@/components/ui/logo-loop"

interface PlacementStat {
  label: string
  value: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  trend?: string
}

interface Company {
  name: string
  logo: string
}

interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  image: string
  package: string
}

interface SectorData {
  name: string
  percentage: number
  color: string // Hex color code
}

export default function PlacementsSection() {
  const placementStats: PlacementStat[] = [
    {
      label: "Placement Rate",
      value: "94%",
      description: "Students placed in 2024",
      icon: TrendingUp,
      trend: "+8% from last year"
    },
    {
      label: "Average Package",
      value: "₹8.5 LPA",
      description: "Across all branches",
      icon: Award,
      trend: "+12% increase"
    },
    {
      label: "Highest Package",
      value: "₹45 LPA",
      description: "Offered by top MNC",
      icon: TrendingUp,
      trend: "New record"
    },
    {
      label: "Recruiting Partners",
      value: "150+",
      description: "Active companies",
      icon: Building2,
      trend: "25 new partners"
    }
  ]

     const topCompanies: Company[] = [
     { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
     { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
     { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
     { name: "Cognizant", logo: "https://logo.clearbit.com/cognizant.com" },
     { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
     { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
     { name: "Google", logo: "https://logo.clearbit.com/google.com" },
     { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
     { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
     { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
     { name: "Capgemini", logo: "https://logo.clearbit.com/capgemini.com" }
   ]

  const testimonials: Testimonial[] = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "Microsoft",
      quote: "MLRITM's training programs and placement support helped me secure my dream job. The faculty's guidance and industry exposure were exceptional.",
      image: "/api/placeholder/60/60",
      package: "₹28 LPA"
    },
    {
      name: "Rajesh Kumar",
      role: "Data Scientist",
      company: "Amazon",
      quote: "The comprehensive curriculum and hands-on projects at MLRITM prepared me well for the industry challenges. Grateful for the excellent placement support.",
      image: "/api/placeholder/60/60",
      package: "₹32 LPA"
    },
    {
      name: "Sneha Reddy",
      role: "Product Manager",
      company: "Google",
      quote: "MLRITM not only provided quality education but also shaped my career aspirations. The placement cell's support was instrumental in my success.",
      image: "/api/placeholder/60/60",
      package: "₹45 LPA"
    }
  ]

  const sectorData: SectorData[] = [
    { name: "IT Services", percentage: 45, color: "#3B82F6" },
    { name: "Product Companies", percentage: 25, color: "#10B981" },
    { name: "Consulting", percentage: 15, color: "#8B5CF6" },
    { name: "Core Engineering", percentage: 10, color: "#F97316" },
    { name: "Others", percentage: 5, color: "#14B8A6" }
  ]

  // Animated bar that re-triggers on every viewport entry
  const AnimatedBar = ({ percentage, className, style }: { percentage: number; className: string; style?: React.CSSProperties }) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(ref, { once: false })
    const controls = useAnimation()

    useEffect(() => {
      if (isInView) {
        controls.start({ width: `${percentage}%` })
      } else {
        controls.set({ width: "0%" })
      }
    }, [isInView, percentage, controls])

    return (
      <motion.div
        ref={ref}
        className={className}
        style={style}
        initial={{ width: "0%" }}
        animate={controls}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
    )
  }

  return (
    <section className="bg-card py-16">
      <div className="container max-w-7xl mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Placement Excellence
          </Badge>
          <h2 className="text-4xl font-heading font-bold mb-4">
            Empowering Futures Through <span className="text-primary">Strategic Placements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our dedicated placement cell ensures every student gets the opportunity to excel in their chosen career path with comprehensive support and industry connections.
          </p>
        </div>

        {/* Placement Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {placementStats.map((stat, index) => (
            <AnimatedStatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              trend={stat.trend}
            />
          ))}
        </div>

        {/* Top Recruiting Companies */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-heading font-bold mb-4">Top Recruiting Partners</h3>
            <p className="text-muted-foreground">
              Leading companies trust MLRITM graduates for their talent and expertise
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
                         <LogoLoop
               logos={topCompanies.map(company => ({
                 src: company.logo,
                 alt: company.name,
                 title: company.name
               }))}
               speed={80}
               direction="left"
               logoHeight={40}
               gap={32}
               pauseOnHover={true}
               fadeOut={true}
               scaleOnHover={true}
               ariaLabel="Top recruiting partners"
               className="py-6"
             />
          </div>
        </div>

        {/* Sector-wise Distribution */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">Placement Distribution by Sector</h3>
            <div className="space-y-4">
              {sectorData.map((sector, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{sector.name}</span>
                      <span className="text-sm text-muted-foreground">{sector.percentage}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <AnimatedBar
                        percentage={sector.percentage}
                        className="h-2 rounded-full"
                        style={{ backgroundColor: sector.color }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">Placement Trends (2020-2024)</h3>
            <div className="bg-background rounded-lg p-6">
              <div className="space-y-4">
                {[
                  { year: 2024, pct: 94, color: "#2563EB" },
                  { year: 2023, pct: 86, color: "#059669" },
                  { year: 2022, pct: 82, color: "#7C3AED" },
                  { year: 2021, pct: 78, color: "#EA580C" },
                  { year: 2020, pct: 75, color: "#0D9488" },
                ].map((row) => (
                  <div key={row.year} className="flex justify-between items-center">
                    <span>{row.year}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-secondary rounded-full h-2">
                        <AnimatedBar percentage={row.pct} className="h-2 rounded-full" style={{ backgroundColor: row.color }} />
                      </div>
                      <span className="text-sm font-medium">{row.pct}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Student Success Stories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-heading font-bold mb-4">Success Stories</h3>
            <p className="text-muted-foreground">
              Hear from our alumni who are making their mark in the industry
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {testimonial.package}
                      </Badge>
                    </div>
                  </div>
                  <blockquote className="text-sm text-muted-foreground italic">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* For Recruiters Section */}
        <div className="bg-background rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                For Recruiters
              </Badge>
              <h3 className="text-2xl font-heading font-bold mb-6">
                Partner with MLRITM for <span className="text-primary">Top Talent</span>
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Access to 2000+ Students</p>
                    <p className="text-sm text-muted-foreground">
                      Across all engineering disciplines and management programs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Industry-Ready Graduates</p>
                    <p className="text-sm text-muted-foreground">
                      Trained with latest technologies and industry best practices
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Comprehensive Support</p>
                    <p className="text-sm text-muted-foreground">
                      End-to-end recruitment assistance and campus facilities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6">
              <h4 className="text-xl font-heading font-bold mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">placements@mlritm.ac.in</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 40 2345 6789</p>
                  </div>
                </div>
                <Button className="w-full mt-6 group">
                  Schedule Campus Visit
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}