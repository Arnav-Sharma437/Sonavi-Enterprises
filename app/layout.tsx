import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sonavi Enterprises | Premium Copper Corporate Gifting Solutions",
  description: "Sonavi Enterprises is Delhi's premium corporate gifting company specializing in pure copper bottles, mugs, dinner sets, and customized gift hampers.",
  keywords: ["corporate gifting", "copper gifts", "copper bottles", "corporate gifting delhi", "copper cutlery", "diwali corporate gifts", "customized gifting"],
  authors: [{ name: "Sonavi Enterprises" }],
  creator: "Sonavi Enterprises",
  publisher: "Sonavi Enterprises",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Sonavi Enterprises | Premium Copper Corporate Gifting Solutions",
    description: "Delhi's leading corporate gifting brand specializing in custom copper creations for business relations, employees, and executives.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col font-sans antialiased bg-background text-foreground">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
