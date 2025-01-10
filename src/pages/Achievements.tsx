import React from 'react';
import { Award, Trophy, Star, Medal } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: "Best Developer Award 2023",
    organization: "Tech Excellence Awards",
    description: "Recognized for outstanding contributions to open-source development and innovation in cloud technologies."
  },
  {
    icon: Award,
    title: "Google Developer Expert",
    organization: "Google",
    description: "Certified as a Google Developer Expert in Web Technologies, contributing to the developer community through mentorship and technical content."
  },
  {
    icon: Star,
    title: "Top Open Source Contributor",
    organization: "GitHub",
    description: "Ranked among top 1% of contributors on GitHub, with over 1000+ contributions to major open-source projects."
  },
  {
    icon: Medal,
    title: "Innovation Excellence",
    organization: "Microsoft MVP",
    description: "Awarded Microsoft MVP status for contributions to the developer community and expertise in cloud technologies."
  }
];

export default function Achievements() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Achievements</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-1">{achievement.title}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {achievement.organization}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}