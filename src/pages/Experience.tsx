import type { Experience } from '../types';

const experiences: Experience[] = [
  {
    company: "Google",
    position: "Senior Software Engineer",
    period: "2020 - Present",
    description: "Leading a team of developers working on Google Cloud Platform. Implemented key features that improved system performance by 40%. Mentored junior developers and contributed to architectural decisions."
  },
  {
    company: "Microsoft",
    position: "Software Engineer",
    period: "2018 - 2020",
    description: "Worked on Azure's cloud infrastructure team. Developed microservices using Node.js and TypeScript. Reduced service latency by 30% through optimization."
  },
  {
    company: "Amazon",
    position: "Software Developer",
    period: "2016 - 2018",
    description: "Part of the AWS Lambda team. Implemented new features and maintained existing services. Collaborated with cross-functional teams to deliver high-quality solutions."
  }
];

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Experience</h1>
      
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-0 top-2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900" />
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">{exp.position}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}