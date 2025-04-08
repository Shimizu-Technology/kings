
import { Clock } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-purple-700 text-white py-8 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <h1 className="logo-text text-6xl text-center mb-2">SUNRISE DINER</h1>
        <p className="text-xl mb-4 text-center">Home-Style Cooking, All Day Long 🍳</p>
        <div className="flex items-center justify-center text-purple-200">
          <Clock className="mr-2" />
          <span>Classic comfort food, served 24/7 ✨</span>
        </div>
      </div>
    </header>
  );
}