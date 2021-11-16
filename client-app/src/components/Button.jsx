import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import React from "react";
import backImg from "../img/Red-Cross-Mark.png"


export const SidebarButton = (props) => {

    return(

    <Nav.Link href={props.link}>
   <button type="button" class="btn btn-outline-primary">{props.name}</button>
    </Nav.Link>
    )


}

export const Button = (props) => {
	return (<button onClick={props.onClick}>{props.name}</button>)
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
