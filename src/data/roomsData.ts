
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
    title: "Single Room near VIIT",
    description: "Bright and comfortable single room perfect for VIIT students. Features study desk, fast Wi-Fi, and plenty of natural light.",
    price: 15000,
    location: "Duvvada, Near VIIT",
    distance: "0.5 km from VIIT",
    type: "Single",
    image: "https://images.unsplash.com/photo-1598928636135-d146006ff4be",
    amenities: ["Wi-Fi", "Private Bathroom", "Furnished", "Utilities Included"],
    rating: 4.5,
    reviewCount: 28,
    available: true
  },
  {
    id: 2,
    title: "Shared Room in Duvvada",
    description: "Clean and modern shared room in a recently renovated apartment. Common living room and kitchen, walking distance to VIIT.",
    price: 12000,
    location: "Duvvada, Visakhapatnam",
    distance: "1.2 km from VIIT",
    type: "Shared",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
    amenities: ["Wi-Fi", "Shared Bathroom", "Furnished", "Kitchen Access"],
    rating: 4.2,
    reviewCount: 15,
    available: true
  },
  {
    id: 3,
    title: "Spacious Single Room with Balcony",
    description: "Large single room with a small balcony. Includes access to shared kitchen and living spaces. Perfect for VIIT students.",
    price: 18000,
    location: "Sheela Nagar, Visakhapatnam",
    distance: "2.1 km from VIIT",
    type: "Single",
    image: "https://images.unsplash.com/photo-1597545935152-5b6006d8bfc7",
    amenities: ["Wi-Fi", "Balcony", "Furnished", "Laundry"],
    rating: 4.8,
    reviewCount: 32,
    available: true
  },
  {
    id: 4,
    title: "Budget-Friendly Shared Room",
    description: "Affordable shared room in a friendly house with 3 other students. All utilities and internet included.",
    price: 8000,
    location: "Duvvada, Visakhapatnam",
    distance: "0.8 km from VIIT",
    type: "Shared",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
    amenities: ["Wi-Fi", "Shared Bathroom", "Furnished"],
    rating: 3.9,
    reviewCount: 11,
    available: true
  },
  {
    id: 5,
    title: "Premium Single Room",
    description: "Premium single room with private bathroom and walk-in closet. Close to VIIT main gate.",
    price: 22000,
    location: "Duvvada, Near VIIT Main Gate",
    distance: "0.3 km from VIIT",
    type: "Single",
    image: "https://images.unsplash.com/photo-1598928636135-d146006ff4be",
    amenities: ["Wi-Fi", "Private Bathroom", "Furnished", "AC", "Parking"],
    rating: 4.9,
    reviewCount: 45,
    available: true
  },
  {
    id: 6,
    title: "Shared Room for VIIT Students",
    description: "Friendly shared room in a house with 4 other students. Great atmosphere for studying.",
    price: 10000,
    location: "Duvvada, Visakhapatnam",
    distance: "1.5 km from VIIT",
    type: "Shared",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
    amenities: ["Wi-Fi", "Shared Bathroom", "Study Area", "Laundry"],
    rating: 4.3,
    reviewCount: 21,
    available: true
  }
];

// Remove testimonials as requested
export const filterOptions = {
  priceRanges: [
    { min: 0, max: 5000, label: "Under ₹5,000" },
    { min: 5000, max: 10000, label: "₹5,000-₹10,000" },
    { min: 10000, max: 15000, label: "₹10,000-₹15,000" },
    { min: 15000, max: 20000, label: "₹15,000-₹20,000" },
    { min: 20000, max: 100000, label: "₹20,000+" }
  ],
  roomTypes: ["Single", "Shared"],
  amenities: ["Wi-Fi", "Private Bathroom", "Shared Bathroom", "Furnished", "Utilities Included", "Kitchen Access", "Laundry", "Parking", "AC", "Balcony"]
};
