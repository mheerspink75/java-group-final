import React from "react"
import { Button } from "../../components/Button"
import TextArea from "../../components/TextArea"
import { useState, useEffect } from "react"
import { getProject, updateProject } from "../../services/AdminService"
import { Link } from "react-router-dom"
import Logo from "../../components/Logo"

const AdminProjectView = () => {

	const [edit, SetEdit] = useState(false)
	const editButton = () => {
		SetEdit(true)
	}
	const saveButton = () => {
		const newData = projectData
		newData["description"] = document.getElementById('projectDescription').value
		setProjectData(newData)
		updateProject(projectData["id"], projectData).then(() => SetEdit(false))
	}
	const cancelButton = () => {
		document.getElementById('projectDescription').value = projectData["description"]
		SetEdit(false)
	}

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

	let projectId = 7 //number to be pulled from previous page
	
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


				{edit ? <div style={{ display: 'flex', flexDirection: 'column' }} >
					<TextArea style={textAreaStyle} content={projectData.description} id="projectDescription" readOnly={false} > </TextArea>
					<div style={{ marginLeft: '70%', paddingTop: '10px', display: 'flex', columnGap: '20px' }}>
						<Button name="save" onClick={saveButton}  ></Button>
						<Button name="cancel" onClick={cancelButton} ></Button>
					</div>
				</div> :
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<TextArea style={textAreaStyle} content={projectData.description} id="projectDescription" readOnly={true} > </TextArea>
						<div style={{ marginLeft: '80%', paddingTop: '10px' }}>
							<Button name="edit" onClick={editButton}  ></Button>
						</div>
					</div>}
			</div>
			}
			{/* outer layer*/}
		</div>

	)
}


export default AdminProjectView
