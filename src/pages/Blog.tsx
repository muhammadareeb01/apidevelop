import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "Why Grocery Prices Are Still High in 2025—Even as Inflation Cools",
    summary: "Food prices have surged 28% since 2019, and despite lower inflation, grocery costs remain stubbornly high. Why? Corporate profits, supply chain disruptions, and market consolidation are keeping prices elevated. Learn what's really driving your grocery bill up—and whether relief is on the horizon. 🚛📈",
    date: "03/15/2025",
    image: "https://i.imgur.com/KfeFwJj.png",
    slug: "food-prices-2025"
  },
  {
    id: '2',
    title: "Is comparison shopping actually a way to save money? Based on the experience of many, the answer is YES!",
    summary: "Some users have struggled to find savings on groceries so they have shopped around retailers. Surprisingly it has worked with savings upwards of $200/month",
    date: "02/03/2025",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=600",
    slug: "grocery-comparison-shopping"
  },
  {
    id: '3',
    title: "Are grocery coupons disappearing? Here's why you're saving less",
    summary: "The landscape of grocery savings is changing. Learn why traditional coupons are becoming rare and what this means for your shopping budget.",
    date: "02/10/2025",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=600",
    slug: "grocery-coupons-disappearing"
  },
  {
    id: '4',
    title: "The Psychology Behind Grocery Pricing",
    summary: "Discover how retailers use psychological tactics like charm pricing, anchoring, and visual cues to influence your shopping behavior. Learn to recognize these strategies and make more informed purchasing decisions.",
    date: "03/18/2025",
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=600",
    slug: "psychology-grocery-pricing"
  },
  {
    id: '5',
    title: "AI-Driven Dynamic Pricing: The New Frontier",
    summary: "Explore how artificial intelligence is revolutionizing grocery pricing, from electronic shelf labels to personalized discounts. Learn what this means for your shopping experience and wallet.",
    date: "03/20/2025",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80&w=600",
    slug: "ai-dynamic-pricing"
  },
  {
    id: '6',
    title: "Loss-Leaders: Why Stores Sell Some Items Dirt Cheap",
    summary: "Discover the strategy behind those incredibly low-priced items in grocery stores. From Costco's famous $4.99 rotisserie chicken to seasonal deals, learn how stores use loss leaders to drive sales.",
    date: "03/22/2025",
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=600",
    slug: "loss-leaders"
  },
  {
    id: '7',
    title: "Inflation's Impact: Grocery Pricing in 2025",
    summary: "Explore how inflation has reshaped grocery pricing and consumer behavior, from the rise of private labels to multi-store shopping trends. Learn how retailers and shoppers are adapting to the new normal.",
    date: "03/25/2025",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600",
    slug: "inflation-impact"
  },
  {
    id: '8',
    title: "Timing is Everything: Decoding Grocery Sale Cycles",
    summary: "Learn how to predict and take advantage of grocery store sale cycles. From weekly ad patterns to seasonal deals, discover when to shop and save on your favorite items.",
    date: "03/27/2025",
    image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&q=80&w=600",
    slug: "sale-cycles"
  },
  {
    id: '9',
    title: "EDLP vs. High-Low: Two Different Pricing Philosophies",
    summary: "Understand the difference between Everyday Low Pricing and High-Low pricing strategies. Learn how these approaches affect your shopping and which might save you more money.",
    date: "03/29/2025",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600",
    slug: "edlp-vs-high-low"
  },
  {
    id: '10',
    title: "How Store Layout and Placement Sway Your Choices",
    summary: "Discover the psychology behind grocery store layouts and product placement. Learn how stores guide your shopping journey and how to shop smarter.",
    date: "03/31/2025",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=600",
    slug: "store-layout"
  },
  {
    id: '11',
    title: "Bulk Pricing: Buy More, Save More... and Spend More?",
    summary: "Explore the strategy behind bulk pricing and how it affects consumer behavior. Learn when bulk buying makes sense and when it might lead to overspending.",
    date: "04/02/2025",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=600",
    slug: "bulk-pricing"
  }
];

export function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">Latest Blog Posts</h1>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="hover:text-brand transition-colors"
                  >
                    <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                  </Link>
                  <p className="text-gray-600 mb-4">{post.summary}</p>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}