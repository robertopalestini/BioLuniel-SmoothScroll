import React from 'react'
import { Button } from 'react-scroll';
import Icon8 from '../../images/bigsize/8-bioRescate.png'
import HeroSectionP from '../HeroSectionP';
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './ProductCElements';


const ProductRescate = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
        <HeroSectionP />
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                    <TopLine>BioBach</TopLine>
                    <Heading >Bio Rescate</Heading>
                    <Subtitle>Fórmula de emergencia (podemos tenerla en el botiquín), para ser usada en
situaciones mal definidas como pérdida de un ser querido, término de una
relación, pérdida del trabajo o cualquier situación que ese momento nos cause
un shock y por ello alteren nuestra salud emocional y física.
Como su nombre lo indica rescatamos a la persona para que no caiga en
cuadros de depresión y otras alteraciones emocionales que puedan causar
más daño. </Subtitle>
                    
                    <BtnWrap>
                                <button className="boton">WhatsApp</button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <img src={Icon8} className="productoImagen"/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductRescate
