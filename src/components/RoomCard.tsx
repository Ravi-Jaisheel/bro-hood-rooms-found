
import { Link } from 'react-router-dom';
import { Bed, MapPin, Star, Wifi, Car, IndianRupee } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Room } from '@/data/roomsData';

interface RoomCardProps {
  room: Room;
}

const RoomCard = ({ room }: RoomCardProps) => {
  const renderAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "Wi-Fi":
        return <Wifi size={14} className="mr-1" />;
      case "Parking":
        return <Car size={14} className="mr-1" />;
      default:
        return null;
    }
  };
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={room.image} 
          alt={room.title} 
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-3 right-3 bg-broaccent-500">
          <IndianRupee size={14} className="mr-1" />
          {room.price.toLocaleString('en-IN')}/mo
        </Badge>
        
        <Badge 
          className={`absolute top-3 left-3 ${room.type === 'Single' ? 'bg-broblue-600' : 'bg-broblue-400'}`}
        >
          {room.type}
        </Badge>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
            {room.title}
          </h3>
          <div className="flex items-center text-sm">
            <Star size={14} className="text-yellow-500 mr-1" />
            <span className="font-medium">{room.rating}</span>
            <span className="text-gray-500 ml-1">({room.reviewCount})</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin size={14} className="mr-1" />
          <span className="line-clamp-1">{room.location} • {room.distance}</span>
        </div>
        
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
          {room.description}
        </p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {room.amenities.slice(0, 3).map((amenity, index) => (
              <Badge key={index} variant="outline" className="text-xs flex items-center">
                {renderAmenityIcon(amenity)}
                {amenity}
              </Badge>
            ))}
            {room.amenities.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{room.amenities.length - 3} more
              </Badge>
            )}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Link to={`/room/${room.id}`}>
            <Button variant="outline" size="sm" className="text-broblue-600 border-broblue-600">
              View Details
            </Button>
          </Link>
          <Link to={`/room/${room.id}#contact`}>
            <Button size="sm" className="bg-broaccent-500 hover:bg-broaccent-600">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
