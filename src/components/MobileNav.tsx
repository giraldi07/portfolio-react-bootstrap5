import { Link, useLocation } from 'react-router-dom';
import { User, GraduationCap, Code, Briefcase, 
         FolderOpen, Award, Bell, Mail } from 'lucide-react';

const navItems = [
  { title: 'About', path: '/', icon: User },
  { title: 'Education', path: '/education', icon: GraduationCap },
  { title: 'Skills', path: '/skills', icon: Code },
  { title: 'Experience', path: '/experience', icon: Briefcase },
  { title: 'Portfolio', path: '/portfolio', icon: FolderOpen },
  { title: 'Achievements', path: '/achievements', icon: Award },
  { title: 'Updates', path: '/updates', icon: Bell },
  { title: 'Contact', path: '/contact', icon: Mail },
];

export default function MobileNav({ className = '' }) {
  const location = useLocation();

  return (
    <nav className={`bg-white dark:bg-gray-900 border-t 
      border-gray-200 dark:border-gray-800 py-2 fixed bottom-0 left-0 right-0 z-50 ${className}`}>
      <div className="grid grid-cols-4 gap-1">
        {navItems.slice(0, 4).map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 p-2
                ${isActive ? 'text-blue-600 dark:text-blue-400' : 
                'text-gray-600 dark:text-gray-400'}`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}