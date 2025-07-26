import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  GraduationCap,
  Briefcase
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact <span className="bg-gradient-primary bg-clip-text text-transparent">WestGate</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your journey? Get in touch with our expert consultants today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Our Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  2nd Floor, Pashtany Bank<br />
                  Muslim Plaza, Haji Yaqub Square<br />
                  Kabul, Afghanistan
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>Phone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-mono">+93 789 117 112</p>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">info@nationwidehub.co.uk</p>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday - Thursday</span>
                    <span className="font-medium">8:30 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Friday</span>
                    <span className="font-medium text-destructive">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary text-primary-foreground shadow-glow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    <GraduationCap className="h-3 w-3" />
                    <span>Educational Consultancy</span>
                  </Badge>
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    <Briefcase className="h-3 w-3" />
                    <span>Business Consultancy</span>
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Get Started Today</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="Enter your email address" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Phone Number</label>
                <Input type="tel" placeholder="Enter your phone number" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Service Interest</label>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="justify-start">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Educational
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Business
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell us about your goals and how we can help you..."
                  rows={4}
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Meet Our Expert Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Muzamel Hamidzada", role: "CEO & Founder" },
              { name: "Maryam Hormati", role: "Senior Counselor" },
              { name: "Bilal Rahmati", role: "Counselor" },
              { name: "Mursal Sahab", role: "Counselor" },
              { name: "Suliman Afzali", role: "Counselor" },
              { name: "Khalilullah Hakimi", role: "Regional Officer (Europe)" },
              { name: "Mursaleen Hotak", role: "Regional Officer (Asia)" },
              { name: "Jamil Sadiqi", role: "Finance Officer" },
              { name: "Roheed Ataie", role: "Logistic Officer" }
            ].map((member, index) => (
              <Card key={index} className="text-center shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-4">
                  <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 text-primary-foreground font-bold text-lg">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;