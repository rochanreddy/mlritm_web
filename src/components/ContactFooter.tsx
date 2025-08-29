"use client"

import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

interface ContactFooterProps {
  className?: string
}

export default function ContactFooter({ className }: ContactFooterProps) {
  return (
         <footer className={`bg-surface-dark text-white ${className}`}>
       <div className="container max-w-7xl mx-auto px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm leading-relaxed">
                  <p className="text-white !important">Marri Laxman Reddy Institute of Technology & Management</p>
                  <p className="text-white !important">Dundigal, Quthbullapur, Medchal-Malkajgiri District</p>
                  <p className="text-white !important">Hyderabad, Telangana - 500043</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white !important">+91 40 2304 1111</p>
                  <p className="text-white !important">+91 40 2304 2222</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white !important">info@mlritm.ac.in</p>
                  <p className="text-white !important">admissions@mlritm.ac.in</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white !important">Office Hours:</p>
                  <p className="text-white !important">Mon - Fri: 9:00 AM - 5:00 PM</p>
                  <p className="text-white !important">Sat: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            
            <div className="grid grid-cols-1 gap-3">
              <Link 
                href="/admissions" 
                className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
              >
                Admissions
              </Link>
              <Link 
                href="/academics" 
                className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
              >
                Academics
              </Link>
              <Link 
                href="/departments" 
                className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
              >
                Departments
              </Link>
              <Link 
                href="/placements" 
                className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
              >
                Placements
              </Link>
              <Link 
                href="/research" 
                className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
              >
                Research
              </Link>
              <Link 
                href="/facilities" 
                className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
              >
                Facilities
              </Link>
              <Link 
                href="/student-life" 
                className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
              >
                Student Life
              </Link>
              <Link 
                href="/alumni" 
                className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
              >
                Alumni
              </Link>
            </div>
          </div>

          {/* Important Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">Important Links</h3>
            
            <div className="grid grid-cols-1 gap-3">
              <Link 
                href="/aicte-approvals" 
                className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
              >
                AICTE Approvals
              </Link>
              <Link 
                href="/university-affiliation" 
                className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
              >
                University Affiliation
              </Link>
              <Link 
                href="/naac-accreditation" 
                className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
              >
                NAAC Accreditation
              </Link>
              <Link 
                href="/nba-accreditation" 
                className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
              >
                NBA Accreditation
              </Link>
              <Link 
                href="/mandatory-disclosure" 
                className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
              >
                Mandatory Disclosure
              </Link>
              <Link 
                href="/grievance-redressal" 
                className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
              >
                Grievance Redressal
              </Link>
              <Link 
                href="/anti-ragging" 
                className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
              >
                Anti-Ragging Policy
              </Link>
              <Link 
                href="/fee-structure" 
                className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
              >
                Fee Structure
              </Link>
            </div>
          </div>

          {/* Social Media & Emergency */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">Connect With Us</h3>
            
            <div className="space-y-6">
              {/* Social Media */}
              <div>
                <p className="text-sm text-gray-300 mb-4">Follow us on social media:</p>
                <div className="flex gap-4">
                  <Link 
                    href="https://facebook.com/mlritm" 
                    className="w-10 h-10 bg-surface-dim hover:bg-primary transition-colors duration-200 rounded-lg flex items-center justify-center group"
                  >
                    <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </Link>
                  <Link 
                    href="https://twitter.com/mlritm" 
                    className="w-10 h-10 bg-surface-dim hover:bg-primary transition-colors duration-200 rounded-lg flex items-center justify-center group"
                  >
                    <Twitter className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </Link>
                  <Link 
                    href="https://instagram.com/mlritm" 
                    className="w-10 h-10 bg-surface-dim hover:bg-primary transition-colors duration-200 rounded-lg flex items-center justify-center group"
                  >
                    <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </Link>
                  <Link 
                    href="https://linkedin.com/school/mlritm" 
                    className="w-10 h-10 bg-surface-dim hover:bg-primary transition-colors duration-200 rounded-lg flex items-center justify-center group"
                  >
                    <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </Link>
                  <Link 
                    href="https://youtube.com/mlritm" 
                    className="w-10 h-10 bg-surface-dim hover:bg-primary transition-colors duration-200 rounded-lg flex items-center justify-center group"
                  >
                    <Youtube className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </Link>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-surface-dim p-4 rounded-lg">
                <h4 className="text-sm font-medium text-white mb-2">Emergency Contact</h4>
                <p className="text-sm text-gray-300">Security: +91 40 2304 3333</p>
                <p className="text-sm text-gray-300">Medical: +91 40 2304 4444</p>
              </div>

              {/* Campus Map */}
              <div>
                <Link 
                  href="/campus-map" 
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  <MapPin className="w-4 h-4" />
                  View Campus Map
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-300">
              <p>&copy; 2024 Marri Laxman Reddy Institute of Technology & Management. All rights reserved.</p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <Link 
                href="/privacy-policy" 
                className="text-gray-300 hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-conditions" 
                className="text-gray-300 hover:text-primary transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
              <Link 
                href="/sitemap" 
                className="text-gray-300 hover:text-primary transition-colors duration-200"
              >
                Sitemap
              </Link>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-gray-400 text-center md:text-left">
            <p>Affiliated to Jawaharlal Nehru Technological University Hyderabad (JNTUH) | Approved by AICTE | Accredited by NAAC with 'A' Grade</p>
          </div>
        </div>
      </div>
    </footer>
  )
}