const Projects = () => {
  const projects = [
    {
      title: "VoxiSynth",
      description: "Transform text into lifelike speech with precision. Customize voice, language, and audio parameters effortlessly. Elevate your content with immersive audio experiences.",
      link: "https://voxisynth.vercel.app",
      tags: ["AI", "Speech Synthesis", "Audio Processing", "Web Application"]
    },
    {
      title: "Bing-Automation-Tool",
      description: "In the realm of search engine automation, Python has emerged as a powerful tool for building efficient and versatile solutions. Leveraging Python's rich ecosystem of libraries and frameworks, a Bing automation tool has been developed to streamline search operations. This technical paper provides insights into the architecture, implementation, and functionalities of the Python-based Bing Automation Tool, showcasing its potential to revolutionize search workflows.",
      tags: ["Python", "Automation", "Search Engine", "Web Scraping"]
    },
    {
      title: "ComicForge AI",
      description: "Transform your creative vision into stunning masterpieces with our enterprise-grade AI technology.",
      tags: ["AI", "Image Generation", "Creative Tools", "Enterprise Solution"]
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {project.link ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="text-slate-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
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

export default Projects;