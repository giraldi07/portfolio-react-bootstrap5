import React from 'react';

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    period: "2018 - 2020",
    description: "Specialized in Artificial Intelligence and Machine Learning. Thesis on Deep Learning applications in Natural Language Processing.",
    gpa: "3.8/4.0"
  },
  {
    degree: "Bachelor of Engineering in Software Engineering",
    school: "MIT",
    period: "2014 - 2018",
    description: "Core focus on software development, algorithms, and data structures. Minor in Mathematics.",
    gpa: "3.9/4.0"
  }
];

export default function Education() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Education</h1>
      
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold mb-1">{edu.degree}</h2>
                <p className="text-gray-600 dark:text-gray-400">{edu.school}</p>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">GPA: {edu.gpa}</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}