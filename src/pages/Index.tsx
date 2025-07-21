import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Briefcase, 
  Star, 
  Users, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Award,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            🏆 10+ Years of Excellence in Consulting
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Success Starts with
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Excellent Consulting
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Global Educational & Business Consultancy Services (GEC) - Your trusted partner in achieving academic excellence and business success since 2020.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/educational-services">
                <GraduationCap className="h-5 w-5 mr-2" />
                Educational Services
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/business-consultancy">
                <Briefcase className="h-5 w-5 mr-2" />
                Business Consultancy
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Students Placed", value: "500+", icon: GraduationCap },
              { label: "Visa Approval Rate", value: "95%", icon: CheckCircle },
              { label: "Businesses Supported", value: "200+", icon: Briefcase },
              { label: "Years of Trust", value: "10+", icon: Award }
            ].map((stat, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 shadow-elegant">
                <CardContent className="p-4 text-center">
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-card/30 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Two Pillars of Excellence</h2>
            <p className="text-xl text-muted-foreground">Comprehensive solutions for education and business success</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Educational Services */}
            <Card className="shadow-glow hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-primary rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Educational Consultancy</h3>
                    <p className="text-muted-foreground">Guiding students to top universities worldwide</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    "University & course counseling globally",
                    "Complete documentation support",
                    "Visa application assistance",
                    "Language preparation programs"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["UK", "USA", "Canada", "Turkey", "Germany", "Poland", "India"].map((country) => (
                    <Badge key={country} variant="secondary">{country}</Badge>
                  ))}
                </div>

                <Button variant="hero" className="w-full" asChild>
                  <Link to="/educational-services">
                    Explore Educational Services
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Business Consultancy */}
            <Card className="shadow-glow hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-primary rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Business Consultancy</h3>
                    <p className="text-muted-foreground">Transforming startups and enterprises</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    "Startup advisory & business formation",
                    "Digital transformation consulting",
                    "Financial planning & HR strategy",
                    "Investment & funding guidance"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Startups", "SMEs", "Enterprises", "NGOs"].map((type) => (
                    <Badge key={type} variant="secondary">{type}</Badge>
                  ))}
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <Link to="/business-consultancy">
                    Explore Business Services
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground">What our clients say about their experience with GEC</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmad S.",
                role: "Student in Turkey",
                content: "GEC made my dream of studying in Turkey a reality. From university selection to visa approval, their support was exceptional.",
                rating: 5
              },
              {
                name: "Mohammad R.",
                role: "Startup Founder",
                content: "GEC's business consultancy helped us establish proper legal structures and develop a winning business plan.",
                rating: 5
              },
              {
                name: "Fatima K.",
                role: "Student in Cyprus",
                content: "The team guided me through every step of the complex visa process. Their attention to detail made all the difference.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/testimonials">
                View All Testimonials
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Success Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Whether you're pursuing international education or growing your business, our expert team is here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Schedule Consultation
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/a2a30feb-af6f-46fc-a4a6-723a199933fb.png" 
                  alt="Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted partner in educational and business success with 10+ years of experience.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <div className="space-y-2 text-sm">
                <Link to="/educational-services" className="block text-muted-foreground hover:text-primary transition-colors">
                  Educational Consultancy
                </Link>
                <Link to="/business-consultancy" className="block text-muted-foreground hover:text-primary transition-colors">
                  Business Consultancy
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <div className="space-y-2 text-sm">
                <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link to="/testimonials" className="block text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </Link>
                <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📞 +447380385068</p>
                <p>📧 info@nationwidehub.co.uk</p>
                <p>🌐 www.nationwidehub.co.uk</p>
              </div>
              
              <div className="mt-6">
                <h5 className="font-semibold text-foreground mb-2">Our Location</h5>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.274899!2d-0.127758!3d51.507351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b323093d5d3%3A0x2df9d571863089e6!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1234567890!5m2!1sen!2s"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Office Location - London, UK"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Nationwide Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <WhatsAppButton />
    </div>
  );
};

export default Index;
