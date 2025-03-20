import { Calendar, ExternalLink } from 'lucide-react';

export function InflationImpact() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <article className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold mb-4">
              Inflation's Impact: Grocery Pricing in 2025
            </h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <Calendar className="h-4 w-4 mr-2" />
              <span>March 25, 2025</span>
            </div>

            <div className="prose max-w-none">
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1000"
                alt="Person comparing grocery prices"
                className="w-full rounded-lg mb-8"
              />

              <p className="text-lg mb-8">
                The past few years have been a rollercoaster for grocery prices. If you felt like your 
                bill jumped during the pandemic years and never fully came back down, you're right. 
                Food inflation hit levels not seen in 40+ years – peaking around 11% year-over-year in 
                late 2022. By 2025, the rate of increase slowed (e.g., ~2-3% annual food inflation, more 
                typical historically), but those price hikes compounded. Overall groceries are much 
                pricier than they were pre-2020.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Changed Consumer Behavior</h2>
              <p className="mb-8">
                This inflationary wave has profoundly shaped pricing strategy and consumer behavior. 
                For one, consumers are laser-focused on price now. A Grocery Dive report in early 2024 
                noted that after years of high prices, shoppers were "singularly focused on price" and 
                had even adjusted habits like visiting multiple stores and buying less per trip to cope.
              </p>

              <img 
                src="https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&q=80&w=1000"
                alt="Store shelf with price tags"
                className="w-full rounded-lg mb-8"
              />

              <h2 className="text-2xl font-bold mt-12 mb-6">The Rise of Private Labels</h2>
              <p className="mb-8">
                One clear trend: the shift to private label (store brands) accelerated. When meat, 
                produce, and brand-name pantry goods all got more expensive, customers tried cheaper 
                alternatives. Store brands, which typically cost ~15-30% less than name brands, became 
                very attractive. By 2025, sales of private label foods in the U.S. are at record highs.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">The Shrinkflation Effect</h2>
              <p className="mb-8">
                Another effect of inflation: smaller package sizes for the same price – aka shrinkflation. 
                While not a store pricing strategy per se (manufacturers typically make this call), it 
                affects shelf prices indirectly. If a cereal box shrinks from 18 oz to 15 oz but still 
                costs $2.99, the unit price went up 20% without the "price" changing.
              </p>

              <img 
                src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=1000"
                alt="Grocery store aisle"
                className="w-full rounded-lg mb-8"
              />

              <h2 className="text-2xl font-bold mt-12 mb-6">Multi-Store Shopping Trend</h2>
              <p className="mb-8">
                Additionally, multi-store shopping is a thing now. People might hit Costco for bulk, 
                Aldi for basics, and a regular supermarket for the rest, chasing the best value across 
                each. That means each store has to fight harder to be relevant for a portion of your spend.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Looking Forward</h2>
              <p className="mb-8">
                In summary, high inflation has permanently changed the grocery pricing landscape. 
                Shoppers in 2025 are more deal-conscious and flexible, and retailers are responding 
                with more visible efforts to prove they offer value – whether through more sales, 
                better private labels, or simply holding certain prices low.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Sources</h2>
              <ul className="list-none space-y-3 mb-8">
                <li className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 text-brand" />
                  <a 
                    href="https://www.usinflationcalculator.com/inflation/food-inflation-in-the-united-states/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-dark transition-colors"
                  >
                    US Inflation Calculator: Food Inflation Data
                  </a>
                </li>
                <li className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 text-brand" />
                  <a 
                    href="https://www.grocerydive.com/news/grocery-inflation-consumer-behavior-2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-dark transition-colors"
                  >
                    Grocery Dive: Consumer Behavior Changes Due to Inflation
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