import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

// Define types
type Complexity = 'Beginner' | 'Intermediate' | 'Advanced';
type Status = 'Live' | 'Completed';
type Category = 'Full Stack' | 'Frontend' | 'Games';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    liveUrl: string;
    githubUrl: string;
    technologies: string[];
    category: Category;
    complexity: Complexity;
    status: Status;
}

const Projects: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('All');

    // Define projects data
    const projects: Project[] = [
        {
            id: 1,
            title: "Video Chat Platform",
            description: "A comprehensive video chat platform featuring user authentication, real-time meeting controls, personal meeting rooms, scheduling capabilities, and easy link-based joining.",
            image: "🎥",
            liveUrl: "https://video-call-app-pi.vercel.app",
            githubUrl: "https://github.com/mahideveloper1/Video-Call-App",
            technologies: ["Next.js", "TypeScript", "JWT", "WebSockets", "Tailwind CSS"],
            category: "Full Stack",
            complexity: "Advanced",
            status: "Completed"
        },
        {
            id: 2,
            title: "Real-time Chat Application",
            description: "Secure real-time chat application with JWT authentication and seamless live messaging functionality powered by WebSockets for instant communication.",
            image: "💬",
            liveUrl: "https://chat-frontent.vercel.app/",
            githubUrl: "https://github.com/mahideveloper1/Chat-App",
            technologies: ["React.js", "Node.js", "JavaScript", "JWT", "Tailwind CSS", "WebSockets"],
            category: "Full Stack",
            complexity: "Intermediate",
            status: "Completed"
        },
        {
            id: 3,
            title: "University Portal",
            description: "Scalable university portal with 100+ dynamic pages and custom admin dashboard deployed on AWS, supporting 5,000+ concurrent users with 99.9% uptime.",
            image: "🎓",
            liveUrl: "https://ptsnsuniversity.ac.in/",
            githubUrl: "#",
            technologies: ["React.js", "TypeScript", "AWS", "Node.js", "Tailwind CSS"],
            category: "Full Stack",
            complexity: "Advanced",
            status: "Live"
        },
        {
            id: 4,
            title: "Course Selling Platform",
            description: "Complete course marketplace with RESTful APIs built using Express.js and MongoDB. Features CRUD operations for course management with user-friendly interface.",
            image: "📚",
            liveUrl: "https://course-app-pink.vercel.app/",
            githubUrl: "https://github.com/mahideveloper1/course-selling-app",
            technologies: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB"],
            category: "Full Stack",
            complexity: "Intermediate",
            status: "Completed"
        },
        {
            id: 5,
            title: "Advanced Dashboard",
            description: "Professional admin dashboard built with Next.js featuring comprehensive data visualization, user management, and real-time analytics capabilities.",
            image: "📊",
            liveUrl: "https://dashboard-nu-jade.vercel.app/admin/dashboard",
            githubUrl: "https://github.com/mahideveloper1/Adv-Dashboard",
            technologies: ["Next.js", "TypeScript", "React.js"],
            category: "Frontend",
            complexity: "Intermediate",
            status: "Completed"
        },
        {
            id: 6,
            title: "Figma Clone App",
            description: "Collaborative drawing application built with MERN stack, allowing users to create and share digital artwork with real-time collaboration features.",
            image: "🎨",
            liveUrl: "https://figma-app-five.vercel.app/",
            githubUrl: "https://github.com/mahideveloper1/Figma-App",
            technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
            category: "Full Stack",
            complexity: "Advanced",
            status: "Completed"
        },
        {
            id: 7,
            title: "Custom Report Generator",
            description: "Dynamic report generation system with real-time graphs and data visualization. Built with MERN stack for comprehensive business analytics.",
            image: "📈",
            liveUrl: "https://custom-report.netlify.app/",
            githubUrl: "https://github.com/mahideveloper1/Report",
            technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
            category: "Full Stack",
            complexity: "Intermediate",
            status: "Completed"
        },
        {
            id: 8,
            title: "Pomodoro Todo App",
            description: "Productivity application combining todo list functionality with 25-minute Pomodoro timer. Features CRUD operations and time management tools.",
            image: "⏰",
            liveUrl: "https://to-do-list-delta-lime.vercel.app/",
            githubUrl: "https://github.com/mahideveloper1/to-do-list",
            technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
            category: "Full Stack",
            complexity: "Beginner",
            status: "Completed"
        },
        {
            id: 9,
            title: "Car Racing Game",
            description: "Interactive browser-based car racing game with arrow key controls, automatic scoring system, and obstacle avoidance gameplay mechanics.",
            image: "🏎️",
            liveUrl: "https://car-race2.netlify.app/",
            githubUrl: "https://github.com/mahideveloper1/Car-Race-Game",
            technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
            category: "Games",
            complexity: "Beginner",
            status: "Completed"
        },
        {
            id: 10,
            title: "Text Manipulator Tool",
            description: "Versatile text processing application with dark/light mode toggle and various text transformation features like case conversion and text analysis.",
            image: "📝",
            liveUrl: "https://loquacious-daffodil-aa4cb0.netlify.app/",
            githubUrl: "https://github.com/mahideveloper1/Text-manipulator",
            technologies: ["React.js", "JavaScript", "CSS"],
            category: "Frontend",
            complexity: "Beginner",
            status: "Completed"
        }
    ];

    const categories: string[] = ['All', 'Full Stack', 'Frontend', 'Games'];
    const filteredProjects: Project[] = activeFilter === 'All' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    const getTechIcon = (tech: string): string => {
        const techIcons: Record<string, string> = {
            'Next.js': '⚡',
            'React.js': '⚛️',
            'TypeScript': '🔷',
            'JavaScript': '🟨',
            'Node.js': '🟢',
            'MongoDB': '🍃',
            'Express.js': '🚂',
            'JWT': '🔐',
            'WebSockets': '🔌',
            'Tailwind CSS': '🎨',
            'AWS': '☁️',
            'HTML': '🧡',
            'CSS': '🔵',
            'jQuery': '💙'
        };
        return techIcons[tech] || '🔧';
    };

    const getComplexityColor = (complexity: Complexity): string => {
        switch(complexity) {
            case 'Beginner': return 'from-green-500 to-emerald-600';
            case 'Intermediate': return 'from-blue-500 to-cyan-600';
            case 'Advanced': return 'from-purple-500 to-indigo-600';
            default: return 'from-gray-500 to-gray-600';
        }
    };

    const getStatusColor = (status: Status): string => {
        switch(status) {
            case 'Live': return 'bg-green-500/20 text-green-400 border-green-500/50';
            case 'Completed': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
            default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
        }
    };

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
                            My Projects
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                            A showcase of innovative applications and solutions I&apos;ve built using cutting-edge technologies, from real-time chat platforms to enterprise-level portals
                        </p>
                        
                        

                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            <Filter className="w-5 h-5 text-gray-400 mr-2 mt-2" />
                            {categories.map((category: string, index: number) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveFilter(category)}
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        activeFilter === category
                                            ? 'bg-blue-600 text-white' 
                                            : 'bg-black/40 text-gray-300 hover:bg-blue-600/50 hover:text-white border border-slate-600/30'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects Grid - Two cards per row */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {filteredProjects.map((project: Project) => (
                            <article key={project.id} className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 shadow-2xl hover:border-blue-700/50 transition-all duration-300 group">
                                
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="text-4xl bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            {project.image}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <div className="flex items-center gap-2 mt-2">
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                                                    {project.status}
                                                </span>
                                                <span className={`bg-gradient-to-r ${getComplexityColor(project.complexity)} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                                                    {project.complexity}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech: string, techIndex: number) => (
                                        <span 
                                            key={techIndex}
                                            className="bg-slate-800/60 text-gray-300 px-3 py-1 rounded-lg text-sm font-medium border border-slate-600/30 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200 flex items-center gap-2"
                                        >
                                            <span>{getTechIcon(tech)}</span>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex gap-4">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        Live Demo
                                    </a>
                                    {project.githubUrl !== '#' && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border-2 border-gray-400 text-gray-300 hover:bg-gray-700/50 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <Github className="w-5 h-5" />
                                            Code
                                        </a>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-4">Interested in Collaborating?</h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            I&apos;m always excited to work on new projects and bring innovative ideas to life. Whether you need a full-stack application, real-time system, or custom solution, let&apos;s build something amazing together!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="https://github.com/mahideveloper1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Github className="w-5 h-5" />
                                View All Repos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;