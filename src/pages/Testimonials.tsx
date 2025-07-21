import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, GraduationCap, Briefcase } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmad S.",
      role: "Student at Istanbul Technical University",
      content: "GEC made my dream of studying in Turkey a reality. From university selection to visa approval, their support was exceptional. I'm now pursuing my Master's degree in Istanbul, and I couldn't be more grateful.",
      rating: 5,
      category: "Educational",
      destination: "Turkey",
      service: "University Admission & Visa"
    },
    {
      name: "Fatima K.",
      role: "Student at European University of Cyprus",
      content: "The team at GEC guided me through every step of the complex visa process for Cyprus. Their attention to detail and continuous support made all the difference.",
      rating: 5,
      category: "Educational",
      destination: "Cyprus",
      service: "Visa Processing"
    },
    {
      name: "Mohammad R.",
      role: "Tech Startup Founder",
      content: "As a startup founder, GEC's business consultancy services helped us establish proper legal structures and develop a winning business plan. Their expertise saved us months of trial and error.",
      rating: 5,
      category: "Business",
      destination: "Afghanistan",
      service: "Business Formation"
    },
    {
      name: "Zahra M.",
      role: "MBA Student in Germany",
      content: "From IELTS preparation to university applications, GEC provided comprehensive support. Their language training programs are exceptional and really prepared me for success abroad.",
      rating: 5,
      category: "Educational",
      destination: "Germany",
      service: "Language Preparation & Admission"
    },
    {
      name: "Hassan A.",
      role: "Small Business Owner",
      content: "GEC's digital transformation consulting helped modernize our traditional business. We now have proper systems in place and our efficiency has increased dramatically.",
      rating: 5,
      category: "Business",
      destination: "Afghanistan",
      service: "Digital Transformation"
    },
    {
      name: "Mariam H.",
      role: "Student in Poland",
      content: "The scholarship guidance I received from GEC was invaluable. They helped me secure funding for my studies and made my European education dream affordable.",
      rating: 5,
      category: "Educational",
      destination: "Poland",
      service: "Scholarship Assistance"
    }
  ];

  const stats = [
    { label: "Students Successfully Placed", value: "500+", icon: GraduationCap },
    { label: "Visa Approval Rate", value: "95%", icon: Star },
    { label: "Businesses Supported", value: "200+", icon: Briefcase },
    { label: "Years of Excellence", value: "4+", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Client <span className="bg-gradient-primary bg-clip-text text-transparent">Testimonials</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Success stories from students and businesses who achieved their goals with GEC's expert guidance.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-gradient-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant={testimonial.category === 'Educational' ? 'default' : 'secondary'}>
                    {testimonial.category === 'Educational' ? (
                      <GraduationCap className="h-3 w-3 mr-1" />
                    ) : (
                      <Briefcase className="h-3 w-3 mr-1" />
                    )}
                    {testimonial.category}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <Quote className="h-8 w-8 text-muted-foreground mb-4 opacity-50" />
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                </div>

                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground mb-2">{testimonial.role}</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      {testimonial.destination}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.service}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-primary text-primary-foreground shadow-glow">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h2>
            <p className="mb-6 opacity-90">
              Join hundreds of satisfied clients who achieved their goals with our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                🎓 Educational Consultancy
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                💼 Business Consultancy
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Testimonials;