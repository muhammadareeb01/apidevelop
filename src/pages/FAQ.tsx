import { Disclosure } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

export function FAQ() {
  const faqs = [
    {
      question: "Is Prox free?",
      answer: "Yes. Prox is free for all users."
    },
    {
      question: "How do I use Prox?",
      answer: "You have two options:\n 1) Use the download link to download the browser extension from the chrome store. Once the product is downloaded and activated, continue with your current online grocery checkout and when checking out the browser extension will activate to compare your current basket of goods and find the lowest prices across nearby retailers\n 2) (In process) Upload your supermarket receiept to the shopping assistant and it will provide you an updated pricing list with where you should purchase products on your next grocery run"
    },
    { 
    question: "How does Prox help me save money on groceries?",
      answer: "Prox compares prices across multiple grocery stores in real-time, finds the best deals, and alerts you when prices drop on your favorite items."
    },
    {
      question: "Is Prox available in my area?",
      answer: "Prox is currently in production and will launch as retailers are onboarded to the platform" 
    },
    {
      question: "How much can I save with Prox?",
      answer: "On average, Prox users save 15-30% on their grocery bills. Savings vary based on shopping habits and local store prices."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <div className="bg-white rounded-lg">
                    <Disclosure.Button className="w-full px-6 py-4 text-left flex justify-between items-center">
                      <span className="text-lg font-semibold">{faq.question}</span>
                      <ChevronDown className={cn("h-5 w-5 transition-transform", open && "transform rotate-180")} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 py-4 text-gray-600">
                      {faq.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}