export default function Features() {
  const features = [
    {
      title: "Job Scheduling",
      description: "Easily schedule and dispatch jobs to your team with an intuitive drag-and-drop calendar.",
      icon: "📅"
    },
    {
      title: "Invoicing & Payments",
      description: "Create professional invoices and accept payments on the spot or online.",
      icon: "💰"
    },
    {
      title: "Customer Management",
      description: "Keep track of customer information, job history, and communication all in one place.",
      icon: "👥"
    },
    {
      title: "Mobile App",
      description: "Access your business from anywhere with our powerful mobile app for you and your team.",
      icon: "📱"
    },
    {
      title: "Estimates & Quotes",
      description: "Create professional estimates and convert them to jobs with a single click.",
      icon: "📝"
    },
    {
      title: "Reporting & Analytics",
      description: "Gain insights into your business performance with detailed reports and dashboards.",
      icon: "📊"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage and grow your trade business in one platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 