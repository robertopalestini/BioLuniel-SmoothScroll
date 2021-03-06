import React from 'react'
import Icon21 from '../../images/bigsize/21-bioColageno.png'
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Column3, Heading, Subtitle, ImgWrap, Compuestos} from './ProductCElements';


const ProductD = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                <Column3>
                    {/* <TopLine>BioBach</TopLine> */}
                    <Heading >Bio Colageno</Heading>
                    </Column3>
                <Column2>
                    <ImgWrap>
                    <img src={Icon21} className="productoImagen" alt="Bio Colageno"/>
                    </ImgWrap>
                    </Column2>
                    <Column1>
                    <TextWrapper>
                    
                    <Subtitle>Es un estimulador de la producción propia de colágeno de nuestro cuerpo,
necesario para mantener los tejidos blandos como la piel, pelo y uñas
saludables, lograr que se mantengan los tejidos peri articulares y articulares, así
como las superficies articulares saludables.</Subtitle>
<Compuestos>Compuestos florales electromagnéticos: Pine, entre otras.  </Compuestos>
                        </TextWrapper>
                    </Column1>
                    
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductD
