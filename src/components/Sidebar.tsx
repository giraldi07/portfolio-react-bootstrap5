import { Link, useLocation } from 'react-router-dom';
import { User, GraduationCap, Code, Briefcase, 
         FolderOpen, Award, Bell, Mail, Menu, X } from 'lucide-react';

const navItems = [
  { title: 'About Me', path: '/', icon: User },
  { title: 'Education', path: '/education', icon: GraduationCap },
  { title: 'Skills', path: '/skills', icon: Code },
  { title: 'Experience', path: '/experience', icon: Briefcase },
  { title: 'Portfolio', path: '/portfolio', icon: FolderOpen },
  { title: 'Achievements', path: '/achievements', icon: Award },
  { title: 'Updates', path: '/updates', icon: Bell },
  { title: 'Contact', path: '/contact', icon: Mail },
];

interface SidebarProps {
  className?: string;
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ className = '', isCollapsed, toggleSidebar }: SidebarProps) {
  const location = useLocation();

  return (
    <aside
      className={`fixed inset-y-0 left-0 bg-white dark:bg-gray-900 border-r 
        border-gray-200 dark:border-gray-800 p-4 z-50 overflow-y-auto 
        transition-all duration-300 ease-in-out 
        ${isCollapsed ? 'w-20' : 'w-64'} ${className}`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient" />
            {!isCollapsed && (
              <div>
                <h1 className="font-bold text-xl">Your Name</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Developer</p>
              </div>
            )}
          </div>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg
                      transition-all duration-200
                      ${isActive ? 
                        'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shadow-md' : 
                        'hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md'}`}
                  >
                    <Icon className="w-5 h-5" />
                    {!isCollapsed && <span>{item.title}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        {!isCollapsed && (
          <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              © {new Date().getFullYear()} Your Name
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}