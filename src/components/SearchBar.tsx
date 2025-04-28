
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  variant?: 'hero' | 'compact';
  className?: string;
}

const SearchBar = ({ variant = 'compact', className = '' }: SearchBarProps) => {
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/listings?location=${encodeURIComponent(location)}&budget=${encodeURIComponent(budget)}`);
  };
  
  const isHero = variant === 'hero';
  
  return (
    <form 
      onSubmit={handleSearch} 
      className={`${className} flex flex-col md:flex-row gap-3 w-full max-w-4xl ${isHero ? 'bg-white p-4 md:p-6 rounded-lg shadow-lg' : ''}`}
    >
      <div className={`flex-1 ${isHero ? 'md:mr-2' : ''}`}>
        <label htmlFor="location" className={`${isHero ? 'block mb-2 font-medium text-gray-700' : 'sr-only'}`}>
          Location
        </label>
        <div className="relative">
          <Input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where are you looking?"
            className={`pl-10 w-full ${isHero ? 'h-12' : 'h-10'} border-gray-300 input-focus-ring`}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
        </div>
      </div>
      
      <div className={`flex-1 ${isHero ? 'md:mr-2' : ''}`}>
        <label htmlFor="budget" className={`${isHero ? 'block mb-2 font-medium text-gray-700' : 'sr-only'}`}>
          Max Budget
        </label>
        <Input
          id="budget"
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Max budget ($ per month)"
          className={`w-full ${isHero ? 'h-12' : 'h-10'} border-gray-300 input-focus-ring`}
        />
      </div>
      
      <div className={`${isHero ? 'mt-2 md:mt-0 md:self-end' : ''}`}>
        <Button 
          type="submit" 
          className={`${isHero ? 'h-12 w-full md:w-auto px-8' : 'h-10'} bg-broblue-600 hover:bg-broblue-700 text-white`}
        >
          <Search size={18} className="mr-2" /> Search
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
