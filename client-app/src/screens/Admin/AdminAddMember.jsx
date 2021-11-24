import { Link } from "react-router-dom"
import { Button, BackButton } from "../../components/Button"
import Dropdown from "../../components/Dropdown"
import Logo from "../../components/Logo"

const AdminAddMembers = () => {
  
	
	return (
    <div>
      <Logo />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "80px",
          alignItems: "center",
          border: "2px solid black",
          height: "400px",
          width: "400px",
          margin: "auto",
          marginTop: "20%",
        }}
      >
        <Link
          to='/admin/teams'
          style={{
            marginLeft: "70%",
            marginRight: "1%",
            marginTop: "1%",
          }}
        >
          <BackButton></BackButton>
        </Link>
        <Dropdown
          items={["member 1", "member 2", "member 3"]}
          defaultText={"Select a Member..."}
        ></Dropdown>
        <Link to='/admin/teams'><Button name='Add'></Button></Link>
      </div>
    </div>
  )
}

export default AdminAddMembers
