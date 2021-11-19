import VerticalSidebar from "../../components/VerticalSidebar"
import AdminNavbar from "../../components/AdminNavbar"


const AdminTeams = () => {
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
			<div style={{ height:'80%', display:'flex', flexDirection: 'row',columnGap:'10px', paddingRight:'5%', paddingTop: '2%', paddingBottom:'10%'}}>
				<div style={{ display: 'flex', flexDirection: 'column', width:'25%' }}>
					<VerticalSidebar name1="Team 1" name2="Team 2" name3="Team 3" route1="/admin/teams" route2="/admin/teams" route3="/admin/teams" style={{display:"block", paddingTop:'20%', margin:'0 auto 0 auto'}}></VerticalSidebar>
					
				</div>
				<div style={{ width: '100%', overflowY: 'scroll', display: 'flex', flexDirection: 'column', rowGap:'5%', height: '700px' }}>
					<div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
						<div style={{ border: '1px solid black', borderRadius:'10px', width: '30%', fontSize: '40px', padding:'5%', margin:'auto'}}>Project 1</div>
						<div style={textAreaStyle} >{cutString(tempContent)}<a href="/admin/project-view">Read more</a> </div>
					</div>
					<div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
						<div style={{ border: '1px solid black', borderRadius:'10px', width: '30%', fontSize: '40px', padding:'5%', margin:'auto'}}>Project 2</div>
						<div style={textAreaStyle} >{cutString(tempContent)}<a href="/admin/project-view">Read more</a> </div>
					</div>
					<div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
						<div style={{ border: '1px solid black', borderRadius:'10px', width: '30%', fontSize: '40px', padding:'5%', margin:'auto'}}>Project 3</div>
						<div style={textAreaStyle} >{cutString(tempContent)}<a href="/admin/project-view">Read more</a> </div>
					</div>
					<div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
						<div style={{ border: '1px solid black', borderRadius:'10px', width: '30%', fontSize: '40px', padding:'5%', margin:'auto'}}>Project 4</div>
						<div style={textAreaStyle} >{cutString(tempContent)}<a href="/admin/project-view">Read more</a> </div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AdminTeams