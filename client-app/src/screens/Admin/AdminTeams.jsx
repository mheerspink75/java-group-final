import { useState, useEffect } from "react"
import VerticalSidebar from "../../components/VerticalSidebar"
import AdminNavbar from "../../components/AdminNavbar"
import {
  getAllProjects,
  getAllTeam,
} from "../../services/AdminTeamProjectService"
import { Link } from "react-router-dom"

const AdminTeams = () => {
  const textAreaStyle = {
    width: "100%",
    height: "100%",
    margin: "auto",
    //border: '1px solid black',
    padding: "20px",
    resize: "none",
    // overflow:'hidden',
  }

  const cutString = input => {
    return input.substring(0, 500).replace(/\s+$/, "") + "...."
  }

  const [projects, setAllProjects] = useState([])
  const [teams, setTeams] = useState([])
  const [curTeam, setCurTeam] = useState(4)

  useEffect(() => {
    getAllProjects().then(data => {
      console.log(data)
      setAllProjects(data)
    })

    getAllTeam().then(data => {
      // console.log(data)
      setTeams(data)
    })
  }, [])

  return (
    <>
      <AdminNavbar />
      <div
        style={{
          height: "80%",
          display: "flex",
          flexDirection: "row",
          columnGap: "10px",
          paddingRight: "5%",
          paddingTop: "2%",
          paddingBottom: "10%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "25%" }}>
          {
            <VerticalSidebar
              sideButtons={teams.map((t) => ({
				name: t.name,
				route: t.id, 
				onClick: () => setCurTeam(t.id)
			  }))} teamId={curTeam}
            ></VerticalSidebar>
          }
        </div>

        <div
          style={{
            width: "100%",
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
            rowGap: "5%",
            height: "700px",
          }}
        >
          <div>
            {projects.map(project => {
              return project.teamId === curTeam ? (
                <div
                  key={project.id}
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid black",
                      borderRadius: "10px",
                      width: "30%",
                      fontSize: "20px",
                      padding: "5%",
                      margin: "10px",
                    }}
                  >
                    {project.name}
                  </div>
                  <div style={textAreaStyle}>
                    {cutString(project.description)}
                    <Link
                      to='/admin/project-view'
                      state={{ projectId: project.id }}
                    >
                      Edit: {project.name}
                    </Link>
                  </div>
                </div>
              ) : (
                <div key={project.id} ></div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminTeams
