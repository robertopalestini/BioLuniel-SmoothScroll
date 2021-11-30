import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll';
import {MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const ProductsContainer = styled.div`
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 40px;

@media screen and (max-width: 768px) {
    height: auto;
    padding: 30px;
    }

@media screen and (max-width: 480px) {
    height: auto;
    padding: 20px;
}
`

export const ProductsWrapper = styled.div`
max-widht: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`

export const ProductsCard = styled.div`
background: #f3f6f4;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover {transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ProductsIcon = styled.img`
width: 160px;
margin-bottom: 10px;
`
export const ProductsIconBio = styled.img`
width: 200px;
margin-bottom: 10px;
`

export const ProductsH1 = styled.h1`
font-size: 2.5rem;
color: #2e2c2b;
margin-bottom: 64px;
margin-top: 20px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`

export const ProductsH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
color: #2e2c2b;
`

export const ProductsP = styled.p`
font-size: 1rem;
text-align: center;
color: #2e2c2b;
`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`

export const Button = styled(LinkS)`

`