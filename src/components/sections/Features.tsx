import Section from '../ui/Section';
import Card from '../ui/Card';

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
    <Section 
      id="features"
      background="white"
      title="Powerful Features"
      subtitle="Everything you need to manage and grow your trade business in one platform."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            className="bg-gray-50"
          />
        ))}
      </div>
    </Section>
  );
} 