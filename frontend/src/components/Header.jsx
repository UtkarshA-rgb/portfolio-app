import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Code2, Download } from 'lucide-react';
import { personalInfo } from '@/data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };


  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
            <div className="flex items-center space-x-3">
                {/* Use an img tag to point to your favicon */}
                <img src="/my-favicon.png" alt="Logo" className="w-20 h-20" />
                <span className="text-xl font-bold text-white w-15 h-15">Utkarsh A</span>
            </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Contact
            </button>

              {/* Resume Download Button */}
              <a href="/resume.pdf" download="Utkarsh-Resume.pdf">
                  <Button
                      size="lg"
                      variant="outline"
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 text-lg"
                  >
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                  </Button>
              </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-800">
            <div className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-left"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-left"
              >
                Contact
              </button>
                {/* Resume Download Button */}
                <a href="/resume.pdf" download="Utkarsh-Resume.pdf">
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                    </Button>
                </a>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;