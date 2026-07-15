import type { Metadata } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TMS Therapy in Bend, OR | Badlands TMS",
  description:
    "FDA-approved TMS therapy for depression and OCD in Bend, Oregon. Brainsway Deep TMS covered by most major insurances. Call (541) 323-8705.",
  icons: {
    icon: "/images/favicon.png",
  },
  keywords: [
    "TMS Bend OR",
    "Badlands TMS",
    "depression treatment Bend",
    "Brainsway Deep TMS",
    "treatment resistant depression Oregon",
    "OCD TMS Oregon",
  ],
  openGraph: {
    title: "TMS Therapy in Bend, OR | Badlands TMS",
    description:
      "Safe, FDA-approved Transcranial Magnetic Stimulation for depression and OCD — hope when antidepressants haven't been enough.",
    url: "https://www.badlandstms.com",
    siteName: "Badlands TMS",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${sourceSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
