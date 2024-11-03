import { Link, Mail, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Let's Connect
            </h2>
            <p className="text-lg text-slate-600">
              I'm always interested in hearing about new projects, opportunities, and ways to contribute to the tech community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Email</h3>
                    <a 
                      href="mailto:adnanmuhammad4393@gmail.com" 
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      adnanmuhammad4393@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Phone</h3>
                    <a 
                      href="tel:+919656778508" 
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      +91 965 677 8508
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Link className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/muhammedadnanvv" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MessageSquare className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Schedule a Call</h3>
                    <a 
                      href="#"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      Book a consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600">
              Looking forward to discussing how we can work together to achieve your goals!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;