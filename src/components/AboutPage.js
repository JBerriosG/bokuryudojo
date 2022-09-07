import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import BigTitle from '../subComponents/BigTitlte'
import dragon from '../assets/Images/solo-dragon.png'
import img from '../assets/Images/background-nosotros.png'
import { motion } from 'framer-motion';

const MainContainer = styled(motion.div)`
background: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`
const ContainerPrincipal = styled.div`
background-color: rgba(30, 30, 30, 0.8);
width: 100%;
height:auto;

position: relative;
padding-bottom: 5rem;
`

const Box = styled.div`
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Dragon = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  width: 70vw;
  height: 70vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.7rem + 1vw);
  
  position: absolute;
  left: calc(3rem + 3vw);
  top: 10rem;
  font-style: italic;

  @media(min-width: 768px){
    left: calc(5rem + 5vw);
    font-size: calc(0.6rem + 1vw);
  }
`
const container = {

    hidden: { opacity: 0 },
    show: {
        opacity: 1,

        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        }
    }

}



const AboutPage = () => {
    return (
        <MainContainer initial="hidden" animate="show" exit={{
            opacity: 0, transition: { duration: 0.5 }
        }} variants={container} >
            <ContainerPrincipal>
                <ThemeProvider theme={DarkTheme}>
                    <Box>

                        <LogoComponent theme='dark' />
                        <SocialIcons theme='dark' />
                        <PowerButton />

                        <Dragon>
                            <img src={dragon} alt="dragon" />
                        </Dragon>
                        <Main>
                            Somos un Dojo que imparte las enseñanzas de un antiguo arte marcial y estilo de vida japones llamado Bujinkan.
                            <br></br>
                            Hasta la fecha somos el único Dojo de Bujinkan ubicados en la ciudad de Copiapó, por lo que si quieres ser parte de esta gran y hermosa familia marcial y aprender mas sobre la cultura japonesa, y adquirir habilidades para tu vida y seguridad personal y la de tu familia, ven y entrena con nosotros, te estamos esperando.
                        </Main>

                        <BigTitle text="NOSOTROS" top="10%" left="5%" />


                    </Box>

                </ThemeProvider>
            </ContainerPrincipal>
        </MainContainer>

    )
}

export default AboutPage
