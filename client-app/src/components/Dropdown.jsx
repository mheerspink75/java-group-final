import React from "react";


const Dropdown = (props) => {
	const createOptions = () =>{
		let buffer = []
		let items = props.items
		for(let item of items){
			buffer.push(<option value={item}>{item}</option>)
		}
		return buffer
	}

	return (
		<form >
			<select>
				<option selected disabled hidden>{props.defaultText}</option>,
				{createOptions()}
			</select>
		</form>
	)

}

export default Dropdown;