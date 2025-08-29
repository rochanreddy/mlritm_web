"use client"

import { BookOpen, Award, Microscope, Building2, FlaskConical, Lightbulb, Users } from "lucide-react"
import { Counter } from "@/components/ui/counter"

interface ResearchMetric {
  value: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

interface ResearchCenter {
  name: string
  description: string
  focus: string[]
  icon: React.ComponentType<{ className?: string }>
}



const researchMetrics: ResearchMetric[] = [
  {
    value: "15+",
    label: "Research Publications",
    icon: BookOpen
  },
  {
    value: "10+",
    label: "Research Centers",
    icon: Building2
  },
  {
    value: "₹5Cr",
    label: "Research Grants",
    icon: Award
  },
  {
    value: "20+",
    label: "Industry Collaborations",
    icon: Users
  }
]

const researchCenters: ResearchCenter[] = [
  {
    name: "Center for AI & Machine Learning",
    description: "Leading research in artificial intelligence, deep learning, and neural networks with applications in healthcare, automation, and smart systems.",
    focus: ["Deep Learning", "Computer Vision", "NLP", "Robotics"],
    icon: Microscope
  },
  {
    name: "IoT & Embedded Systems Lab",
    description: "Developing innovative IoT solutions, embedded systems, and smart devices for industrial and consumer applications.",
    focus: ["IoT Architecture", "Sensor Networks", "Edge Computing", "Smart Cities"],
    icon: FlaskConical
  },
  {
    name: "Cybersecurity Research Center",
    description: "Advanced research in cybersecurity, cryptography, and information security to address emerging digital threats.",
    focus: ["Network Security", "Cryptography", "Blockchain", "Digital Forensics"],
    icon: Award
  },
  {
    name: "Sustainable Technology Lab",
    description: "Research focused on green technologies, renewable energy systems, and environmental sustainability solutions.",
    focus: ["Green Computing", "Renewable Energy", "Environmental Monitoring", "Sustainability"],
    icon: Lightbulb
  }
]



export default function ResearchSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Research & Innovation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Driving technological advancement through cutting-edge research, fostering innovation, 
            and creating solutions that address real-world challenges across multiple disciplines.
          </p>
        </div>

        {/* Research Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {researchMetrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <div key={index} className="bg-card rounded-lg p-6 text-center border border-border hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-1">
                  {(() => {
                    const match = metric.value.match(/(\d+(?:,\d+)?)(.*)/)
                    const numericValue = match ? parseInt(match[1].replace(/,/g, "")) : 0
                    const suffix = match ? match[2] : ""
                    return match ? (
                      <Counter from={0} to={numericValue} duration={2} delay={0.1} suffix={suffix} />
                    ) : (
                      metric.value
                    )
                  })()}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Research Centers */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              Research Centers of Excellence
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art research facilities equipped with modern infrastructure and led by distinguished faculty members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchCenters.map((center, index) => {
              const IconComponent = center.icon
              return (
                <div key={index} className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-heading font-semibold text-foreground mb-2">
                        {center.name}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {center.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {center.focus.map((area, areaIndex) => (
                      <span 
                        key={areaIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>



        {/* Call to Action */}
        <div className="bg-primary/5 rounded-lg p-8 lg:p-12 text-center border border-primary/10">
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
            Join Our Research Community
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Explore opportunities for collaboration, student research programs, and industry partnerships. 
            Be part of innovative research that shapes the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">
              Research Opportunities
            </button>
            <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors duration-200">
              Industry Partnerships
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}