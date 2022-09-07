
import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import wood from '../assets/Images/madera2.png'


const Container = styled.div`
perspective: 700;
`
const Box = styled(motion.div)`
width: 2rem;
height: 50vh;
padding: 1.5rem 2rem;
margin-right: 8rem;
transition: all 0.2s ease;
`
const CardBox = styled.div`
width: 10rem;
height: 50vh;
background: url('${wood}');
background-position: center center;
background-size: 25rem 110vh;
color:${props => props.theme.text};
padding: 1.5rem 2rem;
margin-right: 8rem;
border-radius: 6px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;
transform-style: preserve-3d;

&:hover{
    transform: rotateY(180deg);
}

.front{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.back{
    display: flex;
    transform: rotateY(180deg);
    align-items: center;
}

.front, .back{
    position: absolute;
    width: 10rem;
    height: 50vh;
    backface-visibility: hidden;
}
`
const Title = styled.h2`
font-size: calc(0.8em + 0.5vw);
width: 10px;
word-wrap: break-word;
text-align: center;
margin-bottom: 10px;
padding: 10px;
-webkit-background-clip: text;
-moz-background-clip: text;
background-clip: text;
color: transparent;
text-shadow: 0px 3px 3px rgba(255,255,255,0.5),0px -1px 1px rgba(0,0,0,1);
`

const Description = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-weight: 500;
text-align: center;
padding: 10px;
-webkit-background-clip: text;
-moz-background-clip: text;
background-clip: text;
color: transparent;
text-shadow: 0px 3px 3px rgba(255,255,255,0.5),0px -1px 1px rgba(0,0,0,1);
`


// Framer motion configuration
const Item = {
    hidden: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Card = (props) => {

    const { id, name, lastname, description } = props.data;

    return (
        <Container>
            <Box key={id} variants={Item}>
                <CardBox>
                    <div className='front'>
                        <Title>{name}</Title>
                        <Title>{lastname}</Title>
                    </div>
                    <div className='back'>
                        <Description>
                            {description}
                        </Description>
                    </div>
                </CardBox>
            </Box>
        </Container>
    )
}

export default Card
