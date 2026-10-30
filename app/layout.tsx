import type { Metadata } from "next";
import { Inter } from "next/font/google";

// @ts-ignore
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

// Fix: Check if URL has http/https, otherwise fallback safely
const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteUrl = envUrl && envUrl.startsWith("http") ? envUrl : "http://localhost:3000";

const schoolName = "Tapovan Vidhya Sankul Ankolvadi-Gir";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${schoolName} | Excellence in Education`,
    template: `%s | ${schoolName}`,
  },
  description:
    "Tapovan Vidhya Sankul, Ankolvadi-Gir: quality school education in Gujarati and English medium. Admissions, results, faculty and facilities.",
};

const schoolJsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: schoolName,
  url: siteUrl,
};

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <head>
        {/* Fix: SEO Script ko <head> me daala */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolJsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-[#F8F9FA] flex flex-col min-h-screen text-gray-900`}>
        {/* Header / Navbar */}
        <Navbar />
        
        {/* Main Content (Home Page yahan aayega) */}
        <main className="flex-grow">{children}</main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}