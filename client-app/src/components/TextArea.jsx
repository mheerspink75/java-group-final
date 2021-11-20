

const TextArea = (props) => {
	return (
		<textarea type="text" readOnly={props.readOnly} id={props.id}
			style={props.style}>

			{props.content}
		</textarea>

	)
}

export default TextArea