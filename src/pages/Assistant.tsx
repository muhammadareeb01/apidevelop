import { ChatInterface } from '../components/ChatInterface';

export function Assistant() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Grocery Shopping Assistant</h1>
          <p className="text-gray-600 mb-8">
            Get personalized help finding the best deals and planning your grocery shopping.
            Our AI assistant can help you compare prices, find deals, and make smart shopping
            decisions.
          </p>
          <ChatInterface />
        </div>
      </div>
    </div>
  );
}