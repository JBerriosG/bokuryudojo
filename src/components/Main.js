
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
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: rgba(0, 0, 0, 0.89);
bottom: 0;
right: 50%;
width: 100%;
height: 100%;
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`


const Main = () => {

    return (
        <MainContainer>
         <DarkDiv/>
            <Container>
            </Container>
        </MainContainer>
    )
}

export default Main
