import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MGC Tecnologia",
  description: "Generated by BSoft",
  openGraph: {
    title: "MGC Tecnologia",
    description: "Generated by BSoft",
    siteName: "MGC Tecnologia",
    url: "https://www.mgctecnologia.com",
    images: [
      {
        url: "https://www.mgctecnologia.com/logo/MGC.png",
        alt: "MGC Tecnologia Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
