import { Calendar, ExternalLink } from 'lucide-react';

export function AIDynamicPricing() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <article className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold mb-4">
              AI-Driven Dynamic Pricing: The New Frontier
            </h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <Calendar className="h-4 w-4 mr-2" />
              <span>March 20, 2025</span>
            </div>

            <div className="prose max-w-none">
              <img 
                src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80&w=1000"
                alt="Digital price display in modern supermarket"
                className="w-full rounded-lg mb-8"
              />

              <p className="text-lg mb-8">
                Until recently, grocery store prices were relatively static – set maybe weekly, with printed tags. 
                But now the industry is dipping its toes into dynamic pricing powered by AI. What does that mean? 
                In simple terms, prices that can change on the fly based on algorithms and data. Think of how 
                airline tickets or Uber fares fluctuate; supermarkets envision similar agility, albeit in a more 
                controlled fashion.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Electronic Shelf Labels: The Gateway to Dynamic Pricing</h2>
              <p className="mb-8">
                Major retailers are investing in electronic shelf labels (ESLs) – digital price displays – to enable 
                rapid price changes. Walmart announced plans to install ESLs in 2,300 stores by 2026. The potential: 
                an AI system could analyze real-time data (like how fast a product is selling, time of day, or stock 
                levels) and adjust the price accordingly.
              </p>

              <img 
                src="https://images.unsplash.com/photo-1584473457409-ae5c91d211ff?auto=format&fit=crop&q=80&w=1000"
                alt="Modern grocery store with digital displays"
                className="w-full rounded-lg mb-8"
              />

              <h2 className="text-2xl font-bold mt-12 mb-6">Careful Implementation and Public Response</h2>
              <p className="mb-8">
                U.S. grocers are moving carefully with this technology. Public backlash is a risk – nobody wants 
                to feel nickel-and-dimed because they shopped at 6pm instead of 10am. In fact, political scrutiny 
                has already emerged: in late 2023, some senators queried grocery chains on whether they'd use ESLs 
                to gouge customers. Industry experts responded that there's no evidence of surge pricing happening 
                and ESLs are mainly to save labor and keep prices accurate.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Competitive Price Monitoring and Optimization</h2>
              <p className="mb-8">
                More immediately, AI in grocery pricing is being used for competitive price monitoring and optimization. 
                Online, retailers like Walmart and Amazon adjust grocery item prices based on competitors and location. 
                Walmart might quietly charge a few cents more or less for the same item in different regions, reflecting 
                local competition.
              </p>

              <img 
                src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=1000"
                alt="Price comparison on digital device"
                className="w-full rounded-lg mb-8"
              />

              <h2 className="text-2xl font-bold mt-12 mb-6">AI-Powered Price Optimization</h2>
              <p className="mb-8">
                For traditional grocery chains, AI is helping answer the age-old question: what should we put on sale, 
                and by how much? Price optimization algorithms analyze historical sales, price elasticity, and even 
                things like weather or events. A company called Competera ran tests showing AI-based pricing could 
                raise revenue ~5% by finding those optimal price points and promo timings.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">The Future of Personalized Pricing</h2>
              <p className="mb-8">
                Another AI angle is personalized pricing. With so many loyalty programs and shopping apps, stores 
                have data on individual shoppers. Some are using AI to personalize discounts – essentially each 
                person gets a custom set of digital coupons or prices. As Grocery Doppio reported, over half of 
                grocers are prioritizing personalized promotions via AI.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">What This Means for Consumers</h2>
              <p className="mb-8">
                AI-driven pricing in groceries is emerging quietly. We're not at the point of bread cost changing 
                by the hour, but we are seeing the groundwork – digital price tags, algorithmic promo planning, 
                and personalized offers. For consumers, this likely means more responsive pricing and more 
                personalized deals. It also means it's wise to use those store apps and loyalty programs – 
                otherwise you might literally not see the best price available.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Sources</h2>
              <ul className="list-none space-y-3 mb-8">
                <li className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 text-brand" />
                  <a 
                    href="https://www.grocerydive.com/news/walmart-electronic-shelf-labels-2026/648273/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-dark transition-colors"
                  >
                    Grocery Dive: Walmart's ESL Implementation Plans
                  </a>
                </li>
                <li className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 text-brand" />
                  <a 
                    href="https://www.grocerydoppio.com/insights/dynamic-pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-dark transition-colors"
                  >
                    Grocery Doppio: AI in Retail Pricing
                  </a>
                </li>
                <li className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 text-brand" />
                  <a 
                    href="https://progressivegrocer.com/future-ai-pricing-grocery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-dark transition-colors"
                  >
                    Progressive Grocer: The Future of AI Pricing
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}