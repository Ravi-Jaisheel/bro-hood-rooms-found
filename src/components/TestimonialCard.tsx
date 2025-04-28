
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  name: string;
  image: string;
  occupation: string;
  quote: string;
}

const TestimonialCard = ({ name, image, occupation, quote }: TestimonialCardProps) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img 
            src={image} 
            alt={name} 
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-gray-500 text-sm">{occupation}</p>
          </div>
        </div>
        
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className="text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>
        
        <p className="text-gray-700 italic">
          "{quote}"
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
