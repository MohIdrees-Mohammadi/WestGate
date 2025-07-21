import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+447380385068";
  const message = "Hello! I'm interested in your consultancy services.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 group animate-pulse hover:animate-none"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 animate-bounce" />
      <div className="absolute -top-12 right-0 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us on WhatsApp
      </div>
    </button>
  );
};

export default WhatsAppButton;