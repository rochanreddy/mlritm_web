"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Counter } from "@/components/ui/counter"
import { 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  Trophy,
  Music,
  BookOpen,
  Heart,
  MapPin,
  Calendar,
  Star,
  Quote
} from "lucide-react"

interface StudentLifeSectionProps {
  className?: string
}

const campusActivities = [
  {
    id: 1,
    title: "Tech Fest 2024",
    category: "Technical",
    image: "/images/techfest.jpg",
    description: "Annual technical festival showcasing innovation and creativity"
  },
  {
    id: 2,
    title: "Cultural Night",
    category: "Cultural",
    image: "/images/cultural.jpg",
    description: "Celebrating diversity through music, dance, and performances"
  },
  {
    id: 3,
    title: "Sports Championship",
    category: "Sports",
    image: "/images/sports.jpg",
    description: "Inter-college sports competitions and tournaments"
  },
  {
    id: 4,
    title: "Research Symposium",
    category: "Academic",
    image: "/images/research.jpg",
    description: "Student research presentations and academic excellence"
  }
]

const facilities = [
  {
    icon: Users,
    title: "Student Clubs",
    description: "50+ active clubs and societies covering diverse interests",
    count: "50+",
    image: "/images/clubs.jpeg"
  },
  {
    icon: Trophy,
    title: "Sports Facilities",
    description: "State-of-the-art gymnasium, courts, and athletic facilities",
    count: "15+",
    image: "/images/gymkhana.jpg"
  },
  {
    icon: Music,
    title: "Cultural Activities",
    description: "Music rooms, auditoriums, and performance spaces",
    count: "10+",
    image: "/images/auditorium.jpg"
  },
  {
    icon: BookOpen,
    title: "Academic Support",
    description: "Tutoring centers, study groups, and mentorship programs",
    count: "24/7",
    image: "/images/library.jpg"
  }
]

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Final Year, Computer Science",
    content: "The vibrant campus life at MLRITM has shaped me into a well-rounded individual. From technical competitions to cultural events, every day brings new opportunities to grow.",
    rating: 5,
    image: "/api/placeholder/80/80"
  },
  {
    id: 2,
    name: "Arjun Reddy",
    role: "Third Year, Electronics",
    content: "Being part of the robotics club and participating in national competitions has been incredible. The support from faculty and peers is unmatched.",
    rating: 5,
    image: "/api/placeholder/80/80"
  },
  {
    id: 3,
    name: "Sneha Patel",
    role: "Second Year, Information Technology",
    content: "The cultural diversity and inclusive environment make MLRITM feel like home. I've made lifelong friendships and discovered new passions here.",
    rating: 5,
    image: "/api/placeholder/80/80"
  }
]

export default function StudentLifeSection({ className }: StudentLifeSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Auto-advance testimonials every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % campusActivities.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + campusActivities.length) % campusActivities.length)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Handle drag gestures for campus activities carousel
  const handleCampusDrag = (event: any, info: any) => {
    const swipeThreshold = 50
    if (info.offset.x > swipeThreshold) {
      prevSlide()
    } else if (info.offset.x < -swipeThreshold) {
      nextSlide()
    }
  }

  // Handle drag gestures for testimonials carousel
  const handleTestimonialDrag = (event: any, info: any) => {
    const swipeThreshold = 50
    if (info.offset.x > swipeThreshold) {
      prevTestimonial()
    } else if (info.offset.x < -swipeThreshold) {
      nextTestimonial()
    }
  }

  return (
    <section className={`bg-background py-16 lg:py-24 ${className}`}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium">
              Campus Life
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Vibrant Campus
              <span className="block text-primary">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover a dynamic campus environment where academic excellence meets personal growth, 
              cultural diversity, and lifelong friendships.
            </p>
          </motion.div>
        </div>

        {/* Campus Activities Carousel */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-heading font-semibold">Campus Highlights</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="h-10 w-10 p-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="h-10 w-10 p-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex w-full"
              animate={{ x: -currentSlide * 100 + "%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleCampusDrag}
              style={{ cursor: "grab" }}
              whileDrag={{ cursor: "grabbing" }}
            >
              {campusActivities.map((activity) => (
                <div key={activity.id} className="w-full flex-shrink-0">
                  <Card className="border-0 bg-card shadow-lg overflow-hidden rounded-none">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="relative h-64 lg:h-96 bg-muted overflow-hidden">
                        <img
                          src={activity.image}
                          alt={activity.title}
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <Badge variant="secondary" className="bg-card/90 text-card-foreground">
                            {activity.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-8 flex flex-col justify-center">
                        <h4 className="text-2xl font-heading font-semibold mb-4">
                          {activity.title}
                        </h4>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                          {activity.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>Annual Event</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>Campus Wide</span>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {campusActivities.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-heading font-semibold mb-4">
              World-Class Facilities
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art infrastructure supporting holistic development
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => {
              const match = facility.count.match(/(\d+(?:,\d+)?)(.*)/)
              const numericValue = match ? parseInt(match[1].replace(/,/g, "")) : 0
              const suffix = match ? match[2] : ""

              return (
                <motion.div
                  key={facility.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card hover:shadow-lg transition-all duration-300 group overflow-hidden relative">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-70 transition-opacity duration-300"
                      style={{ backgroundImage: `url(${facility.image})` }}
                    />
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                    
                    <CardContent className="p-6 text-center relative z-10">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-primary/30 transition-colors duration-300 border border-primary/30">
                        <facility.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2 drop-shadow-lg">
                        {match ? (
                          <Counter from={0} to={numericValue} duration={2} delay={0.1} suffix={suffix} />
                        ) : (
                          facility.count
                        )}
                      </div>
                      <h4 className="font-heading font-bold mb-3 text-black text-lg drop-shadow-lg">
                        {facility.title}
                      </h4>
                      <p className="text-sm text-black font-semibold leading-relaxed drop-shadow-md">
                        {facility.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Student Testimonials */}
        <div className="bg-muted/50 rounded-3xl p-8 lg:p-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-2">
                Student Voices
              </h3>
              <p className="text-muted-foreground">
                Hear from our students about their campus experience
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="h-10 w-10 p-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="h-10 w-10 p-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={handleTestimonialDrag}
                style={{ cursor: "grab" }}
                whileDrag={{ cursor: "grabbing" }}
              >
                <Card className="bg-card border-0 shadow-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <Quote className="h-8 w-8 text-primary/30 flex-shrink-0 mt-1" />
                      <p className="text-lg leading-relaxed text-foreground">
                        {testimonials[currentTestimonial].content}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                          <Heart className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold">
                            {testimonials[currentTestimonial].name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonials[currentTestimonial].role}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}