import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ViewportNormalizer from "@/components/layout/ViewportNormalizer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#060914",
};

export const metadata: Metadata = {
  title: "Pavilion Square KL | Luxury Residences & Corporate Suites in Bukit Bintang",
  description:
    "Pavilion Square KL — 67-storey luxury residences and 25-storey corporate suites opposite Pavilion KL Mall. 118m infinity pool, sky wellness, fully furnished units. The epicentre of luxury living in Kuala Lumpur.",
  keywords: [
    "luxury residences Kuala Lumpur",
    "Pavilion Square KL",
    "infinity pool KL",
    "Bukit Bintang luxury condo",
    "serviced residence KL",
    "Pavilion Group development",
    "luxury property Malaysia",
    "sky gym Kuala Lumpur",
    "corporate suites KL",
    "fully furnished condo KL",
    "Jalan Raja Chulan property",
    "KLCC luxury living",
  ],
  openGraph: {
    title: "Pavilion Square KL | The Epicentre of Luxury Living",
    description:
      "960 luxury residences, 106 corporate suites, and over 70,000 sq.ft. of world-class facilities. Connected to Pavilion KL Mall via direct link bridge.",
    type: "website",
    locale: "en_MY",
    images: [
      {
        url: "https://www.pavillionsquare.com.my/wp-content/uploads/2025/07/Pavillion-Square-Street-View.webp",
        width: 1200,
        height: 630,
        alt: "Pavilion Square KL",
      },
    ],
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
        {/* Google tag (gtag.js) — Google Ads Conversion Tracking AW-17978275260 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17978275260" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17978275260');
            `,
          }}
        />
        {/* Render-blocking: detect browser zoom + normalize font-size BEFORE any paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement,w=window.innerWidth,s=screen.availWidth||screen.width,o=window.outerWidth;if(w<=640){d.style.setProperty("font-size","14px","important");return}var m=o>=s-60;if(m){var e=s-20,z=e/w;if(z>1.08&&z<2.5){d.style.zoom=(1/z).toFixed(4);d.style.setProperty("font-size","14px","important");return}}var f=Math.min(14,Math.max(11.5,8+0.003125*w));d.style.setProperty("font-size",f+"px","important")})();`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-dark-bg text-champagne`}
        suppressHydrationWarning
      >
        <div id="google_translate_element" style={{ display: "none" }} dangerouslySetInnerHTML={{ __html: "" }} suppressHydrationWarning></div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,zh-CN,zh-TW', autoDisplay: false}, 'google_translate_element');
              }
            `,
          }}
        />
        <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async defer></script>

        <ViewportNormalizer />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
