import { Link, useLocation } from 'react-router-dom';
import { Heart, AlertCircle } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-white border-b-2 border-teal-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-teal-600" />
              <span className="text-xl font-semibold text-gray-800">SCD Support</span>
            </Link>
            <Link
              to="/crisis"
              className="flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors font-medium"
            >
              <AlertCircle className="w-5 h-5" />
              Crisis Help
            </Link>
          </div>

          <nav className="flex flex-wrap gap-2">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                isActive('/')
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Home
            </Link>
            <Link
              to="/check-in"
              className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                isActive('/check-in')
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Daily Check-In
            </Link>
            <Link
              to="/learn"
              className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                isActive('/learn')
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Learn
            </Link>
            <Link
              to="/stories"
              className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                isActive('/stories')
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Stories
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
          <p className="font-medium mb-2">Medical Disclaimer</p>
          <p>
            This platform provides support and education and does not replace professional medical care.
            Always consult your healthcare provider for medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
