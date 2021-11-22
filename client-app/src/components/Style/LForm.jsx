import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import {Button, Form} from 'react-bootstrap';
import useAuth from '../../auth/useAuth';

const StyledForm = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 24px 0;
`;

const StyledErrors = styled.h3`
    margin-top: 15px;
`;

// TODO: implement proper async handling with loading / spinners / etc
const LForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const auth = useAuth();
    const [errors, setErrors] = React.useState('');

    async function onSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const username = data.get('email');
        const password = data.get('password');
        try {
            const session = await auth.login(username, password);
            const to = location.state?.from?.pathname || (session.isAdmin() ? '/admin' : '/user');
            navigate(to, {replace: true});
        } catch (err) {
            setErrors(err.toString());
        }
    }

    return (
        <StyledForm>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username / Email</Form.Label>
                    <Form.Control name="email" type="text" placeholder="Enter username / email"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {errors && <StyledErrors>{errors}</StyledErrors>}
        </StyledForm>
    )
};

export default LForm;
