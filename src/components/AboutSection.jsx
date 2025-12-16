import { useState, useEffect } from "react";
import { Briefcase, User } from "lucide-react";

export const AboutSection = () => {
  const [modalImage, setModalImage] = useState(null);
  const openModal = (src) => setModalImage(src);
  const closeModal = () => setModalImage(null);
  useEffect(() => {
    if (modalImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalImage]);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary relative overflow-hidden inline-block streak-text">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Computer Engineering & Management</h3>
            <p className="text-muted-foreground">
              With over 2.5 years of experience working in the industry at various companies and roles.
              I specialize in full-stack development, building interfaces that are on-time, within budget, and of high quality.
              I keep busy with side projects and extracurriculars, and I am currently seeking full-time software engineering opportunities where I can combine technical and analytical aptitudes with problem-solving strengths.
              Feel free to contact me!
            </p>
            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex problems and constantly learning new technologies to stay at the forefront of the industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="Burhanuddin_Qadir_Resume.pdf"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View Resume
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex gap-4 h-20 items-center">
                <div className="w-14 h-14 rounded-full border-2 border-primary overflow-hidden flex items-center justify-center bg-primary/10">
                  <img
                    src="../mcmaster_logo.jpg"
                    alt="McMaster University Logo"
                    className="w-full h-full object-cover block cursor-pointer"
                    onClick={() => openModal("/mcmaster_logo.jpg")}
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">McMaster University</h4>
                  <div className="text-muted-foreground text-sm">
                    <p>Computer Engineering & Management</p>
                    <p>Awarded with Deans List & Scholarship</p>
                    <p>CGPA: 3.7/4.0</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex gap-4 h-20 items-center">
                <div className="w-14 h-14 rounded-full border-2 border-primary overflow-hidden flex items-center justify-center bg-primary/10">
                  <img
                    src="../smokey.png"
                    alt="Cat"
                    className="w-full h-full object-cover block cursor-pointer"
                    onClick={() => openModal("/smokey.png")}
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Purr-sonal Companion</h4>
                  <div className="text-muted-foreground text-sm">
                    <p>My cat insists on sitting on my keyboard while I </p>
                    <p>work I guess she’s my toughest project manager.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex gap-4 h-20 items-center">
                <div className="w-14 h-14 rounded-full border-2 border-primary overflow-hidden flex items-center justify-center bg-primary/10">
                  <img
                    src="../shoes.jpg"
                    alt="Sneakers"
                    className="w-full h-full object-cover block cursor-pointer"
                    onClick={() => openModal("/shoes.jpg")}
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Sneaker-holic</h4>
                  <div className="text-muted-foreground text-sm">
                    <p>Sneaker collection of 120+ pairs, started in 2019</p>
                    <p>Favourite pair: Jordan 3 Black Cement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative flex justify-center items-center"
            onClick={(e) => e.stopPropagation()} 
          >
            <img
              src={modalImage}
              alt="Enlarged"
              className="max-h-[90vh] w-auto rounded-lg shadow-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl font-bold bg-black/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
