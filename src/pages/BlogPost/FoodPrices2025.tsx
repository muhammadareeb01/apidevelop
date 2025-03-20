import { Calendar, ExternalLink } from 'lucide-react';

export function FoodPrices2025() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <article className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold mb-4">
              Why Grocery Prices Are Still High in 2025—Even as Inflation Cools
            </h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <Calendar className="h-4 w-4 mr-2" />
              <span>March 15, 2025</span>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg mb-8">
                Inflation has been easing for two years, but your grocery bill hasn't. Since 2019, food prices have surged a staggering <strong>28%</strong>, leaving many Americans wondering why they're paying more for the same essentials. Despite gasoline and energy prices dropping, food remains stubbornly expensive. 🛒💰
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">📊 Grocery Sticker Shock: The Numbers Don't Lie</h2>
              <ul className="list-disc pl-6 space-y-4 mb-8">
                <li>📈 <strong>28%</strong> increase in food prices since 2019</li>
                <li>💳 Over <strong>60%</strong> of Americans use credit cards for groceries, but only a third can pay off the balance</li>
                <li>🍽️ Low-income households spend a whopping <strong>32.6%</strong> of their income on food compared to <strong>8.1%</strong> for high-income families</li>
                <li>🏢 Corporate profits made up <strong>40%</strong> of inflation growth between 2019 and 2022—more than triple the <strong>11%</strong> share over the previous 40 years</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-6">🤔 So Why Are Prices Still High?</h2>
              <p className="mb-8">
                Food prices aren't just about farming. In fact, only <strong>15.9 cents</strong> of every food dollar actually goes to farmers. The rest? <em>Transportation, packaging, wages, and corporate markups.</em> 🚛📦💰
              </p>
              
              <figure className="mb-8">
                <img 
                  src="https://i.imgur.com/KfeFwJj.png" 
                  alt="Consumer Price Index Graph showing food prices outpacing overall inflation" 
                  className="w-full rounded-lg mb-2"
                />
                <figcaption className="text-sm text-gray-600 text-center">
                  Consumer Price Index (CPI) trends showing food prices consistently outpacing overall inflation
                </figcaption>
              </figure>

              <p className="mb-4">📌 Supply chain disruptions from the pandemic and a surge in demand created a lasting ripple effect. Once prices go up, they rarely come down.</p>
              
              <blockquote className="border-l-4 border-brand pl-4 italic mb-8">
                💡 The only time grocery prices actually <strong>fell</strong> in recent memory was in <strong>2015-2016</strong>—a rare moment fueled by declining oil and commodity prices.
              </blockquote>

              <h2 className="text-2xl font-bold mt-12 mb-6">🔍 How Prices Stay High: The Markup Chain</h2>
              <p className="mb-4">Every step in the supply chain adds to your final grocery bill:</p>
              <ol className="list-decimal pl-6 space-y-4 mb-8">
                <li>🏭 A manufacturer produces a product at a <strong>$10 cost</strong> and sells it for <strong>$18</strong>.</li>
                <li>⬆️ If costs rise by <strong>20%</strong>, the new cost is <strong>$12</strong>, and manufacturers raise their price to <strong>$20+</strong> to protect profits.</li>
                <li>📦 Wholesalers add their markup, increasing the price by another <strong>$2.50-$2.75</strong>.</li>
                <li>🏪 Grocery stores mark it up even more, adding at least <strong>$3</strong> before it hits shelves.</li>
              </ol>

              <p className="mb-8">🔥 Even when input costs drop, prices often <strong>stay high</strong> to maintain corporate profits.</p>

              <h2 className="text-2xl font-bold mt-12 mb-6">💼 Corporate Pricing & Market Control</h2>
              <p className="mb-8">
                Just a handful of corporations control <strong>72%</strong> of corn production and <strong>66%</strong> of soybean acreage. Meanwhile, five supermarket giants dominate urban grocery sales, limiting price competition. 🏢💰
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">💸 How Americans Are Coping</h2>
              <ul className="list-disc pl-6 space-y-4 mb-8">
                <li>🔻 More families are dipping into savings or taking on <strong>payday loans</strong> just to afford groceries.</li>
                <li>💳 <strong>60.5%</strong> of adults reported using credit cards for groceries in 2023.</li>
                <li>🍎 Lower-income households feel it the most, with food taking up <strong>a third of their income</strong>.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-6">📉 What's Next for Food Prices?</h2>
              <p className="mb-8">
                Experts predict food costs will <strong>stay high</strong> due to supply chain complexities and market consolidation. Unlike other categories, <strong>once food prices go up, they rarely come down</strong>. Without major economic shifts, consumers should expect higher grocery bills for the foreseeable future. 🛒💵
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Source</h2>
              <div className="flex items-center">
                <ExternalLink className="h-4 w-4 mr-2 text-brand" />
                <a 
                  href="https://www.cnbc.com/video/2025/01/04/heres-why-food-prices-remain-high-even-as-inflation-cools.html?&qsearchterm=groceries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:text-brand-dark transition-colors"
                >
                  CNBC: Here's why food prices remain high even as inflation cools
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}