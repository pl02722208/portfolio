import {Button} from "@mui/material";
import {GoHome, GoHomeFill} from "react-icons/go";

export default function BottomNav() {
  const titles = [
    {icon: <GoHomeFill/>, title: "Home"},
    {icon: <GoHome/>, title: "About Me"},
    {icon: <GoHome/>, title: "Skills"},
    {icon: <GoHome/>, title: "Experience"},
    {icon: <GoHome/>, title: "Projects"}
  ];

  return (
      <div className="fixed min-w-full bottom-0 bg-amber-100 pt-1">
        <div className={"flex justify-between md:justify-center md:gap-24 max-md:mx-4"}>
          {titles.map(title => (
            <div key={title.title} className="flex flex-auto flex-col items-center mx-1 pt-1 max-w-fit text-blue-500 transition-all duration-300 ease-out hover:text-blue-300">
              <div className={"text-3xl sm:text-xl"}>
                {title.icon}
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