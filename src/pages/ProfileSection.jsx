import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import GradientText from "../components/GradientText";
import TextType from "../components/TextType";
import Noise from "../components/Noise";
import SplitText from "../components/SplitText";
import BlurText from "../components/BlurText";
import VariableProximity from "../components/VariableProximity";

const ProfileSection = () => {
    const containerRef = useRef(null);
    const profileCardRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useGSAP(
        () => {
            gsap.to(profileCardRef.current, {
                y: 5,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });
        },
        { scope: containerRef }
    );

    const handleMouseMove = (e) => {
        if (!profileCardRef.current) return;

        const card = profileCardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const moveX = (x - centerX) / 25;
        const moveY = (y - centerY) / 25;

        gsap.to(card, {
            rotationY: moveX,
            rotationX: -moveY,
            duration: 0.5,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        if (!profileCardRef.current) return;

        gsap.to(profileCardRef.current, {
            rotationY: 0,
            rotationX: 0,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
        });
    };

    const handleAnimationComplete = () => {
        console.log("All letters have animated!");
    };

    return (
        <section
            className="min-h-screen w-full pt-16 relative bg-bg-primary"
            ref={containerRef}
        >
            {/* Noise overlay */}
            <div
                className="absolute inset-0 opacity-1 pointer-events-none z-0"
                style={{
                    backgroundImage: "url(src/assets/images/grain.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    mixBlendMode: "overlay",
                }}
            />

            <div className="max-w-5xl mx-auto px-6 pt-16 z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
                    {/* Profile Image Column - LEFT SIDE */}
                    <div
                        className="flex justify-center lg:justify-center order-1"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            ref={profileCardRef}
                            className="perspective-1000 transform-gpu"
                            style={{ transformStyle: "preserve-3d", willChange: "transform" }}
                        >
                            {/* Modern double-line border design */}
                            <div className="relative group">
                                {/* Outer animated border */}
                                <div
                                    className="absolute -inset-2 opacity-80 animate-tilt"
                                    style={{
                                        borderRadius: "16px",
                                        background:
                                            "linear-gradient(to right, #154D71, #33A1E0, #1C6EA4)",
                                    }}
                                >
                                    <div
                                        className="absolute inset-1 bg-black"
                                        style={{ borderRadius: "14px" }}
                                    ></div>
                                </div>

                                {/* Inner border with glow effect */}
                                <div
                                    className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black p-2"
                                    style={{ borderRadius: "14px" }}
                                >
                                    {/* Animated inner glow */}
                                    <div
                                        className="absolute inset-0 rounded-[12px] animate-pulse"
                                        style={{
                                            background:
                                                "linear-gradient(to right, rgba(51, 161, 224, 0.2), rgba(21, 77, 113, 0.2), rgba(28, 110, 164, 0.2))",
                                        }}
                                    ></div>

                                    {/* Image container */}
                                    <div
                                        className="relative h-[400px] w-[300px] overflow-hidden"
                                        style={{ borderRadius: "12px" }}
                                    >
                                        <img
                                            src="/1.JPG"
                                            alt="Jansen Moral"
                                            className="object-cover w-full h-full"
                                            style={{ objectPosition: "center" }}
                                        />

                                        {/* Subtle overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                                        {/* Corner accent lines */}
                                        <div
                                            className="absolute top-2 left-2 w-8 h-0.5"
                                            style={{
                                                background:
                                                    "linear-gradient(to right, #33A1E0, transparent)",
                                            }}
                                        ></div>
                                        <div
                                            className="absolute top-2 left-2 w-0.5 h-8"
                                            style={{
                                                background:
                                                    "linear-gradient(to bottom, #33A1E0, transparent)",
                                            }}
                                        ></div>
                                        <div
                                            className="absolute bottom-2 right-2 w-8 h-0.5"
                                            style={{
                                                background:
                                                    "linear-gradient(to left, #1C6EA4, transparent)",
                                            }}
                                        ></div>
                                        <div
                                            className="absolute bottom-2 right-2 w-0.5 h-8"
                                            style={{
                                                background:
                                                    "linear-gradient(to top, #1C6EA4, transparent)",
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Floating particles effect */}
                                <div
                                    className="absolute -top-5 -left-1 w-2 h-2 rounded-full animate-ping opacity-60"
                                    style={{ backgroundColor: "#33A1E0" }}
                                ></div>
                                <div
                                    className="absolute -bottom-5 -right-1 w-1.5 h-1.5 rounded-full animate-ping opacity-60"
                                    style={{ backgroundColor: "#1C6EA4", animationDelay: "0.5s" }}
                                ></div>
                                <div
                                    className="absolute top-3/4 -right-2 w-1 h-1 rounded-full animate-ping opacity-40"
                                    style={{ backgroundColor: "#154D71", animationDelay: "1s" }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    {/* Content Column - RIGHT SIDE */}
                    <div className="flex flex-col items-start space-y-4 order-2 lg:pl-0">
                        <div className="mb-2">
                            <SplitText
                                text="Hello, I'm"
                                className="text-xl font-anteb text-accent"
                                delay={100}
                                duration={0.6}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="center"
                                onLetterAnimationComplete={handleAnimationComplete}
                            />
                        </div>

                        <div
                            className="cursor-pointer mb-2"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            {isHovering ? (
                                <TextType
                                    text="Xhinvier"
                                    typingSpeed={60}
                                    className="text-4xl md:text-5xl lg:text-6xl font-anteb font-bold"
                                    cursorCharacter="_"
                                    cursorClassName="text-accent animate-pulse"
                                />
                            ) : (
                                <GradientText
                                    colors={["#33A1E0", "#FFF9AF", "#1C6EA4","#33A1E0"]}
                                    animationSpeed={8}
                                    showBorder={false}
                                    className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold custom-class"
                                >
                                    Jansen Moral
                                </GradientText>
                            )}
                        </div>

                        <div className="mb-4">
                            <BlurText
                                text="Software Engineer"
                                delay={150}
                                animateBy="words"
                                direction="top"
                                onAnimationComplete={handleAnimationComplete}
                                className="text-xl md:text-2xl lg:text-3xl font-anteb font-medium text-accent"
                            />
                        </div>

                        <SplitText
                            text="I craft impactful tech solutions, guide teams with adaptive collaboration, and stay ahead of emerging technologies—always driven to tackle challenges that redefine what's possible."
                            className="text-base lg:text-lg text-text-secondary mb-8 max-w-lg leading-relaxed text-justify"
                            style={{ fontFamily: "Inter, sans-serif" }}
                            delay={50}
                            duration={3}
                            ease="elastic.out(1, 0.5)"
                            splitType="words"
                            from={{ opacity: 0, y: 30 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.3}
                            rootMargin="-50px"
                            textAlign="justify"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />

                        {/* Enhanced Buttons Layout */}
                        <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                            {/* Top row */}
                            <button
                                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white font-medium py-3 px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 border-0"
                                style={{ borderRadius: "6px" }}
                                onClick={() => window.open("https://www.linkedin.com/in/xhinvier/", "_blank")}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <div className="flex items-center justify-center gap-2 relative z-10">
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    LinkedIn
                                </div>
                            </button>

                            <button
                                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-medium py-3 px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 border-0"
                                style={{ borderRadius: "6px" }}
                                onClick={() => window.open("/resume.pdf", "_blank")}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <div className="flex items-center justify-center gap-2 relative z-10">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    Resume
                                </div>
                            </button>

                            {/* Bottom row */}
                            <button
                                className="group relative overflow-hidden bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white font-medium py-3 px-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/25 border-0"
                                style={{ borderRadius: "6px" }}
                                onClick={() => window.open("https://github.com/Xhinvier07", "_blank")}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <div className="flex items-center justify-center gap-1 relative z-10">
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        />
                                    </svg>
                                    <span>GitHub</span>
                                </div>
                            </button>

                            <button
                                className="group relative overflow-hidden bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white font-medium py-3 px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 border-0"
                                style={{ borderRadius: "6px" }}
                                onClick={() => window.open("mailto:jansenmoral@gmail.com", "_self")}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <div className="flex items-center justify-center gap-2 relative z-10">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    Contact Me
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
