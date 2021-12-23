import React from 'react'
import Icon18 from '../../images/18-bioAlergia.png'
import HeroSectionP from '../HeroSectionP';
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, Compuestos, BtnWrap, ImgWrap} from './ProductCElements';


const ProductAlergia = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
        <HeroSectionP />
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                    <TopLine>BioBach</TopLine>
                    <Heading >Bio Alergia</Heading>
                    <Subtitle>Las alergias son la respuesta excesiva por parte del sistema inmunológico a un
agente externo; esta respuesta se deriva de una causa interna que puede ser
incrementada por la carga emocional.
Aparte de factores ambientales y hereditarios, muchas alergias vienen
provocadas por factores psicoemocionales que desequilibran el sistema
inmunitario y provocan una reacción de hipersensibilidad.

</Subtitle>
                    <Subtitle>La función armonizadora de nuestros productos florales sobre estos
desequilibrios, pueden ser de gran ayuda para las personas que padecen alergias diversas y apoyo
terapéutico a otros medicamentos alopáticos.  </Subtitle>
<Compuestos>Compuestos florales electromagnéticos: Willow, Vervain, Scleranthus, entre otras.  </Compuestos>
                    <BtnWrap>
                                <button className="boton">WhatsApp</button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <img src={Icon18} className="productoImagen" alt="Bio Alergia"/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductAlergia
