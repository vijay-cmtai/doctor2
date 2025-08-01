import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2024</p>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please 
                do not use this service.
              </p>
            </section>
            
            <section className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Use License</h2>
              <p className="text-muted-foreground mb-4">
                Permission is granted to temporarily download one copy of the materials on Doctor 
                Directory's website for personal, non-commercial transitory viewing only. This is 
                the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or other proprietary notations</li>
              </ul>
            </section>
            
            <section className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer</h2>
              <p className="text-muted-foreground">
                The information on this website is provided on an 'as is' basis. To the fullest 
                extent permitted by law, this Company excludes all representations, warranties, 
                conditions and terms (whether express or implied by statute, common law or otherwise) 
                other than those expressly set out in the Terms and Conditions.
              </p>
            </section>
            
            <section className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Medical Disclaimer</h2>
              <p className="text-muted-foreground">
                This website provides information about healthcare professionals but does not provide 
                medical advice. The information is for informational purposes only and is not intended 
                to replace professional medical consultation, diagnosis, or treatment.
              </p>
            </section>
            
            <section className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms and Conditions, please contact us at:
                <br />
                Email: legal@doctordirectory.com
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

export default TermsConditions;