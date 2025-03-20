import { Calendar, ExternalLink } from 'lucide-react';

export function PsychologyPricing() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <article className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold mb-4">
              The Psychology Behind Grocery Pricing
            </h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <Calendar className="h-4 w-4 mr-2" />
              <span>March 18, 2025</span>
            </div>

            <div className="prose max-w-none">
              <img 
                src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=1000"
                alt="Person examining grocery store prices"
                className="w-full rounded-lg mb-8"
              />

              <p className="text-lg mb-8">
                Retailers have long used human psychology to nudge customers toward spending more. 
                One common tactic is "charm pricing," where prices end in 9 – think $0.99 or $2.49. 
                This isn't accidental: a price like $4.99 is perceived as significantly cheaper than 
                $5.00 because our brains fixate on the left-most digit.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">The Power of Anchors and Limits</h2>
              <p className="mb-8">
                Another trick is the use of anchors and limits to suggest quantities. Ever see a sign 
                proclaiming "5 for $5" or "Limit 4 per customer" on a sale item? Even if you don't 
                actually have to buy 5, many people will load up on more units than they originally intended. 
                A University of Illinois study found that when a grocery store put up a sign "Limit 12 per person" 
                on canned soup (at $0.79 each), customers bought an average of 7 cans, whereas without a limit 
                sign they bought ~3-4 cans.
              </p>

              <img 
                src="https://images.unsplash.com/photo-1580913428023-02c695666d61?auto=format&fit=crop&q=80&w=1000"
                alt="Grocery store shelf with price tags"
                className="w-full rounded-lg mb-8"
              />

              <h2 className="text-2xl font-bold mt-12 mb-6">Multiple-Unit Pricing Strategy</h2>
              <p className="mb-8">
                The mere presence of a high number as a limit acted as an anchor, upping the quantity 
                shoppers found reasonable to purchase. Similarly, multiple-unit pricing (e.g. "Buy 2, 
                get 1 free" or "3 for $5") leverages the idea of a deal bundle. One grocer noted that 
                selling an item at "2 for $4" moves more volume than pricing it at $1.99 each – even 
                though those are essentially the same price.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Visual Cues and Urgency</h2>
              <p className="mb-8">
                Visual cues also play a role. Red tags, sale stickers, and big fonts draw attention 
                and create urgency. The language matters: "Special Offer", "Manager's Special", 
                "Today Only" – these phrases trigger FOMO (fear of missing out). Limited-time sales 
                or one-day coupons exploit our urgency impulse.
              </p>

              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000"
                alt="Sale signs in grocery store"
                className="w-full rounded-lg mb-8"
              />

              <h2 className="text-2xl font-bold mt-12 mb-6">Price Formatting Psychology</h2>
              <p className="mb-8">
                Even the format of price digits can have an effect: research has shown that a price 
                without a comma (e.g. "1299" vs "1,299") feels slightly lower, and some restaurants 
                famously drop the currency symbol to reduce the "pain" of paying. In grocery stores, 
                you'll sometimes see unit price tricks – like a big "$5" and in small print "when you 
                buy 4 (or $1.69 each)". If you don't read carefully, you think it's $1.25 each. The 
                fine print forces you to buy more to get that price.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Making Informed Choices</h2>
              <p className="mb-8">
                In short, grocery pricing is as much about perception as reality. Retailers are tuning 
                prices not just to cover costs or reflect demand, but to hit the psychological sweet 
                spots that make you more likely to purchase. As a shopper, being aware of these subtleties 
                can help you make more rational choices (like realizing you don't actually need to buy 10 
                yogurts just because they're 10 for $10 – you could buy 2 for $2). The more you recognize 
                charm prices, anchor quantities, and flashy sale signs for what they are, the better you 
                can stick to your budget and needs.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Sources</h2>
              <ul className="list-none space-y-3 mb-8">
                <li className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 text-brand" />
                  <a 
                    href="https://www.simon-kucher.com/en/blog/psychology-pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-dark transition-colors"
                  >
                    Simon-Kucher: Psychology of Pricing
                  </a>
                </li>
                <li className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 text-brand" />
                  <a 
                    href="https://www.supermarketnews.com/retail-financial/psychology-grocery-pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-dark transition-colors"
                  >
                    Supermarket News: The Psychology of Grocery Pricing
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