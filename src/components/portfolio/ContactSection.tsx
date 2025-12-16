import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const contactInfo = [
  { icon: Mail, value: 'jundelpatuasic@gmail.com', label: 'Email' },
  { icon: Phone, value: '0969-411-2086', label: 'Phone' },
  { icon: MapPin, value: 'Cebu City, Cebu, Philippines', label: 'Location' },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-muted/30">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact Jun-Del Patuasic
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Use the details below for professional inquiries, project discussions, and collaborations.
          </p>
        </div>

        <div className="grid gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-up animation-delay-200">
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="premium-card p-5 rounded-2xl flex items-center gap-4 hover:shadow-premium-lg transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links removed */}

            <div className="premium-card p-6 rounded-2xl space-y-4">
              <h3 className="font-display font-semibold text-foreground">Availability</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Academic collaborations</li>
                <li>Internship opportunities</li>
                <li>Software development projects</li>
                <li>Web development and AI-related work</li>
              </ul>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-medium text-foreground">Preferred Contact:</span> Email is the preferred and most reliable way to reach Jun-Del.</p>
                <p><span className="font-medium text-foreground">Response Time:</span> Emails are typically replied to within 24–48 hours.</p>
                <p className="text-xs">This contact information is provided for professional and academic purposes only.</p>
              </div>
            </div>
          </div>

          {/* Contact Form removed */}
        </div>
      </div>
    </section>
  );
};
