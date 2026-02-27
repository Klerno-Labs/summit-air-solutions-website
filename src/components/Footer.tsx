import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-8 border-t border-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-accent p-1.5 rounded text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-bold">SUMMIT AIR</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Summit Air Solutions has served over 3,000 homes in Austin with expert HVAC services. We are committed to your comfort with upfront pricing and 24/7 emergency support.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 hover:bg-accent rounded-lg transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-accent rounded-lg transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-accent rounded-lg transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-4">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <a href={`tel:${siteConfig.contact.phone}`} className="font-bold text-lg hover:text-accent transition-colors block">
                    {siteConfig.contact.phone}
                  </a>
                  <span className="text-sm text-gray-400">24/7 Emergency Service</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-300 hover:text-accent transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-300 leading-relaxed">
                  {siteConfig.contact.address}
                </span>
              </li>
            </ul>
          </div>

          {/* CTA / Promo */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="font-bold text-lg mb-2">Get $50 Off Your First Service</h4>
            <p className="text-sm text-gray-300 mb-4">New customers only. Mention code SUMMIT50 when booking.</p>
            <Link href="/contact">
              <Button className="w-full bg-accent hover:bg-white hover:text-accent text-white border-none">
                Redeem Offer
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}