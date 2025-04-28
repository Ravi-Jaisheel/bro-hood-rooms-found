
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials, rooms } from '@/data/roomsData';
import RoomCard from '@/components/RoomCard';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Star, Calendar } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="h-[500px] bg-cover bg-center flex items-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80)', 
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
          
          <div className="container mx-auto px-4 z-10 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Find Your Perfect Room
              </h1>
              <p className="text-xl mb-8">
                Affordable rooms for rent near you. Whether you're a student, young professional, or just looking for a place to call home.
              </p>
              
              <SearchBar variant="hero" className="mt-8" />
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-broblue-100 flex items-center justify-center mb-4">
                <MapPin size={28} className="text-broblue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Search Location</h3>
              <p className="text-gray-600">
                Enter your desired location and budget to find rooms that match your criteria.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-broblue-100 flex items-center justify-center mb-4">
                <Bed size={28} className="text-broblue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Room</h3>
              <p className="text-gray-600">
                Browse through available listings, check amenities, and find your perfect room.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-broblue-100 flex items-center justify-center mb-4">
                <Calendar size={28} className="text-broblue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Viewing</h3>
              <p className="text-gray-600">
                Contact the owner, schedule a viewing, and secure your new place to stay.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Listings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Rooms</h2>
            <Link to="/listings">
              <Button variant="outline" className="border-broblue-600 text-broblue-600">
                View All
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.slice(0, 3).map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">What Our Users Say</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Join thousands of happy renters who found their perfect rooms through BRO HOOD.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id}
                name={testimonial.name}
                image={testimonial.image}
                occupation={testimonial.occupation}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-broblue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Room?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse hundreds of affordable rooms in your area. No hidden fees, just honest listings.
          </p>
          <Link to="/listings">
            <Button size="lg" className="bg-broaccent-500 hover:bg-broaccent-600 text-white">
              Start Searching Now
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
