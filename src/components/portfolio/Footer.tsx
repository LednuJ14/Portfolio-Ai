import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ],
  social: [],
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="section-container relative z-10 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">JD</span>
              </div>
              <span className="font-display font-semibold text-xl text-foreground">Jun-Del</span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto md:mx-0">
              Building practical, user-centered systems with modern web and AI tools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {footerLinks.navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links removed */}
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            © {currentYear} Jun-Del Patuasic. Made with <Heart className="h-4 w-4 text-destructive fill-destructive" />
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
