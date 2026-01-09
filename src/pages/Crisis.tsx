import { AlertCircle, Phone, TrendingUp, AlertTriangle } from 'lucide-react';

export default function Crisis() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 mb-8">
        <div className="flex items-start gap-4 mb-4">
          <AlertCircle className="w-12 h-12 text-red-600 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-red-900 mb-2">Crisis Support</h1>
            <p className="text-lg text-red-800">
              If you're experiencing a pain crisis or severe symptoms, follow these steps.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-red-300 rounded-xl p-6 md:p-8 mb-8">
        <div className="flex items-start gap-3 mb-4">
          <Phone className="w-8 h-8 text-red-600 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Call 911 Immediately If You Have:</h2>
          </div>
        </div>
        <ul className="space-y-3">
          {[
            'Chest pain or difficulty breathing',
            'Sudden weakness, numbness, or trouble speaking',
            'Severe headache or vision changes',
            'Fever above 101°F (38.3°C)',
            'Severe abdominal pain',
            'Priapism (painful erection lasting more than 2 hours)',
            'Signs of stroke',
          ].map((symptom, index) => (
            <li key={index} className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-800 font-medium">{symptom}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What to Do During a Pain Crisis</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-teal-700 mb-2 flex items-center gap-2">
              <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </span>
              Contact Your Healthcare Provider
            </h3>
            <p className="text-gray-700 ml-10">
              Call your doctor or hematologist right away. Have your medical information ready.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-teal-700 mb-2 flex items-center gap-2">
              <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                2
              </span>
              Stay Hydrated
            </h3>
            <p className="text-gray-700 ml-10">
              Drink water regularly. Aim for at least 8-10 glasses throughout the day unless your doctor advises otherwise.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-teal-700 mb-2 flex items-center gap-2">
              <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                3
              </span>
              Take Pain Medication as Prescribed
            </h3>
            <p className="text-gray-700 ml-10">
              Follow your pain management plan. Do not exceed recommended doses without medical guidance.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-teal-700 mb-2 flex items-center gap-2">
              <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                4
              </span>
              Rest and Keep Warm
            </h3>
            <p className="text-gray-700 ml-10">
              Find a comfortable position. Use heating pads on affected areas if it helps. Stay warm but avoid extreme temperatures.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-teal-700 mb-2 flex items-center gap-2">
              <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                5
              </span>
              Seek Medical Care if Needed
            </h3>
            <p className="text-gray-700 ml-10">
              If pain doesn't improve with home management or you develop warning signs, go to the emergency department.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 md:p-8 mb-8">
        <div className="flex items-start gap-3">
          <TrendingUp className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">When to Go to the Hospital</h2>
            <p className="text-gray-700 mb-3">Consider going to the emergency department if:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Pain is severe and not responding to your usual treatment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>You have a fever</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>You're having difficulty breathing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>You have extreme fatigue or dizziness</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Your symptoms are getting worse despite treatment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6">
        <h3 className="font-semibold text-gray-800 mb-2">What to Bring to the Hospital</h3>
        <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
            Photo ID and insurance card
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
            List of current medications
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
            Emergency contacts
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
            Medical records if available
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
            Your healthcare team's contact info
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
            Phone charger and essentials
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mt-8">
        <p className="text-sm text-gray-700 leading-relaxed">
          <span className="font-semibold">Emergency Disclaimer:</span> This information is for guidance only
          and does not replace professional medical advice. In a medical emergency, always call 911 or go to
          the nearest emergency department. Trust your instincts about your health.
        </p>
      </div>
    </div>
  );
}
