import React from 'react'
import styled from 'styled-components'
;


const MainContainer = styled.div`
background: #000000;
width: 100vw;
height: 100vh;
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

.text{
    position: relative;
    font-size: 20rem;
    color:#fff;
    font-family: 'Roboto';
}

.text:before, .text:after{
    position: absolute;
    content: attr(data-text);
    padding: 30px;
    width: 100%;
    height: 100%;
    top: 0;
    color: #fff;
    overflow: hidden;
}

.text:before{
    left: 3px;
    text-shadows:-2px 0 red;
}
.text:after{
    left: -3px;
    text-shadows:-2px 0 blue;
}
`

const Main = () => {

    return (
        <MainContainer>
            <Container>
                <div data-text='404' className='text'>404</div>
            </Container>
        </MainContainer>
    )
}

export default Main
