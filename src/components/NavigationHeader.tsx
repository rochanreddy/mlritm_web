"use client";

import { useState, useEffect } from "react";
import { 
  User, 
  GraduationCap, 
  CheckCircle, 
  Building2,
  Menu,
  X,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import NotificationTicker from "@/components/NotificationTicker";

export default function NavigationHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredChild, setHoveredChild] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only hide navbar on desktop (md and larger screens) when scrolling down
      // On mobile, keep navbar always visible
      if (window.innerWidth >= 768) { // md breakpoint
        if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        }
      } else {
        // On mobile, always keep visible
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const quickLinks = [
    { name: "AISHE", icon: User, href: "#" },
    { name: "ARIIA", icon: User, href: "#" },
    { name: "ALUMNI", icon: GraduationCap, href: "#" },
    { name: "IQAC", icon: CheckCircle, href: "#" },
    { name: "LOGIN", icon: GraduationCap, href: "#" },
    { name: "NAAC", icon: CheckCircle, href: "#" },
    { name: "NBA", icon: CheckCircle, href: "#" },
    { name: "NIRF", icon: User, href: "#" },
    { name: "UGC", icon: Building2, href: "#" },
  ];

  type NavItem = {
    name: string;
    href: string;
    children?: Array<{ name: string; href: string; children?: Array<{ name: string; href: string }>; }>;
  };

  const mainNavLinks: NavItem[] = [
    { name: "Home", href: "#home" },
    { 
      name: "About", 
      href: "#about",
      children: [
        { name: "Vision and Mission", href: "#about-vision-mission" },
        { name: "Management", href: "#about-management" },
        { name: "Director's Desk", href: "#about-directors-desk" },
        { name: "Principal's Desk", href: "#about-principals-desk" },
        { name: "Governing Body", href: "#about-governing-body" },
        { name: "Organization Chart", href: "#about-organization-chart" },
        { name: "Strategic Plan", href: "#about-strategic-plan" },
      ]
    },
    {
      name: "Academics",
      href: "#academics",
      children: [
        { name: "College Circulars", href: "#academics-circulars" },
        { name: "Academic Calendar", href: "#academic-calendar" },
        { name: "Syllabus", href: "#syllabus" },
        { name: "Committee", href: "#committee" },
      ]
    },
    {
      name: "Departments",
      href: "#departments",
      children: [
        { name: "Civil Engineering", href: "#dept-civil" },
        { name: "Computer Science & Engineering", href: "#dept-cse" },
        { name: "Electronics & Communication Engineering", href: "#dept-ece" },
        { name: "Information Technology", href: "#dept-it" },
        { name: "Mechanical Engineering", href: "#dept-mech" },
        { name: "Freshman Engineering Department", href: "#dept-freshman" },
        { name: "Electrical and Electronics Engineering", href: "#dept-eee" },
        { name: "Computer Science & Information Technology", href: "#dept-csit" },
        { name: "Computer Science & Engineering (Cyber Security)", href: "#dept-cse-cs" },
        { name: "Computer Science and Engineering (Data Science)", href: "#dept-cse-ds" },
        { name: "Computer Science and Engineering(AI & ML)", href: "#dept-cse-aiml" },
        {
          name: "P.G. Programmes",
          href: "#pg-programmes",
          children: [
            { name: "Department of Management Studies (MBA)", href: "#pg-mba" },
            { name: "M.Tech. Computer Science Engineering", href: "#pg-mtech-cse" },
            { name: "MECH & MTech-CAD/CAM", href: "#pg-mtech-cadcam" },
            { name: "MTech Embedded Systems", href: "#pg-mtech-embedded" },
            { name: "M.Tech Structural Engineering", href: "#pg-mtech-structural" },
          ]
        }
      ]
    },
    {
      name: "Research & Development",
      href: "#research",
      children: [
        { name: "Research Objectives", href: "#research-objectives" },
        { name: "Research Supervisors", href: "#research-supervisors" },
        { name: "Consultancy", href: "#consultancy" },
        { name: "Patents", href: "#patents" },
        { name: "Funding Projects", href: "#funding-projects" },
        { name: "Inspiring Innovation", href: "#inspiring-innovation" },
      ]
    },
    {
      name: "Examination Cell",
      href: "#examination",
      children: [
        { name: "Exam Schedules", href: "#exam-schedules" },
        { name: "Examination Procedures", href: "#examination-procedures" },
        { name: "Circular / Notifications", href: "#exam-circulars" },
        { name: "Exam Downloads", href: "#exam-downloads" },
        { name: "Previous Question Papers", href: "#previous-papers" },
        { name: "Credit Promotion Rules", href: "#credit-promotion-rules" },
        { name: "End Examination Result", href: "#end-exam-result" },
      ]
    },
    {
      name: "Campus Life",
      href: "#campus-life",
      children: [
        { name: "Activities", href: "#campus-activities" },
        {
          name: "Facilities",
          href: "#campus-facilities",
          children: [
            { name: "Library", href: "#facility-library" },
            { name: "Transport", href: "#facility-transport" },
            { name: "Hostels", href: "#facility-hostels" },
            { name: "Computer Centers", href: "#facility-computer-centers" },
            { name: "Auditorium", href: "#facility-auditorium" },
            { name: "Health Center", href: "#facility-health-center" },
            { name: "Cafeteria", href: "#facility-cafeteria" },
          ]
        },
        { name: "Alumini", href: "#alumni" },
        { name: "Campus Radio", href: "#campus-radio" },
        { name: "Anti Ragging", href: "#anti-ragging" },
      ]
    },
    {
      name: "Placements",
      href: "#placements"
    },
    {
      name: "Campus News",
      href: "#campus-news",
      children: [
        { name: "Placement Notifications", href: "#news-placement-notifications" },
        { name: "Circular / Notifications", href: "#news-circulars" },
        { name: "College Circulars", href: "#news-college-circulars" },
        { name: "Exam Schedules", href: "#news-exam-schedules" },
        { name: "Scholarships", href: "#news-scholarships" },
      ]
    },
    { name: "Contact Us", href: "#contact" },
  ];

  const handleNavLinkClick = (href: string) => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to the target section
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Calculate offset for fixed header
        const headerHeight = 200; // Approximate header height
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // Hover underline animation variants
  const underlineFillVariants = {
    initial: { width: 0 },
    hover: { width: "100%", transition: { duration: 0.45, ease: "easeOut" } },
  } as const;
  const shimmerOpacityVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 0.6, transition: { duration: 0.2 } },
  } as const;
  const linkVariants = {
    initial: { y: 0 },
    hover: { y: -2 },
  } as const;

  return (
    <motion.header 
      className={`w-full fixed top-0 z-50 bg-white/95 backdrop-blur-sm shadow-xl transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: easeOut }}
    >
      {/* Second Bar - Modern Gradient Background */}
      <motion.div 
        className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white relative overflow-hidden"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between h-14">
            {/* Left Section - EAMCET Code Button */}
            <motion.div 
              className="flex items-center"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
            >
              <motion.a
                href="#"
                className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-red-400/30"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>EAMCET CODE: MLRS</span>
              </motion.a>
            </motion.div>

            {/* Right Section - Enhanced Quick Links */}
            <motion.div 
              className="hidden md:flex items-center space-x-8"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: easeOut }}
            >
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 text-xs font-semibold text-white hover:text-red-300 transition-all duration-300 group relative"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1, ease: easeOut }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="p-1.5 rounded-full bg-white/20 group-hover:bg-red-500/30 transition-all duration-300 border border-white/30"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <link.icon className="w-3 h-3 text-white" />
                  </motion.div>
                  <span className="font-medium group-hover:scale-105 transition-transform duration-300 drop-shadow-sm">{link.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Third Bar - Enhanced Main Navigation */}
      <motion.div 
        className="border-b border-gray-100"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Enhanced Logo Section */}
            <motion.div 
              className="flex items-center space-x-8"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: easeOut }}
            >
              <motion.div 
                className="w-45 h-45 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src="/images/cropped-logo.png" 
                  alt="MLRITM Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>
            
            {/* Enhanced Desktop Navigation */}
            <motion.nav 
              className="hidden lg:flex items-center space-x-10 relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: easeOut }}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {mainNavLinks.map((link, index) => (
                <div 
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                >
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick(link.href);
                    }}
                    className="text-slate-700 font-semibold hover:text-red-600 transition-all duration-300 text-sm relative group py-2 cursor-pointer"
                    whileTap={{ scale: 0.95 }}
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    {link.name}

                    {/* Underline container */}
                    <span className="absolute -bottom-1 left-0 right-0 h-1 block">
                      {/* Base line */}
                      <span className="absolute left-0 right-0 top-0 h-1 bg-gray-200 rounded-full opacity-30" />

                      {/* Fill line (neutral color to avoid red line) */}
                      <motion.span
                        className="absolute left-0 top-0 h-1 bg-gray-400 rounded-full"
                        variants={underlineFillVariants}
                        initial="initial"
                      />

                      {/* Shimmer sweep */}
                      <motion.span
                        className="absolute top-0 h-1 w-12 bg-gradient-to-r from-white/0 via-white/70 to-white/0 rounded-full"
                        variants={shimmerOpacityVariants}
                        initial="initial"
                        animate={{ x: [ -48, 240 ] }}
                        transition={{ repeat: Infinity, repeatType: "loop", duration: 1.2, ease: "linear" }}
                      />
                    </span>
                  </motion.a>

                  {/* Level 1 Dropdown */}
                  <AnimatePresence>
                    {openDropdown === link.name && link.children && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-3 bg-white border border-gray-200 rounded-xl shadow-xl p-2 flex flex-col space-y-1 min-w-[260px] z-50"
                        onMouseLeave={() => setHoveredChild(null)}
                      >
                        {link.children.map((child) => (
                          <div key={child.name} className="relative group" onMouseEnter={() => setHoveredChild(child.name)}>
                            <a
                              href={child.href}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavLinkClick(child.href);
                              }}
                              className="block text-slate-700 hover:text-red-600 text-sm font-medium py-2 px-3 rounded-lg hover:bg-red-50 transition-colors"
                            >
                              <div className="flex items-center justify-between gap-3">
                                <span>{child.name}</span>
                                {child.children && (
                                  <ChevronRight className="w-4 h-4 text-slate-400" />
                                )}
                              </div>
                            </a>

                            {/* Level 2 Dropdown for nested children */}
                            {child.children && hoveredChild === child.name && (
                              <div className="absolute top-0 left-full ml-2">
                                <motion.div
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: 10 }}
                                  transition={{ duration: 0.2 }}
                                  className="bg-white border border-gray-200 rounded-xl shadow-xl p-2 w-[320px] flex flex-col space-y-1 z-50"
                                >
                                  {child.children.map((grand) => (
                                    <a
                                      key={grand.name}
                                      href={grand.href}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleNavLinkClick(grand.href);
                                      }}
                                      className="block text-slate-700 hover:text-red-600 text-sm font-medium py-2 px-3 rounded-lg hover:bg-red-50 transition-colors"
                                    >
                                      {grand.name}
                                    </a>
                                  ))}
                                </motion.div>
                              </div>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.nav>
            
            {/* Enhanced Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 text-slate-700 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: easeOut }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
        
        {/* Enhanced Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="lg:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-sm z-40 overflow-y-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Mobile Menu Header with Close Button */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0">
                <h2 className="text-xl font-bold text-slate-800">Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-full transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="container mx-auto px-4 py-6">
                <motion.nav 
                  className="space-y-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {mainNavLinks.map((link, index) => (
                    <div key={link.name} className="border rounded-xl">
                      <button
                        className="w-full text-left text-slate-700 font-semibold transition-all duration-300 text-sm py-3 px-4"
                        onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                      >
                        {link.name}
                      </button>
                      {openDropdown === link.name && link.children && (
                        <div className="px-4 pb-3">
                          {link.children.map((child) => (
                            <div key={child.name} className="py-1">
                              <button
                                className="w-full text-left text-slate-600 hover:text-red-600 text-sm py-2"
                                onClick={() => handleNavLinkClick(child.href)}
                              >
                                {child.name}
                              </button>
                              {child.children && (
                                <div className="ml-4">
                                  {child.children.map((grand) => (
                                    <button
                                      key={grand.name}
                                      className="block w-full text-left text-slate-500 hover:text-red-600 text-sm py-1.5"
                                      onClick={() => handleNavLinkClick(grand.href)}
                                    >
                                      {grand.name}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </motion.nav>
                
                {/* Enhanced Mobile Quick Links */}
                <motion.div 
                  className="mt-8 pt-6 border-t border-gray-200"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <h3 className="text-slate-600 font-semibold text-sm mb-4 uppercase tracking-wide">Quick Links</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {quickLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        className="flex flex-col items-center space-y-2 text-xs text-slate-700 hover:text-red-600 transition-all duration-300 p-3 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 border border-transparent hover:border-red-200 group"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div 
                          className="p-2 rounded-full bg-gray-100 group-hover:bg-red-100 transition-all duration-300"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <link.icon className="w-4 h-4" />
                        </motion.div>
                        <span className="font-medium text-center">{link.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Red border separator */}
      <div className="h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-500 shadow-sm"></div>

      {/* Ticker directly under header bars */}
      <NotificationTicker className="bg-white/95" />
    </motion.header>
  );
}