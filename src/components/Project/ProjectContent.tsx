import { ProjectData, ProjectItemData } from './Data/index';
import ProjectItem from './ProjectItem';

export function ProjectContent() {
  return(
    <div className="grid sm:grid-cols-2 gap-12">
      {ProjectData.map((el: ProjectItemData, index: number) =>  
        <ProjectItem img={el.img} title={el.title} key={index}/>
      )}
    </div>
  )
}