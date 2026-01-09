import { Link } from 'react-router-dom';
import { Activity, AlertCircle, BookOpen, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Daily Support for Living Well with Sickle Cell Disease
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Track your health, understand your risks, and get guidance when you need it most.
          This platform helps you stay informed and supported every day.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <Link
          to="/check-in"
          className="bg-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <Activity className="w-6 h-6" />
          Daily Check-In
        </Link>
        <Link
          to="/crisis"
          className="bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <AlertCircle className="w-6 h-6" />
          Crisis Help
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-teal-50 p-6 rounded-xl border-2 border-teal-100">
          <Activity className="w-12 h-12 text-teal-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Daily Check-Ins</h3>
          <p className="text-gray-600">
            Quick daily assessments to help you understand your current risk level and get personalized guidance.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-100">
          <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Learn & Understand</h3>
          <p className="text-gray-600">
            Clear, simple information about sickle cell disease, triggers, and daily management strategies.
          </p>
        </div>

        <div className="bg-amber-50 p-6 rounded-xl border-2 border-amber-100">
          <Users className="w-12 h-12 text-amber-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Patient Stories</h3>
          <p className="text-gray-600">
            Read experiences from others in the sickle cell community for support and connection.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 max-w-3xl mx-auto">
        <p className="text-sm text-gray-700 leading-relaxed">
          <span className="font-semibold">Important:</span> This platform provides support and education
          and does not replace professional medical care. Always seek immediate medical attention for severe
          symptoms, and consult your healthcare provider for medical advice, diagnosis, or treatment.
        </p>
      </div>
    </div>
  );
}
