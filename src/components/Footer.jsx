import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-card border-t border-border py-4 px-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground text-center flex-1">
                &copy; {new Date().getFullYear()} Burhanuddin Qadir, All rights reserved.
            </p>
            <a
                href="#hero"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors ml-4"
            >
                <ArrowUp size={30} />
            </a>
        </footer>
    );
};