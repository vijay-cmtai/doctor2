import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DoctorCard from "@/components/DoctorCard";
import DoctorFilters from "@/components/DoctorFilters";
import doctorsData from "@/data/doctors.json";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  state: string;
  city: string;
  subarea: string;
  address: string;
  phone: string;
  email: string;
  experience: string;
  education: string;
}

const Index = () => {
  const [filters, setFilters] = useState({
    name: "",
    state: "all",
    city: "all",
    subarea: "all",
    specialty: "all",
  });

  const doctors: Doctor[] = doctorsData;

  // Get unique values for filter options
  const filterOptions = useMemo(() => {
    const states = [...new Set(doctors.map(doctor => doctor.state))].sort();
    const cities = [...new Set(doctors.map(doctor => doctor.city))].sort();
    const subareas = [...new Set(doctors.map(doctor => doctor.subarea))].sort();
    const specialties = [...new Set(doctors.map(doctor => doctor.specialty))].sort();

    return { states, cities, subareas, specialties };
  }, [doctors]);

  // Filter doctors based on current filters
  const filteredDoctors = useMemo(() => {
    return doctors.filter(doctor => {
      const matchesName = doctor.name.toLowerCase().includes(filters.name.toLowerCase());
      const matchesState = filters.state === "all" || doctor.state === filters.state;
      const matchesCity = filters.city === "all" || doctor.city === filters.city;
      const matchesSubarea = filters.subarea === "all" || doctor.subarea === filters.subarea;
      const matchesSpecialty = filters.specialty === "all" || doctor.specialty === filters.specialty;

      return matchesName && matchesState && matchesCity && matchesSubarea && matchesSpecialty;
    });
  }, [doctors, filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      name: "",
      state: "all",
      city: "all",
      subarea: "all",
      specialty: "all",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Find Your Doctor</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover qualified healthcare professionals in your area. Search through our comprehensive 
            directory of doctors across India.
          </p>
        </div>

        <DoctorFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={resetFilters}
          states={filterOptions.states}
          cities={filterOptions.cities}
          subareas={filterOptions.subareas}
          specialties={filterOptions.specialties}
        />

        <div className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-foreground">
              {filteredDoctors.length} Doctors Found
            </h3>
          </div>

          {filteredDoctors.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No doctors found matching your criteria. Please adjust your filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
