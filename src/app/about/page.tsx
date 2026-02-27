import { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import { images } from "@/config/images";
import { Award, Users, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Summit Air Solutions",
  description: "Learn about Summit Air Solutions, Austin's trusted HVAC experts since 2018.",
};

export default function AboutPage() {
  return (
    <>
      {/* Interior Hero */}
      <section className="bg-secondary pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">More Than Just AC Repair</h1>
          <p className="text-xl text-muted max-w-2xl">
            Founded in 2018, Summit Air Solutions was built on a simple promise: treat every customer&apos;s home like our own.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Image
            src={images.about.src}
            alt="Our Team"
            width={600}
            height={500}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-muted mb-4 leading-relaxed">
              Living in Austin, we know the summer heat is unforgiving. After years of working for larger, impersonal corporations, our founders decided there was a better way to do business.
            </p>
            <p className="text-muted mb-6 leading-relaxed">
              Summit Air Solutions was born to bring transparency, technical excellence, and genuine care to the HVAC industry. We don&apos;t just fix machines; we restore comfort to families.
            </p>
            <div className="flex gap-8 border-t border-gray-100 pt-6">
              <div>
                <div className="text-3xl font-bold text-accent">3000+</div>
                <div className="text-sm font-semibold text-primary">Homes Serviced</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">4.9★</div>
                <div className="text-sm font-semibold text-primary">Google Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm font-semibold text-primary">Emergency Support</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section bg="secondary">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Award, title: "Expertise", text: "NATE certification isn't just a piece of paper. It's proof of our technical mastery." },
            { icon: Users, title: "Integrity", text: "We recommend what you need, not what's most expensive. Upfront pricing, always." },
            { icon: HeartHandshake, title: "Community", text: "Proud sponsors of local Austin youth sports and food bank drives." }
          ].map((val, i) => (
            <div key={i} className="bg-white p-8 rounded-xl text-center shadow-sm">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center text-accent mx-auto mb-6">
                <val.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{val.title}</h3>
              <p className="text-muted">{val.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Placeholder */}
      <Section bg="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Meet Our Team</h2>
          <p className="text-muted">Our technicians are background-checked, drug-tested, and continuously trained.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="bg-gray-200 aspect-[3/4] rounded-xl mb-4 overflow-hidden relative">
                 <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">View Bio</div>
                 {/* Placeholder for team images */}
                 <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-400 text-4xl font-bold">
                    {String.fromCharCode(64 + i)}
                 </div>
              </div>
              <h4 className="font-bold text-primary">Technician Name</h4>
              <p className="text-sm text-accent">NATE Certified</p>
            </div>
          ))}
        </div>
      </Section>
      
      <Section bg="secondary" className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Join Our Team</h2>
        <p className="text-muted mb-6">We're always looking for talented technicians who care about quality.</p>
        <Link href="/contact">
          <Button variant="outline">View Careers</Button>
        </Link>
      </Section>
    </>
  );
}