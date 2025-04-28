
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import FilterBar, { FilterState } from '@/components/FilterBar';
import RoomCard from '@/components/RoomCard';
import { rooms, Room } from '@/data/roomsData';

const Listings = () => {
  const [searchParams] = useSearchParams();
  const locationParam = searchParams.get('location') || '';
  const budgetParam = searchParams.get('budget') || '';
  
  const [filteredRooms, setFilteredRooms] = useState<Room[]>(rooms);
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 1000],
    roomTypes: [],
    amenities: []
  });
  
  // Set initial budget from URL params if available
  useEffect(() => {
    if (budgetParam) {
      const budgetValue = parseInt(budgetParam);
      if (!isNaN(budgetValue)) {
        setFilters(prev => ({
          ...prev,
          priceRange: [0, budgetValue]
        }));
      }
    }
  }, [budgetParam]);
  
  // Apply filters whenever they change
  useEffect(() => {
    let results = [...rooms];
    
    // Filter by location search term
    if (locationParam) {
      results = results.filter(room => 
        room.location.toLowerCase().includes(locationParam.toLowerCase())
      );
    }
    
    // Filter by price range
    results = results.filter(room => 
      room.price >= filters.priceRange[0] && room.price <= filters.priceRange[1]
    );
    
    // Filter by room type
    if (filters.roomTypes.length > 0) {
      results = results.filter(room => 
        filters.roomTypes.includes(room.type)
      );
    }
    
    // Filter by amenities
    if (filters.amenities.length > 0) {
      results = results.filter(room => 
        filters.amenities.every(amenity => room.amenities.includes(amenity))
      );
    }
    
    setFilteredRooms(results);
  }, [locationParam, filters]);
  
  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        {/* Search Bar Section */}
        <section className="bg-broblue-600 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-3xl font-bold mb-6 text-center">
              Find Rooms Near You
            </h1>
            <SearchBar 
              className="max-w-4xl mx-auto" 
            />
          </div>
        </section>
        
        {/* Listings Section */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Filter Bar */}
            <FilterBar onFilterChange={handleFilterChange} />
            
            {/* Results Statistics */}
            <div className="mb-6">
              <p className="text-gray-600">
                {filteredRooms.length === 0 ? (
                  "No rooms found matching your criteria"
                ) : (
                  `Showing ${filteredRooms.length} rooms`
                )}
                {locationParam && ` near "${locationParam}"`}
              </p>
            </div>
            
            {/* Results Grid */}
            {filteredRooms.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRooms.map((room) => (
                  <RoomCard key={room.id} room={room} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold mb-2">No Rooms Found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search filters to find more results.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Listings;
