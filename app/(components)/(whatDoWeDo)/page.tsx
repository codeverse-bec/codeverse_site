"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Group, Lightbulb, School } from '@mui/icons-material';

// Define the type for each activity item
interface Activity {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const activities: Activity[] = [
  {
    id: 1,
    title: 'Coding Workshops',
    description: 'Participate in hands-on coding workshops to enhance your skills.',
    icon: <Code fontSize="large" sx={{ color: '#4caf50' }} />
  },
  {
    id: 2,
    title: 'Team Projects',
    description: 'Collaborate with peers on exciting coding projects and competitions.',
    icon: <Group fontSize="large" sx={{ color: '#2196f3' }} />
  },
  {
    id: 3,
    title: 'Guest Lectures',
    description: 'Attend talks from industry experts and gain insights into the tech world.',
    icon: <Lightbulb fontSize="large" sx={{ color: '#ff9800' }} />
  },
  {
    id: 4,
    title: 'Skill Development',
    description: 'Engage in activities that foster professional and personal growth.',
    icon: <School fontSize="large" sx={{ color: '#9c27b0' }} />
  },
];

export default function WhatDoWeDo() {
  return (
    <section className="w-full min-h-screen bg-black flex flex-col justify-center items-center py-12">
      <div className="w-full max-w-[1200px] px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-8">Our Services</h2>
        <p className="text-lg text-gray-300 text-center mb-12">
          Our coding club provides a range of opportunities for students to advance their programming skills,
          collaborate on projects, and gain valuable industry experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {activities.map((activity) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center border border-gray-600"
            >
              <div className="text-4xl mb-4">
                {activity.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{activity.title}</h3>
              <p className="text-gray-400">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
