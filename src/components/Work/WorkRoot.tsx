import { ReactNode } from "react";

interface WorkRootProps { 
  children: ReactNode;
}

export function WorkRoot({ children} : WorkRootProps) {
  return(
    <div id="trabalho" className="bg-gradient-to-b from-green-900 to-black flex flex-col justify-center items-center">
      <div className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-6xl font-bold text-center text-green-500 mb-5">Trabalhos</h1>
      {children}
      </div>
    </div>
  )
}