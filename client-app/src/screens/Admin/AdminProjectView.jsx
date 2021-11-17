import React from "react"
import { Button } from "../../components/Button"
import TextArea from "../../components/TextArea"
import {useState} from "react"
const AdminProjectView = () => {
	let value = `
	Generic description text for all the users at FedEx. I will now begin my lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipsicing elit. Sed sapien nulla, venenatis vestibulum bibendum nec, ornare et magna. Generic description text for all the users at FedEx. I will now begin my lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipsicing elit. Sed sapien nulla, venenatis vestibulum bibendum nec, ornare et magna. Generic description text for all the users at FedEx. I will now begin my lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipsicing elit. Sed sapien nulla, venenatis vestibulum	Generic description text for all the users at FedEx. I will now begin my lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipsicing elit. Sed sapien nulla, venenatis vestibulum bibendum nec, ornare et magna. Generic description text for all the users at FedEx. I will now begin my lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipsicing elit. Sed sapien nulla, venenatis vestibulum bibendum nec, ornare et magna. Generic description text for all the users at FedEx. I will now begin my lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipsicing elit. Sed sapien nulla, venenatis vestibulum	
	`
	const [edit, SetEdit] = useState(false)
	const editButton = () => {
		SetEdit(true)
	}
	const saveButton = () => {
		SetEdit(false)
	}
	const cancelButton = () => {
		SetEdit(false)
	}
	

	return (
		<div>
			Insert Logo Component
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<h1 style={{ textAlign: 'center', marginTop: '10%' }}>Project 1</h1>
				<a href="/admin-teams" style={{ textDecoration: 'none', marginLeft: '10%',marginRight:'84%' }}>&lt;- Back</a>

				{edit ? <div style={{ display: 'flex', flexDirection: 'column' }} >
					<TextArea content={value} id="projectDescription" readOnly={false} > </TextArea>
					<div style={{ marginLeft: '70%', paddingTop: '10px', display: 'flex', columnGap: '20px' }}>
						<Button name="save" onClick={saveButton}  ></Button>
						<Button name="cancel" onClick={cancelButton} ></Button>

					</div>
				</div> :
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<TextArea content={value} id="projectDescription" readOnly={true} > </TextArea>
						<div style={{ marginLeft: '80%', paddingTop: '10px' }}>
							<Button name="edit" onClick={editButton}  ></Button>
						</div>
					</div>}
			</div>
		</div>
	)
}


export default AdminProjectView