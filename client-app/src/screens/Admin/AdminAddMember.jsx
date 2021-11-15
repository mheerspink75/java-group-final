import Button from "../../components/Button"
import BackButton from "../../components/BackButton"
import Dropdown from "../../components/Dropdown"

const AdminAddMembers = () => {
	

	return (
		<div>
			Logo pending
		<div style={{display:'flex', flexDirection:'column',rowGap:'80px', alignItems:"center", border:'2px solid black', height:'400px', width:'400px', margin:'auto', marginTop:'20%'}}>
			
			<BackButton onClick={()=>alert("alert message")}></BackButton>
			<Dropdown items={["member 1", "member 2", "member 3"]} defaultText={"Select a Member..."} ></Dropdown>
			<Button onClick={()=>alert("alert message")} name="Add" ></Button>
		</div>
		</div>
	)
}

export default AdminAddMembers