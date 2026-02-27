"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-100 py-0" : "bg-transparent py-2"
      )}
    >
      {/* Utility Bar - Hidden on Mobile */}
      <div className="hidden md:flex bg-primary text-white text-xs py-2 px-4 justify-between items-center max-w-7xl mx-auto">
        <div className="flex gap-6 items-center">
          <span className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-accent" />
            NATE Certified Technicians
          </span>
          <span>Serving Greater Austin Since 2018</span>
        </div>
        <div className="flex gap-6 items-center">
          <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-accent transition-colors font-semibold">
            {siteConfig.contact.hours}
          </a>
          <span>Locally Owned & Operated</span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-accent p-2 rounded-lg text-white group-hover:bg-primary transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary leading-none">SUMMIT AIR</h1>
              <span className="text-xs font-medium text-muted tracking-wide">SOLUTIONS</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent relative py-2",
                  pathname === item.href ? "text-accent" : "text-primary/80"
                )}
              >
                {item.title}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a href={`tel:${siteConfig.contact.phone}`} className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
              <Phone className="w-4 h-4 text-accent" fill="currentColor" />
              {siteConfig.contact.phone}
            </a>
            <Link href="/contact" className="hidden md:inline-flex">
              <Button size="sm" className="shadow-lg shadow-orange-200">
                Schedule Service
              </Button>
            </Link>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-primary hover:bg-gray-100 rounded-lg"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out pt-24 px-6 flex flex-col gap-6 overflow-y-auto",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="grid gap-4">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-xl font-semibold py-2 border-b border-gray-100 flex justify-between items-center",
                pathname === item.href ? "text-accent" : "text-primary"
              )}
            >
              {item.title}
              <ArrowRight className="w-4 h-4 opacity-50" />
            </Link>
          ))}
        </div>
        
        <div className="mt-auto pb-8 space-y-4">
          <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center justify-center gap-3 bg-accent text-white p-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-200">
            <Phone className="w-5 h-5" fill="currentColor" />
            Call {siteConfig.contact.phone}
          </a>
          <p className="text-center text-muted text-sm">{siteConfig.contact.hours}</p>
        </div>
      </div>
    </header>
  );
}