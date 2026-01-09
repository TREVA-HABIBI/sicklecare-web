import { useLocation, useNavigate, Link } from 'react-router-dom';
import { AlertCircle, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { RiskResult } from '../utils/riskCalculators';

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { result?: RiskResult } | null;
  const { result } = state || {};

  useEffect(() => {
    if (!result) {
      navigate('/check-in');
    }
  }, [result, navigate]);

  if (!result) {
    return null;
  }

  const riskConfig = {
    low: {
      color: 'green',
      Icon: CheckCircle,
      title: 'Low Risk',
      message: 'Your current risk level is low. Keep up your good health habits.',
    },
    moderate: {
      color: 'amber',
      Icon: AlertTriangle,
      title: 'Moderate Risk',
      message: 'Your risk level is moderate. Pay attention to the factors below and follow the guidance.',
    },
    high: {
      color: 'red',
      Icon: AlertCircle,
      title: 'High Risk',
      message: 'Your risk level is high. Please take action and consider contacting your healthcare provider.',
    },
  };

  const config = riskConfig[result.level];
  const Icon = config.Icon;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className={`bg-${config.color}-50 border-2 border-${config.color}-200 rounded-xl p-8 mb-8`}>
        <div className="flex items-start gap-4">
          <Icon className={`w-12 h-12 text-${config.color}-600 flex-shrink-0`} />
          <div className="flex-1">
            <h1 className={`text-3xl font-bold text-${config.color}-900 mb-2`}>{config.title}</h1>
            <p className={`text-lg text-${config.color}-800`}>{config.message}</p>
          </div>
        </div>
      </div>

      {result.factors.length > 0 && (
        <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Risk Factors Today</h2>
          <p className="text-gray-600 mb-4">
            These factors are contributing to your current risk level:
          </p>
          <ul className="space-y-2">
            {result.factors.map((factor: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{factor}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What You Can Do</h2>
        <div className="space-y-3">
          {result.advice.map((tip: string, index: number) => (
            <div key={index} className="flex items-start gap-3 bg-teal-50 p-4 rounded-lg">
              <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {result.level === 'high' && (
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-900 mb-2">When to Seek Immediate Care</p>
              <p className="text-red-800 mb-3">
                Contact your healthcare provider today or visit the crisis support page if you experience:
              </p>
              <ul className="list-disc list-inside text-red-800 space-y-1 ml-2">
                <li>Severe pain that doesn't improve</li>
                <li>Fever above 101°F (38.3°C)</li>
                <li>Difficulty breathing or chest pain</li>
                <li>Severe headache or dizziness</li>
                <li>Sudden weakness or numbness</li>
              </ul>
              <Link
                to="/crisis"
                className="inline-flex items-center gap-2 mt-4 text-red-700 font-semibold hover:text-red-800"
              >
                View Crisis Support <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
        <p className="text-sm text-gray-700 leading-relaxed">
          <span className="font-semibold">Important:</span> This risk assessment is not a diagnosis and does not replace
          professional medical care. If you have concerns about your health or symptoms worsen, contact your healthcare
          provider immediately.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/check-in"
          className="flex-1 bg-teal-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-teal-700 transition-colors text-center"
        >
          New Check-In
        </Link>
        <Link
          to="/"
          className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-300 transition-colors text-center"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
