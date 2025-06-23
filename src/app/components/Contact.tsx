import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, FileText, Coffee } from 'lucide-react';

// Define interfaces
interface ContactInfo {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    value: string;
    href: string;
    color: string;
    description: string;
}

interface SocialLink {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    href: string;
    color: string;
    username: string;
}

interface QuickAction {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    action: string;
    color: string;
}

const Contact: React.FC = () => {
    const contactInfo: ContactInfo[] = [
        {
            icon: Phone,
            label: "Phone",
            value: "+91 9817611481",
            href: "tel:+919817611481",
            color: "from-green-500 to-emerald-600",
            description: "Availability 24/7"
        },
        {
            icon: Mail,
            label: "Email",
            value: "Maheshvashisth1111@gmail.com",
            href: "mailto:Maheshvashisth1111@gmail.com",
            color: "from-blue-500 to-cyan-600",
            description: "I&apos;ll respond within 24 hours"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Delhi, India",
            href: "#",
            color: "from-purple-500 to-indigo-600",
            description: "Open to remote opportunities"
        }
    ];

    const socialLinks: SocialLink[] = [
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/mahideveloper1",
            color: "hover:bg-slate-700",
            username: "@mahideveloper1"
        },
        {
            icon: Linkedin,
            label: "LinkedIn", 
            href: "https://www.linkedin.com/in/mahesh-vashisth-25901b252/",
            color: "hover:bg-blue-600",
            username: "Mahesh Vashisth"
        },
        {
            icon: Twitter,
            label: "Twitter",
            href: "https://x.com/Mahesh03976992",
            color: "hover:bg-blue-500",
            username: "@Mahesh03976992"
        }
    ];

    const quickActions: QuickAction[] = [
        {
            icon: Coffee,
            title: "Schedule a Coffee Chat",
            description: "Let&apos;s discuss your project over a virtual coffee",
            action: "Book Meeting",
            color: "from-amber-500 to-orange-600"
        },
        {
            icon: FileText,
            title: "Download Resume",
            description: "Get my latest resume with all details",
            action: "Download PDF",
            color: "from-indigo-500 to-purple-600"
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
                            Get In Touch
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Ready to bring your ideas to life? Let&apos;s collaborate and create something amazing together. I&apos;m always excited to work on innovative projects!
                        </p>
                    </div>

                    {/* Centered Content */}
                    <div className="max-w-4xl mx-auto space-y-12">
                        
                        {/* Contact Information Cards */}
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {contactInfo.map((contact: ContactInfo, index: number) => (
                                    <a
                                        key={index}
                                        href={contact.href}
                                        className="group block bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/40 shadow-2xl hover:border-blue-700/50 transition-all duration-300"
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            <div className={`bg-gradient-to-br ${contact.color} w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4`}>
                                                <contact.icon className="w-7 h-7 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-semibold text-lg mb-1">{contact.label}</h3>
                                                <p className="text-blue-400 font-medium mb-2">{contact.value}</p>
                                                <p className="text-gray-400 text-sm">{contact.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-white mb-8">Connect on Social Media</h3>
                            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 shadow-2xl max-w-2xl mx-auto">
                                <div className="space-y-4">
                                    {socialLinks.map((social: SocialLink, index: number) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-4 p-4 rounded-xl border border-slate-600/30 ${social.color} transition-all duration-300 group`}
                                        >
                                            <social.icon className="w-6 h-6 text-white" />
                                            <div className="flex-1 text-left">
                                                <p className="text-white font-medium">{social.label}</p>
                                                <p className="text-gray-300 text-sm">{social.username}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-white mb-8">Quick Actions</h3>
                            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                                {quickActions.map((action: QuickAction, index: number) => (
                                    <div key={index} className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/40 shadow-2xl hover:border-blue-700/50 transition-all duration-300 group">
                                        <div className="flex flex-col items-center text-center">
                                            <div className={`bg-gradient-to-br ${action.color} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4`}>
                                                <action.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="mb-4">
                                                <h4 className="text-white font-semibold mb-2">{action.title}</h4>
                                                <p className="text-gray-400 text-sm">{action.description}</p>
                                            </div>
                                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-300">
                                                {action.action}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA Section */}
                    <div className="mt-16 text-center bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30 shadow-2xl max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Whether you need a full-stack web application, AI integration, or blockchain development, 
                            I&apos;m here to turn your vision into reality. Let&apos;s build something extraordinary together!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="mailto:maheshvashisth1111@gmail.com"
                                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Mail className="w-5 h-5" />
                                Send Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;