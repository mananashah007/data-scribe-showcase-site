
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Name</h1>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
          <button onClick={() => scrollToSection('experience')} className="hover:text-primary transition-colors">Experience</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
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
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('hero')} className="text-left hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-left hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-left hover:text-primary transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-left hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="text-left hover:text-primary transition-colors">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="text-left hover:text-primary transition-colors">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
