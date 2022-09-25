import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const MainContainer = styled(motion.div)`

`
const ContainerPrincipal = styled.div`
width: 100%;
height:auto;
position: relative;
`

const Box = styled.div`
width: 100%;
height:auto;
position: relative;
overflow: hidden;
display: flex;
justify-content: center;
flex-direction: column-reverse;
div{
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    text-align: justify;
}
div[id='info']{
    flex-direction: column;
}

@media(min-width: 768px){
    height:auto;
    flex-direction: row;
    align-items: center;
    div{
        width: 60%;
    }
}
`
const Title = styled.h1`
color: inherit;

font-weight:700;
border-bottom: 1px solid ${props => props.theme.text};

@media(min-width: 768px){
    -webkit-text-stroke: 1px black;
    text-shadow:
       3px 3px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
}
`
const Description = styled.p`
color: inherit;

font-weight:700;
@media(min-width: 768px){
    -webkit-text-stroke: .1px black;
    text-shadow:
       3px 3px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
}
`
const VideoArticle = styled.div`
position: relative;
width: 100%;
video{
    width: 60%;
    border: 2px solid ${(props) => props.theme.text};
    border-radius:8px;
}
@media (min-width: 768px) {
    video{
        width: 80%;
    }
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

const BlogArticleVideoComponent = (props) => {

    const { name, description, videoSrc} = props.blog;
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
                <Box>
                    <div id='info'>
                        <Title>{name}</Title>
                        <Description>{description}</Description>
                    </div>
                    <div id='video'>
                        <VideoArticle>
                            <video controls autoPlay>
                                <source src={videoSrc} type='video/mp4'></source>
                            </video>
                        </VideoArticle>
                    </div>

                </Box>
            </ContainerPrincipal>
        </MainContainer>
    )

}

export default BlogArticleVideoComponent