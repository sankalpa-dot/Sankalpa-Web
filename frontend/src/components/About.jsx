import React from 'react';
import { Code2, Zap, Target } from 'lucide-react';

const About = ({ personalInfo }) => {
  if (!personalInfo) return null;

  const highlights = [
    {
      icon: <Code2 size={24} />,
      title: "Full-Stack Development",
      description: "Building end-to-end web applications with modern frameworks"
    },
    {
      icon: <Zap size={24} />,
      title: "AI Integration",
      description: "Implementing intelligent features using latest AI APIs"
    },
    {
      icon: <Target size={24} />,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image/Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full flex items-center justify-center border-4 border-white/10">
                  <Code2 size={80} className="text-blue-400" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    <span>Currently working on NeuroPlanix</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-100">
              Building Digital Solutions with Purpose
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              {personalInfo.about}
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="text-blue-500 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
