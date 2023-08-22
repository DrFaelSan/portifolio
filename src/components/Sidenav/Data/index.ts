import { Briefcase, FolderOpen, Home, UserSquare } from "lucide-react";
import { ElementType } from "react";

export type SideBarItem = {
  link: string;
  sidebarText: string;
  icon: ElementType;
}

export const Data : SideBarItem[] = [
  {
    link: '#main',
    sidebarText: 'Inicio',
    icon: Home  
  },
  {
    link: '#trabalho',
    sidebarText: 'Trabalhos',
    icon: Briefcase  
  },
  {
    link: '#projetos',
    sidebarText: 'Projetos',
    icon: FolderOpen  
  },
  {
    link: '#sobre',
    sidebarText: 'Sobre',
    icon: UserSquare  
  }
  
]