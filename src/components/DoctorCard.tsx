import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, GraduationCap, Clock } from "lucide-react";

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

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl text-foreground">{doctor.name}</CardTitle>
        <p className="text-primary font-semibold">{doctor.specialty}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start space-x-2 text-sm">
          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          <div className="text-muted-foreground">
            <p className="font-medium text-foreground">{doctor.city}, {doctor.state}</p>
            <p>{doctor.subarea}</p>
            <p>{doctor.address}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 text-sm">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{doctor.phone}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{doctor.email}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{doctor.experience} experience</span>
        </div>
        
        <div className="flex items-start space-x-2 text-sm">
          <GraduationCap className="h-4 w-4 text-muted-foreground mt-0.5" />
          <span className="text-muted-foreground">{doctor.education}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;