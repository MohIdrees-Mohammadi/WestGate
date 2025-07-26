import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Search, 
  Monitor, 
  Calculator, 
  Users, 
  Settings,
  FolderKanban,
  GraduationCap,
  Scale,
  DollarSign
} from "lucide-react";

const BusinessConsultancy = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: Briefcase,
      title: "Startup Advisory & Business Formation",
      description: "Legal structuring, licensing, business registration, and comprehensive business planning to launch your venture successfully.",
      color: "text-primary"
    },
    {
      icon: Search,
      title: "Market Research & Feasibility Studies",
      description: "In-depth target market analysis, competitive research, customer persona development, and market entry strategies.",
      color: "text-accent"
    },
    {
      icon: Monitor,
      title: "Digital Transformation Consulting",
      description: "ERP and CRM implementation, cloud migration strategies, and digital roadmaps designed for sustainable growth.",
      color: "text-success"
    },
    {
      icon: Calculator,
      title: "Financial Consulting & Planning",
      description: "Bookkeeping system setup, taxation planning, financial projections, and budgeting strategies for optimal financial health.",
      color: "text-primary-glow"
    },
    {
      icon: Users,
      title: "HR & Talent Strategy",
      description: "Recruitment planning, performance management systems, HR policy development, and organizational design.",
      color: "text-primary"
    },
    {
      icon: Settings,
      title: "Business Process Optimization",
      description: "Standard Operating Procedure (SOP) development, workflow automation, quality assurance systems, and efficiency improvements.",
      color: "text-accent"
    },
    {
      icon: FolderKanban,
      title: "Project Management Services",
      description: "End-to-end project management for national and international projects, including tendering support and stakeholder management.",
      color: "text-success"
    },
    {
      icon: GraduationCap,
      title: "Corporate Training Programs",
      description: "Customized training in management, technology, and soft skills tailored specifically for local business environments.",
      color: "text-primary-glow"
    },
    {
      icon: Scale,
      title: "Legal & Compliance Advisory",
      description: "Company registration, intellectual property protection, regulatory compliance, and legal risk management.",
      color: "text-primary"
    },
    {
      icon: DollarSign,
      title: "Investment & Funding Strategy",
      description: "Access to grants, donor connections, venture capital networks, and investment partnership facilitation.",
      color: "text-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Business <span className="bg-gradient-primary bg-clip-text text-transparent">Consultancy</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Strategic business solutions designed to transform startups and enterprises through expert guidance and proven methodologies.
          </p>
          <Button variant="hero" size="lg" onClick={() => navigate('/contact')}>
            Transform Your Business
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-primary rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Why Choose WestGate for Business Consulting?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-success/10 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Local Expertise, Global Standards</h4>
                  <p className="text-sm text-muted-foreground">Deep understanding of local markets combined with international best practices.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-success/10 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Proven Track Record</h4>
                  <p className="text-sm text-muted-foreground">Successfully supported 200+ businesses across various industries.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-success/10 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Comprehensive Solutions</h4>
                  <p className="text-sm text-muted-foreground">End-to-end support from business formation to growth scaling.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Our Approach</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  { phase: "Assessment", desc: "Comprehensive analysis of your business needs and challenges" },
                  { phase: "Strategy", desc: "Customized roadmap aligned with your business objectives" },
                  { phase: "Implementation", desc: "Expert execution with continuous monitoring and support" },
                  { phase: "Growth", desc: "Ongoing optimization and scaling strategies" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-gradient-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.phase}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-primary text-primary-foreground shadow-glow">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="mb-6 opacity-90">
              Let our expert consultants help you navigate challenges and unlock growth opportunities.
            </p>
            <Button variant="secondary" size="lg" onClick={() => navigate('/contact')}>
              Schedule a Consultation
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BusinessConsultancy;