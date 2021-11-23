import VerticalSidebar from "../../components/VerticalSidebar"
import UserNavbar from "../../components/UserNavbar"
import { useState, useEffect } from "react"
import TextArea from "../../components/TextArea"
import { getProject } from "../../services/AdminService"
import { getUser } from "../../services/UserService"
import useAuth from "../../auth/useAuth"
// import { getTeam } from "../../services/TeamService"

export const UserTeams = () => {
  const textAreaStyle = {
    width: "80%",
    height: "500px",
    margin: "auto",
    borderRadius: "20px",
    padding: "20px",
    resize: "none",
    border: "1px solid black",
  }
  const auth = useAuth()
  
  const [projectData, setProjectData] = useState({})
  const [projectId, setProjectId] = useState({ id: 7 })
  const [userTeamId, setUserTeamId] = useState({
	  
  })
  
  useEffect(() => {
    const loadProjectData = () => {
      getProject(projectId.id)
        .then(data => setProjectData(data))
    }
    loadProjectData()
    
	getUser(auth.session().username()).then(userData => {
	  //   console.log(userData.team.id)
		setUserTeamId(userData.team.id)
	  })
  }, [projectId.id, auth])


  return (
    <>
      <UserNavbar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "99%",
          marginTop: "3em",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          width: "99%",
          flexDirection: "row",
          marginTop: "3em",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <VerticalSidebar
          sideButtons={[
            {
              name: "Project 1",
              route: "7",
              onClick: () => {
                setProjectId({ id: 7 })
              },
            },
            { name: "Project 2", route: "8" ,onClick: () => {
                setProjectId({ id: 8 })
              }},
            { name: "Project 3", route: "9",onClick: () => {
                setProjectId({ id: 9 })
              } },
          ]} teamId={userTeamId}
        ></VerticalSidebar>
        <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
          <TextArea
            style={textAreaStyle}
            content={projectData.description}
            id='projectDescription'
            readOnly={true}
          >
            {" "}
          </TextArea>
        </div>
      </div>
    </>
  )
}
