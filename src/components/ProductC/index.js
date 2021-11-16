import React from 'react'
import { Button } from 'react-scroll';
import Icon1 from '../../images/bigsize/1-bioAnsiedadAngustia.png'
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
                    <Heading >Bio Ansiedad/Angustia</Heading>
                    <Subtitle>Estado mental que se caracteriza por una gran inquietud, una intensa excitación y una extrema inseguridad. Las emociones presentes en los trastornos de ansiedad van desde el simple nerviosismo a episodios de terror o pánico, acompañada de angustia que muchas veces desencadena en neurosis.</Subtitle>
                    <Subtitle>Nuestro producto esta recomendado para personas tendientes a ser nerviosas, preocupadas en extremo, angustia progresiva, trastornos, crisis de ansiedad reactiva generalizada, sudoración en manos o cuerpo y trastornos psicosomáticos por ansiedad.</Subtitle>
                    <BtnWrap>
                                <button className="boton">WhatsApp</button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <img src={Icon1} width="400px"/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductC
