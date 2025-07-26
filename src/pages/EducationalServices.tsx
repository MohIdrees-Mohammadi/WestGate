import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  FileText, 
  Plane, 
  Home, 
  Languages,
  MapPin,
  CheckCircle,
  Banknote,
  Users,
  Shield,
  BookOpen
} from "lucide-react";

const EducationalServices = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: GraduationCap,
      title: "University & Course Counseling",
      description: "Expert guidance for admissions to top universities worldwide",
      destinations: ["United Kingdom & Europe", "United States & Canada", "Turkey & Germany", "Poland & India"],
      color: "text-primary"
    },
    {
      icon: FileText,
      title: "Complete Documentation Support",
      description: "Comprehensive assistance with all required paperwork",
      features: ["Application preparation and review", "Academic transcripts and certifications", "Personal statements and essays", "Scholarship application assistance"],
      color: "text-accent"
    },
    {
      icon: Plane,
      title: "Visa & Travel Services",
      description: "End-to-end visa processing and travel arrangements",
      features: ["Visa application processing", "Embassy appointment coordination", "Medical checkup arrangements", "Flight booking and travel planning"],
      color: "text-success"
    },
    {
      icon: Languages,
      title: "Language Preparation Programs",
      description: "Comprehensive language training and test preparation",
      languages: ["English Proficiency: IELTS, TOEFL, PTE", "Chinese Language: HSK preparation", "Turkish Language: YÖS exam preparation"],
      color: "text-primary-glow"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Educational <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive study abroad solutions to turn your international education dreams into reality.
          </p>
          <Button variant="hero" size="lg" onClick={() => navigate('/contact')}>
            Start Your Journey
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-primary rounded-lg p-3">
                    <service.icon className={`h-6 w-6 text-primary-foreground`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                {service.destinations && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Destinations
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.destinations.map((dest, idx) => (
                        <Badge key={idx} variant="secondary" className="justify-start">
                          {dest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {service.features && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Features</h4>
                    <div className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.languages && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Language Programs</h4>
                    <div className="space-y-1">
                      {service.languages.map((lang, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{lang}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Financial Education Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Financial <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empowering individuals with essential financial literacy skills for lifelong success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-primary rounded-lg p-3">
                    <BookOpen className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Financial Education in Schools</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Dedicated "Money Lessons" programme for school children aged 7 to 14, designed for Key Stage 2 and 3 students.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Programme Features</h4>
                  <div className="space-y-1">
                    {[
                      "Ready-to-use lesson plans and activity sheets",
                      "Age-appropriate and engaging materials",
                      "Special educational needs adaptations",
                      "Topics: saving, budgeting, understanding money value",
                      "Logical sequence for progressive learning"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-primary rounded-lg p-3">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Student Banking & University Life</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive guidance for young adults preparing for university and independent money management.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Student Support</h4>
                  <div className="space-y-1">
                    {[
                      "Pre-university bank account setup",
                      "Budget planning and financial preparation",
                      "Student finance application guidance",
                      "Contents insurance advice",
                      "Student discount platforms (TOTUM, UNiDAYS)",
                      "Smart accommodation choices"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-primary rounded-lg p-3">
                    <Banknote className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Banking for Teenagers</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  FlexOne current account for young people aged 11 to 17, designed to teach responsible money management.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Account Benefits</h4>
                  <div className="space-y-1">
                    {[
                      "No monthly fees",
                      "Interest on balances up to limit",
                      "Online, mobile app, phone, and branch access",
                      "Age-appropriate cash or debit card",
                      "Automatic transition to adult account at 23",
                      "Early introduction to banking fundamentals"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-primary rounded-lg p-3">
                    <Shield className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Scam Awareness & Financial Safety</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive education on recognizing and avoiding financial fraud and scams in today's digital world.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Safety Education</h4>
                  <div className="space-y-1">
                    {[
                      "Common scam recognition techniques",
                      "Never share passwords or security codes",
                      "Verify unusual payment requests",
                      "Suspicious link and email identification",
                      "Fraud reporting procedures",
                      "Digital world safety practices"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process Section */}
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Our Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", desc: "Initial assessment of your goals and preferences" },
                { step: "02", title: "Planning", desc: "Customized roadmap for your education journey" },
                { step: "03", title: "Application", desc: "Complete application and documentation support" },
                { step: "04", title: "Success", desc: "Visa approval and travel arrangements" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default EducationalServices;