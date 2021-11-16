import React from "react";


const Dropdown = (props) => {

	return (
		<form >
			<select>
				<option selected disabled hidden>{props.defaultText}</option>,
				{props.items.map(it => <option key={it.id} value={it}>{it}</option>)}
			</select>
		</form>
	)

}

export default Dropdown;