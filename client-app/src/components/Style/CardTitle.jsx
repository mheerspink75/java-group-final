import styled from 'styled-components'

const StyledSpan = styled.span`
    display: flex;
    justify-content: center;

    margin: 24px 0;
    height: 60px;

    font-size: 56px;

    color: #111;
    font-family: 'Helvetica Neue', sans-serif;
    letter-spacing: 2px;
    line-height: 1;
`

const CardTitle = (props) => {
    return (
        <StyledSpan>
            {props.children}
        </StyledSpan>
    )
}

export default CardTitle