import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import { LogoDojo } from '../components/AllSvgs'




const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;

position: absolute;
left: 0rem;
top: 0rem;
z-index:3;
transform: translateY(-50px);
div{
  display:flex;
  width: 200px;
  height: 160px;
}

@media(min-width: 768px){
  div{
    width:300px;
    height:240px;
  }
}
`

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
      <div>
        <LogoDojo width={300} height={240} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
      </div>
    </Logo>
  )
}

export default LogoComponent
