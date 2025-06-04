
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold gradient-text">Manan Shah</h1>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="font-medium hover:text-primary transition-colors duration-200"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="font-medium hover:text-primary transition-colors duration-200"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className="font-medium hover:text-primary transition-colors duration-200"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="font-medium hover:text-primary transition-colors duration-200"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className="font-medium hover:text-primary transition-colors duration-200"
          >
            Resume
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="font-medium hover:text-primary transition-colors duration-200"
          >
            Contact
          </button>
          
          <Button size="sm" className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('hero')} className="text-left font-medium hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-left font-medium hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-left font-medium hover:text-primary transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-left font-medium hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="text-left font-medium hover:text-primary transition-colors">Resume</button>
            <button onClick={() => scrollToSection('contact')} className="text-left font-medium hover:text-primary transition-colors">Contact</button>
            <Button size="sm" className="w-fit bg-gradient-to-r from-blue-600 to-purple-600">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
