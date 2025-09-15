import React from 'react';
import { skills } from '../data/mock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';

// Animation variants for the container and items
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

// The larger Skill Card component with proficiency details
const SkillCard = ({ skill }) => (
    <motion.div variants={itemVariants} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 flex flex-col gap-4 h-full">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <img src={skill.logo} alt={`${skill.name} logo`} className="w-10 h-10 object-contain" />
                <span className="font-bold text-lg text-white">{skill.name}</span>
            </div>
            <span className="text-sm font-semibold text-slate-400 bg-slate-700/50 px-2 py-1 rounded">
        {skill.years} Yrs
      </span>
        </div>
        <div className="mt-auto">
            <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-300">Proficiency</span>
                <span className="text-sm font-medium text-cyan-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                ></div>
            </div>
        </div>
    </motion.div>
);

// The main Skills component with the tabbed layout
const Skills = () => {
    const skillCategories = Object.keys(skills);

    return (
        <section id="skills" className="py-20 md:py-36">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">My Professional Skills</h2>
                    <p className="text-lg text-slate-400 mt-4">A comprehensive overview of my technical expertise.</p>
                    <div className="mt-4 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded"></div>
                </div>

                <Tabs defaultValue="backend" className="w-full max-w-[80rem] mx-auto">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto bg-slate-800/50 border border-slate-700">
                        {skillCategories.map((category) => (
                            <TabsTrigger
                                key={category}
                                value={category}
                                className="capitalize text-slate-400 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
                            >
                                {category === 'cloud' ? 'Cloud & DevOps' : category}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {skillCategories.map((category) => {
                        const numSkills = skills[category].length;
                        const columns = Math.ceil(numSkills / 2);

                        return (
                            <TabsContent key={`${category}-content`} value={category} className="mt-8">
                                <motion.div
                                    key={category}
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-${columns > 4 ? 4 : columns} gap-6`}
                                >
                                    {skills[category].map((skill, index) => (
                                        <SkillCard key={`${category}-${index}`} skill={skill} />
                                    ))}
                                </motion.div>
                            </TabsContent>
                        );
                    })}
                </Tabs>
            </div>
        </section>
    );
};

export default Skills;