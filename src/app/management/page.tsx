"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";

export default function ManagementPage() {
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
          <h1 className="text-5xl font-bold text-foreground mb-8">
            Management Desk
          </h1>
        </motion.div>

        {/* Marri Laxman Reddy Section */}
        <motion.div 
          className="bg-card border border-border rounded-xl p-8 mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left - Image */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-80 h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/management1.jpg"
                  alt="Marri Laxman Reddy - Chairman"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Right - Information */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground uppercase">
                MARRI LAXMAN REDDY - Chairman
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sri Marri Laxman Reddy, Founder Chairman of Marri Educational Group of Institutions, 
                  has dedicated over 22 years to advancing quality education at school and college levels. 
                  With a strong vision for empowering youth through learning, he has been a guiding force 
                  in the educational landscape, aiming to instill values, knowledge, and skills in young minds.
                </p>
                
                <p>
                  The Marri Laxman Reddy Institute of Technology & Management, established in 2009 under 
                  the Marri Educational Society, represents the realization of his dreams for higher education. 
                  This institution embodies his commitment to fostering excellence in technical and management education.
                </p>
                
                <p>
                  In addition, he is the founder chairman of MLR Institute of Technology, MLR Institute of Pharmacy, 
                  St. Martin's Engineering College, and St. Martin's Schools at Balanagar, Chintal, and Malkajgiri. 
                  Beyond education, Sri Marri Laxman Reddy is a distinguished international athlete, respected for 
                  his achievements and dedication.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Marri Rajasekhar Reddy Section */}
        <motion.div 
          className="bg-card border border-border rounded-xl p-8 mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left - Image */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="relative w-80 h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/management2.jpg"
                  alt="Marri Rajasekhar Reddy - Founder & Secretary"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Right - Information */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h2 className="text-3xl font-bold text-foreground uppercase">
                MARRI RAJASEKHAR REDDY - Founder & Secretary
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sri Marri Rajasekhar Reddy, Founder & Secretary of Marri Educational Group of Institutions, 
                  has been instrumental in the strategic development and growth of the educational institutions 
                  under the Marri Educational Society. His visionary leadership and commitment to educational 
                  excellence have been the driving force behind the success of multiple institutions.
                </p>
                
                <p>
                  With a deep understanding of educational needs and a passion for nurturing young talent, 
                  he has played a crucial role in establishing state-of-the-art infrastructure and implementing 
                  innovative educational practices across all institutions. His dedication to providing quality 
                  education has made a significant impact on thousands of students' lives.
                </p>
                
                <p>
                  Sri Marri Rajasekhar Reddy's leadership extends beyond education, as he actively contributes 
                  to community development and social welfare initiatives. His commitment to excellence and 
                  his forward-thinking approach continue to shape the future of education in the region.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Management Team Section */}
        <motion.div 
          className="bg-card border border-border rounded-xl p-8 mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our management team is committed to providing visionary leadership and ensuring 
              the continued growth and excellence of our educational institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Director */}
            <div className="bg-accent/50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Director</h3>
              <p className="text-muted-foreground">
                Leading academic excellence and institutional development with strategic vision and commitment.
              </p>
            </div>

            {/* Principal */}
            <div className="bg-accent/50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Principal</h3>
              <p className="text-muted-foreground">
                Ensuring quality education delivery and student success through innovative teaching methodologies.
              </p>
            </div>

            {/* Governing Body */}
            <div className="bg-accent/50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Governing Body</h3>
              <p className="text-muted-foreground">
                Providing strategic oversight and governance to maintain institutional standards and growth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <ContactFooter />
    </div>
  );
}
