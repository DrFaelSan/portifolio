import { Menu } from "lucide-react";
import { useState } from "react";
import { Data, SideBarItem } from './Data'
import { SiderBar } from "../Sidebar";
import { SidebarDesk } from "../SidebarDesk";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);   
  
  return(
    <div>
      <Menu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden text-green-500" />
      {
        nav ? 
        (<SiderBar.Root>
          {Data?.map((el : SideBarItem, index: number) => 
            <SiderBar.Content key={index} link={el.link} sidebarText={el.sidebarText}>
              <SiderBar.Icon icon={el.icon} />
            </SiderBar.Content>
          )}
          </SiderBar.Root>) :
        ( (<SidebarDesk.Root>
          {Data?.map((el : SideBarItem, index: number) => 
            <SidebarDesk.Content key={index} link={el.link}>
              <SiderBar.Icon icon={el.icon} />
            </SidebarDesk.Content>
          )}
          </SidebarDesk.Root>))
      }
    </div>
  )
}

export default Sidenav;