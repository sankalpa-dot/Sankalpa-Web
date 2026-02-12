import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ personalInfo }) => {
  if (!personalInfo) return null;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Greeting */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-300">Available for opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            {personalInfo.name.split(' ')[0]}
          </span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
          {personalInfo.title}
        </p>

        {/* Tagline */}
        <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all hover:scale-105"
          >
            View My Work
            <ArrowRight className="ml-2" size={18} />
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-white/20 hover:bg-white/5 text-white px-8 py-6 text-base rounded-lg transition-all hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all hover:-translate-y-1"
          >
            <Github size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all hover:-translate-y-1"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all hover:-translate-y-1"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
