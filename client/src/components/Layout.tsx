import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Artigos", href: "#artigos" },
    { name: "Habilidades", href: "#skills" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const element = document.querySelector(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/20 rounded-full blur-[120px] opacity-40 animate-pulse delay-1000" />
      </div>

      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-background/80 backdrop-blur-md border-white/10 py-3 shadow-lg" : "bg-transparent py-6"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 hover:to-primary transition-all">
            Seu Nome
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="rounded-full hover:bg-primary/20 hover:text-primary transition-all"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-lg font-medium py-2 px-4 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1 pt-20">
        {children}
      </main>

      <footer className="py-8 border-t border-white/5 bg-black/20 backdrop-blur-sm mt-20">
        <div className="container text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} — Seu Nome. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
