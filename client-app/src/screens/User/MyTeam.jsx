import UserNavbar from "../../components/AdminNavbar"
import VerticalSidebar from "../../components/VerticalSidebar"
import { Route, Routes } from "react-router"
import { description, DescriptionStyles } from "./HomePage"
import {Navbar, Logo} from "./HomePage"


//route = /admin-teams

export const UserTeams = () => {
	return (
		<>

			<div style={{display:"block"}}>
            <div style={{display: 'flex', width: '1000px', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', marginTop: '3em', marginRight: 'auto', marginLeft: 'auto'}}/>
			<VerticalSidebar name1="project1" route1="/user/teams/1" 
							name2="project2" route2="/user/teams/2" 
							name3="project3" route3="/user/teams/3">
			<Routes>
			<Route path="1" component={<UserProject1 />} />
			<Route path="2" component={<UserProject2 />} />
			<Route path="3" component={<UserProject3 />} />
			</Routes>
			</VerticalSidebar>
			</div>
            <div style={{display: 'flex', width: '1000px', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', marginTop: '3em', marginRight: 'auto', marginLeft: 'auto'}}>
    <Navbar />
    <Logo />
    <p style={DescriptionStyles}>{description}</p>
  </div>
			
		</>
	)
}
export const UserProject1 = () => {
	return (
		<>

			<Navbar />
			<VerticalSidebar name1="project1" route1="1" 
							name2="project2" route2="2" 
							name3="project3" route3="3"
							currentname="1" />
			
			
		</>
	)
}
export const UserProject2 = () => {
	return (
		<>

			<Navbar />
			
			<VerticalSidebar name1="project1" route1="1" 
							name2="project2" route2="2" 
							name3="project3" route3="3"
							currentname="2"
							 />
			
			
			
			
		</>
	)
}
export const UserProject3 = () => {
	return (
		<>

			<Navbar />
			<VerticalSidebar name1="project1" route1="1" 
							name2="project2" route2="2" 
							name3="project3" route3="3"
							currentname="3" />
			
			
		</>
	)
}
