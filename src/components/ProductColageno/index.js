import React from 'react'
import { Button } from 'react-scroll';
import Icon21 from '../../images/bigsize/21-bioColageno.png'
import HeroSectionP from '../HeroSectionP';
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './ProductCElements';


const ProductD = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
        <HeroSectionP />
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                    <TopLine>BioBach</TopLine>
                    <Heading >Bio Colageno</Heading>
                    <Subtitle>Es un estimulador de la producción propia de colágeno de nuestro cuerpo,
necesario para mantener los tejidos blandos como la piel, pelo y uñas
saludables, lograr que se mantengan los tejidos peri articulares y articulares, así
como las superficies articulares saludables.</Subtitle>
                    
                    <BtnWrap>
                                <button className="boton">WhatsApp</button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <img src={Icon21} className="productoImagen"/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductD
