import Hr from "../components/Style/Hr";
import CardTitle from "../components/Style/CardTitle";
import Section from "../components/Style/Section";
import styled from 'styled-components'
import Card from "../components/Style/Card";
import LForm from "../components/Style/LForm";

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
                    <LForm>

                    </LForm>
                </Section>
            </Card>
        </StyledHome>
    )
}

export default Login;
