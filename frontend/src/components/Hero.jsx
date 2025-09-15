import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ChevronDown, Github, Linkedin } from 'lucide-react';
import { personalInfo, stats } from '../data/mock';
import utkarshProfileImg from '@/assets/personal/utkarsh-profile.png';

const Hero = () => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const texts = ['Full Stack Developer', 'Java Expert', 'Cloud Architect', 'AI Enthusiast'];

    useEffect(() => {
        const typeText = () => {
            const targetText = texts[currentIndex];
            if (currentText.length < targetText.length) {
                setCurrentText(targetText.slice(0, currentText.length + 1));
            } else {
                setTimeout(() => {
                    setCurrentText('');
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                }, 2000);
            }
        };

        const timer = setTimeout(typeText, 100);
        return () => clearTimeout(timer);
    }, [currentText, currentIndex, texts]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* ===== WRAPPER FOR 2-COLUMN LAYOUT ===== */}
                    <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-center">

                        {/* ===== ADDITION 1: Image Column ===== */}
                        <div className="flex-shrink-0">
                            <img
                                src={utkarshProfileImg}
                                alt="Utkarsh"
                                className="w-70 h-70 sm:w-80 sm:h-80 rounded-full object-cover shadow-2xl shadow-cyan-500/20 border-4 border-slate-700/50 hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* ===== ADDITION 2: Text Content Column ===== */}
                        <div className="flex-grow">
                            {/* Greeting */}
                            <div className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2 mb-8 border border-slate-700/50">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-slate-300 text-sm">Available for new opportunities</span>
                            </div>

                            {/* Main Title */}
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                                Hi, I'm{' '}
                                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                    {personalInfo.name}
                                </span>
                            </h1>

                            {/* Animated Subtitle */}
                            <div className="h-16 mb-8">
                                <h2 className="text-2xl md:text-3xl text-slate-300 font-light">
                                    {currentText}
                                    <span className="animate-pulse">|</span>
                                </h2>
                            </div>

                            {/* Description */}
                            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto md:mx-auto leading-relaxed">
                                {personalInfo.bio}
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-center mb-16">
                                <Button
                                    onClick={() => scrollToSection('projects')}
                                    size="lg"
                                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 text-lg"
                                >
                                    View My Work
                                </Button>
                                <Button
                                    onClick={() => scrollToSection('contact')}
                                    size="lg"
                                    variant="outline"
                                    className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-3 text-lg"
                                >
                                    Get In Touch
                                </Button>
                            </div>

                            {/* Social Links */}
                            <div className="flex justify-center md:justify-center space-x-6">
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-slate-800/50 border border-slate-700/50 rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-slate-800/50 border border-slate-700/50 rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Stats (kept below the 2-column layout for better flow) */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 mb-16">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Scroll Indicator */}
                    <div className="w-full flex justify-center">
                        <button
                            onClick={() => scrollToSection('about')}
                            className="animate-bounce inline-flex items-center text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                        >
                            <ChevronDown className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;