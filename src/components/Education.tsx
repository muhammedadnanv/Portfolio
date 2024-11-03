const Education = () => {
  return (
    <section id="education" className="section-padding bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          Education & Languages
        </h2>
        
        <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Academic Background</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-primary">Jawhar College</p>
                <p className="text-slate-600">Humanities Focus</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Languages</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">English</span>
                <span className="text-primary font-medium">Professional</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Malayalam</span>
                <span className="text-primary font-medium">Native</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;