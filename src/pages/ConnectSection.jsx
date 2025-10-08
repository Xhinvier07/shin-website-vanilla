import { useRef, useState, useEffect } from "react";
import GradientText from "../components/GradientText";
import ShinyText from "../components/ShinyText";
import GithubContributions from "../components/GithubContributions";
import { fetchGitHubUserData } from "../api/github";
import { Send, Github, Mail, Users, Quote, ExternalLink, Calendar, Star } from "lucide-react";

const ConnectSection = () => {
  const [githubData, setGithubData] = useState(null);
  const [githubUserData, setGithubUserData] = useState(null);
  const [isLoadingUserData, setIsLoadingUserData] = useState(true);
  const [visitorCount, setVisitorCount] = useState(0);
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isQuoteFlipped, setIsQuoteFlipped] = useState(false);
  const sectionRef = useRef(null);

  // Mock visitor count (you can replace with actual analytics)
  useEffect(() => {
    const count = localStorage.getItem('visitorCount') || 0;
    const newCount = parseInt(count) + 1;
    localStorage.setItem('visitorCount', newCount);
    setVisitorCount(newCount);
  }, []);

  // Enhanced quotes collection
  const quotes = [
    { text: "Code is poetry written in logic.", author: "Anonymous" },
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
    { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
    { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" }
  ];

  // Set initial quote
  useEffect(() => {
    const today = new Date().getDate();
    setQuote(quotes[today % quotes.length]);
  }, []);

  // Fetch GitHub user data for projects count and years coding
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoadingUserData(true);
        const userData = await fetchGitHubUserData();
        setGithubUserData(userData);
      } catch (error) {
        console.error('Error fetching GitHub user data:', error);
      } finally {
        setIsLoadingUserData(false);
      }
    };

    fetchUserData();
  }, []);

  // Function to get random quote
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  // Mock visitor count (you can replace with actual analytics)
  useEffect(() => {
    const count = localStorage.getItem('visitorCount') || 0;
    const newCount = parseInt(count) + 1;
    localStorage.setItem('visitorCount', newCount);
    setVisitorCount(newCount);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission
    setTimeout(() => {
      alert("Message sent! Thank you for reaching out.");
      setContactForm({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (field, value) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section 
      ref={sectionRef}
      id="connect" 
      className="min-h-screen w-full py-20 relative bg-bg-primary overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center mb-12">
        {/* Subtitle */}
        <ShinyText
          text="Let's collaborate, share ideas, or just say hello."
          disabled={false}
          speed={3}
          className="text-xl md:text-2xl text-accent font-medium mb-6"
        />
        
        {/* Main Title */}
        <GradientText
          colors={["#FFF9AF", "#33A1E0", "#1C6EA4", "#FFF9AF"]}
          animationSpeed={3}
          className="text-4xl md:text-5xl lg:text-6xl font-anteb font-bold mb-12"
        >
          Let's Connect & Create!
        </GradientText>
      </div>

      {/* Custom Bento Grid */}
      <div className="relative mx-auto max-w-6xl bg-gray-900/30 rounded-xl backdrop-blur-sm p-6">
         <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative z-10">
           
           {/* Contact Form Card - Wider */}
           <div className="lg:col-span-2 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl p-6 border border-gray-700/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 relative overflow-hidden group">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white">Get In Touch</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6">Have a question or want to work together?</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 hover:border-gray-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 hover:border-gray-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 hover:border-gray-500 resize-none"
                    placeholder="Your message..."
                    rows="4"
                    required
                  />
                </div>
                
                 <button
                   type="submit"
                   disabled={isSubmitting}
                   className="w-full bg-gradient-to-r from-accent to-highlight text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 group relative overflow-hidden"
                   style={{ background: 'linear-gradient(135deg, #33A1E0 0%, #FFF9AF 100%)' }}
                 >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

           {/* Right Side Container */}
           <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
             
             {/* GitHub Contributions Card - Full Width on Right */}
             <div className="lg:col-span-2 bg-gradient-to-br from-[#1a1a2e] to-[#0d1117] rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20 relative overflow-hidden group">
              {/* GitHub-style background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 w-20 h-20 border border-green-400/20 rounded-full" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border border-green-400/10 rounded-full" />
              </div>
              
              <div className="relative z-10">
                <GithubContributions />
              </div>
            </div>

          {/* Let's Connect Stats */}
          <div className="bg-gradient-to-br from-accent/20 to-highlight/20 rounded-xl p-6 border border-accent/30 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300">
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-2 right-2 w-8 h-8 bg-accent/10 rounded-full animate-pulse" />
              <div className="absolute bottom-2 left-2 w-6 h-6 bg-highlight/10 rounded-full animate-pulse delay-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent group-hover:from-accent/10 transition-all duration-500" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-pulse" />
                <h3 className="text-lg font-bold text-white">Let's Connect!</h3>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg backdrop-blur-sm">
                  <span className="text-white text-sm font-medium">Projects</span>
                  <span className="text-accent font-bold text-lg">
                    {isLoadingUserData ? (
                      <div className="w-8 h-4 bg-accent/20 rounded animate-pulse" />
                    ) : (
                      `${githubUserData?.publicRepos || 10}+`
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg backdrop-blur-sm">
                  <span className="text-white text-sm font-medium">Years Coding</span>
                  <span className="text-highlight font-bold text-lg">
                    {isLoadingUserData ? (
                      <div className="w-8 h-4 bg-highlight/20 rounded animate-pulse" />
                    ) : (
                      `${githubUserData?.yearsCoding || 3}+`
                    )}
                  </span>
                </div>
              </div>
              
               <button 
                 className="w-full text-white text-sm font-semibold py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group relative overflow-hidden"
                 style={{ background: 'linear-gradient(135deg, #33A1E0 0%, #FFF9AF 100%)' }}
                 onClick={() => window.open("mailto:jansenmoral@gmail", "_self")}
               >
                 <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
                 Email Me
               </button>
            </div>
          </div>

            {/* Quote of the Day Card - Enhanced Flippable */}
            <div 
              className="bg-gradient-to-br from-white via-amber-50 to-orange-50 text-black rounded-xl border-2 border-black relative overflow-hidden cursor-pointer group perspective-1000 hover:shadow-xl hover:shadow-amber-200/50 transition-all duration-300"
                onMouseEnter={() => setIsQuoteFlipped(true)}
                onMouseLeave={() => setIsQuoteFlipped(false)}
                onClick={() => {
                  const newQuote = getRandomQuote();
                  setQuote(newQuote);
                }}
              >
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isQuoteFlipped ? 'rotate-y-180' : ''}`}>
                  
                  {/* Front Side - Enhanced */}
                  <div className="absolute inset-0 p-6 backface-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-orange-100/30 opacity-50" />
                    <div className="absolute top-4 right-4 w-12 h-12 border-2 border-amber-200/30 rounded-full animate-pulse" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-amber-100/20 to-orange-100/20 rounded-full" />
                    
                    <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
                      <div className="p-4 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Quote className="w-8 h-8 text-amber-700" />
                      </div>
                      <h3 className="text-xl font-black tracking-tight mb-2 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                        QUOTE OF THE DAY
                      </h3>
                      <p className="text-sm text-black/70 font-medium bg-black/5 rounded-full px-4 py-2">
                        Hover for inspiration ✨
                      </p>
                      
                      {/* Enhanced decorative elements */}
                      <div className="absolute top-3 right-3 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-bounce" />
                      <div className="absolute bottom-3 left-3 w-4 h-4 border-2 border-amber-300/50 rounded-full animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Back Side - Enhanced */}
                  <div className="absolute inset-0 p-6 backface-hidden rotate-y-180 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
                    {/* Background pattern for back */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-orange-100/20" />
                    
                    <div className="flex flex-col justify-center h-full text-center relative z-10">
                      {/* Quote content */}
                      <div className="mb-4">
                        <div className="p-3 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full w-fit mx-auto mb-4">
                          <Quote className="w-6 h-6 text-amber-800" />
                        </div>
                        <blockquote className="text-sm font-semibold leading-relaxed text-black/90 italic mb-4 px-2">
                          "{quote.text}"
                        </blockquote>
                        <cite className="text-xs font-bold text-amber-700 not-italic bg-amber-100/50 rounded-full px-3 py-1 inline-block">
                          — {quote.author}
                        </cite>
                      </div>
                      
                      <div className="text-xs text-black/50 font-semibold bg-black/5 rounded-full px-3 py-1 inline-block mx-auto">
                        Click for new quote 🔄
                      </div>
                      
                      {/* Enhanced decorative quote marks */}
                      <div className="absolute top-2 left-2 text-4xl text-amber-300/40 font-serif transform -rotate-12">"</div>
                      <div className="absolute bottom-2 right-2 text-4xl text-orange-300/40 font-serif transform rotate-12">"</div>
                      
                      {/* Floating elements */}
                      <div className="absolute top-1/4 right-4 w-2 h-2 bg-amber-400 rounded-full animate-ping" />
                      <div className="absolute bottom-1/4 left-4 w-2 h-2 bg-orange-400 rounded-full animate-ping delay-500" />
                    </div>
                  </div>
                </div>
                
                {/* Enhanced hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
              </div>
           </div>
        </div>

        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none z-0 rounded-xl"
          style={{
            backgroundImage: "url(src/assets/images/grain.jpg)",
            backgroundSize: "150px",
            backgroundRepeat: "repeat",
            mixBlendMode: "overlay",
          }}
        />
      </div>
    </section>
  );
};

export default ConnectSection;
