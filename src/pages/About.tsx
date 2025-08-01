import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">About Us</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Welcome to Doctor Directory, your trusted platform for finding qualified healthcare professionals across India.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  To connect patients with the right healthcare professionals by providing a comprehensive, 
                  easy-to-use directory of verified doctors and medical specialists.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground">
                  To become the most trusted healthcare directory platform in India, making quality 
                  healthcare accessible to everyone.
                </p>
              </div>
            </div>
            
            <div className="bg-secondary/50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Why Choose Us?</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Verified and qualified medical professionals
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Comprehensive search and filtering options
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Up-to-date contact information
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Easy-to-use interface
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;