"use client";

import {createContext, useContext, useState, ReactNode, useEffect} from "react";
import {useSearchParams} from "next/navigation";

interface SectionContextType {
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const searchParams = useSearchParams();

  // Handle back/forward button clicks
  useEffect(() => {
    const handlePopState = () => {
      const section = new URLSearchParams(window.location.search).get("section");
      if (section) {
        setActiveSection(section);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Sync activeSection with URL when searchParams change
  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      setActiveSection(section);
    }
  }, [searchParams]);

  // Handle smooth scrolling when activeSection changes
  useEffect(() => {
    if (activeSection) {
      // Use setTimeout to ensure DOM has updated
      setTimeout(() => {
        document.getElementById(activeSection)?.scrollIntoView({behavior: "smooth"});
      }, 0);
    }
  }, [activeSection]);

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSectionContext() {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error("useSectionContext must be used within SectionProvider");
  }
  return context;
}

