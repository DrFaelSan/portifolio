import { ElementType } from "react";

interface SidebarDeskIconProps { 
  icon: ElementType
}

export function SidebarDeskIcon({ icon: Icon} : SidebarDeskIconProps) {
  return <Icon size={20} />;
}