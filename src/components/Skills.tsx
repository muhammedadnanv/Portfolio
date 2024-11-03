const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        "Vue.js - Advanced",
        "React - Proficient",
        "Progressive Web Apps",
        "Web Performance Optimization",
        "HTML5/CSS3",
        "JavaScript/TypeScript",
        "Responsive Design",
        "Web Accessibility"
      ]
    },
    {
      category: "Technical Leadership",
      items: [
        "Team Mentorship",
        "Architecture Design",
        "Code Reviews",
        "Agile Methodologies",
        "Technical Documentation",
        "Project Planning",
        "Performance Monitoring",
        "Quality Assurance"
      ]
    },
    {
      category: "Emerging Technologies",
      items: [
        "Brain-Computer Interface",
        "AI Integration",
        "WebAssembly",
        "Edge Computing",
        "Service Workers",
        "Web Components",
        "Serverless Architecture",
        "Real-time Systems"
      ]
    },
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          Technical Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillSet, index) => (
            <div
              key={index}
              className="fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {skillSet.category}
                </h3>
                <div className="space-y-3">
                  {skillSet.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-white rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-shadow"
                    >
                      {skill}
                    </div>
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

export default Skills;