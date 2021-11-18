import React from 'react'
import { Button } from 'react-scroll';
import Icon5 from '../../images/bigsize/5-bioPaz.png'
import HeroSectionP from '../HeroSectionP';
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './ProductCElements';


const ProductPaz = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
        <HeroSectionP />
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                    <TopLine>BioBach</TopLine>
                    <Heading >Bio Paz</Heading>
                    <Subtitle>Indicado para estabilizar el estado emocional en casos de intranquilidad,
impaciencia, hiperactividad sin causa específica, pensamientos negativos y
perturbadores, arrastra problemas del pasado, no está alineado con su
propósito de vida.
Muy apropiado en los niños y adultos con hiperactividad. </Subtitle>
                    
                    <BtnWrap>
                                <button className="boton">WhatsApp</button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <img src={Icon5} className="productoImagen"/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductPaz
