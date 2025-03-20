import { Calendar, ExternalLink } from 'lucide-react';

export function EDLPvsHighLow() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <article className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold mb-4">
              EDLP vs. High-Low: Two Different Pricing Philosophies
            </h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <Calendar className="h-4 w-4 mr-2" />
              <span>March 29, 2025</span>
            </div>

            <div className="prose max-w-none">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000"
                alt="Walmart store entrance"
                className="w-full rounded-lg mb-8"
              />

              <p className="text-lg mb-8">
                If you've ever wondered why Walmart rarely has big sales while your local supermarket 
                has a new sale flyer every week, you're observing the difference between EDLP (Everyday 
                Low Pricing) and High-Low pricing strategies. Both are prevalent in retail, and each has 
                its pros and cons for shoppers.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Everyday Low Pricing (EDLP)</h2>
              <p className="mb-8">
                EDLP means just that – the store promises low prices every day, without significant 
                temporary markdowns or special promotions. Walmart is the poster child of EDLP in 
                groceries. Walk into a Walmart or Aldi and you won't find "sale" tags much; almost 
                everything is at a baseline low price. The idea is to eliminate doubt and the need 
                to shop around – customers trust that the price they see is already as low as it 
                reasonably gets.
              </p>

              <img 
                src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=1000"
                alt="Traditional grocery store with sale signs"
                className="w-full rounded-lg mb-8"
              />

              <h2 className="text-2xl font-bold mt-12 mb-6">High-Low Pricing Strategy</h2>
              <p className="mb-8">
                High-Low pricing is the strategy used by most traditional grocers (Kroger, Albertsons, 
                Publix, etc.): they keep a higher regular price, but offer frequent sales, coupons, and 
                promotions to bring prices temporarily low on select items. This creates a dynamic shopping 
                environment – one week chicken might be cheap, next week it's back up but cereal is cheap, 
                and so on.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">The Revenue Impact</h2>
              <p className="mb-8">
                Academic research suggests that promotional pricing (high-low) often yields more revenue 
                for supermarkets than EDLP, despite EDLP's lower operating costs. One reason: the 
                excitement and advertising of sales draws in more foot traffic and can lead to larger 
                basket sizes. Another is that high-low stores can strategically choose which items to 
                put on deep discount and when, effectively controlling their profit mix.
              </p>

              <img 
                src="https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&q=80&w=1000"
                alt="Price comparison display"
                className="w-full rounded-lg mb-8"
              />

              <h2 className="text-2xl font-bold mt-12 mb-6">Historical Shifts and Market Response</h2>
              <p className="mb-8">
                We saw an interesting experiment in the 1990s-2000s: as Walmart grew, many supermarkets 
                tried to switch to EDLP to compete. But it largely didn't stick. A Stanford GSB study 
                found switching from high-low to EDLP was six times more costly than switching the other 
                way around. In practice, many supermarkets that attempted EDLP ended up reverting to a 
                hybrid or back to high-low.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Modern Coexistence</h2>
              <p className="mb-8">
                So now we have a coexistence: EDLP giants like Walmart and Costco thrive, and so do 
                high-low grocers like Safeway or Stop & Shop. In response, high-low stores often 
                guarantee to match EDLP on key items. They know Walmart's price on milk or bananas 
                is super low, so they'll match or beat it, effectively doing EDLP on those known-value 
                items.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Blurring Lines in 2025</h2>
              <p className="mb-8">
                Interestingly, in 2025 the lines blur a bit. EDLP stores like Walmart occasionally 
                have "Rollback" promotions – they just don't advertise them as sales, but they function 
                similarly. Aldi, known for EDLP, now has weekly special buys and limited-time offers. 
                Conversely, high-low stores have introduced more "Everyday Low Price" tags on some 
                staples to signal they're consistently cheap on those, mixing EDLP elements into their 
                model.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">What This Means for Shoppers</h2>
              <p className="mb-8">
                Being aware of which model your store follows helps. If it's EDLP, no need to wait 
                for sales – buy when you need. If it's high-low, try to buy on sale and know that 
                "regular price" is more like a reference point. Also, don't assume an EDLP store is 
                always cheapest on everything – sometimes a high-low store's sale can beat an EDLP 
                price by a lot.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Sources</h2>
              <ul className="list-none space-y-3 mb-8">
                <li className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 text-brand" />
                  <a 
                    href="https://www.gsb.stanford.edu/faculty-research/publications/retail-pricing-strategies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-dark transition-colors"
                  >
                    Stanford GSB: Retail Pricing Strategies Research
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