import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Portfolio Website with AI Chatbot',
    description:
      'A modern personal portfolio with an AI-powered chatbot that answers questions about Jun-Del’s background, skills, and projects using RAG.',
    image: '/placeholder.svg',
    technologies: ['React (Vite)', 'Tailwind CSS', 'FastAPI', 'Flowise AI', 'OpenAI API', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'JACS: Web-Based CRM System',
    description:
      'A CRM system for rental property management. Helps administrators manage tenants, properties, billing, and communication.',
    image: '/placeholder.svg',
    technologies: ['PHP / Python', 'MySQL', 'Web-based interface'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Academic Projects',
    description:
      'Multiple academic systems focused on database management, web application development, and system analysis and design.',
    image: '/placeholder.svg',
    technologies: ['Databases', 'Web Apps', 'System Design'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Projects
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects showcasing skills in web development and AI integration
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`premium-card rounded-3xl overflow-hidden group hover:shadow-premium-lg transition-all duration-500 animate-fade-up ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-muted to-background">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-primary-foreground font-display font-bold text-xl">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">Project Preview</p>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="p-3 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors"
                    aria-label="View live site"
                  >
                    <ExternalLink className="h-5 w-5 text-primary-foreground" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors"
                    aria-label="View source code"
                  >
                    <Github className="h-5 w-5 text-primary-foreground" />
                  </a>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
