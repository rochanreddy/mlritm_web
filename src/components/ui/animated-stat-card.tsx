"use client"

import { motion, useMotionValue, useTransform, animate, useMotionValueEvent, easeOut, useInView } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AnimatedStatCardProps {
  icon: React.ComponentType<{ className?: string }>
  value: string | number
  label: string
  description: string
  trend?: string
  className?: string
}

export function AnimatedStatCard({ 
  icon: Icon, 
  value, 
  label, 
  description, 
  trend,
  className = "" 
}: AnimatedStatCardProps) {
  // Extract numeric value for counting animation
  const numericValue = typeof value === 'string' ? parseFloat(value.replace(/[^\d.]/g, '')) : value
  const suffix = typeof value === 'string' ? value.replace(/[\d.]/g, '') : ''
  
  const [displayValue, setDisplayValue] = useState(0)
  const count = useMotionValue(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, { duration: 2, ease: easeOut })
      return controls.stop
    } else {
      count.set(0)
      setDisplayValue(0)
    }
  }, [numericValue, count, isInView])

  useMotionValueEvent(count, "change", (latest) => {
    setDisplayValue(Math.round(latest))
  })

  return (
    <Card ref={ref} className={`relative overflow-hidden group hover:shadow-lg transition-all duration-300 ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          {trend && (
            <Badge variant="secondary" className="text-xs">
              {trend}
            </Badge>
          )}
        </div>
        <h3 className="text-3xl font-bold mb-1">
          {displayValue}{suffix}
        </h3>
        <p className="text-sm text-muted-foreground mb-1">{label}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
