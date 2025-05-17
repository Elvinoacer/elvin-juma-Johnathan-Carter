import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Johnathan Carter, Esq. | Corporate Law Specialist",
  description:
    "Experienced corporate attorney specializing in mergers, acquisitions, and business law.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: "/images/profile.png",
        href: "/images/profile.png",
      },
      {
        media: "(prefers-color-scheme:dark)",
        url: "/images/profile.png",
        href: "/images/profile.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Navbar />
        <main className="min-h-[calc(100vh-140px)]">{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
