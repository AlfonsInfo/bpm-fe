"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { BreadCrumb } from "primereact/breadcrumb";
import { Home } from "lucide-react";


export default function BreadcrumbNavigation() {
    //get path    
    const pathname = usePathname(); // contoh: "/events/123/detail"
    
    // if excluded hide breadcrumb
    const isExcluded = excludedPath.includes(pathname);
    if (isExcluded) return HIDE_BREADCRUMB;

    // get segment
    const pathSegments = getPathSegment(pathname);

    // mapped segment
    const segmentLabelMap: Record<string, string> = {
        events: "Daftar Event",
        create: "Buat Baru",
        edit: "Edit Event",
        detail: "Detail",
        users: "Pengguna",
        dashboard: "Dashboard",
    };

    // check segmen dinamis
    const isDynamic = (segment: string) => /^\d+$/.test(segment); // misalnya ID numeric
    
    const items = pathSegments.map((segment, index) => {
        const href = "/dashboard/" + pathSegments.slice(0, index + 1).join("/");

        const label = isDynamic(segment)
            ? `ID ${segment}`
            : segmentLabelMap[segment] || decodeURIComponent(segment);

        return {
            label,
            template: (item: any) => (
                <Link href={href} className="text-blue-600 hover:underline capitalize">
                {item.label}
            </Link>
            ),
        };
    });

    const home = { icon: <Home />, url: "/dashboard" };

    return (
        <div className="mb-4">
            <BreadCrumb model={items} home={home} />
        </div>
    );
}


const excludedPath = [
    '/dashboard'
];
const HIDE_BREADCRUMB = null;
function getPathSegment(pathname : string){
    return pathname
        .split("/")
        .filter(Boolean)
        .filter((f) => f !== "dashboard");
}