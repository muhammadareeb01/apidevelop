import { ArrowRight } from 'lucide-react';
import { Button } from '../Button';

export function AboutHero() {
  return (
    <section className="relative mb-24 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          Making grocery shopping <br />
          <span className="text-brand">smarter and more affordable</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Prox is revolutionizing the way people shop for groceries by bringing transparency
          and savings to everyday shopping. Our mission is to help consumers make informed
          decisions and save money on their grocery purchases.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-brand-light/20 to-transparent -z-10" />
    </section>
  );
}