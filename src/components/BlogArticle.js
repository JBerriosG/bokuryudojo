import { motion } from 'framer-motion'
import React from 'react'
import styled, {ThemeProvider } from 'styled-components'
import img from '../assets/Images/background-noticias.png'
import BigTitlte from '../subComponents/BigTitlte'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { DarkTheme } from './Themes'
import { Blogs } from '../data/BlogData'
import BlogArticleComponent from './BlogArticleComponent'

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
  
  position: absolute;
  left: calc(3rem + 3vw);
  top: 10rem;
  font-style: italic;

  @media(min-width: 768px){
    width: 70vw;
    height: 60vh;
    left: calc(5rem + 5vw);
  }
`
// Framer-motion config
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

const BlogArticle = (props) => {
    let {id} = props;
    console.log("argumentos: ", id)
    return (
        <MainContainer
            variants={container}
            initial='hidden'
            animate='show'
            exit={{
                opacity: 0, transition: { duration: 0.5 }
            }}
        >
            <ContainerPrincipal>
                <ThemeProvider theme={DarkTheme}>
                    <Box>
                        <LogoComponent theme="dark" />
                        <PowerButton />
                        <SocialIcons theme="dark" />
                        <Main>
                            {
                                Blogs.map(blog => {
                                    if(blog.id === parseInt(id)){
                                        return <BlogArticleComponent key={blog.id} blog={blog}/>
                                    }
                                    return null
                                })
                            }
                            <h1>{}</h1>
                        </Main>
                        <BigTitlte text="ARTICULO" top="5rem" left="5rem" />
                    </Box>
                </ThemeProvider>
            </ContainerPrincipal>
        </MainContainer>
    )

}

export default BlogArticle