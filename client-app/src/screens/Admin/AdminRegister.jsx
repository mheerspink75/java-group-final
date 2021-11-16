import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AdminNavbar from '../../components/AdminNavbar';

export const AdminRegister = () => {
    return (
        <>
        <AdminNavbar />
        <div style={{display:"block", textAlign:"center"}}>
        <Form  style ={{ display:"inline-block", align:"center",width:"450px", margin:"40px", padding:"60px", border:"2px solid black", borderRadius:"15px", alignContent:"center"}}>

        <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Username </Form.Label>
    <Form.Control type="email" placeholder="username" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    <Form.Text className="text-muted">Must be longer than 8 characters and include a special character.</Form.Text>
  </Form.Group>
        


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>First Name </Form.Label>
    <Form.Control type="email" placeholder="First Name" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Last Name </Form.Label>
    <Form.Control type="email" placeholder="Last Name" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Receive Confirmation Email" />
  </Form.Group>


  <Button variant="primary" type="submit">
    Submit
  </Button>
  
</Form>
</div>
</>
    )
}