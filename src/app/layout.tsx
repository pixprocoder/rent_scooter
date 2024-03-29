import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import ConvexClientProvider from "./ConvexClientProvider";

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
    <html lang="en">
      <body>
        <ConvexClientProvider>
          {" "}
          <main>
            <Navbar />
            {children}
            <Footer />
          </main>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
