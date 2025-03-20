import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-brand">About Us</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-600 hover:text-brand">FAQ</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-brand">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 hover:text-brand">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-brand">Terms of Service</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-brand">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Connect</h3>
            <p className="text-gray-600">Stay up to date with the latest deals and updates.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-brand">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-brand">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-brand">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {currentYear} Prox. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}