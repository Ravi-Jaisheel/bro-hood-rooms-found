import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="BRO HOOD Logo" 
            className="h-10 mr-2"
          />
          <h1 className="text-2xl font-bold text-broblue-600">
            BRO <span className="text-broaccent-500">HOOD</span>
          </h1>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-broblue-600 transition-colors">Home</Link>
          <Link to="/listings" className="text-gray-700 hover:text-broblue-600 transition-colors">Listings</Link>
          <Link to="/about" className="text-gray-700 hover:text-broblue-600 transition-colors">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-broblue-600 transition-colors">Contact</Link>
          <Button className="bg-broaccent-500 hover:bg-broaccent-600 text-white">Sign Up</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white shadow-md absolute w-full z-50">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-broblue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/listings" 
              className="text-gray-700 hover:text-broblue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Listings
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-broblue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-broblue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              className="bg-broaccent-500 hover:bg-broaccent-600 text-white w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
