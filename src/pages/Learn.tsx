import { BookOpen, AlertTriangle, Heart, Users, Lightbulb, XCircle } from 'lucide-react';

export default function Learn() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Understanding Sickle Cell Disease
        </h1>
        <p className="text-lg text-gray-600">
          Clear, simple information to help you manage your health and live well.
        </p>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 mb-8">
        <div className="flex items-start gap-3 mb-4">
          <BookOpen className="w-8 h-8 text-teal-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-800">What is Sickle Cell Disease?</h2>
        </div>
        <div className="space-y-4 text-gray-700">
          <p>
            Sickle cell disease is an inherited blood disorder that affects red blood cells. These cells carry oxygen
            throughout your body.
          </p>
          <p>
            In sickle cell disease, red blood cells can become crescent or sickle-shaped instead of round. These
            sickle-shaped cells can get stuck in blood vessels, blocking blood flow. This causes pain and can damage
            organs over time.
          </p>
          <p>
            While sickle cell disease is a lifelong condition, many people live full, active lives with proper care
            and management.
          </p>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 mb-8">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-800">Common Triggers</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Certain things can trigger a pain crisis or other complications. Being aware of these helps you stay healthy:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Dehydration', desc: 'Not drinking enough water' },
            { title: 'Cold Weather', desc: 'Exposure to cold temperatures' },
            { title: 'Stress', desc: 'Physical or emotional stress' },
            { title: 'Illness', desc: 'Infections, fever, or being sick' },
            { title: 'High Altitude', desc: 'Places with less oxygen' },
            { title: 'Overexertion', desc: 'Too much physical activity' },
          ].map((trigger, index) => (
            <div key={index} className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-gray-800 mb-1">{trigger.title}</h3>
              <p className="text-sm text-gray-600">{trigger.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 mb-8">
        <div className="flex items-start gap-3 mb-4">
          <Heart className="w-8 h-8 text-teal-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-800">Managing Daily Life</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Small daily habits can make a big difference in how you feel:
        </p>
        <div className="space-y-4">
          <div className="bg-teal-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Stay Hydrated</h3>
            <p className="text-gray-700">
              Drink 8-10 glasses of water daily. Carry a water bottle with you. Avoid excessive caffeine and alcohol.
            </p>
          </div>
          <div className="bg-teal-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Take Medications as Prescribed</h3>
            <p className="text-gray-700">
              Don't skip doses. Set reminders if needed. Talk to your doctor before stopping any medication.
            </p>
          </div>
          <div className="bg-teal-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Get Regular Check-ups</h3>
            <p className="text-gray-700">
              See your healthcare team regularly, even when feeling well. Keep up with vaccinations and preventive care.
            </p>
          </div>
          <div className="bg-teal-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Avoid Triggers</h3>
            <p className="text-gray-700">
              Dress warmly in cold weather. Manage stress. Rest when tired. Know your limits with physical activity.
            </p>
          </div>
          <div className="bg-teal-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Get Enough Rest</h3>
            <p className="text-gray-700">
              Aim for 7-9 hours of sleep each night. Listen to your body when it needs rest during the day.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 mb-8">
        <div className="flex items-start gap-3 mb-4">
          <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-800">For Caregivers</h2>
        </div>
        <p className="text-gray-600 mb-4">
          If you're caring for someone with sickle cell disease:
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-xl">•</span>
            <span>Learn the signs of a crisis and when to seek help</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-xl">•</span>
            <span>Help maintain medication schedules and hydration</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-xl">•</span>
            <span>Keep emergency contacts and medical information handy</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-xl">•</span>
            <span>Support emotional well-being and mental health</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-xl">•</span>
            <span>Take care of your own health and well-being too</span>
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 mb-8">
        <div className="flex items-start gap-3 mb-4">
          <XCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-800">Myths and Facts</h2>
        </div>
        <div className="space-y-6">
          <div>
            <div className="bg-red-50 p-4 rounded-lg mb-2">
              <p className="font-semibold text-red-800">Myth: Sickle cell disease only affects children</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <p className="font-semibold text-teal-800">
                Fact: It's a lifelong condition, but with modern care, many people live into their 50s, 60s, and beyond
              </p>
            </div>
          </div>

          <div>
            <div className="bg-red-50 p-4 rounded-lg mb-2">
              <p className="font-semibold text-red-800">Myth: Pain crises are all in your head</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <p className="font-semibold text-teal-800">
                Fact: Pain is real and caused by blocked blood flow. It requires proper medical treatment
              </p>
            </div>
          </div>

          <div>
            <div className="bg-red-50 p-4 rounded-lg mb-2">
              <p className="font-semibold text-red-800">Myth: You can't live a normal life</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <p className="font-semibold text-teal-800">
                Fact: With proper management, many people work, have families, and participate in activities they enjoy
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8">
        <div className="flex items-start gap-3 mb-4">
          <Lightbulb className="w-8 h-8 text-amber-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-800">Remember</h2>
        </div>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-teal-600 font-bold text-xl">✓</span>
            <span>You know your body best. Trust your instincts about your health</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-600 font-bold text-xl">✓</span>
            <span>Build a strong relationship with your healthcare team</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-600 font-bold text-xl">✓</span>
            <span>It's okay to ask for help when you need it</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-600 font-bold text-xl">✓</span>
            <span>Connect with others in the sickle cell community for support</span>
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mt-8">
        <p className="text-sm text-gray-700 leading-relaxed">
          <span className="font-semibold">Educational Purpose:</span> This information is for educational purposes
          and does not replace advice from your healthcare provider. Always discuss your specific situation with
          your medical team.
        </p>
      </div>
    </div>
  );
}
