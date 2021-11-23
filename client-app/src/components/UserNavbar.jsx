import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom"
import Logo from "./Logo"

const UserNavbar = () => {
  return (
    <Navbar bg='light' expand='sm'>
      <Container>
        <Navbar.Brand as={NavLink} to='/user/home'><Logo></Logo></Navbar.Brand>
        <Nav variant='tabs' className='me-auto'>
          <Nav.Link as={NavLink} to='/user/home'>Home</Nav.Link>
          <Nav.Link as={NavLink} to='/user/teams'>My Team</Nav.Link>
        </Nav>
      </Container>
      <Nav.Link as={NavLink} to='/logout'>Log Out</Nav.Link>
    </Navbar>
  )
}

export default UserNavbar
