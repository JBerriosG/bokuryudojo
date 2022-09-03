import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import dragon from '../assets/Images/solo-dragon.png'
import img from '../assets/Images/background-nosotros.jpeg'
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
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-style: italic;
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
                        <ParticleComponent theme='dark' />

                        <Dragon>
                            <img src={dragon} alt="dragon" />
                        </Dragon>
                        <Main>
                            I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.
                            <br /> <br />
                            I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.
                            <br /> <br />
                            I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
                        </Main>

                        <BigTitle text="NOSOTROS" top="10%" left="5%" />


                    </Box>

                </ThemeProvider>
            </ContainerPrincipal>
        </MainContainer>

    )
}

export default AboutPage
