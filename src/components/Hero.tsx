import { User, Briefcase, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
            Muhammad Adnan
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
            Business Architect | Front-End Developer & PWA Specialist | Founder at Ad Web Comic Agency
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Code className="text-primary" size={20} />
              <span className="text-slate-600">PWA Expert</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Briefcase className="text-primary" size={20} />
              <span className="text-slate-600">Business Architect</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <User className="text-primary" size={20} />
              <span className="text-slate-600">Tech Mentor</span>
            </div>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto pt-4">
            Helping businesses succeed online through visually stunning, highly functional, and performance-optimized web solutions
          </p>
          <div className="pt-8">
            <a
              href="#contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;