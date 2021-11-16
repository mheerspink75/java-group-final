import styled from "styled-components";
import {Button, Form} from "react-bootstrap";

const StyledForm = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 24px 0;
    `

const LForm = () => {
    return (
        <StyledForm>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </StyledForm>
    )
}
export default LForm