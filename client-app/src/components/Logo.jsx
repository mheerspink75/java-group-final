import CookLogo from "../img/cook-systems-logo-edit.png"

const Logo = () => {
	let style = {
		width:'100%'
	}
	return (
		<div style={{width:'200px'}}>
			<img src={CookLogo} style={style} ></img>
		</div>
	)
}

export default Logo