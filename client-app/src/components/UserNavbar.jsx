import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"

const UserNavbar = () => {
  return (
    <Navbar bg='light' expand='sm'>
      <Container>
        <Navbar.Brand href='/'>React-Bootstrap</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/myteams'>My Teams</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default UserNavbar