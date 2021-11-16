import React from 'react'
import { Button } from 'react-scroll';
import Icon3 from '../../images/3-bioEstres-01.png'
import HeroSectionP from '../HeroSectionP';
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './ProductCElements';


const ProductC = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
        <HeroSectionP />
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                    <TopLine>BioBach</TopLine>
                    <Heading >Bio Estres</Heading>
                    <Subtitle>Se considera estrés al estado o conjunto reacciones que le suceden a la persona
en respuesta las presiones sociales o emocionales o por un exceso de
situaciones que superan sus recursos, expresándose como cansancio mental y
físico. En estos casos, el individuo experimenta una sobrecarga que puede
influir en el bienestar tanto físico como psicológico y personal.
</Subtitle>
                    <Subtitle>Nuestro producto para estrés es ideal en este tipo paciente cuyo estilo de vida
con muchas exigencias, responsabilidades se manifiesten con signos generales
o psicosomáticos de estrés, que generen alteraciones de adaptación. </Subtitle>
                    <BtnWrap>
                                <button className="boton">WhatsApp</button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <img src={Icon3} width="400px"/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductC
