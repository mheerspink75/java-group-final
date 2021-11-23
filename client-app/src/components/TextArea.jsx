

const TextArea = (props) => {
	return (
		<textarea type="text" readOnly={props.readOnly} id={props.id}
			style={props.style} value={props.content}>

			
		</textarea>

	)
}

export default TextArea