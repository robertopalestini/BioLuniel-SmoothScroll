import React from 'react'
import Icon11 from '../../images/bigsize/11-bioMigrana.png'
import HeroSectionP from '../HeroSectionP';
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap} from './ProductCElements';


const ProductMigrana = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
        <HeroSectionP />
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                    <TopLine>BioBach</TopLine>
                    <Heading >Bio Migraña</Heading>
                    <Subtitle>Puede producirse a cualquier edad, pero en general se inicia entre los 10 a 30
años, siendo más frecuente en las mujeres que en los varones, llamada también
"el grito silencioso de la mente agobiada", es un tipo de dolor de cabeza que
puede ocurrir con síntomas como náuseas, vómito o sensibilidad a la luz y al
sonido, en muchas personas se presenta con dolor pulsátil únicamente en un
lado de la cabeza. </Subtitle>
                    <Subtitle>Nuestro producto sirve como apoyo al tratamiento de migraña, logra que las
crisis de cefalea sean menos frecuentes y menos intensas, en muchos casos la
erradica definitivamente. 
</Subtitle>
                    <BtnWrap>
                                <button className="boton">WhatsApp</button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <img src={Icon11} className="productoImagen" alt="Bio Migraña"/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductMigrana
