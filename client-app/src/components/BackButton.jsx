import React from "react";



const BackButton = (props) => {
	return (<button style={{color: 'red', borderRadius: '50%',width:'30px', height:'30px', backgroundImage:'url("https://t4.ftcdn.net/jpg/02/41/15/39/360_F_241153907_v8pW0ZUXQ2NT96P2EnverQtaD11IDb2y.jpg")', backgroundSize:'140%', backgroundPosition:'center', border:'2px solid black', alignItems:'right', marginLeft:'90%'}} onClick={props.onClick}> </button>)
}

export default BackButton;