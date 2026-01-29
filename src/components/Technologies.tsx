const technologies = [
  { name: "React", color: "text-[#61DAFB]" },
  { name: "Node.js", color: "text-[#339933]" },
  { name: "TypeScript", color: "text-[#3178C6]" },
  { name: "n8n", color: "text-primary" },
  { name: "AWS", color: "text-[#FF9900]" },
  { name: "Supabase", color: "text-[#3ECF8E]" },
  { name: "OpenAI", color: "text-foreground" },
  { name: "WhatsApp API", color: "text-[#25D366]" },
];

const Technologies = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tecnologías que Utilizamos
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-card px-8 py-4 rounded-lg shadow-soft hover:shadow-strong transition-all duration-300 border border-border"
            >
              <span className={`text-xl font-semibold ${tech.color}`}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
