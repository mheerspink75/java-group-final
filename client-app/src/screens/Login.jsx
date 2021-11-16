import Hr from "../components/Style/Hr";
import CardTitle from "../components/Style/CardTitle";
import Section from "../components/Style/Section";
import styled from 'styled-components'
import Card from "../components/Style/Card";

const StyledHome = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

    font-family: "Fira Code", serif;
`

const Login = () => {
    return (
        <StyledHome>
            <Card>
                <CardTitle>Login Page</CardTitle>
                <Hr/>
                <Section>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec euismod, nisl eget consectetur sagittis, nisl
                        nunc ultrices eros, eu porttitor nisl nunc euismod
                        nunc.
                    </p>
                </Section>
            </Card>
        </StyledHome>
    )
}

export default Login;
