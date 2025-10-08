import { ExternalLink, Github, Linkedin, Mail, FileText } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/xhinvier07", // Update with your LinkedIn
      icon: Linkedin,
      color: "hover:text-blue-400"
    },
    {
      name: "Github",
      href: "https://github.com/Xhinvier07",
      icon: Github,
      color: "hover:text-gray-300"
    },
    {
      name: "Mail",
      href: "mailto:jansenmoral@gmail.com", // Update with your email
      icon: Mail,
      color: "hover:text-green-400"
    },
    {
      name: "Resume",
      href: "#", 
      icon: FileText,
      color: "hover:text-purple-400"
    }
  ];

  return (
    <footer className="relative z-40 bg-gradient-to-r from-gray-900/95 via-black to-gray-900/95 backdrop-blur-md border-t border-gray-700/30">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and Name */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src="/shinlogo.png" 
                alt="Xhinvier Logo" 
                className="w-7 h-7 object-contain transition-transform duration-300 hover:scale-110 hover:rotate-12"
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 w-7 h-7 bg-accent/20 rounded-full blur-md opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <span className="text-white font-semibold text-base tracking-wide">
              Xhinvier
            </span>
          </div>

          {/* Right side - Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-1.5 text-gray-400 ${link.color} transition-all duration-300 hover:scale-110 px-2 py-1.5 rounded-md hover:bg-white/5`}
                  aria-label={link.name}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm font-medium hidden sm:block">
                    {link.name}
                  </span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              );
            })}
          </div>
        </div>
      </div>


      {/* Subtle animated background dots */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-3 left-12 w-1 h-1 bg-accent rounded-full animate-pulse" />
        <div className="absolute top-6 right-16 w-0.5 h-0.5 bg-highlight rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-8 left-1/4 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-4 right-1/3 w-0.5 h-0.5 bg-highlight rounded-full animate-pulse delay-1500" />
      </div>
    </footer>
  );
};

export default Footer;
