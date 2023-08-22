import { WorkData, WorkItemData } from "./Data";

export function WorkContent() {
  return(
    <>
    {
      WorkData?.map((el: WorkItemData, index: number) => 
      <ol className="flex flex-col md:flex-row relative border-l border-black" key={index}>
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border-black"/>
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 font-bold text-black border border-black bg-green-500 rounded-md">{el.year}</span>
            <span className="text-lg font-semibold text-green-500 ">{el.title}</span>
            <span className="my-1 text-sm font-normal leading-none text-green-300">{el.duration}</span>
          </p>
          <p className="my-2 text-base font-normal text-green-500">{el.datails}</p>
          <p className="my-4 text-base font-normal text-green-500">Tecnologias e Ferramentas:</p>
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">  
          
          {
            el.techs ? (
              el.techs?.map((el: string, index: number) => 
              <span key={index} className="inline-block px-2 py-1 font-semibold text-black bg-green-400 rounded-md">{el}</span>)
            ) : (<span className="inline-block px-2 py-1 font-semibold text-black bg-green-400 rounded-md">Não teve</span>)
          }
            
          </p>
      </li>
    </ol>)}
    </>
  )
}