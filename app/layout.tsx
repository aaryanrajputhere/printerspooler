import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
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
    title: "Printerspooler | Smart Printer Setup",
    description,
    icons: {
      icon: "/favicon.svg",
    },
    openGraph: {
      title: "Printerspooler | Smart Printer Setup",
      description,
      type: "website",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1728,
          height: 909,
          alt: "Printerspooler Smart Printer Setup",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Printerspooler | Smart Printer Setup",
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
  const googleTagManagerId =
    process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-5RWHTGKX";

  return (
    <html lang="en">
      <body className={jost.variable}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${googleTagManagerId}');`}
        </Script>
      </body>
    </html>
  );
}
