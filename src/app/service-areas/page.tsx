import { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

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
  { name: "Leander", desc: "Crystal Falls, Mason Creek, Block House Creek" }
];

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-secondary pt-32 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Proudly Serving Greater Austin</h1>
        <