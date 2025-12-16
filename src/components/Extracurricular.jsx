import { ArrowRight, ExternalLink, Github } from "lucide-react";

const extracurriculars = [
    {
        id: 1,
        title: "Google Developer Club",
        description: "A beutiful landing page app using React and Tailwind.",
        image: "GDSC.jpg",
        //ags: ["React, TailwindCSS, Supabase"],
        demoUrl: "#",
        githubURL: "#",
    },
    {
        id: 2,
        title: "Jeux de Commerce Central",
        description: "Interactive analytics with data visulization and filtering capabilities.",
        image: "JDCC.jpg",
        //tags: ["TypeScript, D3.js, Next.js"],
        demoUrl: "#",
        githubURL: "#",
    },
    {
        id: 3,
        title: "Sumo-bot",
        description: "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "SumoBot.png",
        //tags: ["React, Node.js, Stripe"],
        demoUrl: "#",
        githubURL: "#",
    },
];

export const Extracurriculars = () => {
    return <section id="extracurriculars" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Fetured <span className="text-primary relative overflow-hidden inline-block streak-text">Extracurriculars</span>
            </h2>
            <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
                Here are some of my recent extracurriculars that I have been a part of during school.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {extracurriculars.map((extracurriculars, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={extracurriculars.image} alt={extracurriculars.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            {/* <div className="flex flex-wrap justify-center gap-2 mb-4">
                                {extracurriculars.tags.map((tag)=> (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                            </div> */}
                            <h3 className="text-xl font-semibold mb-4"> {extracurriculars.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{extracurriculars.description}</p>
                            <div className="flex justify-end items-center"> 
                                <div className="flex space-x-3">
                                    <a href={extracurriculars.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"> 
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={extracurriculars.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
};