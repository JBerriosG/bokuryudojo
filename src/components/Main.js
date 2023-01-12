import React from 'react'
import styled from 'styled-components'
;


const MainContainer = styled.div`
background: #000000;
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
text-align:center;

.text::before{
    position: absolute;
    content: attr(data-text);
    padding: 30px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: #fff;
}
`

const Error = styled.div`
position: relative;
font-size: 20rem;
color:#ffffff;
font-family: 'Roboto';
`
const WsDown = styled.h2`
color:#ffffff;
font-family: 'Roboto';
`


const Main = () => {

    return (
        <MainContainer>
            <Container>
                <Error data-text='404' className='text'>404</Error>
                <WsDown>WebSite Down</WsDown>
            </Container>
        </MainContainer>
    )
}

export default Main
