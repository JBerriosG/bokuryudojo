import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import { LogoDojo } from '../components/AllSvgs'




const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;

position: fixed;
left: 0rem;
top: 0rem;
z-index:3;
transform: translateY(-50px);
`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
          <LogoDojo width={300} height={240} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
        </Logo>
    )
}

export default LogoComponent
