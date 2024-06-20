import React from 'react';

export const Footer = () => {
  return (
    <footer className='flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8'>
      <p className='flex-1 text-sm text-gray-500 text-center'>
        © {new Date().getFullYear()} Prueba Tecnica para DELOSI
      </p>
    </footer>
  );
};
