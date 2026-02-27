import { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Service Areas | Summit Air Solutions",
  description: "We proudly serve Austin and the surrounding areas.",
};

const areas = [
  { name: "Austin", desc: "Central Austin, Westlake, Tarrytown, Hyde Park" },
  { name: "Round Rock", desc: "Teravista, Brushy Creek, Dell Diamond area" },
  { name: "Cedar Park", desc: "Twin Lakes, Leander, Whitestone" },
  { name: "Pflugerville", desc: "Springbrook, Pfennig Lane, Heatherwilde" },
  { name: "Georgetown", desc: "Downtown Georgetown, Sun City, Wolf Ranch" },
  { name: "Leander", desc: "Crystal Falls, Mason Creek, Block House Creek" },
];

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-secondary pt-32 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Proudly Serving Greater Austin
        </h1>
        <p className="text-xl text-muted max-w-2xl mx-auto px-4">
          From Round Rock to Cedar Park and everywhere in between, Summit Air Solutions is your local HVAC partner.
        </p>
      </section>

      <Section bg="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <div
              key={area.name}
              className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-hover hover:border-accent/30 transition-all group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-2 rounded-lg text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">{area.name}</h3>
                  <p className="text-muted text-sm">{area.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="secondary" className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Don&apos;t See Your Area?</h2>
        <p className="text-muted mb-6 max-w-xl mx-auto">
          We may still be able to help. Give us a call and we&apos;ll let you know if we can serve your location.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${siteConfig.contact.phone}`}>
            <Button size="lg" className="w-full sm:w-auto">
              <Phone className="w-5 h-5 mr-2" />
              {siteConfig.contact.phone}
            </Button>
          </a>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Contact Us Online
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
