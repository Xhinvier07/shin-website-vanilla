import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import GradientText from "../components/GradientText";
import TextType from "../components/TextType";
import Noise from "../components/Noise";
import SplitText from "../components/SplitText";
import BlurText from "../components/BlurText";
import VariableProximity from "../components/VariableProximity";
import ScrollFloat from "../components/ScrollFloat";
import ShinyText from "../components/ShinyText";
import RotatingText from "../components/RotatingText";
import Education from "./Education";
import MyAnimeList from "./MyAnimeList";


const OthersPage = () => {
    return (
        <section className="min-h-screen bg-bg-primary relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-highlight/10 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-accent/5 to-highlight/5 rounded-full blur-2xl" />
        </div>
  
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
            <Education />
            <MyAnimeList />
        </div>

           

    
          

    </section>
    );

};

export default OthersPage;