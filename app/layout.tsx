import { ReactNode } from "react";
import Navbar from "./Navbar";
import "./globals.css";
import Footer from "./Footer";
export const metadata = {
  title: "Sadiatul Marzia | Portfolio",
  description: "My personal portfolio in Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        
        <main>{children}</main> {/* Page-specific content */}
        
      </body>
    </html>
  );
}