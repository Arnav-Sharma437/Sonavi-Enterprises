"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/#products" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      if (pathname !== "/") {
        router.push(href);
      } else {
        const id = href.replace("/#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href.startsWith("/#")) {
      return false;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 sm:h-24 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Sonavi Enterprises Logo"
                width={360}
                height={90}
                priority
                className="w-[280px] h-[70px] sm:w-[360px] sm:h-[90px] object-contain transition-transform duration-300 hover:scale-[1.02]"
              />
            </Link>
          </div>

          {/* Center: Desktop Nav Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative py-1 text-sm font-semibold transition-colors duration-300 hover:text-brand-teal group ${
                    active ? "text-brand-teal font-bold" : "text-gray-600"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 w-full bg-brand-teal transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                    active ? "scale-x-100" : ""
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Right: Contact & CTA Button */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a 
              href="tel:+919654856548" 
              className="flex items-center text-sm font-bold text-gray-700 hover:text-brand-teal transition-colors"
            >
              <Phone className="h-4 w-4 mr-2 text-brand-teal" />
              <span>+91-9654856548</span>
            </a>
            <Link
              href="/#contact"
              onClick={() => handleLinkClick("/#contact")}
              className="inline-flex items-center justify-center rounded-full bg-brand-orange px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-brand-orange/90 hover:scale-105 hover:shadow-md active:scale-95 cursor-pointer"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 border-b border-gray-200 bg-white" : "max-h-0 opacity-0 overflow-hidden"
        }`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-4 py-4 pb-6 sm:px-6">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`block rounded-md px-3 py-2.5 text-base font-medium transition-colors hover:bg-gray-50 hover:text-brand-teal ${
                  active ? "text-brand-teal bg-gray-50/50" : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="mt-6 px-3 space-y-4">
            <a 
              href="tel:+919654856548" 
              className="flex w-full items-center justify-center rounded-lg border border-gray-200 py-3 text-base font-bold text-gray-700 hover:text-brand-teal transition-colors"
            >
              <Phone className="h-4 w-4 mr-2 text-brand-teal" />
              <span>+91-9654856548</span>
            </a>
            <Link
              href="/#contact"
              onClick={() => handleLinkClick("/#contact")}
              className="flex w-full items-center justify-center rounded-full bg-brand-orange py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-orange/95"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
