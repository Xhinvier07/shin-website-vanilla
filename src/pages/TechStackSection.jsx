import { useRef } from 'react';
import GradualBlur from '../components/GradualBlur';
import ElectricBorder from '../components/ElectricBorder';
import GradientText from '../components/GradientText';
import SplitText from '../components/SplitText';
import ModifiedLogoLoop from '../components/ModifiedLogoLoop';
import ShinyText from '../components/ShinyText';
import Shuffle from '../components/Shuffle';

// Tech stack data as logo objects for LogoLoop
const personalLogos = [
    { src: '/tech/python2.svg', alt: 'Python', title: 'Python' },
    { src: '/tech/Vitejs-logo.svg', alt: 'Vite', title: 'Vite' },
    { src: '/tech/google.png', alt: 'Google API', title: 'Google API' },
    { src: '/tech/pytorch.svg', alt: 'PyTorch', title: 'PyTorch' },
    { src: '/tech/opencv.svg', alt: 'OpenCV', title: 'OpenCV' },
    { src: '/tech/streamlit.svg', alt: 'Streamlit', title: 'Streamlit' },
    { src: '/tech/flask.svg', alt: 'Flask', title: 'Flask', style: { filter: 'brightness(0) invert(1)' } },
    { src: '/tech/railway.svg', alt: 'Railway', title: 'Railway', style: { filter: 'brightness(0) invert(1)' } }
];

const languageLogos = [
    { src: '/tech/python2.svg', alt: 'Python', title: 'Python' },
    { src: '/tech/c.svg', alt: 'C++', title: 'C++', style: { filter: 'brightness(0) saturate(100%) invert(13%) sepia(94%) saturate(7491%) hue-rotate(212deg) brightness(95%) contrast(101%)' } },
    { src: '/tech/javascript.svg', alt: 'JavaScript', title: 'JavaScript' },
    { src: '/tech/java.svg', alt: 'Java', title: 'Java' },
    { src: '/tech/swift.svg', alt: 'Swift', title: 'Swift' }
];

const toolsLogos = [
    { src: '/tech/canva.svg', alt: 'Canva', title: 'Canva' },
    { src: '/tech/photoshop.svg', alt: 'Photoshop', title: 'Photoshop' },
    { src: '/tech/premiere.svg', alt: 'Premiere', title: 'Premiere' },
    { src: '/tech/audition.svg', alt: 'Audition', title: 'Audition' },
    { src: '/tech/lightroom.svg', alt: 'Lightroom', title: 'Lightroom' },
    { src: '/tech/illustrator.svg', alt: 'Illustrator', title: 'Illustrator' },
    { src: '/tech/jira.svg', alt: 'Jira', title: 'Jira' }
];

const TechCard = ({ title, logos }) => {
    return (
        <div className="w-full">
            <h3 className="text-lg md:text-xl font-medium text-accent mb-4">{title}</h3>

            <div className="h-[140px] relative overflow-hidden">
                <ModifiedLogoLoop
                    logos={logos}
                    speed={35}
                    direction="left"
                    logoHeight={100}
                    gap={50}
                    pauseOnHover={true}
                    scaleOnHover={true}
                    fadeOut={true}
                    fadeOutColor="#0D141D"
                    showTitles={true}
                    ariaLabel={`${title} technologies`}
                />
            </div>
        </div>
    );
};

const TechStackSection = () => {
    const sectionRef = useRef(null);

    return (
        <section
            ref={sectionRef}
            id="tech-stack"
            className="min-h-screen w-full py-20 relative bg-bg-primary overflow-hidden"
        >
            <div className="container mx-auto px-6 text-center mb-12">
                {/* Subtitle */}
                <ShinyText
                    text="What do I use to build?"
                    disabled={false}
                    speed={3}
                    className="text-2xl md:text-2xl text-accent font-medium mb-4"
                />

                {/* Simple gradient text without container */}
                 <GradientText
                     colors={["#FFF9AF", "#33A1E0", "#1C6EA4", "#FFF9AF"]}
                     animationSpeed={8}
                     className="text-5xl md:text-6xl lg:text-7xl font-anteb font-bold mb-6"
                 >
                    MY TECH STACK
                </GradientText>

                 {/* Description */}
                 <div className="max-w-2xl mx-auto mt-4 mb-12">
                     <p className="text-text-secondary font-inter text-center">
                         Technologies I use to transform ideas into digital realities. Each tool carefully selected for optimal performance and innovation.
                     </p>
                 </div>
            </div>

            {/* Main content */}
            <div className="relative mx-auto max-w-6xl bg-gray-900/30 rounded-xl backdrop-blur-sm p-6 mb-12">
                <div className="flex flex-col space-y-16 relative z-10">
                    {/* Card 1 - Personal/Main */}
                    <TechCard title="PERSONAL FAVORITES" logos={personalLogos} />

                    {/* Card 2 - Programming Languages */}
                    <TechCard title="PROGRAMMING LANGUAGES" logos={languageLogos} />

                    {/* Card 3 - Software & Tools */}
                    <TechCard title="SOFTWARE / TOOLS" logos={toolsLogos} />
                </div>

                {/* Enhanced grain texture */}
                <div
                    className="absolute inset-0 opacity-15 pointer-events-none z-0 rounded-xl"
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

export default TechStackSection;
