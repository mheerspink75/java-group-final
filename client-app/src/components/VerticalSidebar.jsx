import { SidebarButton } from "./Button";

const VerticalSidebar = () => {
    return (
        <div className="sidebar" style={{height:"70%", width:"250px", display:"block" }}>

            <SidebarButton name={"team1"} link="/team1"></SidebarButton>
            <SidebarButton name={"team2"} link="/team2"></SidebarButton>
            <SidebarButton name={"team3"} link="/team3"></SidebarButton>

        </div>
    )
}

export default VerticalSidebar;