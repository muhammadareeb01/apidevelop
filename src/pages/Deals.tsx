import { Tag, ArrowUpDown, MapPin, Calendar } from 'lucide-react';
import { Button } from '../components/Button';

export function Deals() {
  const deals = [
    {
      store: "FreshMart",
      location: "Downtown",
      item: "Organic Bananas",
      originalPrice: 3.99,
      salePrice: 2.49,
      discount: "38%",
      image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=200",
      expiryDate: "2024-03-20"
    },
    {
      store: "GroceryMax",
      location: "Westside",
      item: "Whole Grain Bread",
      originalPrice: 4.99,
      salePrice: 3.49,
      discount: "30%",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=200",
      expiryDate: "2024-03-21"
    },
    {
      store: "SuperValue",
      location: "Eastside",
      item: "Free Range Eggs",
      originalPrice: 5.99,
      salePrice: 4.29,
      discount: "28%",
      image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=200",
      expiryDate: "2024-03-19"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Today's Best Deals</h1>
            <p className="text-gray-600">Find the best grocery deals in your area</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="sm">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Sort
            </Button>
            <Button variant="outline" size="sm">
              Filter
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {deals.map((deal, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex">
                <div className="w-48 h-48 flex-shrink-0">
                  <img
                    src={deal.image}
                    alt={deal.item}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{deal.item}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {deal.store} - {deal.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        Expires: {new Date(deal.expiryDate).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-2">
                        <Tag className="h-5 w-5 text-brand" />
                        <span className="text-brand font-semibold">{deal.discount} OFF</span>
                      </div>
                      <p className="text-gray-400 line-through">${deal.originalPrice}</p>
                      <p className="text-2xl font-bold text-gray-900">${deal.salePrice}</p>
                    </div>
                  </div>
                  <Button className="mt-4" size="sm">View Deal</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}