import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, RefreshCw } from "lucide-react";

interface DoctorFiltersProps {
  filters: {
    name: string;
    state: string;
    city: string;
    subarea: string;
    specialty: string;
  };
  onFilterChange: (key: string, value: string) => void;
  onReset: () => void;
  states: string[];
  cities: string[];
  subareas: string[];
  specialties: string[];
}

const DoctorFilters = ({
  filters,
  onFilterChange,
  onReset,
  states,
  cities,
  subareas,
  specialties,
}: DoctorFiltersProps) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-sm border">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Doctor Name"
            value={filters.name}
            onChange={(e) => onFilterChange("name", e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={filters.state} onValueChange={(value) => onFilterChange("state", value)}>
          <SelectTrigger>
            <SelectValue placeholder="All States" />
          </SelectTrigger>
          <SelectContent className="bg-popover">
            <SelectItem value="all">All States</SelectItem>
            {states.map((state) => (
              <SelectItem key={state} value={state}>
                {state}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={filters.city} onValueChange={(value) => onFilterChange("city", value)}>
          <SelectTrigger>
            <SelectValue placeholder="All Cities" />
          </SelectTrigger>
          <SelectContent className="bg-popover">
            <SelectItem value="all">All Cities</SelectItem>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={filters.subarea} onValueChange={(value) => onFilterChange("subarea", value)}>
          <SelectTrigger>
            <SelectValue placeholder="All Subareas" />
          </SelectTrigger>
          <SelectContent className="bg-popover">
            <SelectItem value="all">All Subareas</SelectItem>
            {subareas.map((subarea) => (
              <SelectItem key={subarea} value={subarea}>
                {subarea}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={filters.specialty} onValueChange={(value) => onFilterChange("specialty", value)}>
          <SelectTrigger>
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent className="bg-popover">
            <SelectItem value="all">All Categories</SelectItem>
            {specialties.map((specialty) => (
              <SelectItem key={specialty} value={specialty}>
                {specialty}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Button 
          onClick={onReset} 
          variant="outline"
          className="flex items-center space-x-2"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Reset Filters</span>
        </Button>
      </div>
    </div>
  );
};

export default DoctorFilters;