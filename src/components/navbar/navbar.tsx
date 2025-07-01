"use client"
import React from "react";
import { useSidebarStore } from "../sidebar/store/sidebar.store";
import { Button } from "primereact/button";

const Navbar = () => {
    const toggleSidebar= useSidebarStore(state => state.toggleSidebar)
  return (
    <nav className="w-full bg-white shadow px-4 py-3 flex justify-between items-center">
      {/* Nama Aplikasi */}
      <div className="text-xl font-semibold text-gray-800">
        NamaAplikasi
      </div>

      {/* Tombol Buka Sidebar */}
      <Button
        onClick={toggleSidebar}
        className="text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        {/* Icon hamburger */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Button>
    </nav>
  );
};

export default Navbar;
