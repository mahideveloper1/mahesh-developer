'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, User, Briefcase, Mail, FileText, Github, Linkedin, Twitter, BookOpen, Award, Clock, LucideIcon } from 'lucide-react';

// Define types
type Section = 'about' | 'skills' | 'experience' | 'projects' | 'services' | 'resume' | 'contact' | 'blogs';

interface MenuItem {
  icon: LucideIcon;
  label: string;
  section: Section;
}

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

interface SidebarProps {
  activeSection: Section;
  changeSection: (section: Section) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, changeSection }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (section: Section): void => {
    changeSection(section);
    setIsOpen(false); // Close mobile menu after click
  };

  const menuItems: MenuItem[] = [
    { icon: User, label: 'About', section: 'about' },
    { icon: Award, label: 'Skills', section: 'skills' },
    { icon: Clock, label: 'Experience', section: 'experience' },
    { icon: Briefcase, label: 'Projects', section: 'projects' },
    // { icon: BookOpen, label: 'Services', section: 'services' },
    { icon: FileText, label: 'Resume', section: 'resume' },
    { icon: Mail, label: 'Contact', section: 'contact' },
    { icon: BookOpen, label: 'Blogs', section: 'blogs' },
  ];

  const socialLinks: SocialLink[] = [
    { icon: Github, href: 'https://github.com/mahideveloper1', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mahesh-vashisth-25901b252/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/Mahesh03976992', label: 'Twitter' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-blue-800 text-white rounded-lg shadow-lg lg:hidden hover:bg-blue-700 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white shadow-2xl z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 w-64 border-r border-blue-600/30`}
      >
        {/* Dark shadow overlay on the right edge */}
        <div className="absolute top-0 right-0 w-4 h-full bg-gradient-to-r from-transparent to-black/20 pointer-events-none"></div>
        
        {/* Profile Section */}
        <div className="p-6 border-b border-blue-600/30">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mb-4 shadow-lg ring-2 ring-blue-400/40 overflow-hidden">
              <Image
                src="/mahesh-photo2.jpeg"
                alt="Mahesh Profile Photo"
                width={80}
                height={80}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
            <h2 className="text-xl font-semibold mb-1">Mahesh Vashisth</h2>
            <p className="text-sm text-blue-200">Full Stack Developer</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {menuItems.map((item: MenuItem, index: number) => (
              <li key={index}>
                <button
                  onClick={() => handleNavClick(item.section)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 group ${
                    activeSection === item.section 
                      ? 'bg-blue-600/50 text-white border-l-4 border-blue-400' 
                      : 'text-blue-100 hover:text-white hover:bg-blue-800/50'
                  }`}
                >
                  <item.icon 
                    size={20} 
                    className={`mr-3 transition-colors ${
                      activeSection === item.section 
                        ? 'text-blue-300' 
                        : 'group-hover:text-blue-300'
                    }`} 
                  />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="p-4 border-t border-blue-600/30">
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social: SocialLink, index: number) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-blue-200 hover:text-white hover:bg-blue-800/50 rounded-lg transition-all duration-200"
                title={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;