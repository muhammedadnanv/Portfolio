const Experience = () => {
  const experiences = [
    {
      title: "Chief Visionary Architect",
      company: "ComicFix.com",
      period: "Jun 2024 - Present",
      description: "Spearheading the strategic and technological direction of our innovative platform, driving the vision to empower fresher developers through hands-on, live projects. Leading mentorship programs and facilitating continuous learning.",
      achievements: [
        "Designed and overseen diverse portfolio of real-world projects",
        "Established high standards of mentorship and certification programs",
        "Cultivated environment fostering technical growth and professional development"
      ]
    },
    {
      title: "Company Owner",
      company: "AD WEB COMIC AGENCY",
      period: "Oct 2023 - Jun 2024",
      description: "Created comprehensive guides for Web, PWA, and SPA development, equipping developers with skills needed for modern digital experiences. Led freelance projects and mentored development teams.",
      achievements: [
        "Developed comprehensive web development curriculum",
        "Successfully delivered multiple PWA and SPA projects",
        "Established strong client relationships and project management processes"
      ]
    },
    {
      title: "Co-founder & Technical Lead",
      company: "CodemasterUnity",
      period: "2020 - Present",
      description: "Spearheading AI-driven performance optimization initiatives and leading technical innovation. Developed cutting-edge solutions for web performance enhancement.",
      achievements: [
        "Implemented AI-driven optimization reducing server costs by 40%",
        "Led the development of proprietary performance monitoring tools",
        "Established partnerships with major tech companies"
      ]
    },
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          Professional Journey
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-primary/20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
                <p className="text-primary font-medium mt-1">{exp.company}</p>
                <p className="text-sm text-slate-500 mt-1">{exp.period}</p>
                <p className="text-slate-600 mt-3">{exp.description}</p>
                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center text-slate-600">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
