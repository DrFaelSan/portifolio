import { ReactNode } from "react";

interface SidebarContentProps { 
  link: string;
  sidebarText: string;
  children: ReactNode;
}

export function SidebarContent({ link, sidebarText, children} : SidebarContentProps) {
  return (
    <a href={link} 
    className="w-[75%] flex justify-center items-center rounded-full shadow-lg text-green-500 bg-black shadow-green-800 border border-green-500  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ">
      {children}
      <span className="pl-4">{sidebarText}</span>
    </a>
  );
}