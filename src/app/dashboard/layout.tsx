"use client"

import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/primereact-sidebar";
import BreadcrumbNavigation from "./components/BreadcrumbNavigation";
import { useValidateToken } from "@/hooks/auth.mutate";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  
  const { isLoading, validate, tokenValid } = useValidateToken();
  const router = useRouter();


  useEffect(() => {
    if(!tokenValid && !isLoading){
       router.replace("/")
       router.refresh();
    }
  }, [tokenValid,isLoading])

  return (
    <>
        <Navbar/>
        <Sidebar />
        <BreadcrumbNavigation/>
        <main className="m-[50px]">{children}</main>
    </>
  );
}
