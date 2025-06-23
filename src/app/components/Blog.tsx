import React from 'react';
import { ExternalLink, Calendar, BookOpen, Eye, Heart, TrendingUp } from 'lucide-react';

// Define interfaces
interface BlogPost {
    id: number;
    title: string;
    description: string;
    url: string;
    publishDate: string;
    readTime: string;
    category: string;
    tags: string[];
    views: string;
    likes: string;
    color: string;
}

const Blogs: React.FC = () => {
    const blogPosts: BlogPost[] = [
        {
            id: 1,
            title: "Blockchain Bridges: Connecting the World of Decentralized Networks",
            description: "Explore how blockchain bridges enable seamless communication between different blockchain networks, revolutionizing interoperability in the decentralized ecosystem.",
            url: "https://maheshvashisth.hashnode.dev/blockchain-bridges-connecting-the-world-of-decentralized-networks",
            publishDate: "Dec 15, 2024",
            readTime: "8 min read",
            category: "Blockchain",
            tags: ["Blockchain", "Interoperability", "DeFi", "Web3"],
            views: "2.1k",
            likes: "89",
            color: "from-purple-500 to-indigo-600"
        },
        {
            id: 2,
            title: "Public Key vs Private Key: Understanding Cryptography in Simple Terms",
            description: "A beginner-friendly guide to understanding the fundamental concepts of public and private keys in cryptography and their crucial role in blockchain security.",
            url: "https://maheshvashisth.hashnode.dev/public-key-vs-private-key-understanding-cryptography-in-simple-terms",
            publishDate: "Nov 28, 2024",
            readTime: "6 min read",
            category: "Cryptography",
            tags: ["Cryptography", "Security", "Blockchain", "Education"],
            views: "1.8k",
            likes: "76",
            color: "from-blue-500 to-cyan-600"
        },
        {
            id: 3,
            title: "What is Bitcoin? A Beginner's Guide to the World's First Cryptocurrency",
            description: "Dive into the fascinating world of Bitcoin, understanding its history, technology, and impact on the global financial landscape in this comprehensive beginner's guide.",
            url: "https://maheshvashisth.hashnode.dev/what-is-bitcoin-a-beginners-guide-to-the-worlds-first-cryptocurrency",
            publishDate: "Nov 10, 2024",
            readTime: "10 min read",
            category: "Cryptocurrency",
            tags: ["Bitcoin", "Cryptocurrency", "Finance", "Technology"],
            views: "3.2k",
            likes: "124",
            color: "from-amber-500 to-orange-600"
        },
        {
            id: 4,
            title: "Blockchain for Beginners: The New Digital Frontier",
            description: "Start your blockchain journey with this comprehensive introduction covering the basics, real-world applications, and future potential of blockchain technology.",
            url: "https://maheshvashisth.hashnode.dev/blockchain-for-beginners-the-new-digital-frontier",
            publishDate: "Oct 25, 2024",
            readTime: "12 min read",
            category: "Blockchain",
            tags: ["Blockchain", "Technology", "Beginners", "Innovation"],
            views: "2.7k",
            likes: "98",
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
                            My Blogs
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                            Sharing insights, tutorials, and deep dives into blockchain technology, cryptocurrency, and the evolving landscape of Web3 development
                        </p>
                    </div>

                    {/* All Blog Posts Grid - Two cards per row */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {blogPosts.map((post: BlogPost) => (
                            <article key={post.id} className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 shadow-2xl hover:border-blue-700/50 transition-all duration-300 group">
                                <div className="flex items-center justify-between mb-6">
                                    <span className={`bg-gradient-to-r ${post.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                                        {post.category}
                                    </span>
                                    <div className="flex items-center gap-1 text-gray-400">
                                        <TrendingUp className="w-4 h-4" />
                                        <span className="text-sm">{post.views}</span>
                                    </div>
                                </div>
                                
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                                    {post.title}
                                </h3>
                                
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {post.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {post.tags.map((tag: string, tagIndex: number) => (
                                        <span 
                                            key={tagIndex}
                                            className="bg-slate-800/60 text-gray-300 px-3 py-1 rounded-lg text-sm"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex items-center justify-between pt-4 border-t border-slate-600/30 mb-6">
                                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {post.publishDate}
                                        </span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center gap-1 text-red-400 text-sm">
                                            <Heart className="w-4 h-4" />
                                            {post.likes}
                                        </span>
                                        <span className="flex items-center gap-1 text-blue-400 text-sm">
                                            <Eye className="w-4 h-4" />
                                            {post.views}
                                        </span>
                                    </div>
                                </div>

                                <a
                                    href={post.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                                >
                                    Read Article
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            </article>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with My Latest Articles</h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Follow me on Hashnode for regular updates on blockchain technology, Fullstack development, and Web3 development tutorials.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="https://maheshvashisth.hashnode.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <BookOpen className="w-5 h-5" />
                                Visit My Blog
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;