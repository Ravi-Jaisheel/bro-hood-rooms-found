
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
    title: "Single Room near VIIT Main Gate",
    description: "Well-furnished single room with study table, perfect for VIIT students. Walking distance to college.",
    price: 8000,
    location: "Duvvada, Near VIIT",
    distance: "0.2 km from VIIT",
    type: "Single",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
    amenities: ["Wi-Fi", "Furnished", "Study Table", "24/7 Water"],
    rating: 4.5,
    reviewCount: 15,
    available: true
  },
  {
    id: 2,
    title: "Shared 2-Bed Room in Duvvada",
    description: "Spacious shared room with attached bathroom. Ideal for students looking for affordable accommodation.",
    price: 5000,
    location: "Duvvada, Visakhapatnam",
    distance: "0.5 km from VIIT",
    type: "Shared",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
    amenities: ["Wi-Fi", "Shared Bathroom", "Kitchen Access"],
    rating: 4.2,
    reviewCount: 8,
    available: true
  },
  {
    id: 3,
    title: "Premium Single Room with Balcony",
    description: "Modern single room with private balcony and full amenities. Perfect for students who prefer privacy.",
    price: 12000,
    location: "Sheela Nagar, Visakhapatnam",
    distance: "1.2 km from VIIT",
    type: "Single",
    image: "https://images.unsplash.com/photo-1598928636135-d146006ff4be",
    amenities: ["Wi-Fi", "AC", "Private Bathroom", "Balcony"],
    rating: 4.8,
    reviewCount: 20,
    available: true
  },
  {
    id: 4,
    title: "Budget Triple Sharing Room",
    description: "Economical shared room with basic amenities. Best for students on a budget.",
    price: 4000,
    location: "Duvvada, Visakhapatnam",
    distance: "0.8 km from VIIT",
    type: "Shared",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
    amenities: ["Wi-Fi", "Shared Bathroom", "Study Area"],
    rating: 4.0,
    reviewCount: 12,
    available: true
  },
  {
    id: 5,
    title: "Deluxe Single Room with Garden View",
    description: "Upscale single room with garden view and modern amenities. Quiet environment for focused studying.",
    price: 15000,
    location: "Gajuwaka, Visakhapatnam",
    distance: "2.5 km from VIIT",
    type: "Single",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
    amenities: ["Wi-Fi", "AC", "Private Bathroom", "Garden View"],
    rating: 4.9,
    reviewCount: 25,
    available: true
  },
  {
    id: 6,
    title: "2-Person Sharing Near College",
    description: "Comfortable shared room with dedicated study spaces. Close to local amenities.",
    price: 6000,
    location: "Duvvada, Visakhapatnam",
    distance: "0.3 km from VIIT",
    type: "Shared",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
    amenities: ["Wi-Fi", "Study Tables", "Laundry"],
    rating: 4.3,
    reviewCount: 18,
    available: true
  },
  {
    id: 7,
    title: "AC Single Room with Study Area",
    description: "Modern single room with dedicated study area and air conditioning. Perfect for serious students.",
    price: 13000,
    location: "Duvvada, Visakhapatnam",
    distance: "1.0 km from VIIT",
    type: "Single",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
    amenities: ["Wi-Fi", "AC", "Study Area", "Private Bathroom"],
    rating: 4.6,
    reviewCount: 22,
    available: true
  },
  {
    id: 8,
    title: "4-Sharing Economy Room",
    description: "Budget-friendly shared accommodation. Great for students looking to save on rent.",
    price: 3500,
    location: "Duvvada, Visakhapatnam",
    distance: "0.7 km from VIIT",
    type: "Shared",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
    amenities: ["Wi-Fi", "Shared Bathroom", "Common Area"],
    rating: 4.1,
    reviewCount: 15,
    available: true
  },
  {
    id: 9,
    title: "Luxury Single Room Suite",
    description: "High-end single room with all modern amenities. Premium living experience.",
    price: 18000,
    location: "Gajuwaka, Visakhapatnam",
    distance: "2.0 km from VIIT",
    type: "Single",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
    amenities: ["Wi-Fi", "AC", "Private Bathroom", "TV", "Mini Fridge"],
    rating: 5.0,
    reviewCount: 30,
    available: true
  },
  {
    id: 10,
    title: "3-Sharing Comfort Room",
    description: "Well-maintained shared room with balanced amenities. Good value for money.",
    price: 4500,
    location: "Duvvada, Visakhapatnam",
    distance: "0.9 km from VIIT",
    type: "Shared",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
    amenities: ["Wi-Fi", "Study Tables", "Shared Bathroom"],
    rating: 4.4,
    reviewCount: 16,
    available: true
  }
];

export const filterOptions = {
  priceRanges: [
    { min: 0, max: 5000, label: "Under ₹5,000" },
    { min: 5000, max: 10000, label: "₹5,000-₹10,000" },
    { min: 10000, max: 15000, label: "₹10,000-₹15,000" },
    { min: 15000, max: 20000, label: "₹15,000-₹20,000" },
    { min: 20000, max: 50000, label: "₹20,000+" }
  ],
  roomTypes: ["Single", "Shared"],
  amenities: ["Wi-Fi", "AC", "Private Bathroom", "Shared Bathroom", "Furnished", "Study Table", "Kitchen Access", "Balcony", "TV", "Laundry", "24/7 Water"]
};
