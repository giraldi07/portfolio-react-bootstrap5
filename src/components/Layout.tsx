import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Moon, Sun, Settings as SettingsIcon, Award, Mail, Bell, FolderOpen } from 'lucide-react';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import Settings from './Settings';
import { Settings as SettingsType } from '../types';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<SettingsType>(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedCursorStyle = localStorage.getItem('cursorStyle') || 'default';
    
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    
    return {
      theme: savedTheme as 'light' | 'dark',
      cursorStyle: savedCursorStyle as 'default' | 'dot' | 'border'
    };
  });
  
  const [showSettings, setShowSettings] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      });
    };

    if (settings.cursorStyle !== 'default') {
      document.body.style.cursor = 'none';
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      document.body.style.cursor = 'default';
    }

    return () => {
      document.body.style.cursor = 'default';
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [settings.cursorStyle]);

  const toggleTheme = () => {
    setSettings(prev => {
      const newTheme = prev.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark');
      return { ...prev, theme: newTheme };
    });
  };

  const handleSettingsChange = (newSettings: SettingsType) => {
    localStorage.setItem('theme', newSettings.theme);
    localStorage.setItem('cursorStyle', newSettings.cursorStyle);
    setSettings(newSettings);
  };

  return (
    <div className="min-h-screen transition-all-smooth">
      <div className="flex flex-col lg:flex-row">
        <Sidebar 
          className="hidden lg:block"
          isCollapsed={isSidebarCollapsed}
          toggleSidebar={toggleSidebar}
        />
        
        <main 
          className={`flex-1 p-4 sm:p-6 lg:p-8 pb-20 lg:pb-8 transition-all duration-300 ease-in-out 
            ${isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'} pt-20 lg:pt-8`} // Tambahkan pt-20 untuk padding-top
        >
          {/* Tombol Menu Tambahan untuk Mobile */}
          <div className="fixed top-4 right-4 flex items-center gap-4 z-50">
            {/* Tombol Menu Tambahan */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href="/portfolio"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all-smooth"
              >
                <FolderOpen className="w-5 h-5" />
              </a>
              <a
                href="/achievements"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all-smooth"
              >
                <Award className="w-5 h-5" />
              </a>
              <a
                href="/updates"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all-smooth"
              >
                <Bell className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all-smooth"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Tombol Settings dan Toggle Theme */}
            <button
              onClick={() => setShowSettings(true)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all-smooth"
            >
              <SettingsIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all-smooth"
            >
              {settings.theme === 'light' ? (
                <Moon className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Sun className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>

          {/* Konten Utama */}
          <div key={location.pathname} className="page-transition">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Navigation */}
      <MobileNav className="lg:hidden fixed bottom-0 left-0 right-0 z-40" />
      
      {/* Settings Modal */}
      {showSettings && (
        <Settings
          settings={settings}
          setSettings={handleSettingsChange}
          onClose={() => setShowSettings(false)}
        />
      )}

      {/* Custom Cursor */}
      {settings.cursorStyle !== 'default' && (
        <div
          className={`custom-cursor ${settings.cursorStyle}`}
          style={{
            transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`
          }}
        />
      )}
    </div>
  );
}