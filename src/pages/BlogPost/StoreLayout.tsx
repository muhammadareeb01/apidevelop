import { Calendar, ExternalLink } from 'lucide-react';

export function StoreLayout() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <article className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold mb-4">
              How Store Layout and Placement Sway Your Choices
            </h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <Calendar className="h-4 w-4 mr-2" />
              <span>March 31, 2025</span>
            </div>

            <div className="prose max-w-none">
              <img 
                src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=1000"
                alt="Modern grocery store layout"
                className="w-full rounded-lg mb-8"
              />

              <p className="text-lg mb-8">
                When you step into a supermarket, you're entering a space designed to subtly guide your 
                journey. The floor plan and product placement are powerful sales tools in themselves. 
                Stores want you to spend more time browsing (to discover more items to buy) and to notice 
                certain products (especially high-margin ones).
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Decompression Zone & First Impressions</h2>
              <p className="mb-8">
                The area right at the entrance is called the decompression zone – you're adjusting to 
                the store environment, so they usually avoid putting super important merchandise there. 
                Instead, many stores place flowers or seasonal items up front – it creates a pleasant 
                sensory experience and marks a transition from outside to shopping mode.
              </p>

              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000"
                alt="Store entrance with flowers"
                className="w-full rounded-lg mb-8"
              />

              <h2 className="text-2xl font-bold mt-12 mb-6">Perimeter vs. Center</h2>
              <p className="mb-8">
                Generally, the store perimeter has the fresh departments (produce, bakery, deli, meat, 
                dairy). These are things people often shop for routinely, so placing them around the 
                edges forces movement around the store's outer loop (often called the "racetrack"). 
                The center aisles contain packaged goods.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Eye-Level Shelf Space</h2>
              <p className="mb-8">
                Eye-level placement is prime. Brands often pay slotting fees or negotiate for those slots. 
                For example, in the cereal aisle, big brands like Kellogg's and General Mills will be 
                mid-shelf, while off-brand or less popular items are up top or way bottom. The difference 
                in sales between shelf positions can be huge.
              </p>

              <img 
                src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=1000"
                alt="Grocery store shelves"
                className="w-full rounded-lg mb-8"
              />

              <h2 className="text-2xl font-bold mt-12 mb-6">Grouping and Adjacent Placement</h2>
              <p className="mb-8">
                Supermarkets carefully plan which products sit next to which. In some cases they group 
                similar products (all baking needs in one aisle), in other cases, they separate potential 
                substitutes to different areas to encourage you to stroll. A common strategy is 
                cross-merchandising like putting peanut butter near the jellies, or chips and salsa 
                displayed together.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Store Layout Patterns</h2>
              <p className="mb-8">
                Most grocery stores use a grid layout of aisles because it's familiar and efficient. 
                But within that, some newer stores experiment with more open-flow layouts or boutique 
                sections. Target stores for example have a racetrack style that guides you in a loop. 
                Trader Joe's uses creative signage and decorations to create a treasure hunt feel in 
                a compact space.
              </p>

              <img 
                src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1000"
                alt="Store layout with speed bumps"
                className="w-full rounded-lg mb-8"
              />

              <h2 className="text-2xl font-bold mt-12 mb-6">Speed Bumps and Flow Control</h2>
              <p className="mb-8">
                Some stores set up small displays in the middle of aisles – like a basket of gourmet 
                ketchup in the condiments aisle – as "speed bumps" to slow you and catch attention. 
                Similarly, a change in floor texture or music tempo can influence pace. Slower music 
                has been shown to make shoppers move slower and buy more per visit.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Checkout Layout</h2>
              <p className="mb-8">
                The journey ends at checkout, which is its own gauntlet of impulse buys: candy bars, 
                gum, tabloids, soda coolers. These are intentionally low-cost, high-margin items that 
                play on impulses. You've been pretty disciplined perhaps, but as you wait, that $1 
                candy seems like a small reward.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Smart Shopping Tips</h2>
              <p className="mb-8">
                Being aware of layout tricks can help you counter them. If you know the store is trying 
                to guide you past certain products, you can decide to stick to your planned path. Don't 
                be afraid to skip aisles that you don't need anything from, and remember that the longer 
                you linger, the more likely you are to buy extra items.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Sources</h2>
              <ul className="list-none space-y-3 mb-8">
                <li className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 text-brand" />
                  <a 
                    href="https://www.grocerystoreguide.com/store-layout-psychology/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-dark transition-colors"
                  >
                    Grocery Store Guide: Store Layout Psychology
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