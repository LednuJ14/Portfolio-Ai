type FAQItem = {
  q: string;
  a: string;
};

const faqs: FAQItem[] = [
  {
    q: "What are Jun-Del’s main skills?",
    a: "Python, JavaScript, React, Tailwind CSS, MySQL, FastAPI, and AI chatbot integration using Flowise."
  },
  {
    q: "What kind of projects has Jun-Del worked on?",
    a: "A personal portfolio website with an AI chatbot, a CRM system for rental management, and various academic web-based projects."
  },
  {
    q: "What technologies does Jun-Del use for frontend development?",
    a: "React (Vite), Tailwind CSS, HTML, and CSS."
  },
  {
    q: "What technologies does Jun-Del use for backend development?",
    a: "Python with FastAPI and MySQL for database management."
  },
  {
    q: "Is Jun-Del experienced with AI?",
    a: "Yes. He integrates AI chatbots using Flowise and OpenAI APIs through a Retrieval-Augmented Generation (RAG) approach."
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            FAQ
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Answers to common questions about skills, projects, and technologies
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {faqs.map((item, index) => (
            <div
              key={item.q}
              className="premium-card p-6 rounded-2xl hover:shadow-premium-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.q}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
