import Navigation from "@/components/Navigation";
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
  CheckCircle 
} from "lucide-react";

const EducationalServices = () => {
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
          <Button variant="hero" size="lg">
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
    </div>
  );
};

export default EducationalServices;