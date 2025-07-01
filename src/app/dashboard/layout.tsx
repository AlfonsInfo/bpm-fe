"use client"

import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/primereact-sidebar";
import BreadcrumbNavigation from "./components/BreadcrumbNavigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
        <Navbar/>
        <Sidebar />
        <BreadcrumbNavigation/>
        <main>{children}</main>
    </>
  );
}
