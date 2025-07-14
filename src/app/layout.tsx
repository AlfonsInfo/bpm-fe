"use client";

import { PrimeReactProvider } from "primereact/api";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "@/lib/provider/ReactQueryProvider";
import LandingPageHeader from "@/components/landing-page-header/LandingPageHeader";
import LandingPageFooter from "@/components/landing-page-footer/LandingPageFooter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        <PrimeReactProvider value={{ unstyled: false }}>
          <ReactQueryProvider>
            <Toaster position="top-right" />
            <LandingPageHeader />
            {children}
            <LandingPageFooter />
          </ReactQueryProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
