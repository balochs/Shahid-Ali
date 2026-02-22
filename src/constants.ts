import { LucideIcon, Brain, Shield, BarChart3, Mail, Github, Linkedin, Twitter, MessageSquare, ExternalLink, Download, Send } from 'lucide-react';

export interface Skill {
  name: string;
  level: number;
  category: 'AI' | 'Security' | 'Data';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'AI' | 'Security' | 'Data';
  image: string;
  tools: string[];
  caseStudy: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

export const SKILLS: Skill[] = [
  { name: 'Machine Learning', level: 90, category: 'AI' },
  { name: 'Workflow Automation', level: 95, category: 'AI' },
  { name: 'Python AI Integration', level: 85, category: 'AI' },
  { name: 'Network Security', level: 88, category: 'Security' },
  { name: 'Ethical Hacking', level: 82, category: 'Security' },
  { name: 'Threat Detection', level: 85, category: 'Security' },
  { name: 'SQL / Database', level: 92, category: 'Data' },
  { name: 'Power BI / Tableau', level: 88, category: 'Data' },
  { name: 'Predictive Analytics', level: 84, category: 'Data' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Threat Detection',
    description: 'Real-time network monitoring using machine learning to identify anomalies.',
    category: 'Security',
    image: 'https://picsum.photos/seed/security/800/600',
    tools: ['Python', 'TensorFlow', 'Wireshark'],
    caseStudy: 'Developed a system that reduced false positives by 40% using custom ML models.'
  },
  {
    id: '2',
    title: 'Automated Business Intelligence',
    description: 'End-to-end data pipeline automating report generation for retail chains.',
    category: 'Data',
    image: 'https://picsum.photos/seed/data/800/600',
    tools: ['Power BI', 'SQL', 'Azure Data Factory'],
    caseStudy: 'Automated 20+ weekly reports, saving 15 hours of manual work per week.'
  },
  {
    id: '3',
    title: 'Intelligent Customer Support Bot',
    description: 'NLP-based chatbot integrated with CRM for automated ticket resolution.',
    category: 'AI',
    image: 'https://picsum.photos/seed/ai/800/600',
    tools: ['OpenAI API', 'Node.js', 'React'],
    caseStudy: 'Implemented a RAG-based bot that handled 60% of common support queries.'
  },
  {
    id: '4',
    title: 'Vulnerability Assessment Tool',
    description: 'Automated scanner for web applications to identify OWASP Top 10 risks.',
    category: 'Security',
    image: 'https://picsum.photos/seed/cyber/800/600',
    tools: ['Go', 'Docker', 'Nmap'],
    caseStudy: 'Built a lightweight scanner used by local startups for pre-deployment checks.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'CTO, TechFlow',
    content: "Shahid's ability to blend AI with security protocols is unmatched. He didn't just automate our workflows; he secured them.",
    image: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Head of Data, Insightly',
    content: "The predictive models Shahid built for us transformed how we view our quarterly projections. Data-driven decision making at its best.",
    image: 'https://picsum.photos/seed/user2/100/100'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'AI in Cyber Security: The New Frontier',
    excerpt: 'How machine learning is changing the landscape of threat detection and response.',
    category: 'Security',
    date: '2024-03-15',
    image: 'https://picsum.photos/seed/blog1/800/400'
  },
  {
    id: '2',
    title: 'Automation in Modern Business',
    excerpt: 'Why workflow automation is no longer optional for scaling companies.',
    category: 'AI',
    date: '2024-03-10',
    image: 'https://picsum.photos/seed/blog2/800/400'
  }
];

export interface Credential {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export const CREDENTIALS: Credential[] = [
  {
    id: '1',
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    date: '2023',
    description: 'Advanced penetration testing and security auditing certification.'
  },
  {
    id: '2',
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI',
    date: '2023',
    description: 'Comprehensive study of neural networks, supervised and unsupervised learning.'
  },
  {
    id: '3',
    title: 'Data Analyst Professional',
    issuer: 'Google',
    date: '2022',
    description: 'Professional certification in data cleaning, analysis, and visualization.'
  },
  {
    id: '4',
    title: 'Python for Cyber Security',
    issuer: 'SANS Institute',
    date: '2022',
    description: 'Developing custom security tools and automation scripts using Python.'
  }
];
