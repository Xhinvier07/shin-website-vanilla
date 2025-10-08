import React from "react";
import { GraduationCap, Award, TrendingUp, Sparkles, BookOpen } from "lucide-react";
import GradientText from "../components/GradientText";
import ShinyText from "../components/ShinyText";

const educationData = [
    {
      id: 1,
      institution: "FEU Institute of Technology",
      shortName: "FEU Tech",
      degree: "BS Computer Science",
      specialization: "Software Engineering",
      period: "2022 — 2026",
      gwa: "3.78",
      gwaLabel: "GWA",
      scholarship: "Elite Academic Scholarship 100%",
      logo: "/feutech.png",
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      bgGradient: "from-emerald-500/10 via-green-500/10 to-teal-500/10",
      borderGradient: "from-emerald-500/50 to-teal-500/50",
      glowColor: "shadow-emerald-500/20",
      details: [
        "Full tuition scholarship coverage",
        "Dean's List standing",
        "Software Architecture & Full-stack"
      ],
    },
    {
      id: 2,
      institution: "City of Mandaluyong Science High School",
      shortName: "CMSHS",
      degree: "Senior High School",
      specialization: "STEM Strand",
      period: "2020 — 2022",
      gwa: "95.2%",
      gwaLabel: "General Average",
      honors: "High Honors",
      logo: "/cmshs.png",
      gradient: "from-blue-500 via-cyan-500 to-sky-500",
      bgGradient: "from-blue-500/10 via-cyan-500/10 to-sky-500/10",
      borderGradient: "from-blue-500/50 to-sky-500/50",
      glowColor: "shadow-blue-500/20",
      details: [
        "Graduated with High Honors",
        "Showed interest in programming",
        "Started joining competitions"
      ],
    },
    {
      id: 3,
      institution: "City of Mandaluyong Science High School",
      shortName: "CMSHS",
      degree: "Junior High School",
      specialization: "Science Curriculum",
      period: "2016 — 2020",
      gwa: "87.2%",
      gwaLabel: "General Average",
      logo: "/cmshs.png",
      gradient: "from-purple-500 via-violet-500 to-fuchsia-500",
      bgGradient: "from-purple-500/10 via-violet-500/10 to-fuchsia-500/10",
      borderGradient: "from-purple-500/50 to-fuchsia-500/50",
      glowColor: "shadow-purple-500/20",
      details: [
        "Showed interest in programming",
        "Surviving the Science High School",
        "Finding my passion in technology"
      ],
    },
  ];

const Education = () => {
  return (
    <section id="education" className="min-h-screen bg-bg-primary relative overflow-hidden py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-highlight/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <ShinyText
            text="Academic Excellence Journey"
            className="text-lg text-gray-400 font-medium mb-3"
            shimmerWidth={140}
            speed={3}
          />

          <GradientText
            colors={["#FFF9AF", "#33A1E0", "#1C6EA4", "#FFF9AF"]}
            animationSpeed={4}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Education
          </GradientText>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            From Science High School to Software Engineering — a journey driven by
            curiosity, dedication, and the pursuit of excellence.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className={`relative h-full rounded-3xl bg-gradient-to-br from-gray-900/95 to-black/95 border-2 border-gray-800/50 overflow-hidden transition-all duration-500 hover:scale-105 hover:${edu.glowColor} hover:shadow-2xl`}>
                {/* Grain texture background */}
                <div
                  className="absolute inset-0 opacity-100 pointer-events-none z-0 rounded-3xl"
                  style={{
                    backgroundImage: "url(src/assets/images/grain.jpg)",
                    backgroundSize: "150px",
                    backgroundRepeat: "repeat",
                    mixBlendMode: "overlay",
                  }}
                />

                {/* Animated gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Glowing top edge */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 p-8 flex flex-col h-full">
                  {/* Logo Section */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${edu.bgGradient} border border-gray-700/50 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-20`} />
                      <img 
                        src={edu.logo} 
                        alt={edu.institution} 
                        className="relative z-10 w-20 h-20 object-contain p-2" 
                      />
                    </div>
                    
                    {/* Period badge */}
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                      <span className="text-xs font-mono text-gray-400">{edu.period}</span>
                    </div>
                  </div>

                  {/* Institution Name */}
                  <div className="mb-4">
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent mb-1 leading-tight`}>
                      {edu.shortName}
                    </h3>
                    <p className="text-sm text-gray-500 leading-tight">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Degree */}
                  <div className="mb-6">
                    <div className="flex items-start gap-2 mb-2">
                      <BookOpen className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold leading-tight">{edu.degree}</p>
                        <p className="text-sm text-gray-400 leading-tight">{edu.specialization}</p>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2 mb-6">
                    {edu.gwa && (
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                        <TrendingUp className={`w-4 h-4 bg-gradient-to-r ${edu.gradient} bg-clip-text`} />
                        <span className="text-sm font-semibold text-white">{edu.gwaLabel}: {edu.gwa}</span>
                      </div>
                    )}
                    {edu.scholarship && (
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                        <Sparkles className={`w-4 h-4 bg-gradient-to-r ${edu.gradient} bg-clip-text`}/>
                        <span className="text-sm font-semibold text-white">{edu.scholarship}</span>
                      </div>
                    )}
                    {edu.honors && !edu.scholarship && (
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                        <Award className={`w-4 h-4`}/>
                        <span className="text-sm font-semibold text-white">{edu.honors}</span>
                      </div>
                    )}
                  </div>

                  {/* Details List */}
                  <div className="mt-auto">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-4" />
                    <ul className="space-y-2">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className={`mt-1.5 w-1 h-1 rounded-full bg-gradient-to-r ${edu.gradient} flex-shrink-0`} />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tl ${edu.gradient} opacity-10 blur-2xl rounded-full group-hover:opacity-30 transition-opacity duration-500`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;