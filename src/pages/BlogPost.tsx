import { useParams } from 'react-router-dom';
import { Calendar, ExternalLink } from 'lucide-react';

export function BlogPost() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <article className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold mb-4">
              Are Grocery Coupons Disappearing? Here's Why You're Saving Less
            </h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <Calendar className="h-4 w-4 mr-2" />
              <span>February 10, 2025</span>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg mb-8">
                If you feel like you're finding fewer grocery coupons these days, you're not alone. 
                In fact, the number of coupons issued has been steadily declining for years. 
                In the first half of 2022, approximately 78.8 billion coupons were issued, a sharp 
                16.7% drop from the previous year. Back in 2015, 294 billion coupons were distributed, 
                but by 2021, that number had fallen to just 168 billion.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Why Are Coupons Disappearing?</h2>
              <p className="mb-4">Several factors are driving this trend:</p>
              <ul className="list-disc pl-6 space-y-4 mb-8">
                <li>
                  <strong className="font-semibold">Supply Chain Challenges:</strong> During the pandemic, manufacturers struggled 
                  with supply shortages. Reducing coupon offerings helped prevent increased demand 
                  that could worsen product availability issues.
                </li>
                <li>
                  <strong className="font-semibold">Shift to Digital:</strong> While digital coupons are on the rise, they aren't always 
                  accessible to all shoppers, particularly those who prefer traditional clipping methods.
                </li>
                <li>
                  <strong className="font-semibold">Changing Consumer Behavior:</strong> Many consumers now opt for cashback rewards 
                  and loyalty programs over traditional couponing, making paper coupons less relevant.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-6">Who Determines Coupons – Retailers or Manufacturers?</h2>
              <p className="mb-4">Both manufacturers and retailers play a role in coupon distribution:</p>
              <ul className="list-disc pl-6 space-y-4 mb-8">
                <li>
                  <strong className="font-semibold">Manufacturers:</strong> Offer coupons to promote their brands and drive sales.
                </li>
                <li>
                  <strong className="font-semibold">Retailers:</strong> Use coupons strategically to encourage foot traffic, clear out inventory, 
                  and promote specific products.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-6">Are Coupons Actually Saving You Money?</h2>
              <p className="mb-8">
                With fewer coupons available and digital restrictions in place, it's time to reconsider if 
                your current shopping habits are really helping you save. Traditional couponing may no longer 
                be the most effective way to cut costs. Exploring alternative savings methods, such as price 
                comparison tools, cashback apps, and retailer loyalty programs, might yield better results.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Sources</h2>
              <ul className="list-none space-y-3 mb-8">
                {[
                  {
                    name: "Coupons in the News",
                    url: "https://couponsinthenews.com/2022/08/01/there-are-now-fewer-food-coupons-or-any-coupons-than-ever/"
                  },
                  {
                    name: "EconLife",
                    url: "https://econlife.com/2022/07/the-mystery-of-the-disappearing-coupons/"
                  },
                  {
                    name: "CBS News",
                    url: "https://www.cbsnews.com/news/inflations-coupons-disappearing/"
                  },
                  {
                    name: "Clark",
                    url: "https://clark.com/shopping-retail/is-couponing-still-a-good-way-to-save-money/"
                  }
                ].map((source, index) => (
                  <li key={index} className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-brand" />
                    <a 
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand hover:text-brand-dark transition-colors"
                    >
                      {source.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}