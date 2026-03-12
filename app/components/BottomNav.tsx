"use client";

import {GoHome, GoHomeFill} from "react-icons/go";
import {useSectionContext} from "@/app/context/SectionContext";
import {useRouter, useSearchParams} from "next/navigation";
import {useEffect} from "react";

export default function BottomNav() {
  const {activeSection, setActiveSection} = useSectionContext();
  const router = useRouter();

  const titles = [
    {title: "Home", sectionId: "hero"},
    {title: "About Me", sectionId: "about"},
    {title: "Skills", sectionId: "skills"},
    {title: "Experience", sectionId: "experience"},
    {title: "Projects", sectionId: "contact"}
  ];

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // element.scrollIntoView({behavior: 'smooth'});
      // router.push(`?section=${sectionId}`);
      setActiveSection(sectionId);
    }
  };

  // Sync URL with activeSection when it changes
  useEffect(() => {

  }, []);

  return (
    <div className="fixed min-w-full bottom-0 bg-amber-100 pt-1">
      <div className={"flex justify-between md:justify-center md:gap-24 max-md:mx-4"}>
        {titles.map(title => (
          <div key={title.title}
               className="flex flex-auto flex-col items-center mx-1 pt-1 max-w-fit text-blue-500 transition-all duration-300 ease-out hover:text-blue-300"
               onClick={() => handleNavigate(title.sectionId)}>
            <div className={"text-3xl sm:text-xl"}>
              {activeSection === title.sectionId ? <GoHomeFill/> : <GoHome/>}
            </div>
            <button className={"max-sm:hidden"}>
              {title.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}