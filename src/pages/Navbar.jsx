import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import GradientText from "../components/GradientText";
import TargetCursor from "../components/TargetCursor";
import ClickSpark from "../components/ClickSpark";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Check window scroll first (primary method now)
      const windowScrolled = window.scrollY > 50;
      
      // Fallback: check internal scrollable container if it exists
      const scrollContainer = document.querySelector('.scrollbar-hide');
      const containerScrolled = scrollContainer?.scrollTop > 50;
      
      setIsScrolled(windowScrolled || containerScrolled);
    };

    // Listen to window scroll (primary)
    window.addEventListener("scroll", handleScroll);
    
    // Also listen to container scroll as fallback
    const scrollContainer = document.querySelector('.scrollbar-hide');
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);


  const navItems = [
    { name: "HOME", href: "/", isLink: true },
    { name: "PROJECTS", href: "/projects", isLink: true },
    { name: "OTHERS", href: "/others", isLink: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-bg-primary/95 backdrop-blur-md border-b border-gray-800/30 shadow-lg shadow-black/20' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Left Side */}
          <div className="flex items-center group logo-container">
            <ClickSpark
              sparkColor="#fff"
              sparkSize={10}
              sparkRadius={15}
              sparkCount={8}
              duration={400}
            >
              <div className="relative overflow-hidden rounded-full p-2 transition-all duration-300 hover:scale-110 hover:rotate-12">
                <img
                  src="/shinlogo.png"
                  alt="Shin Logo"
                  className="h-10 w-auto transition-all duration-500 filter drop-shadow-lg group-hover:drop-shadow-2xl logo-image"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </div>
            </ClickSpark>
          </div>

          {/* Navigation Items - Right Side */}
          <div className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="navbar-item relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ClickSpark
                  sparkColor="#fff"
                  sparkSize={10}
                  sparkRadius={15}
                  sparkCount={10}
                  duration={500}
                >
                  {item.isLink ? (
                    <Link
                      to={item.href}
                      className="relative block px-4 py-2 font-anteb font-medium text-lg transition-all duration-300 hover:scale-110 nav-link cursor-pointer"
                    >
                      <span className="relative z-10 text-gradient-hover">
                        {item.name}
                      </span>

                      {/* Animated Border */}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-highlight group-hover:w-full transition-all duration-500"></div>

                      {/* Floating Particles Effect */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1 left-1 w-1 h-1 bg-highlight rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                        <div className="absolute top-2 right-2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                        <div className="absolute bottom-1 left-3 w-0.5 h-0.5 bg-secondary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce"></div>
                      </div>
                    </Link>
                  ) : (
                    <button
                      onClick={item.action}
                      className="relative block px-4 py-2 font-anteb font-medium text-lg transition-all duration-300 hover:scale-110 nav-link cursor-pointer"
                    >
                      <span className="relative z-10 text-gradient-hover">
                        {item.name}
                      </span>

                      {/* Animated Border */}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-highlight group-hover:w-full transition-all duration-500"></div>

                      {/* Floating Particles Effect */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1 left-1 w-1 h-1 bg-highlight rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                        <div className="absolute top-2 right-2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                        <div className="absolute bottom-1 left-3 w-0.5 h-0.5 bg-secondary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce"></div>
                      </div>
                    </button>
                  )}
                </ClickSpark>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button (Hidden for now, but structure ready) */}
          <div className="md:hidden">
            <ClickSpark
              sparkColor="#FFF9AF"
              sparkSize={8}
              sparkRadius={12}
              sparkCount={6}
              duration={300}
            >
              <button className="text-white hover:text-accent transition-colors duration-200 p-2">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </ClickSpark>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
