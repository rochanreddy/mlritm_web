// "use client"

// import { motion } from "framer-motion"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { GraduationCap, BookOpen, Award, Users, Star, MapPin } from "lucide-react"

// interface FacultyMember {
//   id: string
//   name: string
//   designation: string
//   qualifications: string[]
//   department: string
//   expertise: string[]
//   experience: number
//   publications?: number
//   image: string
//   isPhD: boolean
// }

// interface FacultyStats {
//   totalFaculty: number
//   phdHolders: number
//   avgExperience: number
//   totalPublications: number
//   industryExperts: number
// }

// interface FacultySectionProps {
//   className?: string
//   stats?: FacultyStats
//   faculty?: FacultyMember[]
// }

// const defaultStats: FacultyStats = {
//   totalFaculty: 180,
//   phdHolders: 65,
//   avgExperience: 8,
//   totalPublications: 250,
//   industryExperts: 45
// }

// const defaultFaculty: FacultyMember[] = [
//   {
//     id: "1",
//     name: "Dr. Rajesh Kumar",
//     designation: "Professor & Head",
//     qualifications: ["Ph.D", "M.Tech"],
//     department: "Computer Science & Engineering",
//     expertise: ["Artificial Intelligence", "Machine Learning", "Data Mining"],
//     experience: 15,
//     publications: 45,
//     image: "/api/placeholder/300/300",
//     isPhD: true
//   },
//   {
//     id: "2",
//     name: "Dr. Priya Sharma",
//     designation: "Associate Professor",
//     qualifications: ["Ph.D", "M.E."],
//     department: "Electronics & Communication",
//     expertise: ["VLSI Design", "Signal Processing", "IoT"],
//     experience: 12,
//     publications: 32,
//     image: "/api/placeholder/300/300",
//     isPhD: true
//   },
//   {
//     id: "3",
//     name: "Prof. Anil Reddy",
//     designation: "Assistant Professor",
//     qualifications: ["M.Tech", "B.Tech"],
//     department: "Mechanical Engineering",
//     expertise: ["Thermal Engineering", "CAD/CAM", "Manufacturing"],
//     experience: 8,
//     publications: 18,
//     image: "/api/placeholder/300/300",
//     isPhD: false
//   },
//   {
//     id: "4",
//     name: "Dr. Sneha Agarwal",
//     designation: "Professor",
//     qualifications: ["Ph.D", "M.Sc"],
//     department: "Mathematics & Statistics",
//     expertise: ["Applied Mathematics", "Statistics", "Numerical Analysis"],
//     experience: 18,
//     publications: 52,
//     image: "/api/placeholder/300/300",
//     isPhD: true
//   },
//   {
//     id: "5",
//     name: "Prof. Vikram Singh",
//     designation: "Associate Professor",
//     qualifications: ["M.Tech", "B.E."],
//     department: "Civil Engineering",
//     expertise: ["Structural Engineering", "Concrete Technology", "Seismic Design"],
//     experience: 10,
//     publications: 25,
//     image: "/api/placeholder/300/300",
//     isPhD: false
//   },
//   {
//     id: "6",
//     name: "Dr. Meera Patel",
//     designation: "Assistant Professor",
//     qualifications: ["Ph.D", "M.Pharm"],
//     department: "Biotechnology",
//     expertise: ["Molecular Biology", "Genetic Engineering", "Bioinformatics"],
//     experience: 6,
//     publications: 28,
//     image: "/api/placeholder/300/300",
//     isPhD: true
//   }
// ]

// export default function FacultySection({ 
//   className = "", 
//   stats = defaultStats,
//   faculty = defaultFaculty 
// }: FacultySectionProps) {
//   return (
//     <section className={`py-16 bg-card ${className}`}>
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
//             Distinguished Faculty
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             Our accomplished faculty members bring decades of academic excellence and industry expertise 
//             to guide students toward successful careers in engineering and technology.
//           </p>
//         </motion.div>

//         {/* Faculty Statistics */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16"
//         >
//           <div className="text-center">
//             <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3">
//               <Users className="h-6 w-6 text-primary" />
//             </div>
//             <div className="text-2xl font-bold text-foreground">{stats.totalFaculty}+</div>
//             <div className="text-sm text-muted-foreground">Total Faculty</div>
//           </div>
          
//           <div className="text-center">
//             <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3">
//               <GraduationCap className="h-6 w-6 text-primary" />
//             </div>
//             <div className="text-2xl font-bold text-foreground">{stats.phdHolders}%</div>
//             <div className="text-sm text-muted-foreground">PhD Holders</div>
//           </div>
          
//           <div className="text-center">
//             <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3">
//               <Star className="h-6 w-6 text-primary" />
//             </div>
//             <div className="text-2xl font-bold text-foreground">{stats.avgExperience}+</div>
//             <div className="text-sm text-muted-foreground">Avg Experience</div>
//           </div>
          
//           <div className="text-center">
//             <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3">
//               <BookOpen className="h-6 w-6 text-primary" />
//             </div>
//             <div className="text-2xl font-bold text-foreground">{stats.totalPublications}+</div>
//             <div className="text-sm text-muted-foreground">Publications</div>
//           </div>
          
//           <div className="text-center">
//             <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3">
//               <Award className="h-6 w-6 text-primary" />
//             </div>
//             <div className="text-2xl font-bold text-foreground">{stats.industryExperts}</div>
//             <div className="text-sm text-muted-foreground">Industry Experts</div>
//           </div>
//         </motion.div>

//         {/* Faculty Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {faculty.map((member, index) => (
//             <motion.div
//               key={member.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//             >
//               <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
//                 <CardContent className="p-0">
//                   {/* Faculty Image */}
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     {member.isPhD && (
//                       <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
//                         Ph.D
//                       </Badge>
//                     )}
//                   </div>

//                   {/* Faculty Info */}
//                   <div className="p-6">
//                     <h3 className="text-xl font-semibold text-foreground mb-1">
//                       {member.name}
//                     </h3>
//                     <p className="text-primary font-medium mb-2">
//                       {member.designation}
//                     </p>
//                     <div className="flex items-center text-sm text-muted-foreground mb-3">
//                       <MapPin className="h-4 w-4 mr-1" />
//                       {member.department}
//                     </div>
                    
//                     {/* Qualifications */}
//                     <div className="flex flex-wrap gap-1 mb-3">
//                       {member.qualifications.map((qual, idx) => (
//                         <Badge key={idx} variant="secondary" className="text-xs">
//                           {qual}
//                         </Badge>
//                       ))}
//                     </div>

//                     {/* Experience & Publications */}
//                     <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
//                       <span>{member.experience} years exp.</span>
//                       {member.publications && (
//                         <span>{member.publications} publications</span>
//                       )}
//                     </div>

//                     {/* Areas of Expertise */}
//                     <div>
//                       <h4 className="text-sm font-medium text-foreground mb-2">Areas of Expertise</h4>
//                       <div className="flex flex-wrap gap-1">
//                         {member.expertise.slice(0, 3).map((area, idx) => (
//                           <Badge key={idx} variant="outline" className="text-xs">
//                             {area}
//                           </Badge>
//                         ))}
//                         {member.expertise.length > 3 && (
//                           <Badge variant="outline" className="text-xs">
//                             +{member.expertise.length - 3} more
//                           </Badge>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center mt-12"
//         >
//           <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
//             Our faculty members are committed to providing world-class education and mentorship, 
//             ensuring our students receive the best possible foundation for their future careers.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Badge variant="outline" className="px-4 py-2">
//               <Award className="h-4 w-4 mr-2" />
//               Excellence in Teaching
//             </Badge>
//             <Badge variant="outline" className="px-4 py-2">
//               <BookOpen className="h-4 w-4 mr-2" />
//               Research Focused
//             </Badge>
//             <Badge variant="outline" className="px-4 py-2">
//               <Users className="h-4 w-4 mr-2" />
//               Industry Connected
//             </Badge>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }