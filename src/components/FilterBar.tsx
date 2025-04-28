
import { useState } from 'react';
import { CheckIcon, ChevronDown, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { filterOptions } from '@/data/roomsData';
import { Slider } from "@/components/ui/slider";

interface FilterBarProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  priceRange: [number, number];
  roomTypes: string[];
  amenities: string[];
}

const FilterBar = ({ onFilterChange }: FilterBarProps) => {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 1000],
    roomTypes: [],
    amenities: []
  });
  
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  
  const handlePriceChange = (value: number[]) => {
    const updatedFilters = {
      ...filters,
      priceRange: [value[0], value[1]] as [number, number]
    };
    
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };
  
  const handleRoomTypeChange = (type: string) => {
    let updatedRoomTypes: string[];
    
    if (filters.roomTypes.includes(type)) {
      updatedRoomTypes = filters.roomTypes.filter(t => t !== type);
    } else {
      updatedRoomTypes = [...filters.roomTypes, type];
    }
    
    const updatedFilters = {
      ...filters,
      roomTypes: updatedRoomTypes
    };
    
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };
  
  const handleAmenityChange = (amenity: string) => {
    let updatedAmenities: string[];
    
    if (filters.amenities.includes(amenity)) {
      updatedAmenities = filters.amenities.filter(a => a !== amenity);
    } else {
      updatedAmenities = [...filters.amenities, amenity];
    }
    
    const updatedFilters = {
      ...filters,
      amenities: updatedAmenities
    };
    
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };
  
  const resetFilters = () => {
    const resetState: FilterState = {
      priceRange: [0, 1000],
      roomTypes: [],
      amenities: []
    };
    
    setFilters(resetState);
    onFilterChange(resetState);
  };
  
  const countActiveFilters = () => {
    return (
      (filters.roomTypes.length > 0 ? 1 : 0) +
      (filters.amenities.length > 0 ? 1 : 0) +
      ((filters.priceRange[0] > 0 || filters.priceRange[1] < 1000) ? 1 : 0)
    );
  };
  
  const activeCount = countActiveFilters();

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border p-3 mb-6">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center">
          <Filter size={18} className="text-gray-500 mr-2" />
          <h3 className="text-lg font-medium">Filters</h3>
          {activeCount > 0 && (
            <span className="ml-2 px-2 py-1 text-xs bg-broblue-100 text-broblue-700 rounded-full">
              {activeCount}
            </span>
          )}
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={resetFilters}
            className="text-gray-600 hover:text-gray-800"
          >
            Reset
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsFiltersVisible(!isFiltersVisible)}
            className="md:hidden text-gray-600 hover:text-gray-800 flex items-center"
          >
            {isFiltersVisible ? "Hide Filters" : "Show Filters"}
            <ChevronDown size={16} className={`ml-1 transition-transform ${isFiltersVisible ? 'rotate-180' : ''}`} />
          </Button>
        </div>
      </div>
      
      <div className={`md:flex mt-4 space-y-4 md:space-y-0 md:space-x-6 ${isFiltersVisible ? 'block' : 'hidden md:flex'}`}>
        {/* Price Filter */}
        <div className="flex-1">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                Price Range
                <span className="text-sm text-gray-500">${filters.priceRange[0]}-${filters.priceRange[1]}</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-4" align="start">
              <div className="space-y-4">
                <h4 className="font-medium">Price Range</h4>
                <div className="flex justify-between text-sm">
                  <span>${filters.priceRange[0]}</span>
                  <span>${filters.priceRange[1]}</span>
                </div>
                <Slider 
                  defaultValue={[filters.priceRange[0], filters.priceRange[1]]}
                  min={0} 
                  max={1000} 
                  step={50}
                  onValueChange={handlePriceChange}
                  className="mt-2"
                />
              </div>
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Room Type Filter */}
        <div className="flex-1">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                Room Type
                {filters.roomTypes.length > 0 && (
                  <span className="text-sm text-gray-500">
                    {filters.roomTypes.join(", ")}
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-4" align="start">
              <div className="space-y-4">
                <h4 className="font-medium">Room Type</h4>
                {filterOptions.roomTypes.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`type-${type}`} 
                      checked={filters.roomTypes.includes(type)}
                      onCheckedChange={() => handleRoomTypeChange(type)}
                    />
                    <label htmlFor={`type-${type}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Amenities Filter */}
        <div className="flex-1">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                Amenities
                {filters.amenities.length > 0 && (
                  <span className="text-sm text-gray-500">
                    {filters.amenities.length} selected
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[220px] p-4" align="start">
              <div className="space-y-4">
                <h4 className="font-medium">Amenities</h4>
                <div className="max-h-[200px] overflow-y-auto space-y-2 pr-2">
                  {filterOptions.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`amenity-${amenity}`} 
                        checked={filters.amenities.includes(amenity)}
                        onCheckedChange={() => handleAmenityChange(amenity)}
                      />
                      <label htmlFor={`amenity-${amenity}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {amenity}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
