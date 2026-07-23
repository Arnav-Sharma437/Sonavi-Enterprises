import Link from "next/link";
import Image from "next/image";
import { Award, Shield, Users, Mail, Phone, Calendar } from "lucide-react";
import WhyChooseUs from "@/components/WhyChooseUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sonavi Enterprises",
  description: "Learn about the heritage of Sonavi Enterprises, established in 2019 by Prabhjot Singh Pruthi in Delhi, crafting premium copper corporate gifts.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* 1. Page Header/Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-blue via-brand-teal to-brand-orange/80 gradient-bg-animate py-24 lg:py-32 text-center text-white">
        <div className="absolute inset-0 -z-10 bg-black/10" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
          <span className="inline-flex items-center rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-bold text-white uppercase tracking-widest backdrop-blur-xs">
            Our Heritage
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl font-display">
            About Sonavi Enterprises
          </h1>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-brand-orange" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90">
            Delhi's leading corporate gifting brand specializing in custom copper creations for business relations, employees, and executives.
          </p>
        </div>
      </section>

      {/* 2. About Us - Detailed Copy */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Story Content */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 font-display">
                Crafting Legacies Since 2019
              </h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Sonavi Enterprises was founded in 2019 by Prabhjot Singh Pruthi in Delhi, India, with a singular vision: to craft masterpieces in pure copper that bridge corporate wellness with premium art. What began as a boutique design workshop has evolved into one of Delhi's premier manufacturers and suppliers of certified copper corporate gifting products.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                We believe that a corporate gift should be more than a simple transaction; it should be an expression of value, health, and exquisite craftsmanship. Over the years, we have served leading corporate houses, supplying beautifully personalized copper bottles, mugs, tableware, and custom sets designed to leave a lasting mark of sophistication.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                Each product in our catalog undergoes rigorous quality checks to ensure 99.9% copper purity, joint-free leak-proof structures, and food-safe coatings. Combined with our state-of-the-art laser engraving and customized luxury packaging, we turn utility items into premium corporate keepsakes.
              </p>
            </div>

            {/* Visual/Feature Column */}
            <div className="bg-brand-teal/[0.02] border border-gray-100 rounded-2xl p-8 space-y-6">
              <h3 className="text-lg font-bold text-gray-900 font-display">
                Our Core Pillars
              </h3>
              
              <div className="flex items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal flex-shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-gray-800">Uncompromised Artistry</h4>
                  <p className="mt-1 text-xs text-gray-600">Pure materials shaped by skilled hands, preserving traditional Indian hammering and forming techniques.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green flex-shrink-0">
                  <Shield className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-gray-800">B2B Standards</h4>
                  <p className="mt-1 text-xs text-gray-600">Punctual timelines, custom sample approvals, robust shipment logistics, and transparent communication.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange flex-shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-gray-800">Sustainable Elegance</h4>
                  <p className="mt-1 text-xs text-gray-600">Eco-friendly copper material and custom cardboard or wooden packaging designed to minimize plastic waste.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Row */}
      <section className="bg-brand-teal py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-extrabold font-display">2019</div>
              <div className="text-xs font-semibold text-white/80 uppercase tracking-widest">Established in Delhi</div>
            </div>
            <div className="space-y-2 border-t border-white/10 pt-6 sm:border-t-0 sm:border-x sm:border-white/10 sm:pt-0">
              <div className="text-4xl font-extrabold font-display">100%</div>
              <div className="text-xs font-semibold text-white/80 uppercase tracking-widest">Pure Certified Copper</div>
            </div>
            <div className="space-y-2 border-t border-white/10 pt-6 sm:border-t-0 sm:pt-0">
              <div className="text-4xl font-extrabold font-display">Pan India</div>
              <div className="text-xs font-semibold text-white/80 uppercase tracking-widest">Insured Logistics Network</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Mission & Our Vision */}
      <section className="py-20 bg-brand-teal/[0.02] border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Mission */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">The Directive</span>
              <h3 className="mt-2 text-2xl font-bold text-gray-900 font-display">Our Mission</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                To promote health, wellness, and luxury in corporate circles by delivering handcrafted, high-grade copper gifting solutions. We aim to inspire healthier lifestyles while helping businesses express genuine appreciation and nurture enduring corporate relationships.
              </p>
            </div>
            {/* Vision */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">The Horizon</span>
              <h3 className="mt-2 text-2xl font-bold text-gray-900 font-display">Our Vision</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                To be recognized globally as the premier B2B corporate gifting partner for handcrafted copper masterpieces, pioneering in eco-friendly designs, premium custom engraving technologies, and bespoke sustainable luxury packaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us (Shorter Version) */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Why Partner With Us
            </h2>
            <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-brand-orange" />
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              A summary of our core operational advantages for hassle-free corporate procurement.
            </p>
          </div>
          
          <WhyChooseUs short={true} />
        </div>
      </section>

      {/* 6. Founder Note / Closing */}
      <section className="py-20 bg-brand-green/[0.02] border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block">
            <span className="absolute -top-6 -left-6 text-6xl text-brand-teal/20 font-serif">“</span>
            <p className="text-base md:text-lg italic leading-relaxed text-gray-700 relative z-10">
              At Sonavi Enterprises, we don't just sell copper products; we craft legacies of appreciation. Every hammer stroke on our copper is a testament to the artisan's dedication and our promise of uncompromised luxury to your brand.
            </p>
            <span className="absolute -bottom-10 -right-6 text-6xl text-brand-teal/20 font-serif">”</span>
          </div>
          <div className="mt-10">
            <div className="text-lg font-bold text-gray-900 font-display">Prabhjot Singh Pruthi</div>
            <div className="text-xs font-semibold text-brand-teal uppercase tracking-widest mt-1">Founder, Sonavi Enterprises</div>
          </div>
        </div>
      </section>

      {/* 7. CTA at Bottom linking to contact */}
      <section className="bg-gradient-to-r from-brand-teal to-brand-green py-16 text-white text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight font-display">
            Ready to Begin Customizing Your Order?
          </h2>
          <p className="mt-4 text-base text-white/90">
            Contact Delhi's copper corporate gifting specialist today. Let us help you select products and customize your mockups.
          </p>
          <div className="mt-8">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-orange px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-brand-orange/95 hover:shadow-lg cursor-pointer"
            >
              Contact Our Sales Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
