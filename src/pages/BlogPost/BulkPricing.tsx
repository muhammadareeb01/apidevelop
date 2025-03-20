import { Calendar, ExternalLink } from 'lucide-react';

export function BulkPricing() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <article className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold mb-4">
              Bulk Pricing: Buy More, Save More... and Spend More?
            </h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <Calendar className="h-4 w-4 mr-2" />
              <span>April 2, 2025</span>
            </div>

            <div className="prose max-w-none">
              <img 
                src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=1000"
                alt="Bulk items in warehouse store"
                className="w-full rounded-lg mb-8"
              />

              <p className="text-lg mb-8">
                "Buy in bulk and save" – it's a common refrain and largely true on a per-unit basis. 
                Purchasing a larger quantity or a bigger pack often gets you a better deal per item. 
                Stores use bulk pricing to entice shoppers to spend more upfront for long-term savings. 
                But this strategy has nuanced effects on consumer spending behavior.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">The Economics of Bulk Buying</h2>
              <p className="mb-8">
                A study found an average savings of ~25% when comparing bulk package prices to regular 
                sizes across many products. If you have the storage and cash to buy, say, a 24-pack of 
                toilet paper or a giant box of rice, you'll pay less per unit and reduce the frequency 
                of repurchasing.
              </p>

              <img 
                src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=1000"
                alt="Warehouse club store aisle"
                className="w-full rounded-lg mb-8"
              />

              <h2 className="text-2xl font-bold mt-12 mb-6">The Retailer's Perspective</h2>
              <p className="mb-8">
                While they charge you less per unit, retailers get a higher total sale. It's a classic 
                upsell. You came in for one bottle of detergent; you leave with a super-size twin pack 
                that will last 6 months. Yes, you saved money per load of laundry, but the store got 
                more dollars from you today than if you'd bought just a small bottle.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Multi-Buy Promotions</h2>
              <p className="mb-8">
                Ever see a deal like "Buy 5, Save $5" at a supermarket? You might only want 3 of the 
                participating items, but to get the full discount, you end up grabbing 2 more things – 
                which could be things you didn't originally intend to buy. That's the promo working as 
                designed: increasing the number of products in your cart.
              </p>

              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000"
                alt="Multi-buy promotion display"
                className="w-full rounded-lg mb-8"
              />

              <h2 className="text-2xl font-bold mt-12 mb-6">The Consumption Effect</h2>
              <p className="mb-8">
                Wansink's consumption studies indicate a quirky thing: having a lot of something might 
                make you consume it faster. If your pantry is overflowing with snacks from that bulk 
                purchase, you might be less judicious about finishing them, whereas if you only had one 
                box you'd stretch it out.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">The Expiration Date Challenge</h2>
              <p className="mb-8">
                For items like food with expiration dates, bulk buying is a balancing act. Huge bulk 
                sizes can backfire if they spoil before you can use them. The savings assume you actually 
                use 100% of what you bought. If you use only 70% and toss the rest, your effective price 
                paid per unit goes up by that wasted portion.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Inflation's Impact on Bulk Buying</h2>
              <p className="mb-8">
                In 2025, inflation concerns made bulk shopping even more popular for those who could 
                afford it. People reasoned that buying a lot now could hedge against prices rising 
                further. This sometimes led to short-term shortages, with stores having to impose 
                limits on certain items.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">The Budget Challenge</h2>
              <p className="mb-8">
                One challenge for consumers is that bulk buying demands a higher upfront spend. Not 
                everyone can drop $300 in one go to stock up and save long-term. Some lower-income 
                shoppers might actually end up spending more over time because they are forced to buy 
                smaller sizes which are costlier per unit.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Smart Bulk Buying Tips</h2>
              <p className="mb-8">
                Use bulk deals strategically. Take advantage of bulk pricing on things you know you'll 
                use fully – it's like a guaranteed return on investment in your household. But be mindful 
                of overbuying. If you're buying bulk just because it's "cheap per unit" but it's not 
                something you needed or can use, you're tying up money unnecessarily.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Sources</h2>
              <ul className="list-none space-y-3 mb-8">
                <li className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 text-brand" />
                  <a 
                    href="https://www.magnifymoney.com/news/bulk-buying-study/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-dark transition-colors"
                  >
                    MagnifyMoney: The Economics of Bulk Buying
                  </a>
                </li>
                <li className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 text-brand" />
                  <a 
                    href="https://www.supermarketnews.com/consumer-trends/bulk-buying-behavior"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-dark transition-colors"
                  >
                    Supermarket News: Consumer Bulk Buying Trends
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