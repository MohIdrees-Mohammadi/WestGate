import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">WestGate</h3>
            <p className="text-sm text-muted-foreground">
              Global Educational & Business Consultancy Services - Your trusted partner in achieving academic excellence and business success since 2015.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/educational-services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Educational Services
              </Link>
              <Link to="/business-consultancy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Business Consultancy
              </Link>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">University Counseling</p>
              <p className="text-sm text-muted-foreground">Visa Processing</p>
              <p className="text-sm text-muted-foreground">Business Strategy</p>
              <p className="text-sm text-muted-foreground">Financial Education</p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">📍 London, UK</p>
              <p className="text-sm text-muted-foreground">📞 +93745686848</p>
              <p className="text-sm text-muted-foreground">📧 info@nationwidehub.co.uk</p>
              <p className="text-sm text-muted-foreground">🌐 www.nationwidehub.co.uk</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 WestGate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;