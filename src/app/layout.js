// src/app/layout.js

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";

// Load fonts with CSS variable support and optimization
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: 'swap',
  preload: true,
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  metadataBase: new URL('https://phyothwethwekyaw-portfolio.vercel.app'),
  title: "Phyo Thwe Thwe Kyaw - Frontend Developer Portfolio | Thailand",
  description: "Frontend Developer from Thailand specializing in React, Next.js, and modern web technologies. ICT student passionate about creating responsive, user-friendly web interfaces.",
  keywords: "frontend developer, react developer, next.js, web development, portfolio, Thailand frontend developer, ICT student, responsive web design, JavaScript developer",
  author: "Phyo Thwe Thwe Kyaw",
  robots: "index, follow",
  
  // Open Graph meta tags
  openGraph: {
    title: "Phyo Thwe Thwe Kyaw - Frontend Developer Portfolio",
    description: "Frontend Developer from Thailand specializing in React, Next.js, and modern web technologies. View my projects and skills.",
    url: "https://phyothwethwekyaw-portfolio.vercel.app",
    siteName: "Phyo Thwe Thwe Kyaw Portfolio",
    images: [
      {
        url: "/julie.jpeg",
        width: 1200,
        height: 630,
        alt: "Phyo Thwe Thwe Kyaw - Frontend Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Twitter Card meta tags
  twitter: {
    card: "summary_large_image",
    title: "Phyo Thwe Thwe Kyaw - Frontend Developer Portfolio",
    description: "Frontend Developer from Thailand specializing in React, Next.js, and modern web technologies.",
    creator: "@phyothwethwekyaw",
    images: ["/julie.jpeg"],
  },
  
  // Additional meta tags
  alternates: {
    canonical: "https://phyothwethwekyaw-portfolio.vercel.app",
  },
  
  // Additional SEO meta tags
  category: "Technology",
  classification: "Portfolio",
  coverage: "Worldwide",
  distribution: "Global",
  rating: "General",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(theme);
                } catch (e) {
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://vercel.app" />
        <link rel="dns-prefetch" href="https://netlify.app" />
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#0E0E1A] text-gray-900 dark:text-[#CCCCCC] transition-colors duration-300`}
      >
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow max-w-6xl mx-auto px-4 py-8 w-full">
              {children}
            </main>
            <ScrollToTop />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
