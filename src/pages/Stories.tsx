import { Users, Heart, Briefcase, GraduationCap, Home } from 'lucide-react';

export default function Stories() {
  const stories = [
    {
      id: 1,
      name: 'Marcus, 34',
      category: 'Pain Management',
      icon: Heart,
      story: `Living with sickle cell disease taught me to listen to my body. For years, I pushed through the pain, thinking I had to be tough. But I learned that managing my health isn't weakness—it's strength. Now I track my hydration, keep a pain journal, and communicate openly with my doctor. I've had fewer crises in the past two years than ever before. My advice? Don't ignore the small signs. Your body is telling you something important.`,
    },
    {
      id: 2,
      name: 'Aisha, 28',
      category: 'Work and Life Balance',
      icon: Briefcase,
      story: `When I started my career, I was afraid to tell my employer about my condition. I worried they'd see me as unreliable. But after a bad crisis forced me to take time off, I decided to be honest. My manager was understanding and we worked out a flexible schedule. Now I can work from home when needed, and I don't stress about making it to the office during flare-ups. Being open about my needs actually made me more productive and less anxious.`,
    },
    {
      id: 3,
      name: 'Jordan, 19',
      category: 'College Life',
      icon: GraduationCap,
      story: `Going to college with sickle cell was scary at first. I worried about managing classes, being away from my doctors, and explaining my condition to new friends. But I found a great support system. I registered with disability services, found a local hematologist, and educated my roommates about what to do in an emergency. I'm in my sophomore year now, studying biology. My condition is part of my life, but it doesn't define my dreams.`,
    },
    {
      id: 4,
      name: 'Tanya, 42',
      category: 'Family and Parenting',
      icon: Home,
      story: `Being a parent with sickle cell disease means planning ahead. I talk openly with my kids about my condition so they understand when mom needs rest. My partner and I have backup plans for school pickup, meals, and activities. Yes, I've missed some soccer games and school events when I wasn't feeling well, and that's hard. But my kids see me taking care of myself, advocating for my health, and staying strong. I think that teaches them resilience too.`,
    },
    {
      id: 5,
      name: 'DeShawn, 31',
      category: 'Mental Health',
      icon: Users,
      story: `I didn't realize how much the emotional weight of sickle cell was affecting me until I started therapy. The constant worry about the next crisis, the frustration with limitations, the isolation—it all added up. Talking to a therapist who understood chronic illness changed my life. I learned coping strategies for the anxiety and connected with a support group. Taking care of my mental health is just as important as managing the physical symptoms.`,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Patient Stories</h1>
        <p className="text-lg text-gray-600">
          Real experiences from people living with sickle cell disease. You're not alone.
        </p>
      </div>

      <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-8">
        <p className="text-sm text-gray-700 leading-relaxed">
          <span className="font-semibold">Important Note:</span> These are personal experiences shared for support and
          connection. Everyone's journey with sickle cell disease is different. These stories are not medical advice.
          Always consult your healthcare provider for guidance specific to your situation.
        </p>
      </div>

      <div className="space-y-6">
        {stories.map((story) => {
          const Icon = story.icon;
          return (
            <div key={story.id} className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <Icon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{story.name}</h2>
                  <span className="inline-block bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium mt-1">
                    {story.category}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{story.story}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 md:p-8 mt-8">
        <h3 className="font-semibold text-gray-800 mb-3">Want to Connect?</h3>
        <p className="text-gray-700 mb-4">
          Connecting with others who understand what you're going through can be incredibly helpful.
          Consider reaching out to:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-teal-600 font-bold">•</span>
            <span>Local sickle cell disease support groups</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-600 font-bold">•</span>
            <span>Online communities and forums</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-600 font-bold">•</span>
            <span>Your healthcare team's social work department</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-600 font-bold">•</span>
            <span>National organizations like the Sickle Cell Disease Association</span>
          </li>
        </ul>
      </div>

      <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6 mt-6">
        <p className="text-gray-700 text-center">
          <span className="font-semibold">Remember:</span> Your story matters. Your experiences are valid.
          You're part of a strong, resilient community.
        </p>
      </div>
    </div>
  );
}
