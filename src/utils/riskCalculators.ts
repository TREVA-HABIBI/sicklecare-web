export interface CheckInData {
  painLevel: number;
  hydration: 'low' | 'normal' | 'high';
  fatigue: 'low' | 'medium' | 'high';
  stress: 'low' | 'medium' | 'high';
  coldExposure: boolean;
  missedMedication: boolean;
}

export interface RiskResult {
  level: 'low' | 'moderate' | 'high';
  factors: string[];
  advice: string[];
}

export function calculateRisk(data: CheckInData): RiskResult {
  let score = 0;
  const factors: string[] = [];
  const advice: string[] = [];

  // Pain level scoring
  if (data.painLevel >= 7) {
    score += 3;
    factors.push('High pain level');
    advice.push('Consider taking your prescribed pain medication and rest in a comfortable position.');
  } else if (data.painLevel >= 4) {
    score += 2;
    factors.push('Moderate pain level');
    advice.push('Monitor your pain and consider gentle stretching or heat therapy.');
  } else if (data.painLevel > 0) {
    score += 1;
    factors.push('Mild pain');
    advice.push('Continue with your usual pain management routine.');
  }

  // Hydration scoring
  if (data.hydration === 'low') {
    score += 2;
    factors.push('Low hydration');
    advice.push('Drink more water throughout the day - aim for 8 glasses.');
  } else if (data.hydration === 'high') {
    score += 1;
    factors.push('High hydration');
    advice.push('Good job staying hydrated! Continue drinking water regularly.');
  }

  // Fatigue scoring
  if (data.fatigue === 'high') {
    score += 3;
    factors.push('High fatigue');
    advice.push('Get extra rest today and consider a short nap if possible.');
  } else if (data.fatigue === 'medium') {
    score += 2;
    factors.push('Moderate fatigue');
    advice.push('Take breaks throughout the day and avoid strenuous activities.');
  }

  // Stress scoring
  if (data.stress === 'high') {
    score += 3;
    factors.push('High stress');
    advice.push('Practice deep breathing or meditation to manage stress levels.');
  } else if (data.stress === 'medium') {
    score += 2;
    factors.push('Moderate stress');
    advice.push('Take time for relaxation activities you enjoy.');
  }

  // Cold exposure
  if (data.coldExposure) {
    score += 2;
    factors.push('Cold exposure');
    advice.push('Dress warmly and avoid prolonged exposure to cold temperatures.');
  }

  // Missed medication
  if (data.missedMedication) {
    score += 3;
    factors.push('Missed medication');
    advice.push('Take your medication as soon as you remember, unless it\'s close to your next dose.');
  }

  // Determine risk level
  let level: 'low' | 'moderate' | 'high';
  if (score >= 8) {
    level = 'high';
  } else if (score >= 4) {
    level = 'moderate';
  } else {
    level = 'low';
  }

  // Add general advice based on risk level
  if (level === 'low') {
    advice.push('Keep up your healthy habits and continue monitoring your symptoms.');
  } else if (level === 'moderate') {
    advice.push('Stay vigilant with your self-care routine and contact your healthcare provider if symptoms worsen.');
  } else {
    advice.push('Consider reaching out to your healthcare provider for additional guidance.');
    advice.push('Monitor your symptoms closely and seek immediate care if you experience severe pain or other concerning symptoms.');
  }

  return { level, factors, advice };
}
