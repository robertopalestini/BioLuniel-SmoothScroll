import React from 'react'
import Icon3 from '../../images/bigsize/3-bioEstres.png';
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Column3, Heading, Subtitle, ImgWrap, Compuestos} from './ProductCElements';


const ProductC = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                <Column3>
                {/* <TopLine>BioBach</TopLine> */}
                <Heading >Bio Estres</Heading>
                </Column3>
                <Column2>
                    <ImgWrap>
                    <img className="productoImagen" alt="Bio Estres" src={Icon3} />
                    </ImgWrap>
                    </Column2>
                    <Column1>
                    <TextWrapper>
                    
                    <Subtitle>Se considera estrés al estado o conjunto reacciones que le suceden a la persona
en respuesta las presiones sociales o emocionales o por un exceso de
situaciones que superan sus recursos, expresándose como cansancio mental y
físico. En estos casos, el individuo experimenta una sobrecarga que puede
influir en el bienestar tanto físico como psicológico y personal.
</Subtitle>
                    <Subtitle>Nuestro producto para estrés es ideal en este tipo paciente cuyo estilo de vida
con muchas exigencias, responsabilidades se manifiesten con signos generales
o psicosomáticos de estrés, que generen alteraciones de adaptación. </Subtitle>
<Compuestos>Compuestos florales electromagnéticos: Oak, Elm, Olive, Red Chesnut, Impatiens, entre otras.  </Compuestos>
                        </TextWrapper>
                    </Column1>
                    
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductC
