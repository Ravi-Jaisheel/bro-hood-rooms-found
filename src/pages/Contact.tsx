import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond to your inquiry soon.",
      duration: 5000,
    });
    
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-broblue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Have questions about finding or listing a room? We're here to help!
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-broblue-100 p-3 rounded-full">
                      <Mail size={24} className="text-broblue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-gray-600">info@brohood.in</p>
                      <p className="text-gray-600">support@brohood.in</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-broblue-100 p-3 rounded-full">
                      <Phone size={24} className="text-broblue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <p className="text-gray-600">+91 6969699654</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-broblue-100 p-3 rounded-full">
                      <MapPin size={24} className="text-broblue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Visit Us</h3>
                      <p className="text-gray-600">Near VIIT Main Gate</p>
                      <p className="text-gray-600">Duvvada, Visakhapatnam</p>
                      <p className="text-gray-600">Andhra Pradesh 530046</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <Input 
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input 
                      id="subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      placeholder="Enter subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Your Message
                    </label>
                    <Textarea 
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="Enter your message"
                      className="min-h-[150px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-broblue-600 hover:bg-broblue-700 text-white"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.458790921138!2d83.16648731478455!3d17.69029998789793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498b51!2sVignan%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1645488735733!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VIIT Location"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">How do I list my room on BRO HOOD?</h3>
                <p className="text-gray-600">
                  To list your room, create an account and click on the "List a Room" button. Follow the steps to add details, photos, and set your price.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Is it free to search for rooms?</h3>
                <p className="text-gray-600">
                  Yes, searching and browsing room listings is completely free. We only charge a small fee when you successfully rent out your room.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">How do I contact room owners?</h3>
                <p className="text-gray-600">
                  Each listing has a contact form where you can send a message directly to the room owner. You can also call the provided phone number if available.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Are the listings verified?</h3>
                <p className="text-gray-600">
                  We do our best to verify listings, but we also recommend that renters always view the room in person before making any payments.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
