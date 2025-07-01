import Section from '../ui/Section';
import Card from '../ui/Card';

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
    <Section
      id="industries"
      background="gray"
      title="Industries We Serve"
      subtitle="EmpowerBlu is tailored for blue collar trades and field service businesses of all types."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <Card
            key={index}
            icon={industry.icon}
            title={industry.name}
            description={industry.description}
            className="bg-white"
          />
        ))}
      </div>
    </Section>
  );
} 