"use client";

import Section from '../ui/Section';
import Button from '../ui/Button';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import Select from '../ui/Select';
import Checkbox from '../ui/Checkbox';

export default function Contact() {
  return (
    <Section
      id="contact"
      background="gray"
      title="Ready to Grow Your Trade Business?"
      subtitle="Contact us to learn more about how we can help your business."
    >
      <div className="max-w-3xl mx-auto">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Full Name"
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />
            <Input
              label="Work Email"
              id="email"
              name="email"
              type="email"
              placeholder="your.email@company.com"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Phone Number"
              id="phone"
              name="phone"
              type="tel"
              placeholder="(123) 456-7890"
            />
            <Input
              label="Company Name"
              id="company"
              name="company"
              type="text"
              placeholder="Your company name"
            />
          </div>
          
          <Select
            label="Industry"
            id="industry"
            name="industry"
            required
          >
            <option value="">Select your industry</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="hvac">HVAC</option>
            <option value="landscaping">Landscaping</option>
            <option value="cleaning">Cleaning</option>
            <option value="general">General Contracting</option>
            <option value="other">Other</option>
          </Select>
          
          <TextArea
            label="How can we help?"
            id="message"
            name="message"
            placeholder="Tell us about your business needs..."
            rows={4}
          />
          
          <Checkbox
            label="Send me tips and updates about managing my trade business"
            id="newsletter"
            name="newsletter"
          />
          
          <div>
            <Button type="submit" variant="primary" className="md:w-auto">
              Contact Us
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
} 