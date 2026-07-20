import type { Metadata } from "next";
import { Outfit, Roboto_Slab } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-slab",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Deep TMS in Bend, OR | Badlands TMS",
  description:
    "Physician-led Deep TMS in Bend, Oregon. BrainsWay technology for depression, OCD, and more. Medicare, Medicaid, and commercial insurance accepted. Request a consultation.",
  icons: {
    icon: "/images/favicon.png",
  },
  keywords: [
    "Deep TMS Bend OR",
    "Badlands TMS",
    "BrainsWay Deep TMS",
    "treatment resistant depression Oregon",
    "OCD Deep TMS Oregon",
    "TMS therapy Bend",
  ],
  openGraph: {
    title: "Deep TMS in Bend, OR | Badlands TMS",
    description:
      "When medication hasn't been enough — physician-led BrainsWay Deep TMS in Bend, Oregon. Medicare, Medicaid, and commercial insurance accepted. Request a consultation.",
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
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ycc6aem.css" />
      </head>
      <body className={`${outfit.variable} ${robotoSlab.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
