import AdminNavbar from "../../components/AdminNavbar"
import VerticalSidebar from "../../components/VerticalSidebar"
import { Route, Routes } from "react-router"


//route = /admin-teams

export const AdminTeams = () => {
	return (
		<>

			<AdminNavbar />
			<div style={{display:"block"}}>
			<VerticalSidebar name1="team1" route1="/admin/teams/1" 
							name2="team2" route2="/admin/teams/2" 
							name3="team3" route3="/admin/teams/3">
			<Routes>
			<Route path="team1" component={<AdminTeams1 />} />
			<Route path="team2" component={<AdminTeams2 />} />
			<Route path="team3" component={<AdminTeams3 />} />
			</Routes>
			</VerticalSidebar>
			</div>
			
		</>
	)
}
export const AdminTeams1 = () => {
	return (
		<>

			<AdminNavbar />
			<VerticalSidebar name1="team1" route1="team1" 
							name2="team2" route2="team2" 
							name3="team3" route3="team3"
							currentname="team1" />
			
			
		</>
	)
}
export const AdminTeams2 = () => {
	return (
		<>

			<AdminNavbar />
			
			<VerticalSidebar name1="team1" route1="team1" 
							name2="team2" route2="team2" 
							name3="team3" route3="team3"
							currentname="team2"
							 />
			
			
			
			
		</>
	)
}
export const AdminTeams3 = () => {
	return (
		<>

			<AdminNavbar />
			<VerticalSidebar name1="team1" route1="team1" 
							name2="team2" route2="team2" 
							name3="team3" route3="team3"
							currentname="team3" />
			
			
		</>
	)
}

