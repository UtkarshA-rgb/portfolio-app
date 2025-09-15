import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { personalInfo, education, certifications } from '../data/mock';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-32">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Passionate about building scalable solutions and exploring cutting-edge technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio & Personal Info */}
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    As a Full Stack Developer with over 4 years of experience, I specialize in building 
                    high-performance applications using modern technologies. My expertise spans across 
                    Java ecosystem, cloud platforms, and cutting-edge AI integration.
                  </p>
                  <p>
                    I'm passionate about optimizing system performance and have a proven track record 
                    of improving API response times by 40% and handling systems with 99.9% uptime. 
                    My recent focus includes integrating LLM capabilities and building scalable 
                    microservices architectures.
                  </p>
                  <p>
                    When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
                    projects, and mentoring junior developers. I believe in continuous learning and 
                    staying updated with the latest industry trends.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Personal Details */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <div>
                      <span className="text-slate-400 text-sm block">Location</span>
                      <span className="text-white">{personalInfo.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <div>
                      <span className="text-slate-400 text-sm block">Experience</span>
                      <span className="text-white">4+ Years</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 text-cyan-400 mr-3" />
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-cyan-400/30 pl-6 relative">
                      <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-2 top-2"></div>
                      <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                      <p className="text-cyan-400 font-medium">{edu.field}</p>
                      <p className="text-slate-300">{edu.school}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-slate-400">
                        <span>{edu.location}</span>
                        <span>•</span>
                        <span>{edu.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <Award className="w-6 h-6 text-cyan-400 mr-3" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{cert.name}</h4>
                        <p className="text-slate-300 text-sm">{cert.issuer}</p>
                        <div className="flex items-center justify-between mt-2">
                          <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                            {cert.year}
                          </Badge>
                          <a 
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-cyan-400 hover:text-cyan-300 text-1.5xl transition-colors"
                          >
                            View Credential
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Highlights */}
            <Card className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border-cyan-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Key Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-300">Reduced API response time by 40%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-300">Built systems handling 500K+ daily requests</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-300">Achieved 99.9% system uptime</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-300">Expert in AI/LLM integration</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;