import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">GEC</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in achieving academic excellence and business success since 2020.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in January 2020 in Kabul, Afghanistan, GEC began as Global Educational Consultancy Services Company (GECSC) with a singular mission: to bridge the gap between Afghan students and international educational opportunities.
              </p>
              <p className="text-muted-foreground">
                What started as an educational consultancy has evolved into a comprehensive consulting firm serving both academic aspirations and business ambitions.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                We believe that success starts with excellent consulting. Our experienced team combines deep local knowledge with global expertise to deliver personalized solutions that drive results.
              </p>
              <Badge variant="secondary" className="mb-2">
                "Success Starts with Excellent Consulting"
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We maintain the highest standards in everything we do"
              },
              {
                icon: Users,
                title: "Integrity",
                description: "Transparent, honest relationships with every client"
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Embracing modern solutions for traditional challenges"
              },
              {
                icon: Target,
                title: "Impact",
                description: "Measuring success by our clients' achievements"
              }
            ].map((value, index) => (
              <Card key={index} className="text-center shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <Card className="bg-gradient-primary text-primary-foreground shadow-glow">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Students Placed</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">Visa Approval Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-sm opacity-90">Businesses Supported</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;