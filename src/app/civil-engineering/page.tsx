"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Award, Building, Globe, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";

export default function CivilEngineeringPage() {
  const departmentData = {
    id: "civil",
    name: "Civil Engineering Department",
    image: "/images/departments/civil.jpg",
    tagline: "Civil Engineers: Creating Tomorrow Today",
    description: "Civil Engineering is a broad field of engineering that deals with the planning, construction, and maintenance of structures, or public works, as they are related to earth, water, or civilization and their processes. Civil Engineering today deals with power plants, bridges, roads, railways, structures, water supply, irrigation, the natural environment, sewer, flood control, transportation, and traffic. Civil Engineering may be regarded as the profession that makes the world a more agreeable place to live in.",
    quote: {
      text: "The direction in which education starts a man will determine his future life",
      author: "Plato"
    },
    history: "The department of civil engineering was established in the academic year 2009-2010 with an intake of 60 students. This Department is offering one M.Tech programme, named Structural Engineering with the intake of 24 students. The department has well qualified and experienced faculty.",
    programs: [
      "B.Tech in Civil Engineering (Intake: 60 students)",
      "M.Tech in Structural Engineering (Intake: 24 students)"
    ],
    highlights: [
      "Well qualified and experienced faculty members",
      "Faculty doing consultancy work in concrete, survey, structural, environmental and soil",
      "Expert lectures from reputed institutions like JNTUH, APSRAC, Osmania University",
      "Technical excellence and modern infrastructure facilities",
      "Latest version of software and highly sophisticated instruments",
      "Focus on power plants, bridges, roads, railways, and infrastructure",
      "Water supply, irrigation, and environmental engineering",
      "Transportation and traffic engineering expertise"
    ],
    faculty: 15,
    students: 84,
    vision: "The Civil Engineering department strives to impart quality education by extracting the innovative skills of students and to face the challenges in latest technological advancements and to serve the society.",
    mission: [
      "Provide quality education and to motivate students towards professionalism",
      "Address the advanced technologies in research and industrial issues"
    ],
    achievements: [
      "Established in 2009-2010 with strong foundation",
      "B.Tech program with 60 student intake capacity",
      "M.Tech Structural Engineering program with 24 student intake",
      "Expert lectures from JNTUH, APSRAC, Osmania University",
      "Consultancy services to farmers and industries",
      "Modern infrastructure with latest software and instruments",
      "Focus on societal service through engineering solutions"
    ]
  };

  return (
    <div className="min-h-screen bg-background pt-40">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 mb-4 hover:bg-accent"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            {departmentData.name}
          </h1>
          <p className="text-2xl text-primary font-semibold mb-6">
            {departmentData.tagline}
          </p>
          <blockquote className="border-l-4 border-primary pl-6 mb-6 italic text-muted-foreground">
            <p className="text-lg">"{departmentData.quote.text}"</p>
            <footer className="text-sm mt-2 text-primary font-medium">
              — {departmentData.quote.author}
            </footer>
          </blockquote>
        </motion.div>

        {/* Main Content Grid - Image Left, Text Right */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-start mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Left Column - Image */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={departmentData.image}
                alt={departmentData.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Quick Facts Card */}
            <div className="bg-accent/50 rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4 text-lg">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{departmentData.faculty}</div>
                  <div className="text-sm text-muted-foreground">Faculty Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{departmentData.students}</div>
                  <div className="text-sm text-muted-foreground">Total Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2009-10</div>
                  <div className="text-sm text-muted-foreground">Established</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">60</div>
                  <div className="text-sm text-muted-foreground">B.Tech Intake</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Building className="w-6 h-6 text-primary" />
                Department Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {departmentData.description}
              </p>
            </div>

            {/* Programs Offered */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Programs Offered
              </h3>
              <ul className="space-y-3">
                {departmentData.programs.map((program, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center gap-3 text-muted-foreground"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    <span className="text-base">{program}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Key Highlights */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Key Highlights
              </h3>
              <ul className="space-y-3">
                {departmentData.highlights.map((highlight, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-3 text-muted-foreground"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-base leading-relaxed">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Department History */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Building className="w-5 h-5 text-primary" />
              Department History
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {departmentData.history}
            </p>
          </div>
        </motion.div>

        {/* Vision & Mission Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {departmentData.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Mission
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                To fulfill the promised vision through the following strategic characteristics and aspirations:
              </p>
              <ul className="space-y-2">
                {departmentData.mission.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Globe className="w-6 h-6 text-primary" />
            Achievements & Recognition
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {departmentData.achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Footer */}
      <ContactFooter />
    </div>
  );
}
