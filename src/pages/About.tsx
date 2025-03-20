import {
  AboutHero,
  Mission,
  Story,
  Values,
  Team,
  JoinUs
} from '../components/about';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <AboutHero />
          <Mission />
          <Story />
          <Values />
          <Team />
          <JoinUs />
        </div>
      </div>
    </div>
  );
}