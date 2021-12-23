import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const ProductCContainer = styled.div`
height: auto;
background-color: #fff;
`

export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 30px 24px;
justify-content: center;

@media screen and (max-width: 768px) {
    padding: 0 24px;
    height: 800px;
}
@media screen and (max-width:480px) {
    padding: 0 24px;
    height: 750px;
}

`

export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px) {

    grid-template-areas ${({imgStart}) => (imgStart ? `'col 1' 'col2'` : `'col1 col 1' 'col2 col2'`)};
}
`

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`
export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`

export const TopLine = styled.p`
color: #73d629;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`

export const Heading = styled.h1`
margin-bottom: 14px;
font-size: 48px;
line-height: 1.1;
font-weight: 600px;
color: ${({lightBg}) => (lightBg ? '#73d629' : '#73d629')};

@media screen and (max-width:480px) {
    font-size: 32px;
}
`

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({darkText}) => (darkText ? '#010606' : '#010606')};
`

export const Compuestos = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 14px;
line-height: 24px;
font-style: italic;
color: ${({darkText}) => (darkText ? '#010606' : '#010606')};

@media screen and (max-width:768px) {
    font-size: 12px;
}
`


export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`
export const ImgWrap = styled.div`
max-width: 555px;
`

export const Img = styled.img`
width: 400px;
margin: 0 0 10px 0;
padding-right: 0;
`

export const Button = styled(Link)`
border-radius: 50px;
background: ${({primary}) => (primary ? '#73d629' : '#010606')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#fff' : '#fff')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out; 
    background: ${({primary}) => (primary ? '#010606' : '#73d629')};
}
`