import { ArrowRight } from 'lucide-react';
import { Button } from '../Button';

export function JoinUs() {
  return (
    <section className="bg-brand text-white rounded-2xl p-12 text-center mb-24">
      <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
        Ready to start saving on your grocery shopping? Join other smart shoppers 
        who are already using Prox to make their grocery shopping more affordable.
      </p>
      <div className="flex justify-center gap-4">
        <Button size="lg" variant="secondary">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button size="lg" variant="outline">Contact Us</Button>
      </div>
    </section>
  );
}