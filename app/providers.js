"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { SidebarProvider } from "@/context/SidebarContext"; // Import the SidebarProvider

export function Providers({ children }) {
  const pathName = usePathname(); // Use pathname Hook to check the current path

  return (
    <SidebarProvider>
      <NextUIProvider>
        {pathName === "/signup" || pathName === "/login" ? null : <Navbar />}
        <Sidebar />
        {children}
        <Footer />
      </NextUIProvider>
    </SidebarProvider>
  );
}
