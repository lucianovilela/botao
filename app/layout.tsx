//import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import SEO from '@/app/components/SEO';

import Analytics from '@/app/components/Analytics';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>

        <SEO />
        <Analytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}



        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NJXQB2G7"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>


      </body>
    </html>
  );
}
