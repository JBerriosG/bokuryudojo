import React from 'react'
import styled from 'styled-components'
;


const MainContainer = styled.div`
background: #a0a0a1;
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;
display:grid;
place-content: center;
`

const Error = styled.h1`
font-size: 20rem;
color:#ffffff;
font-family: 'Roboto';
`


const Main = () => {

    return (
        <MainContainer>
            <Container>
                <Error>404</Error>
            </Container>
        </MainContainer>
    )
}

export default Main
