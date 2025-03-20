import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { FAQ } from '../pages/FAQ';
import { Privacy } from '../pages/Privacy';
import { Terms } from '../pages/Terms';
import { Blog } from '../pages/Blog';
import { DisappearingCoupons } from '../pages/BlogPost/DisappearingCoupons';
import { GroceryComparisonShopping } from '../pages/BlogPost/GroceryComparisonShopping';
import { FoodPrices2025 } from '../pages/BlogPost/FoodPrices2025';
import { PsychologyPricing } from '../pages/BlogPost/PsychologyPricing';
import { AIDynamicPricing } from '../pages/BlogPost/AIDynamicPricing';
import { LossLeaders } from '../pages/BlogPost/LossLeaders';
import { InflationImpact } from '../pages/BlogPost/InflationImpact';
import { SaleCycles } from '../pages/BlogPost/SaleCycles';
import { EDLPvsHighLow } from '../pages/BlogPost/EDLPvsHighLow';
import { StoreLayout } from '../pages/BlogPost/StoreLayout';
import { BulkPricing } from '../pages/BlogPost/BulkPricing';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'faq',
        element: <FAQ />,
      },
      {
        path: 'privacy',
        element: <Privacy />,
      },
      {
        path: 'terms',
        element: <Terms />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'blog/grocery-coupons-disappearing',
        element: <DisappearingCoupons />,
      },
      {
        path: 'blog/grocery-comparison-shopping',
        element: <GroceryComparisonShopping />,
      },
      {
        path: 'blog/food-prices-2025',
        element: <FoodPrices2025 />,
      },
      {
        path: 'blog/psychology-grocery-pricing',
        element: <PsychologyPricing />,
      },
      {
        path: 'blog/ai-dynamic-pricing',
        element: <AIDynamicPricing />,
      },
      {
        path: 'blog/loss-leaders',
        element: <LossLeaders />,
      },
      {
        path: 'blog/inflation-impact',
        element: <InflationImpact />,
      },
      {
        path: 'blog/sale-cycles',
        element: <SaleCycles />,
      },
      {
        path: 'blog/edlp-vs-high-low',
        element: <EDLPvsHighLow />,
      },
      {
        path: 'blog/store-layout',
        element: <StoreLayout />,
      },
      {
        path: 'blog/bulk-pricing',
        element: <BulkPricing />,
      },
    ],
  },
]);