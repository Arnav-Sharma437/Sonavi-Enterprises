import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 text-gray-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Brand Info */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Sonavi Enterprises Logo"
                width={200}
                height={200}
                className="w-[200px] h-[100px] object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              Delhi's premier corporate gifting company, crafting masterpieces in pure copper since 2019. We specialize in bespoke, elegant solutions that build lasting business relationships.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-brand-teal transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-brand-teal transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-brand-teal transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-brand-teal transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-teal transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-teal transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-brand-teal transition-colors">Our Products</Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-brand-teal transition-colors">Request a Quote</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-brand-teal flex-shrink-0 mt-0.5" />
                <span>Head Office: Delhi, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-brand-teal flex-shrink-0" />
                <a href="tel:+919654856548" className="hover:text-brand-teal transition-colors font-semibold">+91-9654856548</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-brand-teal flex-shrink-0" />
                <a href="mailto:info@sonavienterprises.com" className="hover:text-brand-teal transition-colors">info@sonavienterprises.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p>&copy; {currentYear} Sonavi Enterprises. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Crafting Masterpieces • Pan India Delivery</p>
        </div>
      </div>
    </footer>
  );
}
