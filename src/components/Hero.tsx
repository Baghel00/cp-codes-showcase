import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import developerAvatar from "@/assets/developer-avatar.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient with animated particles */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="block text-foreground">Chandraprakash</span>
                <span className="block bg-hero-gradient bg-clip-text text-transparent">
                  Baghel
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                Frontend Developer
              </p>
              <p className="text-lg text-muted-foreground max-w-lg">
                Crafting beautiful, responsive, and user-friendly web experiences 
                with modern technologies and clean code.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                View My Work
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Button>
              <Button variant="glass" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-hero-gradient rounded-full blur-2xl opacity-30 scale-110"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <img
                  src={developerAvatar}
                  alt="Chandraprakash Baghel"
                  className="w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-glow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-hero-gradient opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;