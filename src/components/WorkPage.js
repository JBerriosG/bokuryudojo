import React, { useEffect, useRef} from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme} from './Themes';
import { motion } from 'framer-motion';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';

import { Work } from "../data/WorkData";
import Card from '../subComponents/Card';
import { YinYang } from './AllSvgs';
import BigTitlte from '../subComponents/BigTitlte';
import img from '../assets/Images/background-members.png';

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
height:auto;
position: relative;
display: flex;
align-items: center;
justify-content: center;
`

const Main = styled(motion.ul)`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(1, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);

@media(min-width: 768px){
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 2vw);
}
@media(min-width: 1100px){
  grid-template-columns: repeat(4, minmax(calc(4rem + 4vw), 1fr));
  grid-gap: calc(1rem + 2vw);
}
`
const Rotate = styled.span`
display:block;
position: fixed;
right:1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index:1;
`


// Framer-motion Configuration
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

const WorkPage = () => {

  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {


    const rotate = () => {

      //element.style.transform = `translateY(${-window.pageYOffset}px)`

      return (yinyang.current.style.transform =
        'rotate(' + -window.pageYOffset + 'deg)')
    }

    window.addEventListener('scroll', rotate)
    return () => {
      window.removeEventListener('scroll', rotate);

    }
  }, [])


  return (
    <MainContainer initial="hidden" animate="show" exit={{
      opacity: 0, transition: { duration: 0.5 }
    }} variants={container}>
      <ContainerPrincipal>
        <ThemeProvider theme={DarkTheme}>
          <Box>
            <LogoComponent theme='dark' />
            <SocialIcons theme='dark' />
            <PowerButton />

            <Main ref={ref} variants={container} initial='hidden' animate='show'  >
                <Grid>
                  {
                    Work.map(d =>
                      <Card key={d.id} data={d} />
                    )
                  }
                </Grid>
            </Main>
            <Rotate ref={yinyang}>
              <YinYang width={80} height={80} fill={DarkTheme.text} />
            </Rotate>

            <BigTitlte text="MIEMBROS" top='7%' right="20%" />
          </Box>
        </ThemeProvider>
      </ContainerPrincipal>
    </MainContainer>

  )
}

export default WorkPage
