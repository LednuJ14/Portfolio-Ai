export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-muted/30">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic and technical experience across web development and AI integration
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6 premium-card p-6 rounded-2xl animate-fade-up">
            <h3 className="font-display text-xl font-semibold text-foreground">Academic Experience</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Jun-Del has completed multiple academic projects related to information technology, including system development, database design, and web-based applications.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-primary" />
                <span>Requirement analysis</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-primary" />
                <span>System design documentation</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-primary" />
                <span>Implementation of frontend and backend components</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-primary" />
                <span>Testing and basic debugging</span>
              </div>
            </div>
          </div>
          <div className="space-y-6 premium-card p-6 rounded-2xl animate-fade-up">
            <h3 className="font-display text-xl font-semibold text-foreground">Technical Experience</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-accent" />
                <span>Building full-stack web applications</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-accent" />
                <span>Integrating AI chatbots using Flowise</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-accent" />
                <span>Using REST APIs for data exchange</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-accent" />
                <span>Managing relational databases using MySQL</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Jun-Del continues to enhance his technical skills through hands-on practice and project-based learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
