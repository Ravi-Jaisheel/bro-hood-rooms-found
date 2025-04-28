
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Bed, 
  ChevronLeft, 
  Calendar, 
  Check, 
  Star, 
  Mail, 
  Phone
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { rooms, Room } from '@/data/roomsData';

const RoomDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [room, setRoom] = useState<Room | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();
  
  useEffect(() => {
    if (id) {
      const roomData = rooms.find(r => r.id === parseInt(id));
      if (roomData) {
        setRoom(roomData);
      }
    }
  }, [id]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Request Sent!",
      description: `Your inquiry about ${room?.title} has been submitted. We'll contact you soon.`,
      duration: 5000,
    });
    
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };
  
  if (!room) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex-grow">
          <p className="text-center text-xl">Room not found</p>
          <div className="text-center mt-4">
            <Link to="/listings">
              <Button>Return to Listings</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Back to listings */}
          <Link 
            to="/listings" 
            className="flex items-center text-broblue-600 hover:text-broblue-700 mb-6"
          >
            <ChevronLeft size={18} />
            <span className="ml-1">Back to listings</span>
          </Link>
          
          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Room details - Takes up 2 columns */}
            <div className="lg:col-span-2">
              {/* Room images */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8">
                <img 
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              
              {/* Room info */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">{room.title}</h1>
                    <div className="flex items-center text-gray-500 mb-4">
                      <MapPin size={18} className="mr-1" />
                      <span>{room.location} • {room.distance}</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-2xl font-bold text-broblue-600">
                      ${room.price}
                      <span className="text-sm font-normal text-gray-500">/month</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <Star size={16} className="text-yellow-500 mr-1" />
                      <span className="font-medium">{room.rating}</span>
                      <span className="text-gray-500 ml-1">({room.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className={room.type === 'Single' ? 'bg-broblue-600' : 'bg-broblue-400'}>
                    {room.type} Room
                  </Badge>
                  {room.available ? (
                    <Badge className="bg-green-600">Available</Badge>
                  ) : (
                    <Badge variant="destructive">Not Available</Badge>
                  )}
                </div>
                
                <Separator className="my-6" />
                
                <h2 className="text-xl font-semibold mb-4">Description</h2>
                <p className="text-gray-700 mb-6">{room.description}</p>
                
                <h2 className="text-xl font-semibold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3">
                  {room.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check size={18} className="text-green-500 mr-2" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact form - Takes up 1 column */}
            <div id="contact">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
                <h3 className="text-xl font-semibold mb-4">Request Information</h3>
                <p className="text-gray-600 mb-6">
                  Fill out the form below to inquire about this room and schedule a viewing.
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name
                      </label>
                      <Input 
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text" 
                        required 
                        placeholder="Your name" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <Input 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" 
                        required 
                        placeholder="Your email" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone Number
                      </label>
                      <Input 
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="tel" 
                        placeholder="Your phone number" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <Textarea 
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required 
                        placeholder="I'm interested in this room and would like to schedule a viewing..." 
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-broblue-600 hover:bg-broblue-700"
                    >
                      <Mail size={18} className="mr-2" />
                      Send Request
                    </Button>
                    
                    <p className="text-center text-gray-500 text-sm">
                      or call directly:
                    </p>
                    
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-full border-broaccent-500 text-broaccent-500 hover:bg-broaccent-50"
                    >
                      <Phone size={18} className="mr-2" />
                      (123) 456-7890
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RoomDetail;
