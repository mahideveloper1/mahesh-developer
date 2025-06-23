import React from 'react';
import { Code, Server, Cloud, Brain, Database, Wrench, Coins } from 'lucide-react';

const Skills = () => {
    const skillsData = [
        {
            category: "Frontend Development",
            icon: Code,
            color: "from-blue-500 to-blue-600",
            skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", "Material-UI"]
        },
        {
            category: "Backend Development", 
            icon: Server,
            color: "from-purple-500 to-purple-600",
            skills: ["Node.js", "Express.js", "Python", "Ruby", "REST APIs", "GraphQL"]
        },
        {
            category: "Databases",
            icon: Database,
            color: "from-green-500 to-green-600", 
            skills: ["MongoDB", "PostgreSQL", "MySQL", "DynamoDB", "Redis", "SQL"]
        },
        {
            category: "DevOps & Cloud",
            icon: Cloud,
            color: "from-orange-500 to-orange-600",
            skills: ["Docker", "AWS", "GitLab", "Terraform", "CI/CD", "Kubernetes"]
        },
        {
            category: "Blockchain & Web3",
            icon: Coins,
            color: "from-amber-500 to-orange-600",
            skills: ["Solana", "Ethereum", "Smart Contracts", "Rust", "Solidity", "dApps"]
        },
        {
            category: "AI & Machine Learning",
            icon: Brain,
            color: "from-indigo-500 to-indigo-600",
            skills: ["OpenAI APIs", "LangChain", "TensorFlow", "PyTorch", "Vector Databases", "NLP"]
        },
        {
            category: "Tools & Others",
            icon: Wrench,
            color: "from-pink-500 to-pink-600",
            skills: ["Git", "GitHub Actions", "Jenkins", "Postman", "VS Code", "Linux"]
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
                            My Skills
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            A comprehensive toolkit of modern technologies and frameworks that I use to build scalable, efficient, and innovative solutions
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillsData.map((skillGroup, index) => (
                            <div key={index} className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 shadow-2xl hover:border-blue-700/50 transition-all duration-300 group">
                                {/* Category Header */}
                                <div className="flex items-center mb-6">
                                    <div className={`bg-gradient-to-br ${skillGroup.color} w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <skillGroup.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                                </div>

                                {/* Skills List */}
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.skills.map((skill, skillIndex) => (
                                        <span 
                                            key={skillIndex}
                                            className="bg-slate-800/60 text-gray-300 px-3 py-2 rounded-lg text-sm font-medium border border-slate-600/30 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Programming Languages Section */}
                    <div className="mt-16 bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-8 text-center">Programming Languages</h3>
                        <div className="grid md:grid-cols-5 gap-6">
                            {["JavaScript", "TypeScript", "Python", "Ruby", "Rust"].map((language, index) => (
                                <div key={index} className="text-center group">
                                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white text-2xl font-bold">{language.charAt(0)}</span>
                                    </div>
                                    <h4 className="font-semibold text-white mb-2">{language}</h4>
                                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                                        <div 
                                            className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: index === 0 ? '95%' : index === 1 ? '90%' : index === 2 ? '85%' : index === 3 ? '80%' : '75%' }}
                                        ></div>
                                    </div>
                                    <p className="text-gray-400 text-sm mt-2">
                                        {index === 0 ? 'Expert' : index === 1 ? 'Advanced' : index === 2 ? 'Advanced' : index === 3 ? 'Intermediate' : 'Intermediate'}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="grid md:grid-cols-5 gap-6 mt-12">
                        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-slate-700/40 text-center group hover:border-blue-700/50 transition-all duration-300">
                            <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">6</div>
                            <div className="text-slate-300 font-medium">Frontend Frameworks</div>
                        </div>

                        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-slate-700/40 text-center group hover:border-blue-700/50 transition-all duration-300">
                            <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">6</div>
                            <div className="text-slate-300 font-medium">Backend Technologies</div>
                        </div>

                        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-slate-700/40 text-center group hover:border-blue-700/50 transition-all duration-300">
                            <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">6</div>
                            <div className="text-slate-300 font-medium">Database Systems</div>
                        </div>

                        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-slate-700/40 text-center group hover:border-blue-700/50 transition-all duration-300">
                            <div className="text-3xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">6</div>
                            <div className="text-slate-300 font-medium">Blockchain Technologies</div>
                        </div>

                        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-slate-700/40 text-center group hover:border-blue-700/50 transition-all duration-300">
                            <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">6</div>
                            <div className="text-slate-300 font-medium">DevOps Tools</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;