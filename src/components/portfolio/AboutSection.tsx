import { Award, Briefcase, GraduationCap, Heart } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Information Technology student',
  },
  {
    icon: Briefcase,
    title: 'Projects',
    description: 'Academic and personal full-stack web projects',
  },
  {
    icon: Award,
    title: 'Focus',
    description: 'Software development, web apps, and AI systems',
  },
  {
    icon: Heart,
    title: 'Goal',
    description: 'Build practical, user-centered solutions',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Profile
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Information Technology student focused on practical, user-centered solutions using modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo Side */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl" />
              
              {/* Main Image Container */}
              <div className="relative premium-card rounded-3xl p-6 overflow-hidden">
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-muted to-background flex items-center justify-center overflow-hidden">
                  <img
                    src="/profile.png"
                    alt="Profile photo"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 animate-fade-up animation-delay-300">
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Profile – Jun-Del Patuasic
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Jun-Del Patuasic is an Information Technology student with a strong interest in software development, web applications, and AI-powered systems. He focuses on building practical, user-centered solutions using modern technologies.
                </p>
                <p>
                  He has experience working on academic and personal projects that involve full-stack web development, database design, and system integration. Jun-Del is particularly interested in creating systems that improve efficiency, organization, and user experience.
                </p>
                <p>
                  He is currently developing portfolio projects that showcase his skills in frontend development, backend logic, and AI chatbot integration.
                </p>
                <p>
                  Jun-Del is motivated to continuously learn new technologies and apply them in real-world applications.
                </p>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="premium-card p-5 rounded-2xl hover:shadow-premium-lg transition-all duration-300 group"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
