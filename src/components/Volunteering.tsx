import { Heart, Lightbulb } from 'lucide-react';

const Volunteering = () => {
  return (
    <section id="volunteering" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          Volunteering & Interests
        </h2>
        
        <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 fade-up">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="text-primary" size={24} />
              <h3 className="text-xl font-semibold text-slate-800">Tech Volunteering</h3>
            </div>
            <p className="text-slate-600">
              Dedicated to empowering communities through technology education and digital literacy initiatives.
              Contributing to economic empowerment through tech skills development.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 fade-up">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="text-primary" size={24} />
              <h3 className="text-xl font-semibold text-slate-800">Research Interests</h3>
            </div>
            <p className="text-slate-600">
              Passionate about Brain-Computer Interface (BCI) technology and its potential to revolutionize human-computer interaction.
              Actively exploring cutting-edge web technologies and their practical applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;