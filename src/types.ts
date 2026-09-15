export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  targetAudience: string;
  durationExample: string;
  keyBenefits: string[];
  modules: string[];
  badgeColor?: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  category: 'leadership' | 'cohesion' | 'soft-skills' | 'entrepreneuriat';
  duration: string;
  level: 'Fondamentaux' | 'Avancé' | 'Dirigeants';
  format: 'Présentiel' | 'Intra-entreprise' | 'Hybride';
  shortDesc: string;
  objectives: string[];
  targetAudience: string;
  nextSession?: string;
  spotsLeft?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  location: string;
  content: string;
  avatarUrl?: string;
  metric?: string;
}

export interface DiagnosticQuestion {
  id: number;
  question: string;
  description: string;
  options: {
    label: string;
    description: string;
    categoryScore: 'cohesion' | 'leadership' | 'soft-skills' | 'entrepreneuriat';
    recommendedService: string;
  }[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  role: string;
  serviceInterest: string;
  message: string;
}
