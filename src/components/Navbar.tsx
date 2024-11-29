import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Murals', href: '/murals' },
    { name: 'Paintings', href: '/paintings' },
    { name: 'T-Shirt Art', href: '/tshirts' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-purple-900/50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-purple-300 hover:text-purple-200 transition-colors"
        >
          Ruth Saldanha
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className="text-gray-300 hover:text-purple-300 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center space-x-4">
          <motion.button 
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-purple-300 hover:text-purple-200 transition-colors"
          >
            {theme === 'dark' ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
