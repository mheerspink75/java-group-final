import VerticalSidebar from "../../components/VerticalSidebar"
import TextArea from "../../components/TextArea"
import AdminNavbar from "../../components/AdminNavbar"


const AdminTeams = () => {
	let members = ["Alex", "Ben", "Carl", "Dennis"]
	
	const textAreaStyle = {
		width: '100%',
		height: '100%',
		margin: 'auto',
		//border: '1px solid black',
		padding: '20px',
		resize: 'none',
		// overflow:'hidden',
	}

	const cutString = (input) => {
		return input.substring(0, 500).replace(/\s+$/, '') + "...."
	}

	const tempContent = `
	Generic description text for all the users at FedEx. I will now begin my lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipsicing elit. Sed sapien nulla, venenatis vestibulum bibendum nec, ornare et magna. Generic description text for all the users at FedEx. I will now begin my lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipsicing elit. Sed sapien nulla, venenatis vestibulum bibendum nec, ornare et magna. Generic description text for all the users at FedEx. I will now begin my lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipsicing elit. Sed sapien nulla, venenatis vestibulum	Generic description text for all the users at FedEx. I will now begin my lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipsicing elit. Sed sapien nulla, venenatis vestibulum bibendum nec, ornare et magna. Generic description text for all the users at FedEx. I will now begin my lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipsicing elit. Sed sapien nulla, venenatis vestibulum bibendum nec, ornare et magna. Generic description text for all the users at FedEx. I will now begin my lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipsicing elit. Sed sapien nulla, venenatis vestibulum	
	`

	return (
		<div>
			<AdminNavbar />
			<div style={{ height:'80%',display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingRight:'5%', paddingTop: '2%', paddingLeft:'5', paddingBottom:'10%' }}>
				<div style={{ display: 'flex', flexDirection: 'column', width:'20%' }}>
					<VerticalSidebar style={{height:"40%", width:"250px", display:"block", paddingTop:'30%' }}></VerticalSidebar>
					<p>___________________</p>
					<p>Team Members</p>
					{members.map(member => <p>{member} </p>)}
				</div>
				<div style={{ width: '100%', overflowY: 'scroll', display: 'flex', flexDirection: 'column', rowGap:'5%', height: '700px' }}>
					<div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
						<div style={{ border: '1px solid black', borderRadius:'10px', width: '30%', fontSize: '40px', padding:'5%', margin:'auto'}}>Project 1</div>
						<div style={textAreaStyle} >{cutString(tempContent)}<a href="/admin-project-view">Read more</a> </div>
					</div>
					<div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
						<div style={{ border: '1px solid black', borderRadius:'10px', width: '30%', fontSize: '40px', padding:'5%', margin:'auto'}}>Project 2</div>
						<div style={textAreaStyle} >{cutString(tempContent)}<a href="/admin-project-view">Read more</a> </div>
					</div>
					<div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
						<div style={{ border: '1px solid black', borderRadius:'10px', width: '30%', fontSize: '40px', padding:'5%', margin:'auto'}}>Project 3</div>
						<div style={textAreaStyle} >{cutString(tempContent)}<a href="/admin-project-view">Read more</a> </div>
					</div>
					<div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
						<div style={{ border: '1px solid black', borderRadius:'10px', width: '30%', fontSize: '40px', padding:'5%', margin:'auto'}}>Project 4</div>
						<div style={textAreaStyle} >{cutString(tempContent)}<a href="/admin-project-view">Read more</a> </div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AdminTeams
