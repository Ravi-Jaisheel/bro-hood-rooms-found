
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-broblue-600 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              BRO <span className="text-broaccent-400">HOOD</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Finding affordable rooms for students near VIIT, Visakhapatnam.
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
                <span className="text-gray-300">Near VIIT, Duvvada, Visakhapatnam, India 530046</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span className="text-gray-300">+91 6969699654</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span className="text-gray-300">info@brohood.in</span>
              </li>
            </ul>
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
