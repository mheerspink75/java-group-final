import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom"

const UserNavbar = () => {
  return (
    <Navbar bg='light' expand='sm'>
      <Container>
        <Navbar.Brand as={NavLink} to='/user'>React-Bootstrap</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
          <Nav.Link as={NavLink} to='/myteams'>My Teams</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default UserNavbar
