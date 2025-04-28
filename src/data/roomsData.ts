
export interface Room {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  distance: string;
  type: 'Single' | 'Shared';
  image: string;
  amenities: string[];
  rating: number;
  reviewCount: number;
  available: boolean;
}

export const rooms: Room[] = [
  {
    id: 1,
    title: "Cozy Single Room in South Delhi",
    description: "Bright and comfortable single room in a peaceful neighborhood, ideal for students or young professionals. Features a study desk, fast Wi-Fi, and plenty of natural light.",
    price: 15000,
    location: "South Delhi, Near Green Park Metro",
    distance: "1.2 km from metro",
    type: "Single",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    amenities: ["Wi-Fi", "Private Bathroom", "Furnished", "Utilities Included"],
    rating: 4.5,
    reviewCount: 28,
    available: true
  },
  {
    id: 2,
    title: "Modern Shared Room in Bangalore",
    description: "Clean and modern shared room in a recently renovated apartment. Common living room and kitchen, great location near IT park.",
    price: 12000,
    location: "Electronic City, Bangalore",
    distance: "0.5 km from Tech Park",
    type: "Shared",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
    amenities: ["Wi-Fi", "Shared Bathroom", "Furnished", "Kitchen Access"],
    rating: 4.2,
    reviewCount: 15,
    available: true
  },
  {
    id: 3,
    title: "Spacious Single with Balcony in Mumbai",
    description: "Large single room with a small balcony overlooking the city. Includes access to shared kitchen and living spaces. Perfect for young professionals.",
    price: 18000,
    location: "Andheri West, Mumbai",
    distance: "1.5 km from metro",
    type: "Single",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    amenities: ["Wi-Fi", "Balcony", "Furnished", "Laundry"],
    rating: 4.8,
    reviewCount: 32,
    available: true
  },
  {
    id: 4,
    title: "Budget-Friendly Shared Room in Chennai",
    description: "Affordable shared room in a friendly house with 3 other roommates. All utilities and internet included.",
    price: 8000,
    location: "T Nagar, Chennai",
    distance: "2.1 km from center",
    type: "Shared",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
    amenities: ["Wi-Fi", "Shared Bathroom", "Furnished"],
    rating: 3.9,
    reviewCount: 11,
    available: true
  },
  {
    id: 5,
    title: "Premium Single Room in Gurgaon",
    description: "Premium single room with private bathroom and walk-in closet. Access to building gym and rooftop terrace.",
    price: 22000,
    location: "DLF Cyber City, Gurgaon",
    distance: "0.5 km from metro",
    type: "Single",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    amenities: ["Wi-Fi", "Private Bathroom", "Furnished", "Gym Access", "Parking"],
    rating: 4.9,
    reviewCount: 45,
    available: true
  },
  {
    id: 6,
    title: "Shared Room near IIT Delhi",
    description: "Friendly shared room in a house with 4 other students. Great atmosphere for studying and socializing.",
    price: 10000,
    location: "Hauz Khas, New Delhi",
    distance: "0.3 km from IIT",
    type: "Shared",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
    amenities: ["Wi-Fi", "Shared Bathroom", "Study Area", "Laundry"],
    rating: 4.3,
    reviewCount: 21,
    available: true
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Mike Johnson",
    image: "https://i.pravatar.cc/150?img=8",
    occupation: "Graduate Student",
    quote: "BRO HOOD helped me find the perfect room when I moved for grad school. The process was so easy and I found a great place within my budget!"
  },
  {
    id: 2,
    name: "Alex Chen",
    image: "https://i.pravatar.cc/150?img=11",
    occupation: "Software Developer",
    quote: "As a remote worker, I needed a comfortable place with good internet. Found a room with everything I needed in just two days!"
  },
  {
    id: 3,
    name: "James Wilson",
    image: "https://i.pravatar.cc/150?img=3",
    occupation: "Marketing Intern",
    quote: "The filtering options made it easy to find places that fit my needs. I'm now in a great shared apartment with awesome roommates."
  }
];

export const filterOptions = {
  priceRanges: [
    { min: 0, max: 400, label: "Under $400" },
    { min: 400, max: 600, label: "$400-$600" },
    { min: 600, max: 800, label: "$600-$800" },
    { min: 800, max: 1000, label: "$800-$1000" },
    { min: 1000, max: 10000, label: "$1000+" }
  ],
  roomTypes: ["Single", "Shared"],
  amenities: ["Wi-Fi", "Private Bathroom", "Shared Bathroom", "Furnished", "Utilities Included", "Kitchen Access", "Laundry", "Parking", "Gym Access", "Balcony"]
};
