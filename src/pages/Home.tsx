import { ArrowRight, ShoppingBag, TrendingUp, Shield, Search, Users, Star, Smartphone, Gift, Percent, Clock } from 'lucide-react';
import { Button } from '../components/Button';
import { WaitlistForm } from '../components/WaitlistForm';

export function Home() {
  const features = [
    {
      title: "Deal Alerts",
      description: "Instant notifications for price drops on your favorite items",
      icon: <Percent className="h-6 w-6 text-white" />
    },
    {
      title: "Shopping History",
      description: "Track your purchases and analyze spending patterns",
      icon: <Clock className="h-6 w-6 text-white" />
    },
    {
      title: "Premium Benefits",
      description: "Exclusive access to special deals and early notifications",
      icon: <Star className="h-6 w-6 text-white" />
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-6xl md:text-7xl font-bold mb-4">
              Prox is launching soon
            </h2>
            <p className="text-2xl text-gray-600 mb-4 italic">
              Until then...
            </p>
            <p className="text-xl text-gray-600 mb-12">
              Join our waitlist to be the first to know when we launch and get exclusive early access.
            </p>
            
            <div className="mb-16">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Value Proposition */}
      <section className="py-16 bg-brand text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">
              Shop smarter, save bigger on everyday staples
            </h1>
            <p className="text-xl mb-12">
              Compare prices across your local retailers to guarantee savings and more money in your pockets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">20%</h3>
              <p>Average savings on groceries</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">$250</h3>
              <p>Average family monthly savings when shopping with Prox</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">1+ hour</h3>
              <p>Average time savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Serve Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm text-brand font-semibold mb-2">PROX</div>
              <h2 className="text-3xl font-bold mb-4">
                Our real-time search engine maximizes your savings
              </h2>
              <p className="text-gray-600 mb-8">
                We scan millions of products across multiple stores to find the best deals — including unadvertised specials. Compare prices side-by-side so you know you're getting the best value.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Search className="h-5 w-5 text-brand" />
                  <span>Compare prices across major grocery chains</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-brand" />
                  <span>Track price history and trends</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-brand" />
                  <span>Securely check out at your favorite retailers</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=800"
                alt="Grocery store aisle"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Retailers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Retailers Currently Available on the Platform</h2>
          
          {/* First Row - 4 Logos */}
          <div className="flex justify-center items-center gap-12 flex-wrap mb-12">
            <div className="w-40">
              <img 
                src="https://www.thekrogerco.com/wp-content/uploads/2021/09/FreshCart_Kroger_Lockup_-300x112.png" 
                alt="Kroger"
                className="w-full h-auto"
              />
            </div>
            <div className="w-40">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/3/3c/Food_Lion_logo.svg" 
                alt="Food Lion"
                className="w-full h-auto"
              />
            </div>
            <div className="w-40">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/IGA_logo.svg/1200px-IGA_logo.svg.png" 
                alt="IGA"
                className="w-full h-auto"
              />
            </div>
            <div className="w-40">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/c/cd/Pigglywiggly.png" 
                alt="Piggly Wiggly"
                className="w-full h-auto"
              />
            </div>
          </div>
      
          {/* Second Row - 3 Logos */}
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <div className="w-40">
              <img 
                src="https://res.cloudinary.com/jll-am-cdn/images/w_1024,h_512,c_scale/f_auto,q_auto:good/v1693470354/WPCOE/www.jllt.com/logo-harris-teeter-1200x600-1/logo-harris-teeter-1200x600-1.jpg?_i=AA" 
                alt="Harris Teeter"
                className="w-full h-auto"
              />
            </div>
            <div className="w-40">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwpZjuHlrZKotiFSzhSmPC1sy9IbTZhiMtkw&s" 
                alt="Smart & Final"
                className="w-full h-auto"
              />
            </div>
            <div className="w-40">
              <img 
                src="https://mma.prnewswire.com/media/372159/ralphs_grocery_company_logo.jpg?p=twitter" 
                alt="Ralphs"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Prox Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect Your Accounts</h3>
              <p className="text-gray-600">
                Log in to your favorite retailers' websites
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Shop Anywhere</h3>
              <p className="text-gray-600">
                Shop online as you typically do for items like groceries, cosmetics, and small appliances 
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Save Money</h3>
              <p className="text-gray-600">
                Prox will do all of the hardwork. We will provide you with a curated list of retailers near you to pick up, deliver, or purchase these items from in-store.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Download App CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Image Section */}
            <div className="flex-shrink-0">
              <img 
                src="https://d.img.vision/alston/Picture1.jpg" 
                alt="Descriptive text for the image" 
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
            </div>

            {/* Text and Button Section */}
            <div className="bg-brand rounded-2xl text-white p-12 text-center flex-1">
              <h2 className="text-3xl font-bold mb-4">COMING SOON: Get the Prox App</h2>
              <p className="text-xl mb-8">
                Download our browser extension and mobile app to start saving on groceries wherever you shop
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Download for iOS
                </Button>
                <Button variant="secondary" size="lg">
                  Download for Android
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}