import { Calendar, ExternalLink } from 'lucide-react';

export function LossLeaders() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <article className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold mb-4">
              Loss-Leaders: Why Stores Sell Some Items Dirt Cheap
            </h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <Calendar className="h-4 w-4 mr-2" />
              <span>March 22, 2025</span>
            </div>

            <div className="prose max-w-none">
              <img 
                src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1000"
                alt="Grocery store aisle with sale signs"
                className="w-full rounded-lg mb-8"
              />

              <p className="text-lg mb-8">
                Walk into almost any U.S. supermarket and you'll find a few jaw-droppingly cheap items. 
                Think of a gallon of milk for $0.99, or a loaf of bread for a buck. These are likely 
                loss leaders – products the store is selling at a loss (or no profit) intentionally. 
                It sounds counter-intuitive: why would a business willingly lose money on something? 
                The answer lies in basket economics and customer psychology.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">The Strategy Behind Loss Leaders</h2>
              <p className="mb-8">
                Loss leaders are designed to increase store traffic and overall sales. The classic 
                examples are milk and eggs – essentials people frequently run out of. By pricing these 
                very low, a supermarket can attract shoppers away from competitors. It's such a common 
                tactic that industry folklore jokes about the "milk wars" where stores would undercut 
                each other's milk prices to absurd lows just to claim the best deal in town.
              </p>

              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
                alt="Costco rotisserie chicken display"
                className="w-full rounded-lg mb-8"
              />

              <h2 className="text-2xl font-bold mt-12 mb-6">The Costco Rotisserie Chicken Phenomenon</h2>
              <p className="mb-8">
                The Costco rotisserie chicken is a standout case. Priced at $4.99 for over a decade, 
                Costco's ready-to-eat whole chicken has defied inflation. By all rights it should cost 
                closer to $7-8 in 2024 dollars, but Costco refuses to budge. In a 2015 earnings call, 
                Costco's CFO explicitly said they were willing to "eat" $30-$40 million in profit 
                annually to keep that $4.99 price.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Seasonal Loss Leaders</h2>
              <p className="mb-8">
                Regular supermarkets also rotate loss leaders based on seasons. Turkeys at Thanksgiving 
                are a prime example: grocery chains often sell whole turkeys at far below cost in November. 
                They know virtually every shopper buying a turkey will also fill their cart with stuffing 
                mix, vegetables, baking supplies, etc. The turkey sets the hook; the rest reels 'em in.
              </p>

              <img 
                src="https://images.unsplash.com/photo-1574672280600-4ac79c4d4c95?auto=format&fit=crop&q=80&w=1000"
                alt="Thanksgiving turkey display"
                className="w-full rounded-lg mb-8"
              />

              <h2 className="text-2xl font-bold mt-12 mb-6">Smart Shopping with Loss Leaders</h2>
              <p className="mb-8">
                From the consumer perspective, loss leaders are great – a win for your budget, as long 
                as you don't get too carried away with impulse buys. These deals can genuinely save you 
                money. But be aware: they are a strategy. The store is betting that once you're inside 
                for the cheap item, something else will catch your eye.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Understanding the Limits</h2>
              <p className="mb-8">
                Note that some loss leaders have limits – that's partly to prevent resale and partly to 
                curb extreme couponers from wiping out stock. Respect those limits; they're usually per 
                customer or per transaction. Some clever shoppers might go through the checkout twice or 
                bring a spouse to double up, but stores do watch for blatant abuse.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Sources</h2>
              <ul className="list-none space-y-3 mb-8">
                <li className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 text-brand" />
                  <a 
                    href="https://www.culinarylore.com/food-history:loss-leader-pricing-in-grocery-stores"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-dark transition-colors"
                  >
                    Culinary Lore: Loss Leader Pricing in Grocery Stores
                  </a>
                </li>
                <li className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 text-brand" />
                  <a 
                    href="https://thehustle.co/costco-rotisserie-chicken-economics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-dark transition-colors"
                  >
                    The Hustle: The Economics of Costco's Rotisserie Chicken
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