import { createContext, useState } from "react";

// Create the context
export const SidebarContext = createContext();

// Create the provider component
export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen); // Toggle the sidebar
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
