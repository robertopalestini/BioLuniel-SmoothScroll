import React from 'react'
import { Button } from 'react-scroll';
import Icon13 from '../../images/bigsize/13-bioHombre.png'
import HeroSectionP from '../HeroSectionP';
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './ProductCElements';


const ProductHombre = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
        <HeroSectionP />
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                    <TopLine>BioBach</TopLine>
                    <Heading >Bio Hombre</Heading>
                    <Subtitle>Indicado en hombres con hipertrofia prostática benigna, también que estén
cursando los períodos de falta de lívido, deseo sexual, andropausia, entre otras
afecciones, más si esto se acompaña de alteraciones de la esfera emocional,
además va a apoyar en regular y adaptar el estado funcional hormonal, estado de
ánimo, fatiga, pérdida de energía, irritabilidad y cambio de actitud frente a la vida.
</Subtitle>
<Subtitle>Cabe aclarar que no contiene ningún tipo de hormonas, es un biorregulador
adaptogénico (adapta al cuerpo al nuevo nivel hormonal).</Subtitle>
                   
                    <BtnWrap>
                                <button className="boton">WhatsApp</button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <img src={Icon13} width="400px"/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductHombre
