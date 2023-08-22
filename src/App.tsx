import Main from "./components/Main"
import Sidenav from "./components/Sidenav"
import { Project } from "./components/Project"
import { Work } from "./components/Work"
import About from "./components/About"

function App() {
  return (
    <div className="h-screen">
      <Sidenav/>
      <Main />
      <Work.Root>
       <Work.Content />
      </Work.Root>
      <Project.Root>
        <Project.Content/>
      </Project.Root>
      <About/>
    </div>
  )
}

export default App
