import { Calendar, Award, Palette, Gift, BadgePercent, Truck, Headset, Settings } from "lucide-react";

export interface ChecklistItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const whyChooseUsData: ChecklistItem[] = [
  {
    title: "Established in 2019",
    description: "Proven expertise in producing and delivering corporate masterpieces across India since 2019.",
    icon: Calendar,
  },
  {
    title: "Premium Quality Copper",
    description: "Crafted from 99.9% pure, certified copper for high aesthetic value and health benefits.",
    icon: Award,
  },
  {
    title: "Custom Branding Solutions",
    description: "Integrate your brand identity seamlessly with high-precision laser engraving or custom embossing.",
    icon: Palette,
  },
  {
    title: "Exquisite Custom Packaging",
    description: "Bespoke gift boxes with velvet inserts or screen-printed sleeves to deliver an outstanding first impression.",
    icon: Gift,
  },
  {
    title: "Competitive Bulk Pricing",
    description: "Manufacturer-direct pricing structures designed to provide maximum value for high-volume orders.",
    icon: BadgePercent,
  },
  {
    title: "Pan-India Safe Delivery",
    description: "Trusted logistics partners ensuring secure, transit-insured shipment to any business hub in India.",
    icon: Truck,
  },
  {
    title: "Dedicated Account Support",
    description: "A professional coordinator to manage your timeline, sample requests, and customization briefs.",
    icon: Headset,
  },
  {
    title: "Tailored Custom Curation",
    description: "Adaptable product groupings and hampers designed specifically to match your target budget.",
    icon: Settings,
  },
];

export default function WhyChooseUs({ short = false }: { short?: boolean }) {
  const displayItems = short ? whyChooseUsData.slice(0, 4) : whyChooseUsData;

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {displayItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg hover:border-brand-teal/20"
          >
            {/* Background Hover Glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-teal/[0.04] via-brand-orange/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teal/5 text-brand-teal transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-white">
              <Icon className="h-6 w-6 transition-transform duration-500 group-hover:rotate-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-teal transition-colors duration-300">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
