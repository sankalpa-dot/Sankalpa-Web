import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { projects } from '../mock';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work in web development and AI integration
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-[#111111] border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {project.status === 'Ongoing' && (
                  <Badge className="absolute top-4 right-4 bg-green-500/20 text-green-400 border-green-500/50">
                    {project.status}
                  </Badge>
                )}
              </div>

              <CardContent className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-400">{project.subtitle}</p>
                  </div>
                  <Folder className="text-blue-500" size={24} />
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs border-white/20 text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 4 && (
                    <Badge variant="outline" className="text-xs border-white/20 text-gray-400">
                      +{project.techStack.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/20 hover:bg-white/5 text-white"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  )}
                  {project.liveDemo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-500/50 hover:bg-blue-500/10 text-blue-400"
                      onClick={() => window.open(project.liveDemo, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-white/20 hover:bg-white/5 text-white px-8 py-6"
            onClick={() => window.open('https://github.com/sankalpa-dot', '_blank')}
          >
            <Github size={18} className="mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
