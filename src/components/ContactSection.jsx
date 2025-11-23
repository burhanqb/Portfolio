import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Send, Github, Globe } from "lucide-react";
import { cn } from "../lib/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactSection = () => {
  const [namePlaceholder, setNamePlaceholder] = useState("");
  const [emailPlaceholder, setEmailPlaceholder] = useState("");
  const [messagePlaceholder, setMessagePlaceholder] = useState("");

  const placeholders = {
    name: "John Doe",
    email: "Jhon@gmail.com",
    message: "Hello, I'd like to talk about...",
  };

  const typingSpeed = 100; // ms per character
  const pauseTime = 1000; // pause at the end before deleting

  const loopTyping = (text, setText) => {
    let index = 0;
    let deleting = false;

    const tick = () => {
      if (!deleting) {
        setText(text.slice(0, index + 1));
        index++;
        if (index === text.length) {
          deleting = true;
          setTimeout(tick, pauseTime);
          return;
        }
      } else {
        setText(text.slice(0, index - 1));
        index--;
        if (index === 0) {
          deleting = false;
        }
      }
      setTimeout(tick, typingSpeed);
    };

    tick();
  };

  useEffect(() => {
    loopTyping(placeholders.name, setNamePlaceholder);
    loopTyping(placeholders.email, setEmailPlaceholder);
    loopTyping(placeholders.message, setMessagePlaceholder);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
        toast.success(
            <div>
                <strong>Message sent successfully!</strong>
                <p>Thank you for reaching out, I'll get back to you shortly.</p>
            </div>
        );
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-1xl mx-auto">
          Feel free to reach out, I'm always open to discussing new opportunities and making new connections.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12">
          <div className="space-y-8 md:pr-4 md:pl-0">
            <h3 className="text-2xl font-semibold mb-10">Contact Information</h3>
            <div className="space-y-8 mx-auto w-fit">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:burhanqb@hotmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    burhanqb@hotmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-9">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+1-(416)-618-4101" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 (416)-618-4101
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Markham, Ontario, Canada
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="text-2xl font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/burhanuddinqadir" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://github.com/burhanqb" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                  <Github />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                  <Globe />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs md:pl-0 md:pr-0">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <form className="space-y-2" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder={namePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder={emailPlaceholder}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder={messagePlaceholder}
                />
              </div>
              <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} className="toast-primary"/>
    </section>
  );
};
