import React from 'react';
import { Download, ExternalLink, FileText, Maximize2 } from 'lucide-react';

const Resume: React.FC = () => {
    const downloadResume = (): void => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Mahesh_Vashisth_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const openResumeInNewTab = (): void => {
        window.open('/resume.pdf', '_blank');
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
                    <div className="text-center mb-8">
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            My Resume
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                            Download or view my comprehensive resume showcasing my experience, skills, and achievements
                        </p>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <button
                                onClick={downloadResume}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                            >
                                <Download className="w-5 h-5" />
                                Download PDF
                            </button>
                            <button
                                onClick={openResumeInNewTab}
                                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Maximize2 className="w-5 h-5" />
                                Open in New Tab
                            </button>
                        </div>
                    </div>

                    {/* Resume Viewer */}
                    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/40 shadow-2xl">
                        <div className="flex items-center justify-between mb-4 px-4">
                            <div className="flex items-center gap-2">
                                <FileText className="w-5 h-5 text-blue-400" />
                                <span className="text-white font-semibold">Resume - Mahesh Vashisth</span>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={downloadResume}
                                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 p-2 hover:bg-blue-500/10 rounded-lg"
                                    title="Download Resume"
                                >
                                    <Download className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={openResumeInNewTab}
                                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 p-2 hover:bg-blue-500/10 rounded-lg"
                                    title="Open in New Tab"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                        
                        {/* PDF Embed */}
                        <div className="rounded-xl overflow-hidden border border-slate-600/30">
                            <iframe
                                src="/resume.pdf"
                                width="100%"
                                height="800"
                                className="border-0"
                                title="Mahesh Vashisth Resume"
                            >
                                <p className="text-gray-300 p-8 text-center">
                                    Your browser does not support PDFs. 
                                    <button 
                                        onClick={downloadResume}
                                        className="text-blue-400 hover:text-blue-300 underline ml-1"
                                    >
                                        Download the PDF
                                    </button> 
                                    to view it.
                                </p>
                            </iframe>
                        </div>
                    </div>

                    {/* Alternative Download Section */}
                    <div className="mt-8 text-center bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/30 shadow-2xl">
                        <p className="text-gray-300 mb-4">
                            Having trouble viewing the resume? Download it directly or open in a new tab for better viewing experience.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={downloadResume}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Download className="w-4 h-4" />
                                Download Resume
                            </button>
                            {/* <a 
                                href="#contact"
                                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Get In Touch
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;