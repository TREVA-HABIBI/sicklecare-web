import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { CheckInData, calculateRisk } from '../utils/riskCalculators';

export default function CheckIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CheckInData>({
    painLevel: 0,
    hydration: 'normal',
    fatigue: 'low',
    stress: 'low',
    coldExposure: false,
    missedMedication: false,
  });
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);

    const result = calculateRisk(formData);
    navigate('/result', { state: { checkInData: formData, result } });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Daily Check-In</h1>
        <p className="text-lg text-gray-600">
          Answer a few quick questions to understand your current risk level and get personalized guidance.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 space-y-8">
        {errors.length > 0 && (
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
            <div className="flex gap-2">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800 mb-1">Please complete all fields:</p>
                <ul className="list-disc list-inside text-red-700">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div>
          <label className="block mb-3">
            <span className="text-lg font-semibold text-gray-800 mb-2 block">
              Pain Level (0 = no pain, 10 = worst pain)
            </span>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="0"
                max="10"
                value={formData.painLevel}
                onChange={(e) => setFormData({ ...formData, painLevel: parseInt(e.target.value) })}
                className="flex-1 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
              />
              <span className="text-2xl font-bold text-teal-600 w-12 text-center">
                {formData.painLevel}
              </span>
            </div>
          </label>
        </div>

        <div>
          <label className="block">
            <span className="text-lg font-semibold text-gray-800 mb-3 block">Hydration Today</span>
            <div className="grid grid-cols-3 gap-3">
              {(['low', 'normal', 'high'] as const).map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setFormData({ ...formData, hydration: level })}
                  className={`py-3 px-4 rounded-lg font-medium transition-all ${
                    formData.hydration === level
                      ? 'bg-teal-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </label>
        </div>

        <div>
          <label className="block">
            <span className="text-lg font-semibold text-gray-800 mb-3 block">Fatigue Level</span>
            <div className="grid grid-cols-3 gap-3">
              {(['low', 'medium', 'high'] as const).map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setFormData({ ...formData, fatigue: level })}
                  className={`py-3 px-4 rounded-lg font-medium transition-all ${
                    formData.fatigue === level
                      ? 'bg-teal-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </label>
        </div>

        <div>
          <label className="block">
            <span className="text-lg font-semibold text-gray-800 mb-3 block">Stress Level</span>
            <div className="grid grid-cols-3 gap-3">
              {(['low', 'medium', 'high'] as const).map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setFormData({ ...formData, stress: level })}
                  className={`py-3 px-4 rounded-lg font-medium transition-all ${
                    formData.stress === level
                      ? 'bg-teal-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </label>
        </div>

        <div className="border-t-2 border-gray-200 pt-6">
          <div className="space-y-4">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={formData.coldExposure}
                onChange={(e) => setFormData({ ...formData, coldExposure: e.target.checked })}
                className="w-6 h-6 mt-0.5 accent-teal-600 cursor-pointer"
              />
              <span className="text-lg text-gray-700 group-hover:text-gray-900">
                I was exposed to cold temperatures today
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={formData.missedMedication}
                onChange={(e) => setFormData({ ...formData, missedMedication: e.target.checked })}
                className="w-6 h-6 mt-0.5 accent-teal-600 cursor-pointer"
              />
              <span className="text-lg text-gray-700 group-hover:text-gray-900">
                I missed a dose of medication today
              </span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Check My Risk
        </button>
      </form>

      <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-sm text-gray-700">
        <p className="font-semibold mb-1">Your Privacy</p>
        <p>Your check-in data helps provide personalized guidance. This information is private and secure.</p>
      </div>
    </div>
  );
}
