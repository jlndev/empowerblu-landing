import Button from '../ui/Button';
import Section from '../ui/Section';

export default function Hero() {
  return (
    <Section
      background="gradient"
      className="pt-32 pb-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Run Your Trade Business <span className="text-blue-600">Better</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            EmpowerBlu is the all-in-one CRM and job management software built specifically for contractors, tradesmen, and field service companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#contact" variant="primary">
              Start Free Trial
            </Button>
            <Button href="#features" variant="outline">
              See Features
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative h-80 w-full rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg w-full max-w-xs">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-white font-bold">New Job</div>
                  <div className="text-white/70 text-sm">Today</div>
                </div>
                <div className="bg-white/20 p-3 rounded mb-3">
                  <div className="text-white font-medium">Plumbing Repair</div>
                  <div className="text-white/70 text-sm">123 Main St • 2:00 PM</div>
                </div>
                <div className="bg-white/20 p-3 rounded">
                  <div className="text-white font-medium">Electrical Installation</div>
                  <div className="text-white/70 text-sm">456 Oak Ave • 4:30 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
} 