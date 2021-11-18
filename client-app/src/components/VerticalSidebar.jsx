import { propTypes } from "react-bootstrap/esm/Image";
import { SidebarButton } from "./Button";

const VerticalSidebar = (props) => {
	let style = {height:"70%", width:"250px", display:"block" }
	if(props.style){
		style =props.style
	}

    return (
        <div className="sidebar" style={style}>

            <SidebarButton name={"team1"} link="/team1"></SidebarButton>
            <SidebarButton name={"team2"} link="/team2"></SidebarButton>
            <SidebarButton name={"team3"} link="/team3"></SidebarButton>

        </div>
    )
}

export default VerticalSidebar;