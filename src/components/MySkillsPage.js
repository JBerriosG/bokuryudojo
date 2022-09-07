import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';
import { Dragon, YinYang } from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import { motion } from 'framer-motion'

const Box = styled.div`
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: center;
align-items: center;

`
const ContainerPrincipal = styled.div`
height:80%;
width: 80vw;
display:flex;
position:relative;
top:4.5rem;
justify-conten: flex-end;
flex-direction: column;

@media(min-width: 768px){
    flex-direction: row;

}
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 80%;
height: 50%;
z-index:3;
line-height: 1.5;
cursor: pointer;

display: flex;
flex-direction: column;
margin:10px;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}

@media(min-width: 768px){
    width:30vw;
    height:50vh;
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
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

const MySkillsPage = () => {
    return (
        <motion.div initial="hidden" animate="show" exit={{
            opacity: 0, transition: { duration: 0.5 }
        }} variants={container} >
            <ThemeProvider theme={lightTheme}>
                <Box>
                    <LogoComponent theme='light' />
                    <SocialIcons theme='light' />
                    <PowerButton />
                    <ParticleComponent theme='light' />
                    <ContainerPrincipal>
                        <Main>
                            <Title>
                                <YinYang width={40} height={40} /> Masaaki Hatsumi
                            </Title>
                            <Description>
                                I love to create design which speaks, Keep it clean, minimal and simple.
                            </Description>
                        </Main>
                        <Main>
                            <Title>
                                <Dragon width={80} height={80} /> Toshitsugu Takamatsu
                            </Title>
                            <Description>
                                I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
                            </Description>
                        </Main>
                    </ContainerPrincipal>

                    <BigTitle text="HISTORIA" top="80%" right="30%" />

                </Box>

            </ThemeProvider>
        </motion.div>

    )
}

export default MySkillsPage
