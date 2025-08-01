import { Stethoscope } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Stethoscope className="h-6 w-6" />
              <h3 className="text-xl font-bold">Doctor Directory</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Find qualified doctors near you. Our comprehensive directory helps you connect with 
              healthcare professionals across India. Search by location, specialty, and more.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Find Doctors</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Specialties</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Locations</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Phone: +91 98765 43210</li>
              <li>Email: info@doctordirectory.com</li>
              <li>Address: 123 Health Street, Medical City</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2024 Doctor Directory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;