import React from 'react'
import Icon22 from '../../images/bigsize/22-bioPeso.png'
import HeroSectionP from '../HeroSectionP';
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap} from './ProductCElements';


const ProductPesoControl = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
        <HeroSectionP />
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                    <TopLine>BioBach</TopLine>
                    <Heading >Bio Peso Control</Heading>
                    <Subtitle>Tratamiento que hace una limpieza orgánica e intestinal inicial, apoya en el
control del apetito aumentando y desordenado, regula el metabolismo, calma
la ansiedad por comer.

</Subtitle>
                    <Subtitle>Se recomienda tomarlo no menos de 60 días, y es más efectivo si se acompaña
de ejercicio tipo cardio moderado por 30 minutos diario y alimentación sana y
equilibrada, tomar abundante agua.  </Subtitle>
                    <BtnWrap>
                                <button className="boton">WhatsApp</button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <img src={Icon22} className="productoImagen" alt="Bio Tristeza"/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductPesoControl
