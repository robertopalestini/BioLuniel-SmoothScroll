import React from 'react'
import Icon16 from '../../images/bigsize/16-bioConcentracion.png'
import HeroSectionP from '../HeroSectionP';
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap} from './ProductCElements';


const ProductConcentracion = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
        <HeroSectionP />
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                    <TopLine>BioBach</TopLine>
                    <Heading >Bio Concentración</Heading>
                    <Subtitle>Indicado para lograr controlar problemas de la falta de concentración, esto es,
no estar presente en lo que hacemos; significa distraído por algo que no está
sucediendo ahora y que no tiene que ver con la acción concreta que se está
llevando a cabo, problemas de Atención Dispersa. </Subtitle>
                    <Subtitle>La fata de concentración impacta muy negativamente en la propia autoestima y
en las relaciones que se establece con los demás. </Subtitle>
                    <BtnWrap>
                                <button className="boton">WhatsApp</button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <img src={Icon16} className="productoImagen" alt="Bio Concentración"/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductConcentracion
