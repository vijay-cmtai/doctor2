import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2024</p>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Search for doctors using our platform</li>
                <li>Contact us through our forms</li>
                <li>Subscribe to our newsletter</li>
                <li>Use our website features</li>
              </ul>
            </section>
            
            <section className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries</li>
                <li>Send you relevant updates and information</li>
                <li>Analyze usage patterns to enhance user experience</li>
              </ul>
            </section>
            
            <section className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share information in 
                the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
              </ul>
            </section>
            
            <section className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@doctordirectory.com
                <br />
                Phone: +91 98765 43210
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;