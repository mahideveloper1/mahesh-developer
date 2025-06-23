import React from 'react';
import { Calendar, MapPin, Briefcase, Users, Code, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            position: "Full Stack Developer & Team Lead",
            company: "Lzycrazy Pvt Ltd",
            type: "Full-time",
            duration: "June 2025 - Present",
            location: "Remote",
            status: "current",
            description: "Leading a dynamic development team while architecting scalable full-stack solutions. Responsible for end-to-end project delivery, code quality assurance, and technical mentorship.",
            responsibilities: [
                "Project leadership and strategic planning for multiple concurrent projects",
                "Code review and quality assurance across frontend and backend systems", 
                "Architected and led end-to-end delivery of multiple full-stack projects, managing timelines, technical direction, and cross-functional coordination.",
                "Designed and maintained robust automated test suites (unit, integration, E2E) using Jest, Cypress, and Playwright; integrated CI/CD pipelines via GitHub Actions and Docker.",
                "Developing applications using React, Next.js, Node.js/Express, PostgreSQL, and Supabase, deploying on platforms like Vercel and AWS.",
                "Translated client requirements into scalable technical solutions, creating technical specs, wireframes, and rapid prototypes to ensure alignment and delivery speed.y"
            ],
            skills: ["Team Leadership", "Project Management", "Full Stack Development", "AWS", "CI/CD", "Next.js", "Typescript" , "Javascript" , "PostgresSql" , "MonogoDB", "Testing", "Javascript" , "Node.js"],
            icon: Users,
            color: "from-purple-500 to-indigo-600"
        },
        {
            id: 2,
            position: "Full Stack Developer",
            company: "Stacklab", 
            type: "Full-time",
            duration: "October 2023 - June 2025",
            location: "Remote",
            status: "completed",
            description: "Developed and maintained high-performance web applications with seamless user experiences. Collaborated closely with backend teams to ensure optimal data flow and application reliability.",
            responsibilities: [
                "Developed and maintained dynamic web applications with performance optimization focus",
                "Built seamless API integrations with Node.js backend teams ensuring robust data flow",
                "Implemented responsive UI components using React.js and modern CSS frameworks",
                "Optimized application performance through code splitting and lazy loading techniques", 
                "Collaborated in agile development cycles with cross-functional teams",
                "Participated in architecture decisions for scalable application design"
            ],
            skills: ["React.js", "Node.js", "API Integration", "AWS", "CI/CD", "Next.js", "Typescript" , "Javascript" , "PostgresSql" , "MonogoDB"],
            icon: Code,
            color: "from-blue-500 to-cyan-600"
        },
        {
            id: 3,
            position: "React Developer Intern",
            company: "Harman International",
            type: "Internship",
            duration: "July 2023 - September 2023",
            location: "Gurugram, India",
            status: "completed",
            description: "Gained hands-on experience in enterprise-level React development while contributing to performance-critical applications used by millions of users globally.",
            responsibilities: [
                "Developed and maintained dynamic web applications with performance enhancement focus",
                "Built seamless API integrations with Node.js backend team for optimal data flow",
                "Learned enterprise development practices and coding standards",
                "Participated in code reviews and received mentorship from senior developers",
                "Contributed to bug fixes and feature implementations in production applications",
                "Collaborated with UI/UX designers to implement pixel-perfect interfaces"
            ],
            skills: ["React.js", "JavaScript", "API Integration", "Performance Optimization", "Enterprise Development"],
            icon: Briefcase,
            color: "from-green-500 to-emerald-600"
        }
    ];



    return (
        <div className="min-h-screen bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800">
            <div className="container mx-auto px-6 py-12">
                
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
                    <div className="absolute top-60 right-1/2 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
                </div>

                <div className="relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            My Experience
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                            A journey of continuous growth and technical excellence across diverse projects and technologies
                        </p>
                        
                       
                    </div>

                    {/* Experience Timeline */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden md:block"></div>
                        
                        <div className="space-y-12">
                            {experiences.map((exp) => (
                                <div key={exp.id} className="relative">
                                    {/* Timeline Dot */}
                                    <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-slate-800 hidden md:block ${
                                        exp.status === 'current' ? 'bg-purple-500 animate-pulse' : 'bg-blue-500'
                                    }`}></div>
                                    
                                    {/* Experience Card */}
                                    <div className="md:ml-16 bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 shadow-2xl hover:border-blue-700/50 transition-all duration-300 group">
                                        {/* Header */}
                                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                                            <div className="flex items-center gap-4 mb-4 lg:mb-0">
                                                <div className={`bg-gradient-to-br ${exp.color} w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                    <exp.icon className="w-7 h-7 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                                                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                                                </div>
                                            </div>
                                            
                                            <div className="flex flex-col lg:text-right">
                                                <div className="flex items-center gap-2 text-gray-300 mb-1">
                                                    <Calendar size={16} />
                                                    <span className="text-sm">{exp.duration}</span>
                                                    {exp.status === 'current' && (
                                                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                                                            Current
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-400">
                                                    <MapPin size={16} />
                                                    <span className="text-sm">{exp.location}</span>
                                                    <span className="text-xs bg-slate-700/50 px-2 py-1 rounded-full">{exp.type}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-300 text-base leading-relaxed mb-6">
                                            {exp.description}
                                        </p>

                                        {/* Key Responsibilities */}
                                        <div className="mb-6">
                                            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                                <Zap className="w-4 h-4 text-yellow-400" />
                                                Key Responsibilities
                                            </h4>
                                            <div className="grid md:grid-cols-2 gap-3">
                                                {exp.responsibilities.map((responsibility, idx) => (
                                                    <div key={idx} className="flex items-start gap-3">
                                                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                                                        <p className="text-gray-300 text-sm leading-relaxed">{responsibility}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Skills Used */}
                                        <div>
                                            <h4 className="text-white font-semibold mb-3">Technologies & Skills</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.skills.map((skill, idx) => (
                                                    <span 
                                                        key={idx}
                                                        className="bg-slate-800/60 text-gray-300 px-3 py-1 rounded-lg text-sm font-medium border border-slate-600/30 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Career Growth Section */}
                    <div className="mt-16 bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-8 text-center">Career Progression</h3>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                            <div className="text-center">
                                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <Briefcase className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="font-semibold text-white mb-2">React Developer Intern</h4>
                                <p className="text-gray-400 text-sm">Learning & Growth</p>
                            </div>
                            
                            <ArrowRight className="w-6 h-6 text-blue-400 rotate-90 md:rotate-0" />
                            
                            <div className="text-center">
                                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <Code className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="font-semibold text-white mb-2">Full Stack Developer</h4>
                                <p className="text-gray-400 text-sm">Technical Excellence</p>
                            </div>
                            
                            <ArrowRight className="w-6 h-6 text-blue-400 rotate-90 md:rotate-0" />
                            
                            <div className="text-center">
                                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="font-semibold text-white mb-2">Team Lead & Developer</h4>
                                <p className="text-gray-400 text-sm">Leadership & Innovation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;