import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import React, { useState } from 'react';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hustlers | PedalStart ",
<<<<<<< HEAD
  description: "",
  keywords: [''],
  authors: [{ }],
  creator: '',
  publisher: '',
=======
  description: "Hustlers is a platform of micro communities",
  keywords: ['HUSTLERS', 'PEDALSTART', 'FOUNDERS', 'DELHI'],
  authors: [{ name: 'PedalStart', url: '' }],
  creator: 'Kushagra SHarma',
  publisher: 'PedalStart',
>>>>>>> fc47cd2134ffbeaa040aad1a06a3b023cf556511
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'HUSTLERS | PEDALSTART',
    description: 'Hustlers is a platform of micro communities',
    url: '',
    siteName: '',
    images: [
      {
        url: '',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  icons: {
    icon: '/android-chrome-192x192.png',
    shortcut: '/apple-touch-icon.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon.png',
    },
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
