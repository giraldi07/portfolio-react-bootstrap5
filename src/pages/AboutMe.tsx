import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function AboutMe() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200"
          alt="Profile"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 border-4 border-white dark:border-gray-800 shadow-lg"
        />
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">John Doe</h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">Full Stack Developer</p>
      </div>

      <div className="prose dark:prose-invert max-w-none mb-8">
        <p className="text-base sm:text-lg leading-relaxed mb-6">
          I'm a passionate full-stack developer with 5 years of experience building web applications.
          I specialize in React, Node.js, and cloud architecture. My goal is to create elegant
          solutions that solve real-world problems.
        </p>
        
        <p className="text-base sm:text-lg leading-relaxed">
          When I'm not coding, you can find me contributing to open-source projects, writing technical
          articles, or exploring new technologies. I believe in continuous learning and sharing
          knowledge with the developer community.
        </p>
      </div>

      <div className="flex justify-center gap-4 sm:gap-6">
        <a href="#" className="p-2 sm:p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <Github className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a href="#" className="p-2 sm:p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a href="#" className="p-2 sm:p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a href="#" className="p-2 sm:p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>
    </div>
  );
}