import React from 'react'
import { Button } from 'react-scroll';
import Icon6 from '../../images/bigsize/6-bioResentimiento.png'
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
                    <Heading >Bio Resentimiento</Heading>
                    <Subtitle>El Resentimiento mantiene atadas a las personas en el pasado por lo que se
estancan, no son capaces de olvidar y perdonar a quien los lastimó con sus
palabras o acciones, también llamado rencor.
Es una alteración emocional que cursa con sentimientos de disgusto o enfado
hacia alguien por considerado causante de cierta ofensa o daños sufridos y que
se manifiesta en palabras o actos hostiles hacia quien considera responsable
de su dolor. El resentimiento agravado acaba produciendo rencor persistente.
</Subtitle>
                    <Subtitle>Nuestro producto ayuda a sanar este sentimiento y de esta manera devolviendo el bienestar
emocional. </Subtitle>
                    <BtnWrap>
                                <button className="boton">WhatsApp</button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <img src={Icon6} className="productoImagen"/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductD
