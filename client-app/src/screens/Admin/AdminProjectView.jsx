import React from "react"
import { useState, useEffect } from "react"
import { getProject, updateProject } from "../../services/AdminService"
import { Link } from "react-router-dom"
import Logo from "../../components/Logo"
import { useLocation } from "react-router"
import EditableTextArea from "../../components/EditableTextArea"

const AdminProjectView = () => {
	const {projectId} = useLocation().state

	const textAreaStyle = {
		width: '80%',
		height: '500px',
		margin: 'auto',
		borderRadius: '20px',
		padding: '20px',
		resize: 'none',
		border: '1px solid black'
	}

	const [projectLoaded, setProjectLoaded] = useState(false)
	const [projectData, setProjectData] = useState({})

	// let projectId = 7 //number to be pulled from previous page
	
	useEffect(() => {
		const loadProjectData = () => {
			getProject(projectId).then((data) => setProjectData(data)).then( () => setProjectLoaded(true))
		}
		loadProjectData()
	}, [projectId])

	

	return (
		<div>
			{/* outer layer*/}
			<Link to='/admin/home'>
				<Logo></Logo>
			</Link>

			{!projectLoaded ? <p>Loading Data</p> : <div>

				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<h1 style={{ textAlign: 'center' }}>{projectData.name}</h1>
					<Link to="/admin/teams" style={{ textDecoration: 'none', marginLeft: '10%', marginRight: '80%', fontSize: '20px' }}>&lt;- Back</Link>
				</div>
				{console.log(projectData)}
				<EditableTextArea styles={textAreaStyle} content={projectData.description} saveClickFunction={updateProject} saveFunctionArgs={projectData}/>
			</div>
			}
			{/* outer layer*/}
		</div>

	)
}


export default AdminProjectView
