import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Experience = ({ experience, achievements }) => {
  if (!experience || !achievements) return null;

  return (
    <section id="experience" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-blue-500">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey in software development and key milestones
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Briefcase size={24} className="text-blue-500" />
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp) => (
                <Card key={exp.id} className="bg-[#0a0a0a] border-white/10 hover:border-blue-500/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          exp.type === 'project'
                            ? 'bg-blue-500/20 text-blue-400'
                            : exp.type === 'academic'
                            ? 'bg-purple-500/20 text-purple-400'
                            : 'bg-green-500/20 text-green-400'
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{exp.organization}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <svg
                className="text-blue-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
              Achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement) => (
                <Card
                  key={achievement.id}
                  className="bg-[#0a0a0a] border-white/10 hover:border-blue-500/50 transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-blue-400">{achievement.year.slice(-2)}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{achievement.description}</p>
                        <span className="text-xs text-gray-500 mt-2 inline-block">{achievement.year}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
