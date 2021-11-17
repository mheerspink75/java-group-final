

const TextArea = (props) => {
	return (
		<textarea type="text" readOnly={props.readOnly} id={props.id}
			style={{
				width: '80%',
				height: '500px',
				margin: 'auto',
				borderRadius:'20px',
				padding:'20px',
				resize:'none'
			}}>

			{props.content}
		</textarea>

	)
}

export default TextArea