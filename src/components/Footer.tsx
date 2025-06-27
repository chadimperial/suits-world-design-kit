
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">SW</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">The Suits World</h3>
                <p className="text-sm text-gray-400">Premium Formal Wear</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your premier destination for high-quality formal wear. 
              Crafting elegance since 2010.
            </p>
            <div className="text-gray-400 text-sm">
              <p>📧 info@thesuitsworld.com</p>
              <p>📞 1-800-SUITS-01</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Shop</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/mens" className="hover:text-white transition-colors">Men's Suits</Link></li>
              <li><Link to="/womens" className="hover:text-white transition-colors">Women's Suits</Link></li>
              <li><Link to="/childrens" className="hover:text-white transition-colors">Children's Suits</Link></li>
              <li><Link to="/accessories" className="hover:text-white transition-colors">Accessories</Link></li>
              <li><Link to="/sale" className="hover:text-white transition-colors">Sale Items</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/size-guide" className="hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link to="/custom-tailoring" className="hover:text-white transition-colors">Custom Tailoring</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/admin" className="hover:text-white transition-colors">Admin Portal</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex md:flex-row flex-col md:justify-between md:items-center">
            <p className="text-gray-400 text-sm">
              © 2024 The Suits World. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Secure payments with</span>
              <div className="flex space-x-2">
                <span className="text-sm bg-gray-700 px-2 py-1 rounded">VISA</span>
                <span className="text-sm bg-gray-700 px-2 py-1 rounded">MC</span>
                <span className="text-sm bg-gray-700 px-2 py-1 rounded">AMEX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
