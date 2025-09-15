"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import DepartmentDetail from "./DepartmentDetail";
import { 
  Code, 
  Cpu,
  Building,
  Calculator,
  Palette,
  Database,
  Cog,
  Globe,
  Zap,
  GraduationCap,
  BookOpen
} from "lucide-react";

interface Program {
  id: string;
  category: "undergraduate" | "postgraduate" | "doctoral";
  degree: string;
  specialization: string;
  hoverText: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
}

const programs: Program[] = [
  // Undergraduate Programs (BTech)
  {
    id: "cse",
    category: "undergraduate",
    degree: "B.Tech",
    specialization: "CSE",
    hoverText: "AI/ML Focus with Industry Partnerships and Research Labs",
    icon: Code,
    image: "/images/cse.jpg"
  },
  {
    id: "ece",
    category: "undergraduate", 
    degree: "B.Tech",
    specialization: "ECE",
    hoverText: "VLSI Design, Embedded Systems, and IoT Labs",
    icon: Cpu,
    image: "/images/ece.jpg"
  },
  {
    id: "eee",
    category: "undergraduate",
    degree: "B.Tech",
    specialization: "EEE",
    hoverText: "Power Systems, Renewable Energy, and Smart Grid Technologies",
    icon: Zap,
    image: "/images/eee.jpg"
  },
  {
    id: "csc",
    category: "undergraduate",
    degree: "B.Tech",
    specialization: "CSC",
    hoverText: "Computer Science with Core Computing Fundamentals",
    icon: Code,
    image: "/images/csc.jpg"
  },
  {
    id: "csm",
    category: "undergraduate",
    degree: "B.Tech",
    specialization: "CSM",
    hoverText: "Mathematical Foundations with Computational Intelligence",
    icon: Calculator,
    image: "/images/aiml.jpg"
  },
  {
    id: "csd",
    category: "undergraduate",
    degree: "B.Tech",
    specialization: "CSD",
    hoverText: "Creative Design with Digital Technology Integration",
    icon: Palette,
    image: "/images/csd.jpg"
  },
  {
    id: "csit",
    category: "undergraduate",
    degree: "B.Tech",
    specialization: "CSIT",
    hoverText: "Information Systems with Modern Web Technologies",
    icon: Globe,
    image: "/images/csit.jpg"
  },
  {
    id: "it",
    category: "undergraduate",
    degree: "B.Tech",
    specialization: "IT",
    hoverText: "Software Development and Database Management Systems",
    icon: Database,
    image: "/images/it.jpg"
  },
  {
    id: "civil",
    category: "undergraduate",
    degree: "B.Tech", 
    specialization: "Civil Engineering",
    hoverText: "Infrastructure Development with Modern Construction Methods",
    icon: Building,
    image: "/images/civil.jpg"
  },
  {
    id: "mech",
    category: "undergraduate",
    degree: "B.Tech",
    specialization: "Mechanical Engineering", 
    hoverText: "Robotics, CAD/CAM, and Advanced Manufacturing",
    icon: Cog,
    image: "/images/mech.jpg"
  },
  // Postgraduate Programs
  {
    id: "mba",
    category: "postgraduate",
    degree: "MBA",
    specialization: "Business Administration",
    hoverText: "Strategic Management, Finance, Marketing, and Entrepreneurship",
    icon: GraduationCap,
    image: "/images/mba.jpg"
  },
  {
    id: "mtech-cse",
    category: "postgraduate",
    degree: "M.Tech",
    specialization: "Computer Science",
    hoverText: "Advanced Algorithms, Machine Learning, and Research Focus",
    icon: BookOpen,
    image: "/images/mtech.jpg"
  }
];

const categoryLabels = {
  undergraduate: "Undergraduate Programs",
  postgraduate: "Postgraduate Programs", 
  doctoral: "Doctoral Programs"
};

// Department details for detailed view
const departmentDetails = {
  civil: {
    id: "civil",
    name: "Civil Engineering Department",
    image: "/images/departments/civil.jpg",
    description: "The Civil Engineering Department at MLRITM is committed to providing world-class education in infrastructure development, construction technology, and sustainable engineering practices. Our department combines theoretical knowledge with practical applications, preparing students for leadership roles in the construction and infrastructure industry. We focus on modern construction methods, environmental sustainability, and innovative engineering solutions that address real-world challenges.",
    programs: [
      "B.Tech in Civil Engineering (4 years)",
      "M.Tech in Structural Engineering (2 years)",
      "M.Tech in Environmental Engineering (2 years)",
      "Ph.D in Civil Engineering (Research)"
    ],
    highlights: [
      "State-of-the-art laboratories with modern equipment",
      "Industry partnerships with leading construction companies",
      "Focus on sustainable and green building technologies",
      "Strong emphasis on practical training and internships",
      "Expert faculty with industry and research experience",
      "Advanced software training (AutoCAD, STAAD Pro, ETABS)",
      "Regular industry visits and expert lectures",
      "Research opportunities in structural engineering and environmental science"
    ],
    faculty: 25,
    students: 400,
    achievements: [
      "NBA Accredited Program (National Board of Accreditation)",
      "100% placement record for the past 5 years",
      "Students placed in top companies like L&T, Tata Projects, HCC",
      "Research publications in international journals",
      "Industry-sponsored research projects worth ₹50+ Lakhs",
      "Winner of national-level technical competitions",
      "Active participation in professional bodies like IEI and ICI",
      "Collaboration with international universities for research"
    ]
  }
};

export default function AcademicsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  const filteredPrograms = selectedCategory === "all" 
    ? programs 
    : programs.filter(program => program.category === selectedCategory);

  const categories = [
    { id: "all", label: "All Programs" },
    { id: "undergraduate", label: "BTech Courses" },
    { id: "postgraduate", label: "PG Courses" }
  ];

  const handleDepartmentClick = (programId: string) => {
    if (programId === "civil") {
      setSelectedDepartment(programId);
    }
  };

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container max-w-7xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Academic Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of undergraduate, postgraduate, and doctoral programs 
            designed to shape future leaders in technology, business, and research.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="text-sm font-medium px-6 py-2"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {filteredPrograms.map((program) => {
            const IconComponent = program.icon;
            return (
              <div 
                key={program.id}
                className="group relative bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer"
                onClick={() => handleDepartmentClick(program.id)}
              >
                {/* Program Image */}
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.specialization}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
                
                {/* Program Info */}
                <div className="p-4">
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-sm font-semibold text-card-foreground leading-tight mb-1">
                      {program.specialization}
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium">
                      {program.degree}
                    </p>
                  </div>
                </div>
                
                {/* Hover Text Overlay */}
                <div className="absolute inset-0 bg-primary/95 text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-center">
                  <div>
                    <p className="text-xs font-medium leading-relaxed mb-2">
                      {program.hoverText}
                    </p>
                    <div className="text-xs opacity-90">
                      {program.degree} • {program.specialization}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No programs found for the selected category.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-card-foreground mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore our admission process and find the program that aligns with your career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="font-medium">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="font-medium">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>

        {/* Department Detail Modal */}
        <AnimatePresence>
          {selectedDepartment && (
            <DepartmentDetail
              department={departmentDetails[selectedDepartment as keyof typeof departmentDetails]}
              onClose={() => setSelectedDepartment(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}