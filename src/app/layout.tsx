import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Grayson County Chamber of Commerce",
    template: "%s | Grayson County Chamber of Commerce",
  },
  description:
    "The Grayson County Chamber of Commerce supports local businesses, promotes economic growth, and strengthens community in Leitchfield, Kentucky.",
  keywords: [
    "Grayson County",
    "Chamber of Commerce",
    "Leitchfield",
    "Kentucky",
    "local business",
    "networking",
  ],
  openGraph: {
    title: "Grayson County Chamber of Commerce",
    description:
      "Supporting local businesses and strengthening our community in Grayson County, Kentucky.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "Grayson County Chamber of Commerce",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Grayson County Chamber of Commerce",
    description:
      "Supporting local businesses and strengthening our community in Grayson County, Kentucky.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <div className="bg-yellow-400 text-black text-center py-2 px-4 text-sm font-semibold">
          This is a demo site and is not official or affiliated with the Grayson County Chamber of Commerce.
        </div>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
