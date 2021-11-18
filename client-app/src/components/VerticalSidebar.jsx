import { SidebarButton } from "./Button";
import { SolidButton } from "./Button";

const VerticalSidebar = (props) => {

	let style={height:"100%", width:"145px", display:"block", margin:"40px" }
	if(props.style){
		style =props.style
	}

    return (
		<>
        <div className="sidebar" style={style}>

            <SidebarButton name={props.name1} link={props.route1}></SidebarButton>
            <SidebarButton name={props.name2} link={props.route2}></SidebarButton>
            <SidebarButton name={props.name3} link={props.route3}></SidebarButton>
            <hr></hr>
            <p style={{textAlign:"center", fontWeight:"500"}}>{props.currentname} Members</p>

            <SolidButton name="add member" link="/admin/add-member" style={{borderRadius:"35px"}}></SolidButton>

        </div>
        </>
    )
}

export default VerticalSidebar;