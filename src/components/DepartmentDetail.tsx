"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, BookOpen, Award, Building, Globe } from "lucide-react";
import Image from "next/image";

interface DepartmentDetailProps {
  department: {
    id: string;
    name: string;
    image: string;
    description: string;
    programs: string[];
    highlights: string[];
    faculty: number;
    students: number;
    achievements: string[];
  };
  onClose: () => void;
}

export default function DepartmentDetail({ department, onClose }: DepartmentDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-card border border-border rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Departments
            </Button>
          </div>
          <h2 className="text-2xl font-bold text-foreground">{department.name}</h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
          {/* Left Side - Information */}
          <div className="space-y-6">
            {/* Overview */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                Department Overview
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {department.description}
              </p>
            </div>

            {/* Programs Offered */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Programs Offered
              </h3>
              <ul className="space-y-2">
                {department.programs.map((program, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {program}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Highlights */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Key Highlights
              </h3>
              <ul className="space-y-2">
                {department.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Statistics */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Department Statistics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-accent/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{department.faculty}+</div>
                  <div className="text-sm text-muted-foreground">Faculty Members</div>
                </div>
                <div className="bg-accent/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{department.students}+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Achievements & Recognition
              </h3>
              <ul className="space-y-2">
                {department.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="sticky top-6">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src={department.image}
                  alt={department.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Additional Info Card */}
              <div className="mt-6 bg-accent/50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Quick Facts</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Established:</span>
                    <span className="font-medium">1998</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Accreditation:</span>
                    <span className="font-medium">NBA Accredited</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Placement Rate:</span>
                    <span className="font-medium text-green-600">95%+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Research Papers:</span>
                    <span className="font-medium">200+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
