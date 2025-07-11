"use client"
import { useSidebarStore } from "@/components/sidebar/store/sidebar.store";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";


export default function DashboardPage() {
    console.log("info")
    const toggleSidebar = useSidebarStore(state => state.toggleSidebar)

    return <>
        <Button severity="danger" label="heloy" onClick={toggleSidebar} />
    </>
}