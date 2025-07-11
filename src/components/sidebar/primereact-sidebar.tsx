"use client";
import { Sidebar as PrimereactSidebar } from "primereact/sidebar";
import { useSidebarStore } from "./store/sidebar.store";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // lucide-react optional, bisa ganti pakai unicode

export default function Sidebar() {
    const isVisible = useSidebarStore((state) => state.isVisible);
    const closeSidebar = useSidebarStore((state) => state.closeSidebar);
    const [isEventOpen, setIsEventOpen] = useState(false);
    const [isGeneralInfoOpen, setIsGeneralInfoOpen] = useState(false);

    return (
        <PrimereactSidebar visible={isVisible} onHide={closeSidebar}>
            <h2 className="text-xl font-bold mb-4">Menu</h2>

            <div className="space-y-2">
                <Link
                    href="/"
                    className="block w-full px-4 py-2 rounded text-left hover:bg-gray-100 font-medium"
                >
                    Home
                </Link>
                  <button
                    onClick={() => setIsGeneralInfoOpen((prev) => !prev)}
                    className="flex items-center justify-between w-full px-4 py-2 rounded text-left hover:bg-gray-100 font-medium"
                >
                    <span>General Info</span>
                    {isGeneralInfoOpen? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {isGeneralInfoOpen && (
                    <div className="ml-6 space-y-1">
                        <Link
                            href="/dashboard/events"
                            className="block px-4 py-1 rounded text-left hover:bg-gray-100 text-sm"
                        >
                            About
                        </Link>
                        <Link
                            href="/dashboard/events/create"
                            className="block px-4 py-1 rounded text-left hover:bg-gray-100 text-sm"
                        >
                            Contact
                        </Link>
                    </div>
                )}
                <Link
                    href="/dashboard/events"
                    className="block w-full px-4 py-2 rounded text-left hover:bg-gray-100 font-medium"
                >
                    Events
                </Link>
                <Link
                    href="/dashboard/cells"
                    className="block w-full px-4 py-2 rounded text-left hover:bg-gray-100 font-medium"
                >
                    Group Cells
                </Link>
                <Link
                    href="/dashboard/articles"
                    className="block w-full px-4 py-2 rounded text-left hover:bg-gray-100 font-medium"
                >
                    Articles
                </Link>
                {/* Menu with Submenu */}
                <button
                    onClick={() => setIsEventOpen((prev) => !prev)}
                    className="flex items-center justify-between w-full px-4 py-2 rounded text-left hover:bg-gray-100 font-medium"
                >
                    <span>Master Data</span>
                    {isEventOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {isEventOpen && (
                    <div className="ml-6 space-y-1">
                        <Link
                            href="/dashboard/master-users"
                            className="block px-4 py-1 rounded text-left hover:bg-gray-100 text-sm"
                        >
                            Users
                        </Link>
                        <Link
                            href="/dashboard/master-events"
                            className="block px-4 py-1 rounded text-left hover:bg-gray-100 text-sm"
                        >
                            Events
                        </Link>
                        <Link
                            href="/dashboard/master-group-cells"
                            className="block px-4 py-1 rounded text-left hover:bg-gray-100 text-sm"
                        >
                            Group Cells
                        </Link>
                        <Link
                            href="/dashboard/events/categories"
                            className="block px-4 py-1 rounded text-left hover:bg-gray-100 text-sm"
                        >
                            Event Categories
                        </Link>
                    </div>
                )}
            </div>
        </PrimereactSidebar>
    );
}
