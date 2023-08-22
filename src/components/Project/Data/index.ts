import SgaImg from  "../../../assets/sga.png";
import SgcImg from "../../../assets/sgc.png";
import AcImg from "../../../assets/ac.png";
import NlwImg from "../../../assets/nlw.png";

export type ProjectItemData = {
  img?: string;
  title?: string;
}

export const ProjectData: ProjectItemData[] = [
  { img: SgcImg , title:"Gerenciador de Condominio"},
  { img: NlwImg , title:"NLW Spacetime"},
  { img: AcImg , title:"Agenda Contatos"},
  { img: SgaImg , title:"Gerenciador de Apostas"}
]