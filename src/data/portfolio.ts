export interface PortfolioProject {
  id: string;
  client: string;
  title: string;
  image: string;
  heroImage: string;
  goal: string;
  solution: string;
  result: string;
  features: string[];
  highlights: string;
}

export const portfolioData: PortfolioProject[] = [
  {
    id: 'fitness-coach',
    client: 'Fitness Coach',
    title: 'Sarah Jenkins Coaching',
    image: 'https://picsum.photos/seed/fitness/800/600',
    heroImage: 'https://picsum.photos/seed/fitness-hero/1600/900',
    goal: 'Build authority online and showcase coaching services.',
    solution: 'Designed a personal brand website with portfolio, testimonials, and booking page.',
    result: 'Improved credibility and 3x consultation inquiries.',
    features: ['Custom Booking Integration', 'Client Success Stories', 'Newsletter Setup', 'Mobile-First Design'],
    highlights: 'Dark mode aesthetic with high-energy accent colors to match the fitness brand.'
  },
  {
    id: 'saas-founder',
    client: 'SaaS Founder',
    title: 'Alex Rivera',
    image: 'https://picsum.photos/seed/founder/800/600',
    heroImage: 'https://picsum.photos/seed/founder-hero/1600/900',
    goal: 'Attract investors and recruit top talent for a seed-stage startup.',
    solution: 'Created a sleek founder website highlighting vision, press mentions, and open roles.',
    result: 'Secured 2 angel investments and hired a lead engineer.',
    features: ['Press & Media Kit', 'Dynamic Job Board', 'Investor Deck Gate', 'SEO Optimization'],
    highlights: 'Minimalist, typography-driven design conveying trust and technical expertise.'
  },
  {
    id: 'freelance-designer',
    client: 'Freelance Designer',
    title: 'Elena Studio',
    image: 'https://picsum.photos/seed/designer/800/600',
    heroImage: 'https://picsum.photos/seed/designer-hero/1600/900',
    goal: 'Transition from agency work to high-ticket freelance clients.',
    solution: 'Developed an immersive portfolio showcasing case studies with interactive elements.',
    result: 'Landed 3 enterprise clients within the first month of launch.',
    features: ['Interactive Case Studies', 'Custom Animations', 'Client Portal', 'CMS Integration'],
    highlights: 'Smooth page transitions and scroll-triggered animations using Framer Motion.'
  },
  {
    id: 'tech-consultant',
    client: 'Tech Consultant',
    title: 'Marcus Tech Advisory',
    image: 'https://picsum.photos/seed/consultant/800/600',
    heroImage: 'https://picsum.photos/seed/consultant-hero/1600/900',
    goal: 'Productize consulting services and automate lead generation.',
    solution: 'Built a conversion-focused site with clear service tiers and automated onboarding.',
    result: 'Reduced admin time by 15 hours/week and doubled lead volume.',
    features: ['Service Tier Pricing', 'Automated Onboarding', 'Resource Library', 'CRM Sync'],
    highlights: 'Professional, corporate-friendly aesthetic with clear, actionable conversion paths.'
  },
  {
    id: 'content-creator',
    client: 'Content Creator',
    title: 'The Daily Dev',
    image: 'https://picsum.photos/seed/creator/800/600',
    heroImage: 'https://picsum.photos/seed/creator-hero/1600/900',
    goal: 'Monetize an existing audience through digital products and courses.',
    solution: 'Launched a creator hub with integrated e-commerce and gated content areas.',
    result: 'Generated $10k+ in digital product sales in the first 30 days.',
    features: ['E-commerce Integration', 'Gated Content', 'Email Capture', 'Video Hosting'],
    highlights: 'Vibrant, engaging UI designed to maximize email opt-ins and product conversions.'
  }
];
