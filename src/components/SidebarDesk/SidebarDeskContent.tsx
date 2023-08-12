import { ReactNode } from "react";

interface SidebarDeskContentProps { 
  link: string;
  children: ReactNode;
}

export function SidebarDeskContent({ link, children} : SidebarDeskContentProps) {
  return (
    <a href={link} 
    className="rounded-full shadow-lg text-green-500 bg-black shadow-green-800 border border-green-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
      {children}
    </a>
  );
}