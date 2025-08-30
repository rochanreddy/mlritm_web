"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Counter } from "@/components/ui/counter"
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { 
  BookOpen, 
  FlaskConical, 
  Bed, 
  Coffee, 
  Wifi, 
  Car, 
  Gamepad2, 
  GraduationCap,
  Users,
  MapPin,
  Play,
  ArrowRight,
  Building2,
  Library,
  Utensils
} from 'lucide-react'

interface FacilityCategory {
  id: string
  name: string
  icon: React.ReactNode
  description: string
  facilities: Facility[]
}

interface Facility {
  id: string
  name: string
  image: string
  description: string
  features: string[]
  capacity?: string
  area?: string
}

interface InfrastructureStats {
  label: string
  value: string
  icon: React.ReactNode
}

const infrastructureStats: InfrastructureStats[] = [
  {
    label: "Campus Area",
    value: "17+ Acres",
    icon: <MapPin className="w-5 h-5" />
  },
  {
    label: "Academic Blocks",
    value: "4 Buildings",
    icon: <Building2 className="w-5 h-5" />
  },
  {
    label: "Laboratories",
    value: "20+ Labs",
    icon: <FlaskConical className="w-5 h-5" />
  },
  {
    label: "Library Collection",
    value: "5000+ Books",
    icon: <Library className="w-5 h-5" />
  },
  {
    label: "Hostel Capacity",
    value: "1500+ Students",
    icon: <Bed className="w-5 h-5" />
  },
  {
    label: "Cafeteria Seating",
    value: "170+ Capacity",
    icon: <Utensils className="w-5 h-5" />
  }
]

const facilityCategories: FacilityCategory[] = [
  {
    id: "academic",
    name: "Academic Facilities",
    icon: <GraduationCap className="w-5 h-5" />,
    description: "State-of-the-art classrooms and learning spaces",
    facilities: [
      {
        id: "classrooms",
        name: "Smart Classrooms",
        image: "/images/smartclassroom.jpg",
        description: "Technology-enabled learning environments with modern audio-visual equipment",
        features: ["Digital Projectors", "Interactive Whiteboards", "AC & Comfortable Seating", "High-Speed Internet"],
        capacity: "60-80 Students",
        area: "Multiple Blocks"
      },
      {
        id: "auditorium",
        name: "Main Auditorium",
        image: "/images/auditorium.jpg",
        description: "Grand auditorium for seminars, conferences, and cultural events",
        features: ["Advanced Sound System", "LED Display", "Recording Facilities", "VIP Seating"],
        capacity: "1,200 Seats",
        area: "Central Block"
      },
      {
        id: "seminar-halls",
        name: "Seminar Halls",
        image: "/images/seminar-hall.jpg",
        description: "Flexible spaces for workshops, presentations, and group discussions",
        features: ["Modular Seating", "Presentation Equipment", "Video Conferencing", "Acoustic Design"],
        capacity: "50-150 Students",
        area: "All Academic Blocks"
      }
    ]
  },
  {
    id: "laboratories",
    name: "Laboratories",
    icon: <FlaskConical className="w-5 h-5" />,
    description: "Advanced research and practical learning facilities",
    facilities: [
      {
        id: "computer-labs",
        name: "Computer Laboratories",
        image: "/images/computerlab.jpg",
        description: "High-performance computing labs with latest software and hardware",
        features: ["Latest Workstations", "Licensed Software", "High-Speed Network", "24/7 Access"],
        capacity: "40-60 Systems per Lab",
        area: "IT Block"
      },
      {
        id: "engineering-labs",
        name: "Engineering Labs",
        image: "/images/engineeringlab.jpeg",
        description: "Specialized laboratories for hands-on engineering experiments",
        features: ["Modern Equipment", "Safety Systems", "Research Facilities", "Industry Standards"],
        capacity: "20-30 Students",
        area: "Engineering Blocks"
      },
      {
        id: "research-centers",
        name: "Research Centers",
        image: "/images/researchlab.jpg",
        description: "Dedicated spaces for advanced research and innovation projects",
        features: ["Specialized Equipment", "Clean Rooms", "Data Centers", "Collaboration Spaces"],
        capacity: "Research Teams",
        area: "Research Block"
      }
    ]
  },
  {
    id: "library",
    name: "Library & Resources",
    icon: <BookOpen className="w-5 h-5" />,
    description: "Comprehensive learning resources and study spaces",
    facilities: [
      {
        id: "central-library",
        name: "Central Library",
        image: "/images/library.jpg",
        description: "Modern library with extensive collection and digital resources",
        features: ["50,000+ Books", "Digital Library", "Reading Rooms", "Silent Study Areas"],
        capacity: "500+ Seating",
        area: "Central Building"
      },
      {
        id: "digital-library",
        name: "Digital Library",
        image: "/images/library.jpg",
        description: "Access to online databases, e-books, and digital resources",
        features: ["E-Journals", "Online Databases", "Digital Collections", "Remote Access"],
        capacity: "100+ Terminals",
        area: "Library Building"
      },
      {
        id: "study-spaces",
        name: "Study Spaces",
        image: "/images/campus.jpg",
        description: "Quiet environments for individual and group study sessions",
        features: ["Group Study Rooms", "Silent Zones", "Discussion Areas", "24/7 Access"],
        capacity: "Various Configurations",
        area: "Multiple Locations"
      }
    ]
  },
  {
    id: "hostels",
    name: "Accommodation",
    icon: <Bed className="w-5 h-5" />,
    description: "Comfortable and secure residential facilities",
    facilities: [
      {
        id: "boys-hostels",
        name: "Boys Hostels",
        image: "/images/boyshostel.jpg",
        description: "Well-furnished accommodation with modern amenities",
        features: ["Furnished Rooms", "Wi-Fi Connectivity", "24/7 Security", "Common Areas"],
        capacity: "1,500+ Students",
        area: "Hostel Complex A & B"
      },
      {
        id: "girls-hostels",
        name: "Girls Hostels",
        image: "/images/girlshostel.jpg",
        description: "Safe and comfortable residential facilities for female students",
        features: ["Secure Environment", "Modern Facilities", "Recreation Rooms", "Study Areas"],
        capacity: "1,000+ Students",
        area: "Hostel Complex C & D"
      },
      {
        id: "guest-house",
        name: "Guest House",
        image: "/images/boyshostel.jpg",
        description: "Accommodation facility for visiting faculty and guests",
        features: ["AC Rooms", "Dining Facility", "Conference Room", "Parking"],
        capacity: "20 Rooms",
        area: "Campus Entrance"
      }
    ]
  },
  {
    id: "recreation",
    name: "Recreation & Sports",
    icon: <Gamepad2 className="w-5 h-5" />,
    description: "Sports and recreational facilities for holistic development",
    facilities: [
      {
        id: "sports-complex",
        name: "Sports Complex",
        image: "/images/sports.jpg",
        description: "Multi-sport facility with indoor and outdoor courts",
        features: ["Basketball Courts", "Badminton Courts", "Table Tennis", "Gymnasium"],
        capacity: "Multiple Sports",
        area: "Sports Block"
      },
      {
        id: "playground",
        name: "Sports Ground",
        image: "/images/ground.jpg",
        description: "Large outdoor space for cricket, football, and athletics",
        features: ["Cricket Ground", "Football Field", "Athletics Track", "Spectator Stands"],
        capacity: "Multiple Teams",
        area: "10 Acres"
      },
      {
        id: "cafeteria",
        name: "Food Court & Cafeteria",
        image: "/images/cateen.jpeg",
        description: "Multiple dining options with variety of cuisines",
        features: ["Multiple Cuisines", "Hygienic Preparation", "Spacious Seating", "Affordable Pricing"],
        capacity: "800+ Seating",
        area: "Central Location"
      }
    ]
  }
]

export default function CampusSection() {
  const [activeCategory, setActiveCategory] = useState("academic")
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null)

  const activeCategoryData = facilityCategories.find(cat => cat.id === activeCategory)

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container max-w-7xl mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Badge variant="secondary" className="mb-4">
              Campus Infrastructure
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              World-Class Infrastructure
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Explore our state-of-the-art facilities designed to provide an exceptional learning environment 
              and campus experience for our students.
            </p>
          </motion.div>
        </div>

        {/* Infrastructure Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {infrastructureStats.map((stat, index) => (
            <Card key={stat.label} className="text-center">
              <CardContent className="p-4">
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-primary">{stat.icon}</div>
                  <div className="text-2xl font-bold font-heading">
                    {(() => {
                      const match = stat.value.match(/(\d+(?:,\d+)?)(.*)/)
                      const numericValue = match ? parseInt(match[1].replace(/,/g, "")) : 0
                      const suffix = match ? match[2] : ""
                      return match ? (
                        <Counter from={0} to={numericValue} duration={2} delay={0.1} suffix={suffix} />
                      ) : (
                        stat.value
                      )
                    })()}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Facility Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid grid-cols-2 lg:grid-cols-5 w-full mb-8">
              {facilityCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center space-x-2 px-4 py-2"
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {facilityCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="mb-8">
                  <h3 className="text-2xl font-heading font-bold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.facilities.map((facility, index) => (
                    <motion.div
                      key={facility.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
                        <div className="relative overflow-hidden">
                          <img
                            src={facility.image}
                            alt={facility.name}
                            className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Button
                              size="sm"
                              variant="secondary"
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              onClick={() => setSelectedFacility(facility)}
                            >
                              <Play className="w-4 h-4 mr-2" />
                              Virtual Tour
                            </Button>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h4 className="text-xl font-heading font-semibold mb-2">{facility.name}</h4>
                          <p className="text-muted-foreground text-sm mb-4">{facility.description}</p>
                          
                          <div className="space-y-2 mb-4">
                            {facility.capacity && (
                              <div className="flex items-center text-sm">
                                <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                                <span>{facility.capacity}</span>
                              </div>
                            )}
                            {facility.area && (
                              <div className="flex items-center text-sm">
                                <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                                <span>{facility.area}</span>
                              </div>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {facility.features.slice(0, 3).map((feature, featureIndex) => (
                              <Badge key={featureIndex} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                            {facility.features.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{facility.features.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Virtual Tour CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Experience Our Campus Virtually
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Take a comprehensive virtual tour of our campus and get a feel for the 
                facilities and environment before visiting in person.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  <Play className="w-5 h-5 mr-2" />
                  Start Virtual Tour
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  <MapPin className="w-5 h-5 mr-2" />
                  Schedule Campus Visit
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}