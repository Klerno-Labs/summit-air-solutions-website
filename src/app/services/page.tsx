import { Metadata } from "next";
import { Wrench, Fan, Thermometer, Droplets, Settings2, Home } from "lucide-react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HVAC Services | Repair, Install & Maintenance",
  description: "Expert HVAC services in Austin. From emergency AC repair to full system installation.",
};

const services = [
  {
    category: "Cooling",
    icon: Fan,
    items: ["AC Repair", "AC Installation", "Ductless Mini-Splits", "Evaporator Coil Cleaning"]
  },
  {
    category: "Heating",
    icon: Thermometer,
    items: ["Furnace Repair", "Heat Pump Services", "Thermostat Installation", "Gas Logs"]
  },
  {
    category: "Indoor Air Quality",
    icon: Droplets,
    items: ["Air Duct Cleaning", "Air Purifiers", "Dehumidifiers", "UV Sanitizers"]
  },
  {
    category: "Maintenance",
    icon: Settings2,
    items: ["Annual Tune-Ups", "Priority Service Plans", "System Inspections", "Filter Changes"]
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Interior Hero */}
      <section className="bg-primary pt-32 pb-20 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
          Comprehensive comfort solutions for your home and business.
        </p>
      </section>

      {/* Residential vs Commercial */}
      <Section bg="white">
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
          <Button variant="primary" size="lg" className="md:w-64">Residential</Button>
          <Button variant="outline" size="lg" className="md:w-64">Commercial</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((group, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-secondary w-12 h-12 rounded-lg flex items-center justify-center text-accent mb-6">
                <group.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{group.category}</h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted hover:text-primary cursor-pointer">
                    <Wrench className="w-4 h-4 text-gray-300" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* What to Expect */}
      <Section bg="secondary">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">The Summit Air Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Schedule", text: "Book online or call. We offer 2-hour arrival windows." },
            { step: "02", title: "Diagnosis", text: "Tech performs a thorough system check and explains the issue." },
            { step: "03", title: "Quote", text: "You receive a flat-rate price before any work begins." },
            { step: "04", title: "Comfort", text: "We complete the job, clean up, and ensure you're satisfied." }
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="text-accent font-bold text-5xl mb-4 opacity-20">{item.step}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="white" className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">Need Immediate Help?</h2>
        <p className="text-muted mb-8">We have technicians on standby for 24/7 emergency repairs.</p>
        <Link href="/contact">
          <Button size="lg">Schedule Emergency Service</Button>
        </Link>
      </Section>
    </>
  );
}