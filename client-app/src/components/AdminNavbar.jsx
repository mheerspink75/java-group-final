import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom"

const AdminNavbar = () => {
  return (
    <Navbar bg='light' expand='sm'>
      <Container>
        <Navbar.Brand as={NavLink} to='/admin/home'>
          Cook Systems
        </Navbar.Brand>
        <Nav variant='tabs' className='me-auto'>
          <Nav.Item>
            <Nav.Link as={NavLink} to='/admin/home'>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to='/admin/teams'>
              Teams
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to='/admin/users'>
              Users
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default AdminNavbar
