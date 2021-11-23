import AdminNavbar from "../../components/AdminNavbar"
import HomePageDiv from "../../components/Style/HomePageDiv"
import EditableTextArea from "../../components/EditableTextArea"
// import ImageWithText from "../../components/ImageWithText"

const AdminHomePage = () => {
  
let text = "Welcome to the Cook System Wiki"
// let image = "https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"

  return (
    <div>
      <AdminNavbar />
      <HomePageDiv>
        <p>{text}</p>
            {/* Temporarily removing this until I can get this fixed
            <ImageWithText imgSrc={image} Text={text} /> */}
        {/* TODO: update styling */}
          <EditableTextArea styles = {
              {fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: "30px",
              lineHeight: "35px",
            
              borderStyle: "solid",
              borderWidth: "1px",
              borderRadius: "5px",
              boxShadow: "1px 1px 1px #000",
              height: "300px",
              overflowY: "scroll",
              width: "90%"}
          }/>
      </HomePageDiv>
    </div>
  )
}

export default AdminHomePage
