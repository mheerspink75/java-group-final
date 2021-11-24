import AdminNavbar from "../../components/AdminNavbar"
import HomePageDiv from "../../components/Style/HomePageDiv"
import EditableTextArea from "../../components/EditableTextArea"
import { useEffect, useState } from "react"
import { getCompany } from "../../services/AdminService"
// import ImageWithText from "../../components/ImageWithText"

const AdminHomePage = () => {
  // let text = "Welcome to the Cook System Wiki"
  // let image = "https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  const [company, setCompany] = useState({
    description: ""
  })

  useEffect(() => {
    getCompany("1").then(companyData => {
      setCompany(companyData)
    })
  }, [])

  const textAreaStyle = {
		width: '80%',
		height: '500px',
		margin: 'auto',
		borderRadius: '20px',
		padding: '20px',
		resize: 'none',
		border: '1px solid black'
	}

  return (
    <div>
      <AdminNavbar />
      <HomePageDiv>
        <h3>{"Welcome to the " + company.name + " wiki"}</h3>
        {/* Temporarily removing this until I can get this fixed
            <ImageWithText imgSrc={image} Text={text} /> */}
        {/* TODO: update styling */}
        {!company.description ? <p>Loading Data</p> 
        : <EditableTextArea
          styles={textAreaStyle}
          content={company.description}
        />
        } 
      </HomePageDiv>
    </div>
  )
}

export default AdminHomePage
