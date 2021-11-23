import { SidebarButton } from "./Button";
import { SolidButton } from "./Button";
import useAuth from "../auth/useAuth";

const VerticalSidebar = (props) => {

	let style={justifyContent: "center", height:"100%", width:"145px", display:"flex", flexDirection:"column", margin:"40px" }
	if(props.style){
		style =props.style
	}
    const auth = useAuth();
    

    return (
		<>
        <div className="sidebar" style={style}>
            
            {props.sideButtons.map( (o) =>(
                <SidebarButton key={o.route} name={o.name} onClick={o.onClick}/>
                ))}
                
            <hr></hr>
            <p style={{textAlign:"center", fontWeight:"500"}}>{props.currentname} Members</p>
            {}
            {auth.session().isAdmin() ?
                
                    <SolidButton name="add member" link="/admin/add-member" style={{borderRadius:"35px"}}></SolidButton>
                
            : <></>}
        </div>
        </>
    )
}

export default VerticalSidebar;