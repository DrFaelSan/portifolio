import { ReactNode } from "react";

interface ProjectRootProps { 
  children: ReactNode;
}

export function ProjectRoot({ children} : ProjectRootProps) {
  return(
    <div id="projetos" className="js-show-on-scroll h-screen w-full bg-gradient-to-b from-black  to-green-900 ">
    <div className="max-w-[1040px] m-auto h-full w-full  md:pl-20 p-4 py-16"> 
      <h1 className="text-4xl font-bold text-center text-green-500">Projetos</h1>
      <h6 className="text-center py-8 text-2xl text-green-500">Abaixo estou disponibilizando alguns exemplos de projetos feitos por mim, alguns por conta própria e alguns por cursos, mas sempre colocando a "mão na massa" e fazendo o melhor trabalho possível.</h6>
      {children}
    </div>
    </div>
   
  )
}