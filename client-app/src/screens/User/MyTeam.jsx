import VerticalSidebar from "../../components/VerticalSidebar"
import UserNavbar from "../../components/UserNavbar"
import { useState, useEffect } from "react"
import TextArea from "../../components/TextArea"
import { getProject } from "../../services/AdminService"
// import { getUser } from "../../services/UserService"
// import useAuth from "../../auth/useAuth"
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
//   const auth = useAuth()
  
  const [projectData, setProjectData] = useState({})
  const [projectId, setProjectId] = useState({ id: 7 })
  
  useEffect(() => {
    const loadProjectData = () => {
      getProject(projectId.id)
        .then(data => setProjectData(data))
    }
    loadProjectData()
    // getUser(auth.session().username()).then(userData => {
    //   console.log(userData.team.id)
    //   getTeam(userData.team.id)
    // })
  }, [projectId.id])

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
              name: "project1",
              route: "7",
              onClick: () => {
                setProjectId({ id: 7 })
              },
            },
            { name: "project2", route: "8" ,onClick: () => {
                setProjectId({ id: 8 })
              }},
            { name: "project3", route: "9",onClick: () => {
                setProjectId({ id: 9 })
              } },
          ]}
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
export const UserProject1 = () => {
  return (
    <>
      <UserNavbar />
      <VerticalSidebar
        name1='project1'
        route1='1'
        name2='project2'
        route2='2'
        name3='project3'
        route3='3'
        currentname='1'
      />
    </>
  )
}
export const UserProject2 = () => {
  return (
    <>
      <UserNavbar />

      <VerticalSidebar
        name1='project1'
        route1='1'
        name2='project2'
        route2='2'
        name3='project3'
        route3='3'
        currentname='2'
      />
    </>
  )
}
export const UserProject3 = () => {
  return (
    <>
      <UserNavbar />
      <VerticalSidebar
        name1='project1'
        route1='1'
        name2='project2'
        route2='2'
        name3='project3'
        route3='3'
        currentname='3'
      />
    </>
  )
}
