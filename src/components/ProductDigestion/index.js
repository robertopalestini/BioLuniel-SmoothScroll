import React from 'react'
import Icon17 from '../../images/bigsize/17-bioDigestion.png'
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Column3, Heading, Subtitle, ImgWrap, Compuestos} from './ProductCElements';


const ProductDigestion = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                <Column3>
                    {/* <TopLine>BioBach</TopLine> */}
                    <Heading >Bio Digestión</Heading>
                    </Column3>
                <Column2>
                    <ImgWrap>
                    <img src={Icon17} className="productoImagen" alt="Bio Digestion"/>
                    </ImgWrap>
                    </Column2>
                    <Column1>
                    <TextWrapper>
                    <Subtitle>Indicado en personas con problemas de la esfera digestiva, ya sea por
alteraciones gástricas como reflujo, gastritis, alteraciones del tránsito intestinal
como estreñimiento, colon irritable, diarreas funcionales o emocionales, etc. </Subtitle>
<Compuestos>Compuestos florales electromagnéticos: Walnut, Gencian, Crab Apple, entre otras.  </Compuestos>
                        </TextWrapper>
                    </Column1>        
                </InfoRow>
                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductDigestion
