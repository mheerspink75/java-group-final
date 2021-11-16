import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"

export const SidebarButton = (props) => {

    return(

    <Nav.Link href={props.link}>
   <button type="button" class="btn btn-outline-primary">{props.name}</button>
    </Nav.Link>
    )


}

