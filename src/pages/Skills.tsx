import React from 'react';

const skills = {
  "Frontend Development": [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Next.js", level: 80 }
  ],
  "Backend Development": [
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "GraphQL", level: 70 }
  ],
  "DevOps & Tools": [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 },
    { name: "CI/CD", level: 80 }
  ]
};

export default function Skills() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Skills</h1>
      
      <div className="space-y-8">
        {Object.entries(skills).map(([category, categorySkills]) => (
          <div key={category} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">{category}</h2>
            <div className="space-y-4">
              {categorySkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}