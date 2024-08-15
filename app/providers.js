"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export function Providers({ children }) {
  const pathName = usePathname(); //Use pathname Hook to check Pathname in which page the component is rendered
  return (
    <NextUIProvider>
      {
        // Restricting Navbar not to show on signup and login page
        pathName === "/signup" || pathName === "/login" ? "" : <Navbar />
      }
      <Sidebar />
      {children}
      <Footer />
    </NextUIProvider>
  );
}
