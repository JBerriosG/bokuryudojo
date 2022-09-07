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
height:50vh;
position: relative;
overflow: hidden;
display: flex;
justify-content: center;
div{
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: justify;
}
div[id='info']{
    flex-direction: column;
}
`
const Title = styled.h1`
color: inherit;
padding: 0.5rem 0;
padding-top:1rem;

font-weight:700;
border-bottom: 1px solid ${props => props.theme.text};
-webkit-text-stroke: 1px black;
text-shadow:
       3px 3px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
`
const Description = styled.p`
color: inherit;
padding: 0.5rem 0;
padding-top:1rem;

font-weight:700;
-webkit-text-stroke: .1px black;
text-shadow:
       3px 3px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
`
const ImgArticle = styled.div`
position: relative;
width: 100%;
img{
    width: 25vw;
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