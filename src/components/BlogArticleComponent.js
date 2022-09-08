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
height:60vh;
position: relative;
overflow: hidden;
display: flex;
justify-content: center;
flex-direction: column-reverse;
div{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: justify;
}
div[id='info']{
    flex-direction: column;
}

@media(min-width: 768px){
    height:50%;
    flex-direction: row;
    div{
        width: 50%;
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
const ImgArticle = styled.div`
position: relative;
width: 100%;
img{
    width: 90%;
    height: auto;
    border: 2px solid ${(props) => props.theme.text};
    border-radius:8px;
}
@media (min-width: 768px) {
    img{
        width: 20vw;
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

const BlogArticleComponent = (props) => {

    const { name, description, imgSrc } = props.blog;
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
                    <div>
                        <ImgArticle><img src={imgSrc}></img></ImgArticle>
                    </div>

                </Box>
            </ContainerPrincipal>
        </MainContainer>
    )

}

export default BlogArticleComponent