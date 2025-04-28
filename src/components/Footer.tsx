
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-broblue-600 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              BRO <span className="text-broaccent-400">HOOD</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Finding affordable rooms for students, young professionals, and everyone in between.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-broaccent-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-broaccent-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-broaccent-300 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/listings" className="text-gray-300 hover:text-white transition-colors">Browse Rooms</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span className="text-gray-300">123 Main Street, City, State 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span className="text-gray-300">info@brohood.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest listings and updates.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
              />
              <button 
                type="submit" 
                className="bg-broaccent-500 hover:bg-broaccent-600 px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-broblue-700 py-4">
        <div className="container mx-auto px-4 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} BRO HOOD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
