import styled from 'styled-components'

const StyledSection = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 24px 0;
`

const Section = (props) => {
    return (
        <StyledSection>
            {props.children}
        </StyledSection>
    )
}

export default Section