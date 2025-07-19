"use client"

import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/primereact-sidebar";
import BreadcrumbNavigation from "./components/BreadcrumbNavigation";
import { useValidateToken } from "@/hooks/auth.mutate";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/hooks/auth.state";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  const router = useRouter();
  const passLoginProcess = useAuthStore((state) => state.passLoginProcess);
  const { isLoading, validate, tokenValid } = useValidateToken({
    enabled : passLoginProcess
  });

  useEffect(() => {
    // Jika belum login, langsung redirect
    if (!passLoginProcess) {
      router.replace("/auth");
      router.refresh();
    }

    // Jika login tapi token tidak valid
    if (passLoginProcess && !isLoading && !tokenValid) {
      router.replace("/auth");
      router.refresh();
    }
    
  }, [passLoginProcess,tokenValid,isLoading])

  return (
    <>
        <Navbar/>
        <Sidebar />
        <BreadcrumbNavigation/>
        <main className="m-[50px]">{children}</main>
    </>
  );
}
