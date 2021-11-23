import { SidebarButton } from "./Button"
import { SolidButton } from "./Button"
import useAuth from "../auth/useAuth"
import { adminGetAllUsers } from "../services/AdminUserTableService"
import { useState, useEffect } from "react"

const VerticalSidebar = props => {
  let style = {
    justifyContent: "center",
    height: "100%",
    width: "145px",
    display: "flex",
    flexDirection: "column",
    margin: "40px",
  }
  if (props.style) {
    style = props.style
  }
  const auth = useAuth()
  const [users, setUsers] = useState([])

  useEffect(() => {
    adminGetAllUsers().then(data => {
    //   console.log(data)
    let newUsers = []
    data.forEach(o => {
        if (o.team) {
          if (o.team.id === props.teamId) {
            newUsers.push(o.firstName + " " + o.lastName)
          }
        }
      })
    //   console.log(newUsers)
      setUsers(newUsers)
    })
  }, [props.teamId])

  return (
    <>
    {/* {console.log(users)} */}
      <div className='sidebar' style={style}>
        {props.sideButtons.map(o => (
          <SidebarButton key={o.route} name={o.name} onClick={o.onClick} />
        ))}

        <hr></hr>
        <p style={{ textAlign: "center", fontWeight: "500" }}>
          {props.currentname} Members
        </p>
        {users.map(name => (
          <p key = {Math.random()} style={{ textAlign: "center" }}>{name}</p>
        ))}
        {auth.session().isAdmin() ? (
          <SolidButton
            name='add member'
            link='/admin/add-member'
            style={{ borderRadius: "35px" }}
          ></SolidButton>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default VerticalSidebar
