export default function Industries() {
  const industries = [
    {
      name: "Plumbing",
      icon: "🔧",
      description: "Streamline job scheduling, track parts inventory, and manage customer history for plumbing businesses."
    },
    {
      name: "Electrical",
      icon: "⚡",
      description: "Manage electrical jobs, track certifications, and handle complex quotes for electrical contractors."
    },
    {
      name: "HVAC",
      icon: "❄️",
      description: "Schedule maintenance visits, manage recurring service contracts, and track equipment for HVAC companies."
    },
    {
      name: "Landscaping",
      icon: "🌱",
      description: "Organize seasonal contracts, route optimization, and crew management for landscaping businesses."
    },
    {
      name: "Cleaning",
      icon: "🧹",
      description: "Schedule recurring appointments, manage staff, and track cleaning supplies for cleaning services."
    },
    {
      name: "General Contracting",
      icon: "🏗️",
      description: "Coordinate subcontractors, manage complex projects, and track expenses for general contractors."
    }
  ];

  return (
    <section id="industries" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EmpowerBlu is tailored for blue collar trades and field service businesses of all types.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 