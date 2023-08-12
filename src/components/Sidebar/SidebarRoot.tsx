import { ReactNode } from "react";

interface SidebarRootProps { 
  children: ReactNode;
}

export function SidebarRoot({ children} : SidebarRootProps) {
  return(
    <div className="fixed w-full h-screen  bg-gradient-to-b from-black from-75% via-green-900 via-100% flex flex-col justify-center items-center z-20">
      {children}
    </div>
  )
}