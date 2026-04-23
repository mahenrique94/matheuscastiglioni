import React from 'react';
export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 relative z-10 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/favicon.png"
            alt="MC Logo"
            className="w-6 h-6 rounded opacity-80" />
          
          <a className="text-sm text-gray-500 font-medium" href="/#">
            Matheus Castiglioni
          </a>
        </div>

        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Matheus Castiglioni. All rights
          reserved.
        </p>
      </div>
    </footer>);

}