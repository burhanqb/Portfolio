import { Expand, Globe, Minimize,ArrowRight } from "lucide-react";
import { useState } from "react";

const experience = [
    {
        id: 1,
        title: "Advanced Micro Devices",
        description: "Design Verification Engineer",
        duration: "16-Months",
        image: "/experience/AMD.png",
        tags: ["Verilog", "Python", "Perl", "Groovy", "Perforce", "Jenkins", "Verdi", "VIM"],
        website: "https://www.amd.com/en.html",
        fullDescription: (
            <div className="space-y-2 text-sm leading-relaxed text-foreground/80">
                <p>• Developed & debugged performance counters using <span className="text-primary font-semibold"> Verilog </span> & <span className="text-primary font-semibold"> Verdi </span> for Dual SDP, created technical design docs</p>
                <p>• Managed Design Checks (<span className="text-primary font-semibold">Lint, CDC, Diffbia, Vaelab</span>) on 8+ projects with 5+ variants & maintained a web app</p>
                <p>• Developed an automated memory generation script using <span className="text-primary font-semibold"> Verilog </span> & <span className="text-primary font-semibold"> Perl (VPP) </span> enabling all types of memories (P-type, Q-type, L-type) to be generated based on user specifications, increasing the team’s efficiency by 10%</p>       
                <p>• Worked in an <span className="text-primary font-semibold"> Agile </span> team using <span className="text-primary font-semibold"> JIRA </span> & <span className="text-primary font-semibold"> Confluence </span>, created & managed 10+ <span className="text-primary font-semibold"> Jenkins </span> pipelines using <span className="text-primary font-semibold"> Groovy </span>, <span className="text-primary font-semibold"> Python </span> & <span className="text-primary font-semibold"> Github </span>, added Teams/Email notifications, 250+ live test outputs enhancing team performance by 25%</p>
                <p>• Enhanced <span className="text-primary font-semibold"> Perl </span> & <span className="text-primary font-semibold"> Verilog (VPP) </span> scripts using <span className="text-primary font-semibold"> VIM </span> & <span className="text-primary font-semibold"> Perforce </span>, reducing processing time by over 10 hours</p>
                <p>• Presented to 500+ new AMD CO-OP’s & mentored peers, presented to 50+ McMaster students at industry night</p>
            </div>
        ),
        
    },
    {
        id: 2,
        title: "Canadian Imperial Bank",
        description: "Intermediate Software Engineer",
        duration: "8-Months",
        image: "/experience/CIBC.png",
        tags: ["SpringBoot", "Postman", "SonarQube", "Docker", "REH OpenShift", "MS SQL"],
        website: "https://www.cibc.com/en/personal-banking.html",
        fullDescription: (
            <div className="space-y-2 text-sm leading-relaxed text-foreground/80">
                <p>• Worked in <span className="text-primary font-semibold"> Agile </span> team using <span className="text-primary font-semibold"> JIRA </span> & <span className="text-primary font-semibold"> Confluence</span>, developed 15 new <span className="text-primary font-semibold"> REST API </span> endpoints based on specifications provided by business analysts in <span className="text-primary font-semibold"> Confluence</span> using <span className="text-primary font-semibold"> SpringBoot </span> & <span className="text-primary font-semibold"> MS SQL</span>, validated using <span className="text-primary font-semibold"> Postman </span> for development of the GoalPlanner™ application installed and used across all CIBC branches</p>
                <p>• Reduced infrastructure cost by over 50% by containerizing <span className="text-primary font-semibold">SpringBoot</span> API applications by compiling build artifacts with <span className="text-primary font-semibold"> MAVEN </span> and packaging them using <span className="text-primary font-semibold"> Docker</span>, then deploying the resulting images to <span className="text-primary font-semibold"> REH OpenShift </span> using the <span className="text-primary font-semibold"> OCP CLI </span>. Used <span className="text-primary font-semibold"> MS SQL </span> Server to implement schema changes required for various API endpoints</p>
                <p>• Deployed 15 APIs to DEV, UAT, and PROD environments by creating <span className="text-primary font-semibold"> Jenkins pipelines </span> integrated with <span className="text-primary font-semibold"> GitHub</span>, <span className="text-primary font-semibold"> JFrog Artifactory</span>, <span className="text-primary font-semibold"> SonarQube </span> code analysis, etc</p>
                <p>• Maintained 40 <span className="text-primary font-semibold"> microservices repositories </span> in <span className="text-primary font-semibold"> GitHub </span> & 10 <span className="text-primary font-semibold"> JFrog Artifactory </span> repositories for storing & promoting build artifacts & Docker images. Created and updated project documentation in <span className="text-primary font-semibold"> Confluence </span></p>
                <p>• Familiarized myself with <span className="text-primary font-semibold"> Salesforce </span> applications and completed courses at <span className="text-primary font-semibold"> NCino University </span> to gain knowledge on <span className="text-primary font-semibold"> Salesforce </span> integrations</p>
            </div>
        ),
        
    },
    {
        id: 3,
        title: "CrossWing Inc.",
        description: "ROS Development and Robotics",
        duration: "8-Months",
        image: "/experience/CrossWing.png",
        tags: ["JavaScript", "Python", "ROS", "RVIZ", "SLAM", "Gazebo", "RTabmap"],
        website: "https://crosswing.com",
        fullDescription: (
            <div className="space-y-2 text-sm leading-relaxed text-foreground/80">
                <p>• Developed 2 camera modules for the autonomous robot using <span className="text-primary font-semibold"> Python </span> <span className="text-primary font-semibold"> ROS </span> nodes and automation scripts to enable sensor processing, camera control, and <span className="text-primary font-semibold"> SLAM</span>-based navigation</p>
                <p>• Implemented real-time robot control using <span className="text-primary font-semibold"> JavaScript </span> and <span className="text-primary font-semibold"> roslibjs</span>, enabling web-based teleoperation of cameras and movement through <span className="text-primary font-semibold"> ROS </span> commands</p>
                <p>• Created 100% accurate 3D models using <span className="text-primary font-semibold"> Rviz</span>, implemented a virtual 3D simulation environment using <span className="text-primary font-semibold"> Gazebo </span></p>
                <p>• Performed mapping and localization of the robot covering 100% of the area using <span className="text-primary font-semibold"> RTabmap </span> & <span className="text-primary font-semibold"> SLAM </span></p>
                <p>• Conducted research and development on the latest <span className="text-primary font-semibold"> ROS </span> implementations & created detailed documentation throughout the development process</p>
            </div>
        ),
    }
];

export const ExperienceSection = () => {
    const [selectedCard, setSelectedCard] = useState(null); 
    const [flipped, setFlipped] = useState(false);
    const openModal = (experience, e) => {
        e.stopPropagation();
        setSelectedCard(experience);
        document.body.style.overflow = "hidden";
        setTimeout(() => setFlipped(true), 50);
    };
    const closeModal = () => {
        setFlipped(false);
        setTimeout(() => {
            setSelectedCard(null);
            document.body.style.overflow = "auto";
        }, 300);
    };
    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Fetured <span className="text-primary relative overflow-hidden inline-block streak-text">Experience</span>
                </h2>

                <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
                    Explore some of my previous work experiences over the past few years.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experience.map((experience) => (
                        <div
                            key={experience.id}
                            className="group bg-card rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <div className="h-48 w-full overflow-hidden">
                            <img
                                src={experience.image}
                                alt={experience.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                    {experience.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 text-xs text-primary font-medium border rounded-full bg-secondary"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold text-center mb-2">
                                    {experience.title}
                                </h3>

                                <p className="text-center text-muted-foreground text-sm mb-1">
                                    {experience.description}
                                </p>
                                <p className="text-center text-muted-foreground text-sm">
                                    {experience.duration}
                                </p>
                                <div className="flex justify-center mt-8 space-x-4">
                                    <button
                                        onClick={(e) => openModal(experience, e)}
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Expand size={20} />
                                    </button>
                                    <a
                                        href={experience.website}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Globe size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {selectedCard && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                            onClick={closeModal}
                        ></div>
                        <div
                            className={`
                                relative 
                                w-[90vw]         
                                max-w-[800px]    
                                h-[70vh]        
                                max-h-[750px]
                                bg-card rounded-2xl shadow-2xl 
                                transform transition-transform duration-500
                            `}
                            style={{
                                transform: flipped
                                    ? "rotateY(0deg) scale(1)"
                                    : "rotateY(-90deg) scale(0.8)",
                            }}
                        >
                            <div className="w-full h-48 overflow-hidden rounded-t-2xl">
                                <img
                                    src={selectedCard.image}
                                    alt={selectedCard.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 overflow-y-auto h-[calc(70vh-200px)]">
                                <h3 className="text-2xl font-bold text-center mb-2">
                                    {selectedCard.title}
                                </h3>
                                <p className="text-center text-sm mb-2">
                                    {selectedCard.description}
                                </p>

                                <p className="text-center text-sm mb-4">
                                    {selectedCard.duration}
                                </p>

                                <div className="text-sm text-start leading-relaxed text-foreground/80 space-y-3">
                                    {selectedCard.fullDescription}
                                </div>

                                <div className="flex justify-center mt-4">
                                    <button
                                        onClick={closeModal}
                                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-foreground/80 hover:text-primary transition-colors duration-300 z-50"
                                    >
                                        <Minimize size={28} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://www.linkedin.com/in/burhanuddinqadir">
                    Check My LinkedIn <ArrowRight size={16} />
                </a>
            </div>
        </section>
        
    );
};
