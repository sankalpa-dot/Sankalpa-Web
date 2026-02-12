import React from 'react';
import { Badge } from './ui/badge';

const Skills = ({ skills }) => {
  if (!skills) return null;

  const categories = [
    { title: 'Frontend', data: skills.frontend, color: 'blue' },
    { title: 'Backend', data: skills.backend, color: 'purple' },
    { title: 'Tools & Other', data: skills.tools, color: 'green' }
  ];

  // Get all unique tech names for badges
  const allTechs = [
    ...skills.frontend.map(s => s.name),
    ...skills.backend.map(s => s.name),
    ...skills.tools.map(s => s.name)
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-blue-500">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all"
            >
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    category.color === 'blue'
                      ? 'bg-blue-500'
                      : category.color === 'purple'
                      ? 'bg-purple-500'
                      : 'bg-green-500'
                  }`}
                ></span>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.data.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          category.color === 'blue'
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                            : category.color === 'purple'
                            ? 'bg-gradient-to-r from-purple-500 to-purple-600'
                            : 'bg-gradient-to-r from-green-500 to-green-600'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {allTechs.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm border-white/20 hover:border-blue-500 hover:text-blue-400 transition-all cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
