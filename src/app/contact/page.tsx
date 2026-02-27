import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us | Summit Air Solutions",
  description: "Schedule HVAC service in Austin, TX. 24/7 emergency support available.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary pt-32 pb-20 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
          Whether it&apos;s an emergency or a routine tune-up, we&apos;re here to help.
        </p>
      </section>

      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">
              Schedule Your Service
            </h2>
            <ContactForm />
          </div>

          <div className="space-y-8 lg:pt-12">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg text-accent flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-1">Call Us 24/7</h3>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-xl font-bold text-accent hover:underline"
                >
                  {siteConfig.contact.phone}
                </a>
                <p className="text-sm text-muted mt-1">Emergency service available around the clock.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg text-accent flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-1">Email</h3>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-accent hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
                <p className="text-sm text-muted mt-1">We respond within 1 business hour.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg text-accent flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-1">Office</h3>
                <p className="text-muted">{siteConfig.contact.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg text-accent flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-1">Hours</h3>
                <p className="text-muted">
                  Monday - Friday: 7:00 AM - 7:00 PM<br />
                  Saturday: 8:00 AM - 5:00 PM<br />
                  Sunday: Emergency Only
                </p>
                <p className="text-sm text-accent font-semibold mt-2">
                  24/7 Emergency service always available
                </p>
              </div>
            </div>

            <div className="bg-secondary p-6 rounded-xl border border-gray-100">
              <h4 className="font-bold text-primary mb-2">Service Area</h4>
              <p className="text-muted text-sm">
                Austin, Round Rock, Cedar Park, Pflugerville, Georgetown, Leander, and surrounding communities.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="secondary" className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Prefer to Talk?</h2>
        <p className="text-muted mb-6">
          Our dispatchers are standing by to help you schedule service right now.
        </p>
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-hover transition-colors shadow-lg shadow-orange-200"
        >
          <Phone className="w-5 h-5" />
          Call {siteConfig.contact.phone}
        </a>
      </Section>
    </>
  );
}
