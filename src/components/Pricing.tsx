export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small trade businesses just getting started",
      features: [
        "Up to 2 users",
        "Job scheduling",
        "Customer management",
        "Basic invoicing",
        "Mobile app access",
        "Email support"
      ],
      cta: "Start Free Trial",
      highlight: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing trade businesses with multiple technicians",
      features: [
        "Up to 10 users",
        "Everything in Starter",
        "Online payments",
        "Custom forms",
        "Automated notifications",
        "Phone & email support"
      ],
      cta: "Start Free Trial",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For established businesses with advanced needs",
      features: [
        "Unlimited users",
        "Everything in Professional",
        "Advanced reporting",
        "API access",
        "Custom integrations",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that&apos;s right for your business. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-lg overflow-hidden ${
                plan.highlight 
                  ? 'ring-2 ring-blue-600 shadow-lg' 
                  : 'border border-gray-200 shadow-sm'
              }`}
            >
              <div className={`p-8 ${plan.highlight ? 'bg-blue-50' : 'bg-white'}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <a
                  href="#contact"
                  className={`block w-full py-3 px-6 text-center rounded-md font-medium ${
                    plan.highlight 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  } transition-colors`}
                >
                  {plan.cta}
                </a>
              </div>
              <div className="bg-white p-8 border-t border-gray-100">
                <p className="font-medium text-gray-900 mb-4">Features include:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
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
} 