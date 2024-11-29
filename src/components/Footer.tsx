import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Instagram', href: '#', icon: '📸' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'LinkedIn', href: '#', icon: '💼' }
  ];

  return (
    <footer className="bg-artist-purple-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl hover:text-artist-purple-600 dark:hover:text-artist-purple-300 transition-colors"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-artist-purple-700 dark:text-artist-purple-300">
          © {new Date().getFullYear()} Artist Portfolio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
