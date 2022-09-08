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
height:auto;
position: relative;
display: flex;
justify-content: center;
align-items: center;

`
const ContainerPrincipal = styled.div`
width: 80vw;
height:auto;
display:flex;
position:relative;
top:10rem;
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
width: 70%;
height: auto;
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
    width:40%;
    height:auto;
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
text-align: justify;
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
                                Masaaki Hatsumi (Noda, 2 de diciembre de 1931) es un artista marcial y escritor japonés. Desde pequeño su padre lo instó a la práctica de las artes marciales practicando judo, karate estilo Shito Ryu, Daito Ryu Aikijujutsu (antecesor del Aikido), y hasta boxeo occidental entre otras, pero sin encontrar lo que buscaba. Solo se sintió satisfecho cuando comenzó a estudiar con el legendario maestro Toshitsugu Takamatsu a los 26 años de edad.
                            </Description>
                            <Description>
                                En el plano académico, una vez graduado de la secundaria ingresó a estudiar medicina en la Universidad de Meiji en Tokio, donde se graduó en medicina con la especialidad de Osteopatía; también se graduó en artes teatrales. Más adelante abrió su propia clínica quiropráctica en la ciudad de Noda.
                            </Description>
                            <Description>
                                Cuando Takamatsu decidió que Hatsumi estaba preparado, lo probó mediante el Sakki Jutsu (técnica de percepción de peligro), el cual Hatsumi superó, en vista de lo cual Takamatsu le entregó los pergaminos correspondientes a nueve artes marciales antiguas practicadas tanto por los shinobi/ ninja como por los guerreros samurái.
                            </Description>
                            <Description>
                                Siguiendo los pasos del maestro Takamatsu, heredó el título de sôke (heredero) de las siguientes 9 ryu o escuelas de artes marciales:
                            </Description>
                            <Description>* Togakure-ryû Ninpô Taijutsu</Description>
                            <Description>* Gyokko-ryû Kosshijutsu</Description>
                            <Description>* Kuki Shinden-ryû Happô Bikenjutsu</Description>
                            <Description>* Kotô-ryû Koppôjutsu</Description>
                            <Description>* Shinden Fudô-ryû Dakentaijutsu</Description>
                            <Description>* Takagi Yôshin-ryû Jûtaijutsu</Description>
                            <Description>* Gikan-ryû Koppôjutsu</Description>
                            <Description>* Gyokushin-ryû Ninpô</Description>
                            <Description>* Kumogakure-ryû Ninpô</Description>
                        </Main>
                        <Main>
                            <Title>
                                <Dragon width={80} height={80} /> Toshitsugu Takamatsu
                            </Title>
                            <Description>
                                Toshitsugu Takamatsu fue un gran maestro japonés nacido el 10 de marzo de 1889 (1887 según otras fuentes) y fallecido el 2 de abril de 1972. Es conocido, entre otros hechos, por ser el maestro del famoso Masaaki Hatsumi sensei, fundador de la escuela Bujinkan.
                            </Description>
                            <Description>
                                Nació en Akashi, prefectura de Hyogo, Japón. Su nombre de nacimiento fue Hisatsugu aunque fue más conocido con el sobrenombre de Moko no Tora (el Tigre Mongol). Fue separado de su madre antes de cumplir un año y fue criado por nueve madres diferentes durante su época de juventud. Su padre era empresario y cambiaba habitualmente de negocio comenzando como contratista en la Sanyo Railroad de Kobe y posteriormente dirigiendo una fábrica de fósforos en Akashi.
                            </Description>
                            <Description>
                                De joven, sus compañeros de clase se burlaban de él y le pegaban llamándolo "el niño llorón". Así, por orden de su padre, fue iniciado en técnicas de varios estilos marciales (como Shinden Fudo Ryu, Gyokushin Ryu, Koto Ryu o Togakure Ryu) por su abuelo, el maestro, samurai y 32º patriarca de la escuela Togakure-ryu, Toda Shinryuken Masamitsu, aunque los inicios fueron muy duros. Durante el primer año su abuelo se limitó a proyectarlo de lado a lado del tatami hasta que sangraba de codos y rodillas. En el dojo le llamaban kotengu, "pequeño duende". Aunque al principio se negaba a asistir al entrenamiento por su dureza, continuó, convirtiéndose en un alumno excepcional que con tan solo 13 años fue nombrado Menkyo Kaiden (maestro) del estilo Shinden Fudo Ryu.
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
