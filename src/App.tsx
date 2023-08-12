import Main from "./components/Main"
import Sidenav from "./components/Sidenav"
import { Work } from "./components/Work"
import { WorkData, WorkItemData } from "./components/Work/Data"

function App() {
  return (
    <div className="h-screen">
      <Sidenav/>
      <Main />
      <Work.Root>
        {
          WorkData?.map((el: WorkItemData, index: number) => 
            <Work.Content 
              key={index} 
              title={el.title} 
              year={el.year} 
              datails={el.datails}
              duration={el.duration}
              techs={el.techs}
            />  
          )
        }
      </Work.Root>
    </div>
  )
}

export default App
