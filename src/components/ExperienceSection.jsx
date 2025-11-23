import { ArrowRight, Expand, ExternalLink, Github, Globe, Square, SquarePlus } from "lucide-react";
import { useState } from "react";

const experience = [
    {
        id: 1,
        title: "Advanced Micro Devices",
        description: "Design Verification Engineer",
        duration: "16-Months",
        image: "/experience/AMD.png",
        tags: ["React", "TailwindCSS", "Supabase"],
        demoUrl: "#",
        githubUrl: "#",
        fullDescription:
            "At AMD, I worked on design verification for high-performance processors. I wrote testbenches, debugged RTL, created assertions, and collaborated with architects to validate pipeline behavior. I also automated workflows and improved verification coverage.",
    },
    {
        id: 2,
        title: "Canadian Imperial Bank",
        description: "Intermediate Software Engineer",
        duration: "8-Months",
        image: "/experience/CIBC.png",
        tags: ["TypeScript", "D3.js", "Next.js"],
        demoUrl: "#",
        githubUrl: "#",
        fullDescription:
            "At CIBC, I built internal dashboards using TypeScript, Next.js, and D3.js. I developed new UI components, integrated data APIs, improved page performance, and collaborated with the cybersecurity team to ensure application integrity.",
    },
    {
        id: 3,
        title: "CrossWing Inc.",
        description: "ROS Development and Robotics",
        duration: "8-Months",
        image: "/experience/CrossWing.png",
        tags: ["React", "Node.js", "Stripe"],
        demoUrl: "#",
        githubUrl: "#",
        fullDescription:
            "I worked on ROS-based robotics systems, creating autonomous navigation logic, tuning SLAM algorithms, and contributing to robot control interfaces. I also integrated web dashboards with real-time robot telemetry.",
    },
];

export const ExperienceSection = () => {
    const [flipped, setFlipped] = useState(null);

    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Experience</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Explore some of my previous work experiences over the past few years.
                </p>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experience.map((project) => {
                        const isFlipped = flipped === project.id;

                        return (
                            <div
                                key={project.id}
                                className="flip-container w-full h-[420px] cursor-pointer"
                                onClick={() =>
                                    setFlipped(isFlipped ? null : project.id)
                                }
                            >
                                <div className={`flip-inner ${isFlipped ? "flip" : ""}`}>
                                    
                                    {/* FRONT */}
                                    <div className="flip-front bg-card rounded-xl shadow-md overflow-hidden">
                                        <div className="h-48 w-full overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="p-6">
                                            <div className="flex flex-wrap justify-center gap-2 mb-4">
                                                {project.tags.map((tag, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <h3 className="text-xl font-semibold text-center mb-2">
                                                {project.title}
                                            </h3>

                                            <p className="text-center text-muted-foreground text-sm">
                                                {project.description}
                                            </p>

                                            <div className="flex justify-center mt-4 space-x-4">
                                                <Expand size={20} className="text-primary" />
                                                <Globe size={20} className="text-primary" />
                                            </div>

                                            <p className="text-center text-xs text-muted-foreground mt-4">
                                                Tap to expand →
                                            </p>
                                        </div>
                                    </div>

                                    {/* BACK */}
                                    <div className="flip-back bg-card rounded-xl shadow-md p-6 overflow-y-auto">
                                        <h3 className="text-xl font-bold text-center mb-2">
                                            {project.title}
                                        </h3>

                                        <p className="text-center text-primary text-sm mb-4">
                                            {project.duration}
                                        </p>

                                        <p className="text-sm leading-relaxed text-foreground/80 whitespace-pre-line">
                                            {project.fullDescription}
                                        </p>

                                        <p className="text-center text-xs text-muted-foreground mt-6">
                                            Tap to flip back ←
                                        </p>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
