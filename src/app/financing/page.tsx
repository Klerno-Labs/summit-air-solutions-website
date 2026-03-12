import { Metadata } from "next";
import { CreditCard, Percent, Shield } from "lucide-react";
import Section from "@/components/Section";
import MaintenanceCalculator from "@/components/MaintenanceCalculator";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financing Options | Summit Air Solutions",
  description: "Get the comfort you deserve now with flexible financing options.",
};

export default function FinancingPage() {
  return (
    <>
      <section className="bg-primary pt-32 pb-20 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Comfort Now. Pay Later.</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
          Don&apos;t let a broken budget break your comfort. We offer flexible financing plans to fit any situation.
        </p>
      </section>

      <Section bg="secondary">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-10 shadow-card text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Financing Calculator</h2>
          <MaintenanceCalculator />
        </div>
      </Section>

      <Section bg="white">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { title: "Same-as-Cash", desc: "0% interest for 18 months on approved credit.", icon: Percent },
            { title: "Low Monthly", desc: "Plans starting as low as $99/month.", icon: CreditCard },
            { title: "Quick Approval", desc: "Get approved in minutes, not days.", icon: Shield }
          ].map((feature, idx) => (
            <div key={idx} className="text-center p-6 border border-gray-100 rounded-xl">
              <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-muted">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Ready to Upgrade?</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            A new high-efficiency system can lower your monthly energy bills by up to 30%. Let us help you calculate the savings.
          </p>
          <Link href="/contact">
            <Button size="lg">Apply for Financing</Button>
          </Link>
          <p className="text-xs text-muted mt-4">Financing provided by Wells Fargo. Subject to credit approval.</p>
        </div>
      </Section>
    </>
  );
}