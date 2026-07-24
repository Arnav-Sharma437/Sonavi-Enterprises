"use client";

import { useRef, useEffect, useState } from "react";
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
  MapPin,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import WhyChooseUs from "@/components/WhyChooseUs";
import EnquiryForm from "@/components/EnquiryForm";

// 5 Products
const products = [
  {
    title: "Copper Bottles",
    description: "Premium leak-proof bottles crafted from pure copper. Combining classic elegance with modern wellness, perfect for executive desks.",
    icon: GlassWater,
    image: "/images/products/copper-bottle-set.PNG",
  },
  {
    title: "Copper Mugs",
    description: "Artisanal hammered and smooth finished copper mugs. Adds a touch of luxury to hot and cold corporate beverages.",
    icon: Coffee,
    image: "/images/products/copper-mug.PNG",
  },
  {
    title: "Copper Dinner Sets",
    description: "Exquisite multi-piece dining sets made of heavy-gauge pure copper. Designed for royal presentations and premium gifting.",
    icon: Utensils,
    image: "/images/products/copper-dinner-set.PNG",
  },
  {
    title: "Copper Cutlery Sets",
    description: "Mirror-finished and textured copper cutlery. A sophisticated table addition that speaks volumes of fine craftsmanship.",
    icon: UtensilsCrossed,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Customized Corporate Gift Sets",
    description: "Tailor-made copper hampers combining bottles, mugs, and customized accessories, beautifully packaged for executives.",
    icon: Gift,
    image: "/images/products/IMG_9540.PNG",
  },
];

// Triple the products array to support seamless infinite loop scrolling
const extendedProducts = [...products, ...products, ...products];

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
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Position the scroll container to the middle set on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (carouselRef.current) {
        const card = carouselRef.current.firstElementChild as HTMLElement;
        if (card) {
          const cardWidth = card.getBoundingClientRect().width + 32; // card width + 32px gap
          carouselRef.current.scrollLeft = cardWidth * 5;
        }
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Listen to scrolling to perform seamless boundary jumps when scroll stops
  const handleScroll = () => {
    if (!carouselRef.current) return;
    
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      if (!carouselRef.current) return;
      const { scrollLeft } = carouselRef.current;
      const card = carouselRef.current.firstElementChild as HTMLElement;
      if (!card) return;
      
      const cardWidth = card.getBoundingClientRect().width + 32;
      const singleSetWidth = cardWidth * 5;
      
      // If we scroll into the first set, jump to corresponding position in second set
      if (scrollLeft < singleSetWidth - 10) {
        carouselRef.current.scrollTo({
          left: scrollLeft + singleSetWidth,
          behavior: "auto"
        });
      } 
      // If we scroll into the third set, jump to corresponding position in second set
      else if (scrollLeft >= (singleSetWidth * 2) - 10) {
        carouselRef.current.scrollTo({
          left: scrollLeft - singleSetWidth,
          behavior: "auto"
        });
      }
    }, 150);
  };

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft } = carouselRef.current;
      const card = carouselRef.current.firstElementChild as HTMLElement;
      if (!card) return;
      
      const cardWidth = card.getBoundingClientRect().width + 32;
      
      // Scroll by 1 card at a time for optimal snap transition
      carouselRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth,
        behavior: "smooth",
      });
    }
  };

  // Autoplay functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      scroll("right");
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="w-full">
      {/* 1. HERO SECTION (Text Left, Image Right) */}
      <section className="relative overflow-hidden bg-gradient-to-tr from-brand-teal/10 via-brand-green/5 to-brand-orange/10 gradient-bg-animate py-20 lg:py-32">
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
                  className="inline-flex items-center justify-center rounded-full bg-brand-teal px-8 py-3.5 text-base font-bold text-white shadow-sm transition-all duration-300 hover:bg-brand-teal/90 hover:scale-105 hover:shadow-md active:scale-95 cursor-pointer"
                >
                  Explore Products
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-3.5 text-base font-bold text-gray-700 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            {/* Right Column (Hero Product Image) */}
            <div className="mt-12 lg:mt-0 lg:col-span-5 animate-fade-in">
              <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-xl border border-gray-200/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <Image
                  src="/images/products/copper-bottle-lifestyle.PNG"
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

          <div className="relative mt-16 group/carousel px-4">
            {/* Left Button */}
            <button
              onClick={() => scroll("left")}
              className="absolute -left-2 lg:-left-6 top-[40%] -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-gray-200 shadow-md text-brand-teal hover:bg-brand-teal hover:text-white transition-all cursor-pointer focus:outline-none"
              aria-label="Previous Products"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Right Button */}
            <button
              onClick={() => scroll("right")}
              className="absolute -right-2 lg:-right-6 top-[40%] -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-gray-200 shadow-md text-brand-teal hover:bg-brand-teal hover:text-white transition-all cursor-pointer focus:outline-none"
              aria-label="Next Products"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Carousel Container */}
            <div
              ref={carouselRef}
              onScroll={handleScroll}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none pb-4"
            >
              {extendedProducts.map((product, index) => {
                const Icon = product.icon;
                return (
                  <div
                    key={index}
                    className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xs transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-brand-teal/20 w-[80%] sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.3px)] shrink-0 snap-start"
                  >
                    <div>
                      {product.image ? (
                        /* Photo Container */
                        <div className="relative aspect-[3/2] w-full overflow-hidden bg-white">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            sizes="(max-w-7xl) 100vw, (max-w-1200px) 50vw, 33vw"
                            className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        /* Icon Placeholder Container (matching size) */
                        <div className="relative aspect-[3/2] w-full overflow-hidden bg-gradient-to-tr from-brand-teal/5 to-brand-orange/5 border-b border-gray-100/50 flex items-center justify-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xs text-brand-teal transition-transform duration-300 group-hover:scale-110">
                            <Icon className="h-8 w-8" />
                          </div>
                        </div>
                      )}
                      
                      {/* Content padding */}
                      <div className="p-8">
                        <h3 className="text-xl font-bold text-gray-900 font-display transition-colors duration-300 group-hover:text-brand-teal">
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
                          <ArrowRight className="ml-1.5 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
            <span className="inline-flex items-center rounded-full bg-brand-teal/10 px-3.5 py-1.5 text-xs font-bold text-brand-teal uppercase tracking-widest">
              Pan-India Supply
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Industries We Serve
            </h2>
            <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-brand-orange" />
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              Sonavi Enterprises delivers pure copper corporate gifts to diverse industry verticals, backed by custom engraving and reliable delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center p-8 rounded-2xl border border-gray-100 bg-white text-center shadow-xs transition-all duration-300 hover:border-brand-teal/20 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teal/5 text-brand-teal transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-gray-800 tracking-wide uppercase">
                    {item.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CONTACT / ENQUIRY SECTION */}
      <section id="contact" className="scroll-mt-20 py-20 lg:py-28 bg-gray-50/50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16 items-start">
            
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="inline-flex items-center rounded-full bg-brand-teal/10 px-3.5 py-1.5 text-xs font-bold text-brand-teal uppercase tracking-widest">
                  Contact Us
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
                    <p className="mt-1 text-sm text-gray-600 font-medium">11/108, Third Floor, Subhash Nagar, Near Suraya Hotel, Rajouri Garden, Delhi - 110027</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wide">Contact Number</h4>
                    <p className="mt-1 text-sm text-gray-600 font-medium">
                      <a href="tel:+919654856548" className="hover:text-brand-teal transition-colors font-bold">+91-9654856548</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal flex-shrink-0">
                    <MapPin className="h-5 w-5" />
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
