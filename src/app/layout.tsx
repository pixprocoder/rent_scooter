import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import ConvexClientProvider from "./Providers";
import { ConvexProvider } from "convex/react";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project",
  description: "Rent a scooter in your city",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body>
          {" "}
          <main>
            <Navbar />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </Providers>
  );
}
