import React from "react";
import backImg from "../img/Red-Cross-Mark.png"
import { Link } from "react-router-dom";


export const SidebarButton = (props) => {

    return(
   <button onClick={props.onClick} type="button" className="btn btn-outline-primary" style={{padding:"10px 25px", margin:"10px"}}>{props.name}</button>
    )


}

export const SolidButton = (props) => {
	return(

		<Link to={props.link}>
	   <button type="button" className="btn btn-outline-primary" style={{padding:"5px 10px", margin:"3px", background:"blue", transform:"2s", color:"white", 
	                                                                borderRadius:"35px"}}>{props.name}</button>
		</Link>
		)
}

export const Button = (props) => {
	return (<button onClick={props.onClick}
		style={{
			paddingRight:'20px',
			paddingLeft:'20px',
		}}
	>{props.name}
	
	</button>)
}

const BackButtonStyle = {
	color: 'red',
	borderRadius: '50%',
	width: '40px',
	height: '40px',
	backgroundImage: `url(${backImg})`,
	backgroundSize: '100%',
	backgroundPosition: 'center',
	border: '1px solid red',
	alignItems: 'right',
	marginLeft: '90%',
	marginRight: '1%',
	marginTop: '1%',
}

export const BackButton = (props) => {
	return (<button style={BackButtonStyle} onClick={props.onClick}> </button>)
}
