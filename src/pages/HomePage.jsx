import { useEffect, useRef } from "react";
import GradientText from "../components/GradientText";
import ShinyText from "../components/ShinyText";
import SplitText from "../components/SplitText";
import LightRays from "../components/LightRays";
import ProfileSection from "./ProfileSection";
import TechStackSection from "./TechStackSection";
import ConnectSection from "./ConnectSection";
import ClickSpark from "../components/ClickSpark";
import SplashCursor from "../components/SplashCursor";

const HomePage = () => {
  return (
    <section style={{position: 'relative', minHeight: '100vh', overflow: 'hidden'}}>
      <div style={{ minHeight: '100vh', overflowY: 'auto', padding: '0', scrollbarWidth: 'none', msOverflowStyle: 'none', position: 'relative' }} className="scrollbar-hide">
        <ClickSpark
          sparkColor="#FFF9AF"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <div className="relative bg-bg-primary">
            {/* Background light rays effect */} {/*#154D71*/}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <LightRays
                raysOrigin="top-center"
                raysColor="#FFFFFF" 
                raysSpeed={2.0}
                lightSpread={1.0}
                rayLength={2.5}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0.1}
                distortion={0.02}
                className="custom-rays"
              />
            </div>

            {/* Main content */}
            <div className="relative z-10">
              <ProfileSection />
              <TechStackSection />
              <ConnectSection />
            </div>
          </div>
        </ClickSpark>
      </div>
    </section>
  );
};

export default HomePage;
