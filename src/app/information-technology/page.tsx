"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Award, Building, Globe, ArrowLeft, Database } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";

export default function InformationTechnologyPage() {
  const departmentData = {
    id: "it",
    name: "Information Technology Department",
    image: "/images/departments/it.jpg",
    tagline: "Empowering Digital Transformation",
    description: "Information Technology is a comprehensive field that focuses on the use of computers, software, and telecommunications equipment to store, retrieve, transmit, and manipulate data. Our department emphasizes software development, database management systems, web technologies, and IT infrastructure management. We prepare students for careers in software engineering, system administration, database management, and enterprise application development.",
    quote: {
      text: "Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart",
      author: "Steve Jobs"
    },
    history: "The Department of Information Technology was established to provide specialized education in the field of IT systems and applications. Our department has grown to become a leading center for IT education, offering programs that combine theoretical knowledge with practical applications in modern information systems, software development, and database technologies.",
    programs: [
      "B.Tech in Information Technology (Intake: 60 students)",
      "M.Tech in Information Technology (Intake: 18 students)"
    ],
    highlights: [
      "Modern computer laboratories with latest hardware and software",
      "Expert faculty with industry and research experience",
      "Focus on software development and database management systems",
      "Advanced programming languages and web technologies training",
      "Industry partnerships with leading IT companies",
      "Enterprise application development and system administration",
      "Software engineering methodologies and project management",
      "Research opportunities in emerging IT technologies"
    ],
    faculty: 18,
    students: 120,
    vision: "To be a premier department in Information Technology, recognized for excellence in education, research, and innovation, producing globally competent IT professionals who can contribute to the advancement of digital technologies and information systems.",
    mission: [
      "Provide quality education in information technology fundamentals",
      "Foster innovation and research in emerging IT technologies",
      "Develop industry-ready professionals through practical training and projects",
      "Promote ethical IT practices and digital responsibility",
      "Establish strong industry-academia partnerships for mutual growth"
    ],
    achievements: [
      "NBA Accredited Program with excellent academic standards",
      "Consistent 92%+ placement record in IT companies",
      "Students placed in companies like Infosys, TCS, Wipro, HCL, Accenture",
      "Active research publications in international journals and conferences",
      "Industry-sponsored projects and internships in software development",
      "Winner of national and international programming competitions",
      "Active participation in professional bodies like ACM, IEEE",
      "Collaboration with international universities for research and exchange programs"
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
                  <div className="text-2xl font-bold text-primary">60</div>
                  <div className="text-sm text-muted-foreground">B.Tech Intake</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">92%+</div>
                  <div className="text-sm text-muted-foreground">Placement Rate</div>
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
                <Database className="w-6 h-6 text-primary" />
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
