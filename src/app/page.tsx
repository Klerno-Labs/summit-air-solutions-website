import Image from "next/image";
import Link from "next/link";
import { Star, ShieldCheck, Clock, DollarSign, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Section from "@/components/Section";
import MaintenanceCalculator from "@/components/MaintenanceCalculator";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-10 pb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-8 animate-fade-in-up">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Technicians Available Now in Austin
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Austin’s Most Trusted <br />
            <span className="text-accent">HVAC Experts</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light">
            NATE-certified technicians, upfront pricing, and 24/7 emergency repair. We keep your home comfortable when it matters most.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-full shadow-xl shadow-orange-900/20">
                Request Service
              </Button>
            </Link>
            <a href={`tel:${siteConfig.contact.phone}`} className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full sm:w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white">
                <Phone className="w-5 h-5 mr-2" fill="currentColor" />
                {siteConfig.contact.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <Section bg="white" className="py-10 border-b border-gray-100">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {["NATE Certified", "Lennox Premier", "Angi Rated", "BBB Accredited"].map((badge) => (
            <span key={badge} className="text-xl font-bold text-primary tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> {badge}
            </span>
          ))}
        </div>
      </Section>

      {/* Services Grid */}
      <Section bg="secondary">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Complete HVAC Solutions</h2>
          <p className="text-lg text-muted">Whether you need a quick repair, a full system installation, or just a seasonal tune-up, Summit Air has you covered.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "AC Repair", desc: "Fast diagnostics and repair for all major brands. We fix it right the first time.", icon: "🛠️" },
            { title: "Installation", desc: "Professional installation of high-efficiency systems with 10-year warranties.", icon: "⚡" },
            { title: "Maintenance", desc: "Preventative tune-ups to extend the life of your system and lower energy bills.", icon: "📅" },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 group border border-transparent hover:border-gray-100">
              <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-muted mb-6 flex-grow">{service.desc}</p>
              <Link href="/services" className="text-accent font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Value Props Zig Zag */}
      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-accent/20 rounded-3xl transform rotate-3"></div>
            <Image
              src={images.about.src}
              alt="Summit Air Technician"
              width={600}
              height={500}
              className="relative rounded-3xl shadow-xl w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose Summit Air?</h2>
            <div className="space-y-6">
              {[
                { icon: Clock, title: "24/7 Emergency Service", text: "AC goes out at 2 AM? We answer the phone. Austin heat waits for no one." },
                { icon: DollarSign, title: "Upfront Pricing", text: "You approve the price before we start any work. No surprises, ever." },
                { icon: ShieldCheck, title: "100% Satisfaction", text: "If you aren&apos;t happy, we aren't happy. We stand behind every job." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">{item.title}</h3>
                    <p className="text-muted">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Interactive Calculator */}
      <Section bg="secondary">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-bold tracking-wider uppercase text-sm">Interactive Tool</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">Is It Time to Upgrade?</h2>
          <p className="text-lg text-muted">Use our savings estimator to see if a new high-efficiency system could save you money this summer.</p>
        </div>
        <MaintenanceCalculator />
      </Section>

      {/* Testimonials */}
      <Section bg="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Your Neighbors Say</h2>
          <div className="flex items-center justify-center gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-6 h-6" />)}
            <span className="text-primary font-bold ml-2">4.9/5 on Google</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Sarah Jenkins", location: "Round Rock", text: "Summit Air saved us during the heatwave! The technician was polite, wore shoe covers, and fixed our AC in an hour." },
            { name: "Mike Ross", location: "Cedar Park", text: "Honest pricing. They found a small part that needed replacing instead of trying to sell me a whole new unit like other companies." },
            { name: "Emily Chen", location: "Austin", text: "The installation crew was fantastic. They were in and out in one day, and the new system is whisper quiet." },
          ].map((review, idx) => (
            <div key={idx} className="bg-secondary p-8 rounded-xl relative">
              <div className="absolute -top-4 left-8 text-6xl text-primary/10 font-serif">"</div>
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-4 h-4" />)}
              </div>
              <p className="text-primary mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-bold text-primary">{review.name}</p>
                  <p className="text-xs text-muted flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Coupon Section */}
      <Section bg="primary" className="text-center text-white">
        <div className="max-w-4xl mx-auto border-2 border-dashed border-white/30 rounded-2xl p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">LIMITED TIME</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">$50 OFF ANY REPAIR</h2>
          <p className="text-xl text-gray-200 mb-8">Valid for new residential customers. Cannot be combined with other offers.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="/contact" className="bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Claim Offer
             </Link>
             <a href={`tel:${siteConfig.contact.phone}`} className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-primary transition-colors">
               Call Now
             </a>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section bg="secondary" id="contact">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Get Your Free Quote</h2>
            <p className="text-lg text-muted mb-8">
              Don&apos;t sweat the small stuff—or the big stuff. Fill out the form, and our friendly dispatchers will get you scheduled.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-primary">Call Us 24/7</h4>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-xl font-bold text-accent hover:underline">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-primary">Service Area</h4>
                  <p className="text-muted">Austin, Round Rock, Cedar Park, Pflugerville, Georgetown, & Surroundings.</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}