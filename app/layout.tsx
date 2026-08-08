import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.startsWith("localhost") ? "http" : "https");
  const origin = host ? `${protocol}://${host}` : "http://localhost:3000";
  const description =
    "Clear, step-by-step help for printer setup, wireless connection, scanning, and common printer issues.";

  return {
    title: "PC Packard | Smart Printer Setup",
    description,
    icons: {
      icon: "/favicon.svg",
    },
    openGraph: {
      title: "PC Packard | Smart Printer Setup",
      description,
      type: "website",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1728,
          height: 909,
          alt: "PC Packard Smart Printer Setup",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "PC Packard | Smart Printer Setup",
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.variable}>{children}</body>
    </html>
  );
}
