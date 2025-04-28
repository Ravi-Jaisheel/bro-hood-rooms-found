import { Link } from 'react-router-dom';
import { Clock, Users, Shield, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero section */}
      <section className="bg-broblue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            BRO HOOD is on a mission to make finding affordable rooms near VIIT easy, transparent, and stress-free.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <p className="text-lg text-gray-700 mb-4">
              BRO HOOD started with a simple observation: finding affordable housing near VIIT shouldn't be so difficult. We experienced firsthand the challenges of searching for rooms while on tight budgets as students.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              In 2023, we set out to create a platform that focuses specifically on room rentals near VIIT - not entire apartments or houses - to help students find affordable living spaces with minimal hassle and maximum transparency.
            </p>
            <p className="text-lg text-gray-700">
              Today, BRO HOOD connects VIIT students with room providers in Visakhapatnam, helping hundreds find their perfect living space each month.
            </p>
          </div>
        </div>
      </section>
      
      <Separator />
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Value 1 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 rounded-full bg-broblue-100 flex items-center justify-center mb-4">
                  <Clock size={24} className="text-broblue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Efficiency</h3>
                <p className="text-gray-600">
                  We value your time and aim to make the room-finding process as quick and efficient as possible.
                </p>
              </div>
              
              {/* Value 2 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 rounded-full bg-broblue-100 flex items-center justify-center mb-4">
                  <Shield size={24} className="text-broblue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Trust</h3>
                <p className="text-gray-600">
                  We believe in transparency and honest listings to build trust between renters and providers.
                </p>
              </div>
              
              {/* Value 3 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 rounded-full bg-broblue-100 flex items-center justify-center mb-4">
                  <Users size={24} className="text-broblue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-gray-600">
                  We foster a community where people can find not just rooms, but compatible roommates and lifestyles.
                </p>
              </div>
              
              {/* Value 4 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 rounded-full bg-broblue-100 flex items-center justify-center mb-4">
                  <Heart size={24} className="text-broblue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Affordability</h3>
                <p className="text-gray-600">
                  We're committed to making housing more accessible by focusing on affordable room rentals.
                </p>
              </div>
            </div>
          </div>
        </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-broblue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the BRO HOOD Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a VIIT student looking for a room or have a space to rent, we're here to connect you.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/listings">
              <Button size="lg" className="bg-broaccent-500 hover:bg-broaccent-600 text-white">
                Find a Room
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-broblue-600">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
