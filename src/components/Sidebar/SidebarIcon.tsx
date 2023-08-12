import { LucideProps } from "lucide-react";
import { ElementType } from "react";

interface SidebarIconProps  { 
  icon: ElementType
}

export function SidebarIcon({icon: Icon , ...rest} : SidebarIconProps & LucideProps) {
  return(<Icon {...rest} />);
}