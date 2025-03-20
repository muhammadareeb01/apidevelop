import { Calendar, ExternalLink } from 'lucide-react';

export function SaleCycles() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <article className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold mb-4">
              Timing is Everything: Decoding Grocery Sale Cycles
            </h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <Calendar className="h-4 w-4 mr-2" />
              <span>March 27, 2025</span>
            </div>

            <div className="prose max-w-none">
              <img 
                src="https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&q=80&w=1000"
                alt="Grocery store sale signs"
                className="w-full rounded-lg mb-8"
              />

              <p className="text-lg mb-8">
                Ever notice how the price of your go-to cereal seems to yo-yo every few weeks? You're not 
                imagining it. Grocery retailers operate on planned sale cycles. Understanding these cycles 
                can help you anticipate when to stock up and when to hold off on purchases.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">The 6-Week Cycle</h2>
              <p className="mb-8">
                Most supermarkets run on a 6-week cycle for sales. This means that roughly every 6 weeks, 
                a given product or brand will go on sale. Some items might be 8-week or 4-week cycles 
                depending on how competitive the category is. For example, big national brands of soda 
                might be on a roughly monthly promotion cycle (since cola wars are intense), whereas a 
                more niche item might be every 2 months.
              </p>

              <img 
                src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=1000"
                alt="Seasonal grocery display"
                className="w-full rounded-lg mb-8"
              />

              <h2 className="text-2xl font-bold mt-12 mb-6">Seasonal Overlays</h2>
              <p className="mb-8">
                Seasonality overlays these cycles. Certain times of year, specific categories will almost 
                certainly be on sale: snacks and beer in early February (Super Bowl time), frozen pizzas 
                and convenience foods in March (March Madness, plus end of winter comfort), grilling meats, 
                ketchup, and chips in summer, baking supplies in November/December, etc.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Weekly Rhythms</h2>
              <p className="mb-8">
                Weekly ads usually break each week's promotions into themes or departments. A typical 4-week 
                span might look like: Week 1 – Meat and Seafood sale; Week 2 – Snacks and Beverages sale; 
                Week 3 – Dairy and Frozen sale; Week 4 – Pantry Staples sale.
              </p>

              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000"
                alt="Daily grocery markdowns"
                className="w-full rounded-lg mb-8"
              />

              <h2 className="text-2xl font-bold mt-12 mb-6">Daily Timing</h2>
              <p className="mb-8">
                On a micro level, day-of-week matters too. New sale prices typically start on Wednesdays 
                in many chains. Early in a sale week, shelves are well-stocked with the advertised specials; 
                by late in the week they might be picked over. Some stores restock big sale items mid-weekend, 
                some don't.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Daily Discounts</h2>
              <p className="mb-8">
                Many stores discount baked goods in the evening or the next day morning since they're 
                perishable. Meat departments often put "$ off" stickers on meat that needs to sell that day. 
                These aren't exactly "cycles" but regular events – e.g., every morning around 8am, yesterday's 
                grind of beef gets a markdown sticker.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Strategic Shopping Tips</h2>
              <p className="mb-8">
                For practical purposes, if you want to maximize savings: identify the cycle of your frequently 
                used products. If peanut butter hits its low price every 8 weeks, plan to buy enough peanut 
                butter to last 8 weeks when that sale comes. This way you never have to pay full price.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Sources</h2>
              <ul className="list-none space-y-3 mb-8">
                <li className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 text-brand" />
                  <a 
                    href="https://www.moneysmartguides.com/grocery-store-sales-cycles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-dark transition-colors"
                  >
                    Money Smart Guides: Understanding Grocery Store Sales Cycles
                  </a>
                </li>
                <li className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 text-brand" />
                  <a 
                    href="https://www.inspiringsavings.com/seasonal-sales-cycles/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-dark transition-colors"
                  >
                    Inspiring Savings: Seasonal Sales Cycles Guide
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