"use client";

import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import "./globals.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";

import { Toaster } from "react-hot-toast";
import { QueryClient } from "@tanstack/react-query";
import ReactQueryProvider from "@/lib/provider/ReactQueryProvider";
import LandingPageHeader from "@/components/landing-page-header/LandingPageHeader";
import LandingPageFooter from "@/components/landing-page-footer/LandingPageFooter";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const pathname = usePathname();
    const hideHeaderFooter = useMemo(() => {
    return (
      pathname.startsWith("/auth") ||
      pathname.startsWith("/dashboard")
      );
    }, [pathname]);

  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        <PrimeReactProvider value={{ unstyled: false }}>
          <ReactQueryProvider>
            <Toaster position="top-right" />
            {!hideHeaderFooter &&<LandingPageHeader />}            
            {children}
            {!hideHeaderFooter && <LandingPageFooter />}
          </ReactQueryProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
