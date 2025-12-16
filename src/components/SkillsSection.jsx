import { cn } from "../lib/utils";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const skills = [
  {name: "Python", level: 100, category: "languages"},
  {name: "Java", level: 100, category: "languages"},
  {name: "C", level: 90, category: "languages"},
  {name: "C++", level: 90, category: "languages"},
  {name: "Bash", level: 85, category: "languages"},
  {name: "Shell Script", level: 85, category: "languages"},
  {name: "JSON", level: 90, category: "languages"},
  {name: "Perl", level: 75, category: "languages"},
  {name: "VPP", level: 75, category: "languages"},
  {name: "Ruby", level: 75, category: "languages"},
  {name: "Groovy", level: 85, category: "languages"},
  {name: "Matlab", level: 80, category: "languages"},
  {name: "R", level: 75, category: "languages"},

  {name: "HTML/CSS", level: 95, category: "frontend"},
  {name: "JavaScript", level: 90, category: "frontend"},
  {name: "React", level: 90, category: "frontend"},
  {name: "TypeScript", level: 85, category: "frontend"},
  {name: "Tailwind CSS", level: 90, category: "frontend"},
  {name: "Next.js", level: 80, category: "frontend"},

  {name: "Node.js", level: 95, category: "backend"},
  {name: "MongoDB", level: 95, category: "backend"},
  {name: "PostgreSQL", level: 95, category: "backend"},
  {name: "GraphQL", level: 95, category: "backend"},
  {name: "Microsfot SQL", level: 95, category: "tools"},

  {name: "Verilog", level: 100, category: "hardware"},
  {name: "VHDL", level: 100, category: "hardware"},
  {name: "RTL", level: 100, category: "hardware"},
  {name: "LINT", level: 90, category: "hardware"},
  {name: "CDC", level: 90, category: "hardware"},
  {name: "Synopsis Verdi", level: 85, category: "hardware"},
  {name: "Quartus II", level: 90, category: "hardware"},

  {name: "Git/Github", level: 100, category: "tools"},
  {name: "Perforce", level: 100, category: "tools"},
  {name: "Docker", level: 95, category: "tools"},
  {name: "Jenkins", level: 90, category: "tools"},
  {name: "Figma", level: 95, category: "tools"},
  {name: "VS Code", level: 100, category: "tools"},
  {name: "Cursor", level: 100, category: "tools"},
  {name: "VIM/GVIM", level: 100, category: "tools"},
  {name: "Jira", level: 100, category: "tools"},
  {name: "Confluence", level: 100, category: "tools"},
  {name: "SpringBoot", level: 90, category: "tools"},
  {name: "Postman", level: 90, category: "tools"},
  {name: "REH OpenShift", level: 90, category: "tools"},
  {name: "JFrog Artifactory", level: 90, category: "tools"},
  {name: "SonarQube", level: 90, category: "tools"},

  {name: "ROS", level: 95, category: "robotics"},
  {name: "Rviz", level: 90, category: "robotics"},
  {name: "RTabmap", level: 90, category: "robotics"},
  {name: "SLAM", level: 85, category: "robotics"},
  {name: "Gazebo", level: 85, category: "robotics"},
];

const categories = ["languages", "frontend", "backend", "hardware", "tools", "robotics", "all"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxVisible, setMaxVisible] = useState(2);
  const [carouselSpacing, setCarouselSpacing] = useState({
    catToCarousel: 6,
    carouselToArrows: 2
  });

  const autoRotateRef = useRef(null);
  const resumeTimerRef = useRef(null);

  const skillsToDisplay = activeCategory
    ? activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory)
    : skills;

  const numSkills = skillsToDisplay.length;
  const cardWidth = 192;
  const cardGap = 24;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setMaxVisible(1);
        setCarouselSpacing({ catToCarousel: 4, carouselToArrows: 1 });
      } else if (window.innerWidth < 1024) {
        setMaxVisible(2);
        setCarouselSpacing({ catToCarousel: 5, carouselToArrows: 1 });
      } else {
        setMaxVisible(2);
        setCarouselSpacing({ catToCarousel: 6, carouselToArrows: 2 });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startAutoRotate = () => {
    stopAutoRotate();
    autoRotateRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % numSkills);
    }, 2500);
  };

  const stopAutoRotate = () => {
    if (autoRotateRef.current) clearInterval(autoRotateRef.current);
  };

  useEffect(() => {
    if (!activeCategory) startAutoRotate();
    return () => stopAutoRotate();
  }, [activeCategory, numSkills]);

  const goNext = () => {
    stopAutoRotate();
    setCurrentIndex((prev) => (prev + 1) % numSkills);
    clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => startAutoRotate(), 5000);
  };

  const goPrev = () => {
    stopAutoRotate();
    setCurrentIndex((prev) => (prev - 1 + numSkills) % numSkills);
    clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => startAutoRotate(), 5000);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    stopAutoRotate();

    clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setActiveCategory(null);
      setCurrentIndex(0);
      startAutoRotate();
    }, 8000);
  };

  const handleCloseExpanded = () => {
    setActiveCategory(null);
    setCurrentIndex(0);
    startAutoRotate();
  };

  const getCardStyle = (index) => {
    let offset = index - currentIndex;
    if (offset < -Math.floor(numSkills / 2)) offset += numSkills;
    if (offset > Math.floor(numSkills / 2)) offset -= numSkills;

    if (offset < -maxVisible || offset > maxVisible)
      return { opacity: 0, pointerEvents: "none", transform: "translateX(0) scale(0.8)" };

    const scale = offset === 0 ? 1 : 0.8;
    const rotateY = offset * 15;
    const zIndex = 10 - Math.abs(offset);
    const opacity = offset === 0 ? 1 : 0.5;

    return {
      position: "absolute",
      transform: `translateX(${offset * (cardWidth + cardGap)}px) scale(${scale}) rotateY(${rotateY}deg)`,
      zIndex,
      opacity,
      transition: "all 0.4s ease",
    };
  };

  return (
    <section id="skills" className="py-16 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My{" "}
          <span className="text-primary relative overflow-hidden inline-block streak-text">
            Skills
          </span>
        </h2>

        <div className={`flex justify-center items-center gap-4 mb-${carouselSpacing.catToCarousel} relative`}>
            <div className="flex flex-wrap justify-center gap-4">
                {categories.map((cat, key) => (
                <button
                    key={key}
                    onClick={() => handleCategoryClick(cat)}
                    className={cn(
                    "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                    activeCategory === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary/70 text-foreground hover:text-primary hover:bg-secondary/80"
                    )}
                >
                    {cat}
                </button>
                ))}
            </div>
            {activeCategory && (
                <button
                onClick={handleCloseExpanded}
                className="ml-4 p-2 rounded-full shadow bg-secondary/70 hover:bg-secondary/90 transition-all duration-300 transform hover:scale-130" >
                <X size={20} className="text-primary" />
                </button>
            )}
        </div>
        {!activeCategory ? (
          <div className="flex flex-col items-center gap-1">
            <div
              className={"relative w-full h-[24rem] flex justify-center items-center perspective-1000 mb-${carouselSpacing.carouselToArrows}"}
            >
              <div className="relative w-full h-full flex justify-center items-center gap-4">
                {skillsToDisplay.map((skill, index) => (
                  <div
                    key={index}
                    className="w-48 h-48 bg-card p-6 rounded-lg shadow-md flex flex-col justify-center items-center
                      transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={getCardStyle(index)}
                  >
                    <h3 className="font-semibold text-lg mb-2 text-center">
                      {skill.name}
                    </h3>
                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: skill.level + "%" }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground mt-1">
                      {skill.level}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={goPrev}
                className="p-2 rounded-full bg-secondary/70 shadow transition-all duration-300 hover:bg-secondary/80 hover:scale-130"
              >
                <ChevronLeft size={24} className="text-primary" />
              </button>
              <button
                onClick={goNext}
                className="p-2 rounded-full bg-secondary/70 shadow transition-all duration-300 hover:bg-secondary/80 hover:scale-130"
              >
                <ChevronRight size={24} className="text-primary" />
              </button>
            </div>
          </div>
        ) : (
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {skillsToDisplay.map((skill, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-xs animate-fade-up
                  transform transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                <h3 className="font-semibold text-lg mb-4">{skill.name}</h3>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: skill.level + "%" }}
                  />
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
