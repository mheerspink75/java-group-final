import React from "react";
import backImg from "../img/redX.jpg"

const BackButton = (props) => {
	return (<button style={{color: 'red', borderRadius: '50%',width:'40px', height:'40px', backgroundImage:`url(${backImg})`, backgroundSize:'140%', backgroundPosition:'center', border:'2px solid black', alignItems:'right', marginLeft:'90%'}} onClick={props.onClick}> </button>)
}

export default BackButton;
