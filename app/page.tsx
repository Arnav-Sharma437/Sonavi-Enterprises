import Link from "next/link";
import Image from "next/image";
import { 
  GlassWater, 
  Coffee, 
  Utensils, 
  UtensilsCrossed, 
  Gift, 
  Building2, 
  Factory, 
  GraduationCap, 
  HeartPulse, 
  Hotel, 
  Landmark, 
  Coins, 
  Home, 
  Cpu, 
  ShoppingBag, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";
import WhyChooseUs from "@/components/WhyChooseUs";
import EnquiryForm from "@/components/EnquiryForm";

// 5 Products
const products = [
  {
    title: "Copper Bottles",
    description: "Premium leak-proof bottles crafted from pure copper. Combining classic elegance with modern wellness, perfect for executive desks.",
    icon: GlassWater,
    image: "/images/products/copper-bottle-set.jpg",
  },
  {
    title: "Copper Mugs",
    description: "Artisanal hammered and smooth finished copper mugs. Adds a touch of luxury to hot and cold corporate beverages.",
    icon: Coffee,
    image: "/images/products/copper-mug.jpg",
  },
  {
    title: "Copper Dinner Sets",
    description: "Exquisite multi-piece dining sets made of heavy-gauge pure copper. Designed for royal presentations and premium gifting.",
    icon: Utensils,
    image: "/images/products/copper-dinner-set.jpg",
  },
  {
    title: "Copper Cutlery Sets",
    description: "Mirror-finished and textured copper cutlery. A sophisticated table addition that speaks volumes of fine craftsmanship.",
    icon: UtensilsCrossed,
  },
  {
    title: "Customized Corporate Gift Sets",
    description: "Tailor-made copper hampers combining bottles, mugs, and customized accessories, beautifully packaged for executives.",
    icon: Gift,
  },
];

// 10 Industries
const industries = [
  { name: "Corporate Offices", icon: Building2 },
  { name: "Manufacturing", icon: Factory },
  { name: "Education", icon: GraduationCap },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Hospitality", icon: Hotel },
  { name: "Government", icon: Landmark },
  { name: "Banking & Finance", icon: Coins },
  { name: "Real Estate", icon: Home },
  { name: "Information Technology", icon: Cpu },
  { name: "Retail & FMCG", icon: ShoppingBag },
];

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-tr from-brand-teal/5 via-brand-green/3 to-brand-orange/5 py-20 lg:py-32">
        <div className="absolute inset-y-0 right-0 -z-10 w-full max-w-lg bg-radial-gradient from-brand-teal/10 to-transparent opacity-70 blur-3xl" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            {/* Left Column (Text Content) */}
            <div className="max-w-3xl lg:col-span-7 animate-slide-up text-left">
              <span className="inline-flex items-center rounded-full bg-brand-teal/10 px-3.5 py-1.5 text-xs font-bold text-brand-teal uppercase tracking-widest">
                Premium Corporate Gifting
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl font-display leading-[1.1]">
                Premium Corporate <span className="text-brand-teal">Gifting Solutions</span> in Copper
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
                Elevate your corporate relationships with timeless, handcrafted copper masterpieces. We specialize in custom-branded, high-quality copper products designed for executives, clients, and employees.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#products"
                  className="inline-flex items-center justify-center rounded-full bg-brand-teal px-8 py-3.5 text-base font-bold text-white shadow-sm transition-all duration-200 hover:bg-brand-teal/95 hover:shadow-md cursor-pointer"
                >
                  Explore Products
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-3.5 text-base font-bold text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:border-gray-400 cursor-pointer"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            {/* Right Column (Hero Lifestyle Image) */}
            <div className="mt-12 lg:mt-0 lg:col-span-5 animate-fade-in">
              <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-xl border border-gray-200/50">
                <Image
                  src="/images/products/copper-bottle-lifestyle.jpg"
                  alt="Premium Handcrafted Copper Bottle in Nature"
                  fill
                  priority
                  sizes="(max-w-7xl) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR PRODUCTS SECTION */}
      <section id="products" className="scroll-mt-20 py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Exquisite Copper Collections
            </h2>
            <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-brand-orange" />
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              Browse our selection of artisan-crafted corporate gifts. Each piece is designed to reflect prestige and deliver therapeutic health benefits.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-teal/20"
                >
                  <div>
                    {product.image ? (
                      /* Photo Container */
                      <div className="relative aspect-[3/2] w-full overflow-hidden bg-gray-100">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          sizes="(max-w-7xl) 100vw, (max-w-1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      /* Icon Placeholder Container (matching size) */
                      <div className="relative aspect-[3/2] w-full overflow-hidden bg-gradient-to-tr from-brand-teal/5 to-brand-orange/5 border-b border-gray-100/50 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xs text-brand-teal">
                          <Icon className="h-8 w-8" />
                        </div>
                      </div>
                    )}
                    
                    {/* Content padding */}
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 font-display">
                        {product.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-gray-600">
                        {product.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="px-8 pb-8">
                    <div className="pt-6 border-t border-gray-50">
                      <Link
                        href="#contact"
                        className="inline-flex items-center text-xs font-bold text-brand-teal hover:text-brand-teal/80 transition-colors"
                      >
                        Enquire for pricing
                        <ArrowRight className="ml-1.5 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US SECTION */}
      <section className="py-20 lg:py-28 bg-brand-teal/[0.02] border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Why Choose Sonavi Enterprises
            </h2>
            <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-brand-orange" />
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              We understand corporate gifting represents your company values. Here is how we ensure seamless procurement.
            </p>
          </div>
          
          <WhyChooseUs />
        </div>
      </section>

      {/* 4. INDUSTRIES WE SERVE */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Industries We Serve
            </h2>
            <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-brand-orange" />
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              Trusted by leading establishments to deliver high-quality custom copper gifts across diverse industry verticals.
            </p>
          </div>

          <div className="mx-auto max-w-4xl grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map((ind, index) => {
              const Icon = ind.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center rounded-xl border border-gray-100 bg-gray-50/50 p-6 text-center shadow-2xs transition-all duration-300 hover:bg-white hover:shadow-xs hover:border-brand-teal/20"
                >
                  <Icon className="h-6 w-6 text-brand-teal" />
                  <span className="mt-3 text-xs font-bold text-gray-800 leading-snug">
                    {ind.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. BULK CORPORATE GIFTING */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-teal to-brand-green px-6 py-16 shadow-xl sm:px-12 lg:px-20 text-white">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-black/10 blur-2xl" />
          
          <div className="relative max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-display">
              Bulk Gifting & Custom Orders
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Planning employee rewards, customer appreciation, or festive gifts like Diwali Hampers? We design custom packaging, handle volume laser engraving, and structure manufacturing lead times to match your corporate deadlines.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-orange px-8 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-brand-orange/95 hover:shadow-md cursor-pointer"
              >
                Discuss Bulk Gifting
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-all cursor-pointer"
              >
                About Our Capacity
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA / CONTACT STRIP */}
      <section id="contact" className="scroll-mt-20 py-20 lg:py-28 bg-brand-green/[0.02] border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16 items-start">
            
            {/* Contact Details & Copy */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center rounded-full bg-brand-orange/10 px-3.5 py-1.5 text-xs font-bold text-brand-orange uppercase tracking-widest">
                  Let's Partner
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display leading-[1.2]">
                  Let's Build Stronger Business Relationships
                </h2>
                <p className="text-sm leading-relaxed text-gray-600">
                  Allow us to partner with you in crafting masterpieces that carry your brand message. Connect with our corporate sales desk for custom quotes, design mockups, and samples.
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-gray-200/80">
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wide">Head Office</h4>
                    <p className="mt-1 text-sm text-gray-600 font-medium">Delhi, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wide">Service Area</h4>
                    <p className="mt-1 text-sm text-gray-600 font-medium">Pan India Delivery & Custom Logistics</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <EnquiryForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
