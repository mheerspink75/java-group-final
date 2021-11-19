import UserNavbar from "../../components/AdminNavbar"
import VerticalSidebar from "../../components/VerticalSidebar"
import { Route, Routes } from "react-router"
import { description, DescriptionStyles } from "./HomePage"
import {Navbar, Logo} from "./HomePage"


//route = /admin-teams

export const UserTeams = () => {
	return (
		<>
  <div style={{display: 'flex', width: '1000px', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', marginTop: '3em', marginRight: 'auto', marginLeft: 'auto'}}>
    <Navbar />
    <Logo />
    <p style={DescriptionStyles}>{description}</p>
  </div>
			<div style={{display:"block"}}>
            <div style={{display: 'flex', width: '1000px', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', marginTop: '3em', marginRight: 'auto', marginLeft: 'auto'}}/>
			<VerticalSidebar name1="team1" route1="/user/teams/1" 
							name2="team2" route2="/user/teams/2" 
							name3="team3" route3="/user/teams/3">
			<Routes>
			<Route path="team1" component={<UserTeams1 />} />
			<Route path="team2" component={<UserTeams2 />} />
			<Route path="team3" component={<UserTeams3 />} />
			</Routes>
			</VerticalSidebar>
			</div>
			
		</>
	)
}
export const UserTeams1 = () => {
	return (
		<>

			<UserNavbar />
			<VerticalSidebar name1="team1" route1="team1" 
							name2="team2" route2="team2" 
							name3="team3" route3="team3"
							currentname="team1" />
			
			
		</>
	)
}
export const UserTeams2 = () => {
	return (
		<>

			<UserNavbar />
			
			<VerticalSidebar name1="team1" route1="team1" 
							name2="team2" route2="team2" 
							name3="team3" route3="team3"
							currentname="team2"
							 />
			
			
			
			
		</>
	)
}
export const UserTeams3 = () => {
	return (
		<>

			<UserNavbar />
			<VerticalSidebar name1="team1" route1="team1" 
							name2="team2" route2="team2" 
							name3="team3" route3="team3"
							currentname="team3" />
			
			
		</>
	)
}