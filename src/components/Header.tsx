import React from 'react';
import { Clock } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-purple-700 text-white py-8 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <h1 className="logo-text text-6xl text-center mb-2">KING'S</h1>
        <p className="text-xl mb-4 text-center">Always Open, Always Local 🏝️</p>
        <div className="flex items-center justify-center text-purple-200">
          <Clock className="mr-2" />
          <span>Serving Guam since 1975 ✨</span>
        </div>
      </div>
    </header>
  );
}