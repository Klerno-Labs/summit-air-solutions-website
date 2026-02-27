"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { CheckCircle2, Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="bg-white p-10 rounded-2xl shadow-card text-center h-full flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">Request Received!</h3>
        <p className="text-muted">A team member will contact you within 1 hour during business hours.</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-accent font-semibold hover:underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-card border border-gray-100">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-primary mb-2">Request Service</h3>
        <p className="text-muted">Fill out the form below and we'll get back to you immediately.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-primary">Full Name</label>
            <input 
              required 
              type="text" 
              id="name" 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-semibold text-primary">Phone Number</label>
            <input 
              required 
              type="tel" 
              id="phone" 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
              placeholder="(512) 555-0123"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-semibold text-primary">Service Type</label>
          <select 
            id="service"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
          >
            <option>Emergency AC Repair</option>
            <option>Heating Repair</option>
            <option>New System Installation</option>
            <option>Maintenance Tune-Up</option>
            <option>Indoor Air Quality</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-semibold text-primary">Details</label>
          <textarea 
            id="message" 
            rows={4}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all resize-none"
            placeholder="Briefly describe the issue..."
          ></textarea>
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          size="lg"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Request <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
        
        <p className="text-xs text-center text-muted-foreground mt-4">
          By submitting, you agree to receive text messages at the number provided.
        </p>
      </form>
    </div>
  );
}