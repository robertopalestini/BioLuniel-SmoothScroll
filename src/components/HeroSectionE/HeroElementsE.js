import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 700px;
position: relative;
object-fit: cover;
z-index: 1;

@media screen and (max-width: 1000px) {
    height: 1000px;
}

@media screen and (max-width: 768px) {
    height: 1200px;
}

:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
    180deg, rgba (0,0,0,0.2) 0%,
    rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
}
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;

`

export const HeroBgImage = styled.div`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background-color: beige;
`

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`

export const HeroH1 = styled.h1`
color: #fff;
font-size: 48px;
text-align: center;
text-shadow: 2px 2px 8px #000;
transition: 0.8s all ease;

@media screen and (max-width: 768px) {
    font-size 24px;
}

@media screen and (max-width: 480px) {
    font-size: 18px;
}
`

export const HeroP = styled.p`
margin-top: 24px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;
text-shadow: 2px 2px 8px #000;
`

export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`