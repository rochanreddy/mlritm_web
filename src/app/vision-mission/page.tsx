"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, Target, Award } from "lucide-react";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";

export default function VisionMissionPage() {
  return (
    <div className="min-h-screen bg-background pt-40">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 mb-8 hover:bg-accent"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Main Heading Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold text-foreground mb-8 leading-tight">
            Empowering Futures
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
            Fostering an environment where students thrive, equipped with resources, mentorship, 
            and opportunities to achieve their fullest potential and career success.
          </p>
        </motion.div>

        {/* Three Column Policy Section */}
        <motion.div 
          className="grid md:grid-cols-3 gap-12 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Vision Column */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To cultivate talented engineers who are ethically grounded and skilled, equipped with 
              quality research and technologies, embodying excellence in academia.
            </p>
          </motion.div>

          {/* Mission Column */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fostering talented engineers through rigorous education, a supportive environment, 
              global awareness, and partnerships that prepare students for interdisciplinary 
              research and leadership.
            </p>
          </motion.div>

          {/* Quality Policy Column */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Quality Policy</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The management ensures quality service for all stakeholders, focusing on continuous 
              improvement, accountability, transparency, and accessible information across all levels.
            </p>
          </motion.div>
        </motion.div>

        {/* Additional Content Section */}
        <motion.div 
          className="bg-card border border-border rounded-xl p-12 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Our Commitment to Excellence
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              At MLR Institute of Technology and Management, we are dedicated to providing 
              world-class education that prepares our students for the challenges of tomorrow. 
              Through our comprehensive approach to learning, cutting-edge facilities, and 
              experienced faculty, we create an environment where innovation thrives and 
              dreams become reality.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <ContactFooter />
    </div>
  );
}
