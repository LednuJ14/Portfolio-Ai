import { 
  Code2, 
  Database, 
  Figma, 
  Globe, 
  Layers, 
  Server,
  Smartphone,
  Zap
} from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Programming Languages',
    description: 'Core languages for development and scripting',
    technologies: ['Python', 'JavaScript', 'SQL'],
  },
  {
    icon: Layers,
    title: 'Frontend Development',
    description: 'Building responsive, modern web interfaces',
    technologies: ['React (Vite)', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'APIs, authentication, and server-side logic',
    technologies: ['Python (FastAPI)', 'REST APIs', 'Session handling'],
  },
  {
    icon: Database,
    title: 'Databases',
    description: 'Relational design and normalization',
    technologies: ['MySQL', 'Database design', 'Normalization'],
  },
  {
    icon: Zap,
    title: 'AI & Tools',
    description: 'RAG workflows and AI integrations',
    technologies: ['Flowise AI', 'RAG', 'OpenAI API', 'Prompt engineering'],
  },
  {
    icon: Globe,
    title: 'Development Tools',
    description: 'Tooling and environment',
    technologies: ['Git & GitHub', 'VS Code', 'Docker (basic)'],
  },
  {
    icon: Figma,
    title: 'Soft Skills',
    description: 'Professional and collaboration strengths',
    technologies: ['Problem-solving', 'Attention to detail', 'Willingness to learn', 'Team collaboration'],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-muted/30">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Skills
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Key technical skills, tools, and strengths
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="premium-card p-6 rounded-2xl group hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              {/* Icon */}
              <div className="mb-5">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                  <skill.icon className="h-7 w-7 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {skill.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
