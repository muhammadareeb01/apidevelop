import { ShoppingBag, Search, Users, Shield, Percent, Clock, Star, TrendingUp } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '../components/Button';

export function Services() {
  const services = [
    {
      title: "Self-Service Platform",
      description: "Access our powerful price comparison engine to find the best deals across multiple stores.",
      features: [
        "Real-time price tracking",
        "Customizable price alerts",
        "Historical price data",
        "Store comparison tools"
      ],
      icon: <Search className="h-6 w-6 text-brand" />
    },
    {
      title: "Concierge Service",
      description: "Let our expert team handle your grocery shopping needs and maximize your savings.",
      features: [
        "Personalized shopping assistance",
        "Deal hunting and optimization",
        "Price protection claims",
        "Premium support"
      ],
      icon: <Users className="h-6 w-6 text-brand" />
    }
  ];

  const features = [
    {
      title: "Price Protection",
      description: "Get automatic refunds when prices drop after your purchase",
      icon: <Shield className="h-6 w-6 text-brand" />
    },
    {
      title: "Deal Alerts",
      description: "Instant notifications for price drops on your favorite items",
      icon: <Percent className="h-6 w-6 text-brand" />
    },
    {
      title: "Shopping History",
      description: "Track your purchases and analyze spending patterns",
      icon: <Clock className="h-6 w-6 text-brand" />
    },
    {
      title: "Premium Benefits",
      description: "Exclusive access to special deals and early notifications",
      icon: <Star className="h-6 w-6 text-brand" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose how you want to save on groceries with our flexible service options
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-brand mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" variant={index === 0 ? "outline" : "primary"}>
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Additional Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ServiceCard key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start saving?</h2>
          <p className="text-gray-600 mb-8">
            Join thousands of smart shoppers who are already saving with Prox
          </p>
          <Button size="lg">Get Started Today</Button>
        </div>
      </div>
    </div>
  );
}