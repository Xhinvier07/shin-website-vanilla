import { useState, useEffect } from "react";
import { ExternalLink, Github, Filter, X } from "lucide-react";
import { createPortal } from "react-dom";
import GradientText from "../components/GradientText";
import ShinyText from "../components/ShinyText";
import RotatingText from "../components/RotatingText";
import CurvedLoop from "../components/CurvedLoop";
import {Mail} from "lucide-react";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [tooltip, setTooltip] = useState({ show: false, content: "", x: 0, y: 0 });

  const handleTooltipShow = (e, content) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      show: true,
      content,
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    });
  };

  const handleTooltipHide = () => {
    setTooltip(prev => ({ ...prev, show: false }));
  };

  // Category color mapping for glows
  const categoryColors = {
    "System": {
      glow: "shadow-purple-400/30",
      border: "border-purple-400/50",
      bg: "bg-purple-600",
      accent: "text-purple-400"
    },
    "Web App": {
      glow: "shadow-blue-400/30",
      border: "border-blue-400/50", 
      bg: "bg-blue-600",
      accent: "text-blue-400"
    },
    "Website": {
      glow: "shadow-green-400/30",
      border: "border-green-400/50",
      bg: "bg-green-600",
      accent: "text-green-400"
    },
    "Mobile App": {
      glow: "shadow-red-400/30",
      border: "border-red-400/50",
      bg: "bg-red-600",
      accent: "text-red-400"
    },
    "Extension": {
      glow: "shadow-yellow-400/30",
      border: "border-yellow-400/50",
      bg: "bg-yellow-600",
      accent: "text-yellow-400"
    }
  };

  // Projects data based on projects.md
  const projects = [
    {
      id: 1,
      title: "TrashScan",
      subtitle: "Real-Time Street Litter Monitoring System",
      category: "System",
      sdgs: [
        { number: 11, name: "Sustainable Cities" },
        { number: 12, name: "Responsible Consumption" },
        { number: 15, name: "Life on Land" }
      ],
      techStack: ["Python", "YOLOv8", "Flask", "D3.js", "Google API"],
      description: "An AI-powered litter monitoring and analytics system that uses video surveillance to detect, log, and visualize street litter to support smarter waste management decisions.",
      image: "/projects/trashscan.png",
      demoLink: "https://trashscan.vercel.app/",
      githubLink: "https://github.com/xhinvier07/"
    },
    {
      id: 2,
      title: "BIPBIP",
      subtitle: "Branch Intelligence Platform for Branch Operations",
      category: "Web App",
      sdgs: [
        { number: 8, name: "Decent Work & Economic Growth" },
        { number: 9, name: "Industry, Innovation & Infrastructure" }
      ],
      techStack: ["Python", "React", "BERT", "TensorFlow", "Supabase"],
      description: "A branch intelligence analytics platform that creates a digital twin of physical branches by fusing operational signals, customer feedback, and predictive insights to improve service delivery.",
      image: "/projects/bipbip.png",
      demoLink: "https://bipbip-bpi.vercel.app/",
      githubLink: "https://github.com/xhinvier07/"
    },
    {
      id: 3,
      title: "Enigma 29",
      subtitle: "Capture the Flag Platform",
      category: "Web App",
      sdgs: [
        { number: 4, name: "Quality Education" },
        { number: 9, name: "Industry, Innovation & Infrastructure" }
      ],
      techStack: ["React Vite", "Tailwind CSS", "Supabase"],
      description: "A capture-the-flag (CTF) style web platform for cybersecurity education that delivers interactive challenges, user authentication, and event-driven game management for learners.",
      image: "/projects/Enigma29.PNG",
      demoLink: "https://enigma29.vercel.app/",
      githubLink: "https://github.com/xhinvier07/"
    },
    {
      id: 4,
      title: "OFES Form Autofill",
      subtitle: "Survey Form Automation Extension",
      category: "Extension",
      sdgs: [
        {/*None */}
      ],
      techStack: ["JavaScript", "DOM", "Chrome Extension"],
      description: "A browser extension that automates repetitive form tasks to streamline online faculty evaluation survey completion and improve efficiency for users.",
      image: "/projects/ofes.PNG",
      demoLink: "https://chromewebstore.google.com/detail/ofes-form-autofill/bdofpldekddfihbjjocobphafcfibijg",
      githubLink: "#"
    },
    {
      id: 5,
      title: "FEUTECH GWA Calculator",
      subtitle: "Automated GWA Calculator for FEUTech Portal",
      category: "Extension",
      sdgs: [
        {/*None */}
      ],
      techStack: ["JavaScript", "DOM", "Chrome Extension"],
      description: "A student-focused tool designed to simplify academic grade calculations through an accessible interface integrated with student workflows.",
      image: "/projects/feutechgwa.PNG",
      demoLink: "https://chromewebstore.google.com/detail/feu-tech-gwa-calculator/hbkeghiakiepmnjlilmgabffcamlceoa",
      githubLink: "#"
    },
    {
      id: 6,
      title: "Create & Conquer",
      subtitle: "Hackathon Website for CPEO Organization",
      category: "Website",
      sdgs: [
        {/*None */}
      ],
      techStack: ["React", "Vite", "Tailwind CSS","Framer","GSAP"],
      description: "An event platform website crafted to support hackathon management, participant information, and event logistics with a clean, navigable interface.",
      image: "/projects/cnc.PNG",
      demoLink: " https://createconquerhackathon.vercel.app/",
      githubLink: "#"
    },
    {
      id: 7,
      title: "FEUTECH GWA Calculator",
      subtitle: "Automated GWA Calculator for FEUTech Portal",
      category: "Extension",
      sdgs: [
        {/*None */}
      ],
    }
  ];

  const categories = ["All", "System", "Web App", "Website", "Extension"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="min-h-screen bg-bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-highlight/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-accent/5 to-highlight/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <div className="text-5xl md:text-6xl font-bold tracking-wider mb-4 flex items-center justify-center gap-2">
              <span className="text-white">My</span>
              <div 
                className="px-2 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-2 rounded-lg"
                style={{ backgroundColor: '#33A1E0' }}
              >
                  <RotatingText
                    texts={['Projects ✦', 'Portfolio ✦', 'Innovation ✦']}
                    mainClassName="text-white overflow-hidden justify-center tracking-tight"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    elementLevelClassName="tracking-tight"
                    transition={{ type: "spring", damping: 50, stiffness: 500 }}
                    rotationInterval={2000}
                  />
              </div>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <ShinyText
                text="Innovative solutions addressing global challenges through cutting-edge technology"
                className="text-xl text-gray-300 font-medium"
                shimmerWidth={100}
                speed={3}
              />
            </div>
          </div>
        </div>

        {/* Category Filter - Small and Right Aligned */}
        <div className="flex justify-end mb-12">
          <div className="flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-lg p-1 border border-gray-700/50">
            <Filter className="w-4 h-4 text-accent ml-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-accent to-highlight text-white shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const categoryStyle = categoryColors[project.category];
            return (
              <div
                key={project.id}
                className="group relative h-full"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Custom Creative Border with Grain Texture */}
                <div className={`relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:${categoryStyle?.glow} hover:scale-[1.02] h-full flex flex-col`}>
                  
                  {/* Grain texture background */}
                  <div
                    className="absolute inset-0 opacity-15 pointer-events-none z-0 rounded-2xl"
                    style={{
                      backgroundImage: "url(src/assets/images/grain.jpg)",
                      backgroundSize: "150px",
                      backgroundRepeat: "repeat",
                      mixBlendMode: "overlay",
                    }}
                  />

                  {/* Animated border effect */}
                  <div className={`absolute inset-0 rounded-2xl border-2 ${categoryStyle?.border} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${categoryStyle?.glow} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Project Image - Optimized for 1920x1080 */}
                    <div className="relative h-72 overflow-hidden rounded-t-2xl flex-shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        style={{ aspectRatio: '16/9' }}
                      />
                      
                      {/* Overlay gradient for better text visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                      
                      {/* Category Badge with solid background */}
                      <div className="absolute top-4 right-4">
                        <span className={`${categoryStyle?.bg} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-white/20`}>
                          {project.category}
                        </span>
                      </div>

                      {/* SDG Icons */}
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        {project.sdgs.map((sdg) => (
                          <div
                            key={sdg.number}
                            className="relative group/sdg"
                          >
                            <img
                              src={`/sdg/sdg${sdg.number}.png`}
                              alt={`SDG ${sdg.number}`}
                              className="w-10 h-10 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 border-2 border-white/30 cursor-pointer"
                              onMouseEnter={(e) => handleTooltipShow(e, `SDG ${sdg.number}: ${sdg.name}`)}
                              onMouseLeave={handleTooltipHide}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Content - Fixed height container */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Title - Fixed height for consistency */}
                      <div className="mb-4 h-16 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {project.title}
                        </h3>
                        {project.subtitle ? (
                          <p className={`text-sm font-medium ${categoryStyle?.accent}`}>
                            {project.subtitle}
                          </p>
                        ) : (
                          <div className="h-5"></div> // Spacer to maintain consistent height
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm mb-6 line-clamp-3 flex-1">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, index) => (
                            <span
                              key={index}
                              className={`px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-gray-600/50 hover:${categoryStyle?.border} transition-colors duration-300`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons - Enhanced visibility */}
                      <div className="flex gap-4 mt-auto">
                        <button
                          onClick={() => window.open(project.demoLink, "_blank")}
                          className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group/btn border-2 border-green-400/50"
                        >
                          <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                          Live Demo
                        </button>
                        
                        <button
                          onClick={() => window.open(project.githubLink, "_blank")}
                          className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group/btn border-2 border-gray-500/50"
                        >
                          <Github className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                          Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 text-xl mb-4">No projects found in this category</div>
            <button
              onClick={() => setSelectedCategory("All")}
              className="text-accent hover:text-highlight transition-colors duration-300"
            >
              View All Projects
            </button>
          </div>
        )}

        

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-accent/20 to-highlight/20 rounded-2xl p-8 border border-accent/30 relative overflow-hidden">
            {/* Grain texture background */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none z-0 rounded-2xl"
              style={{
                backgroundImage: "url(src/assets/images/grain.jpg)", 
                backgroundSize: "150px",
                backgroundRepeat: "repeat",
                mixBlendMode: "overlay",
              }}
            />
            <div className="relative z-10 bg-gradient-to-br from-gray-900/90 to-black/90 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Interested in collaborating?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's work together to create innovative solutions that make a difference.
              </p>
              <button
                onClick={() => window.open("mailto:jansenmoral@gmail.com", "_self")}
                className="w-full text-white text-sm font-semibold py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #33A1E0 0%, #FFF9AF 100%)' }}          
              >                 
              <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
                Get In Touch
              </button>
              
            </div>
          </div>
        </div>
      </div>

      
      

      {/* Portal Tooltip */}
      {tooltip.show && createPortal(
        <div
          className="fixed z-[9999] px-3 py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap pointer-events-none"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: 'translateX(-50%)'
          }}
        >
          {tooltip.content}
        </div>,
        document.body
      )}
    </section>
  );
};

export default ProjectsPage;
