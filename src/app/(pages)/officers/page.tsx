'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { officersDeps, stats } from 'Website.Config';
import Image from 'next/image';
const OfficersPage = () => {
  type Officer = {
    name: string;
    role: string;
    major: string;
    img: string;
    gradYear: number;
    linkedin?: string; // Optional
    github?: string; // Optional
  };

  return (
    <div className="min-h-screen pt-10" style={{ backgroundColor: '#1b1149' }}>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#125d99] opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-[#53cbec] opacity-10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* About Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-8 text-white">RoboSub Team</h1>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-200">
            <p className="text-lg">
              Our RoboSub team is a dynamic group of innovative engineers and
              problem-solvers dedicated to pushing the boundaries of marine
              robotics. Since our founding in 2022, we've grown into a large
              community of engineers at UTD who love to build robots for the
              water.
            </p>
            <p className="text-lg">
              Our diverse team brings together expertise from multiple
              engineering disciplines, creating a collaborative environment
              where creativity meets technical excellence. From advanced
              computer vision systems to sophisticated mechanical designs, our
              members contribute unique skills to create cutting-edge marine
              vehicles.
            </p>
            <p className="text-lg">
              Through dedication, innovation, and teamwork, we've consistently
              demonstrated our ability to tackle complex challenges in
              underwater robotics, earning recognition for our technical
              achievements and innovative solutions.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-[#125d99] shadow-lg">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <h3 className="text-3xl font-bold mb-2 text-white">
                {stats.members}
              </h3>
              <p className="text-gray-200">Active Members</p>
            </CardContent>
          </Card>
          <Card className="bg-[#125d99] shadow-lg">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <h3 className="text-3xl font-bold mb-2 text-white">
                Est. {stats.founded}
              </h3>
              <p className="text-gray-200">Year Founded</p>
            </CardContent>
          </Card>
          <Card className="bg-[#125d99] shadow-lg">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <h3 className="text-3xl font-bold mb-2 text-white">
                {stats.majorsRepresented}
              </h3>
              <p className="text-gray-200">Majors Represented</p>
            </CardContent>
          </Card>
        </div>

        {/* Officers Section */}
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Meet Our Officers
        </h2>

        <div>
          {officersDeps.map((department, index) => (
            <div key={index} className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-[#53cbec]">
                {department.title}
              </h3>
              <div className="flex flex-wrap gap-6">
                {department.officers.map((officer: Officer, index) => (
                  <Card
                    key={index}
                    className="bg-[#125d99] shadow-lg hover:shadow-xl transition-shadow flex-1 min-w-[300px] max-w-[350px]"
                  >
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#1b1149] flex items-center justify-center">
                          {officer.img === '' ? (
                            <span className="text-2xl font-bold text-white">
                              {officer.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </span>
                          ) : (
                            <Image
                              src={officer.img}
                              alt="ProfileImg"
                              width={96}
                              height={96}
                              className="object-cover rounded-full"
                            />
                          )}
                        </div>

                        <h3 className="text-xl font-bold mb-1 text-white">
                          {officer.name}
                        </h3>
                        <p className="text-lg font-semibold mb-2 text-[#53cbec]">
                          {officer.role}
                        </p>
                        <p className="text-gray-200 mb-1">{officer.major}</p>
                        <p className="text-gray-300 mb-4">
                          Class of {officer.gradYear}
                        </p>
                        <div className="flex justify-center space-x-4">
                          {officer.linkedin && (
                            <a
                              href={officer.linkedin}
                              className="text-gray-200 hover:text-[#53cbec] transition-colors"
                            >
                              <Linkedin className="w-6 h-6" />
                            </a>
                          )}
                          {officer.github && (
                            <a
                              href={officer.github}
                              className="text-gray-200 hover:text-[#53cbec] transition-colors"
                            >
                              <Github className="w-6 h-6" />
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficersPage;
