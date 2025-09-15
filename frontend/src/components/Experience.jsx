import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { experience } from '../data/mock';
import { Building, MapPin, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Building scalable solutions and driving innovation across leading organizations
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600"></div>

            {experience.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-slate-900 z-10"></div>
                
                {/* Experience Card */}
                <div className="ml-20">
                  <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                            {exp.position}
                          </h3>
                          <div className="flex items-center space-x-2 text-cyan-400 font-semibold mb-2">
                            <Building className="w-5 h-5" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className="bg-slate-700 text-slate-300 px-3 py-1 w-fit"
                        >
                          {exp.type}
                        </Badge>
                      </div>

                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-4 mb-6 text-slate-400">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              variant="outline" 
                              className="border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">4+</div>
              <div className="text-slate-400">Years of Experience</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">2</div>
              <div className="text-slate-400">Companies</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-slate-400">Projects Delivered</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;