import { ReactNode } from "react";

interface SidebarDeskRootProps { 
  children: ReactNode;
}

export function SidebarDeskRoot({ children} : SidebarDeskRootProps) {
  return(
    <div className="md:block hidden fixed top-[25%] z-10">
      <div className="flex flex-col">
        {children}
      </div>
    </div>
  )
}