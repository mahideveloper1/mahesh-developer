import React from 'react';
import Image from 'next/image';
import { Download, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
    const router = useRouter();

    const downloadResume = (): void => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Mahesh_Vashisth_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const goToContact = (): void => {
        router.push('?section=contact', { scroll: false });
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800">
            <div className="container mx-auto px-6 py-12">

                {/* About Me Section */}
                <div className="relative">

                    {/* Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        {/* Large Gradient Bubbles */}
                        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
                        <div className="absolute top-60 right-1/2 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
                        <div className="absolute bottom-40 right-10 w-56 h-56 bg-purple-400/8 rounded-full blur-3xl animate-pulse delay-1500"></div>

                        {/* Medium Bubbles */}
                        <div className="absolute top-1/4 left-1/2 w-40 h-40 bg-indigo-400/12 rounded-full blur-2xl animate-pulse delay-700"></div>
                        <div className="absolute bottom-1/3 left-20 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl animate-pulse delay-300"></div>

                        {/* Small Floating Geometric Shapes */}
                        <div className="absolute top-32 right-1/4 w-4 h-4 bg-blue-400/20 rounded-full animate-bounce"></div>
                        <div className="absolute bottom-40 left-1/4 w-6 h-6 bg-purple-400/20 rounded-full animate-bounce delay-300"></div>
                        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-indigo-400/20 rounded-full animate-bounce delay-700"></div>
                        <div className="absolute top-2/3 left-1/2 w-5 h-5 bg-blue-300/20 rounded-full animate-bounce delay-1000"></div>
                        <div className="absolute bottom-60 right-1/4 w-4 h-4 bg-purple-300/20 rounded-full animate-bounce delay-500"></div>
                    </div>

                    {/* Status Badge */}
                    <div className="relative z-10 inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-8 mt-16 lg:mt-0">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        Available for opportunities
                    </div>

                    {/* Main Content Grid */}
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start">

                        {/* Left Side - Text Content */}
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Hi, I&apos;m Mahesh Vashisth
                            </h1>
                            <h2 className="text-2xl font-semibold text-gray-300 mb-8">Full Stack Developer</h2>

                            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                                <p>
                                    Passionate Full Stack Developer with <span className="font-semibold text-blue-400">2 years of experience</span> in building
                                    and deploying scalable web applications. I specialize in creating robust backend systems with
                                    <span className="font-semibold text-blue-400"> Node.js</span> and <span className="font-semibold text-blue-400">Express.js</span>,
                                    coupled with modern frontend experiences using <span className="font-semibold text-blue-400">React</span> and  
                                      <span className="font-semibold text-blue-400"> Next.js</span>.
                                </p>
                            </div>

                            {/* What I bring to the table */}
                            <div className="mt-8">
                                <h3 className="text-xl font-bold text-white mb-6">What I bring to the table:</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="text-blue-400 mt-1">→</div>
                                        <div>
                                            <span className="font-semibold text-white">Backend Excellence:</span>
                                            <span className="text-gray-300"> Designing secure RESTful APIs, JWT authentication, and optimizing data-intensive operations with MongoDB, PostgreSQL</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="text-blue-400 mt-1">→</div>
                                        <div>
                                            <span className="font-semibold text-white">DevOps & Deployment:</span>
                                            <span className="text-gray-300"> Setting up CI/CD pipelines with GitHub Actions and Jenkins, deploying on AWS (EC2, S3, Lambda), Docker containerization</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="text-blue-400 mt-1">→</div>
                                        <div>
                                            <span className="font-semibold text-white">Modern Frontend:</span>
                                            <span className="text-gray-300"> Creating responsive, performant user interfaces with React, TypeScript, and Tailwind CSS, implementing state management with Redux</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="text-blue-400 mt-1">→</div>
                                        <div>
                                            <span className="font-semibold text-white">AI Integration:</span>
                                            <span className="text-gray-300"> Working with OpenAI APIs, implementing chatbots, and integrating machine learning models into web applications</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <button 
                                    onClick={downloadResume}
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                                >
                                    <Download size={20} />
                                    Download Resume
                                </button>
                                <button 
                                    onClick={goToContact}
                                    className="border-2 border-gray-400 text-gray-300 hover:bg-gray-700/50 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <Mail size={20} />
                                    Get In Touch
                                </button>
                            </div>
                        </div>

                        {/* Right Side - Photo with Multiple Frames */}
                        <div className="flex flex-col items-center">
                            {/* Profile Photo with Multiple Frames */}
                            <div className="relative mb-8">
                                {/* Background Frame 1 - Largest */}
                                <div className="absolute -inset-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3 blur-sm"></div>

                                {/* Background Frame 2 - Medium */}
                                <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-3xl transform -rotate-2"></div>

                                {/* Background Frame 3 - Small */}
                                <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/40 to-indigo-500/40 rounded-3xl transform rotate-1"></div>

                                {/* Main Photo Container */}
                                <div className="relative w-80 h-110 rounded-3xl overflow-hidden shadow-2xl ring-2 ring-blue-400/50">
                                    <Image
                                        src="/mahesh-photo.jpeg"
                                        alt="Mahesh Profile Photo"
                                        width={320}
                                        height={320}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Currently Working On Section */}
                    <div className="relative z-10 mt-16 bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-8 text-center">What I&apos;m Currently Working On</h3>
                        <div className="grid md:grid-cols-2 gap-8">

                            <div className="text-center">
                                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <span className="text-white text-2xl">🤖</span>
                                </div>
                                <h4 className="font-semibold text-white mb-2">AI Project Development</h4>
                                <p className="text-gray-300 text-sm">Building innovative AI applications using OpenAI APIs, LangChain, Vector Databases, and advanced machine learning frameworks to create intelligent solutions</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <span className="text-white text-2xl">⛓️</span>
                                </div>
                                <h4 className="font-semibold text-white mb-2">Blockchain & Web3 Innovation</h4>
                                <p className="text-gray-300 text-sm">Experimenting with decentralized applications, smart contracts, and Web3 technologies to explore the future of distributed systems and digital ownership</p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Experience Highlights */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">

                    <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-slate-700/40 text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
                        <div className="text-slate-300 font-medium">Years Experience</div>
                    </div>

                    <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-slate-700/40 text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
                        <div className="text-slate-300 font-medium">Projects Completed</div>
                    </div>

                    <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-slate-700/40 text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-2">7+</div>
                        <div className="text-slate-300 font-medium">Technologies Mastered</div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Home;