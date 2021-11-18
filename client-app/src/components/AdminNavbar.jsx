import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"

const AdminNavbar = () => {
  return (
    <Navbar bg='light' expand='sm'>
      <Container>
        <Navbar.Brand href='/'>React-Bootstrap</Navbar.Brand>
        
        <Nav className='me-auto'>
          <Nav.Link href='/admin'>Home</Nav.Link>
          <Nav.Link href='/admin/teams'>Teams</Nav.Link>
          <Nav.Link href='/admin/users'>Users</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default AdminNavbar
