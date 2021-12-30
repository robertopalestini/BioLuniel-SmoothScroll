import React from 'react'
import Icon13 from '../../images/bigsize/13-bioHombre.png'
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Column3, Heading, Subtitle, BtnWrap, ImgWrap, Compuestos} from './ProductCElements';


const ProductHombre = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                <Column3>
                    {/* <TopLine>BioBach</TopLine> */}
                    <Heading >Bio Hombre</Heading>
                    </Column3>
                <Column2>
                    <ImgWrap>
                    <img src={Icon13} className="productoImagen" alt="Bio Hombre"/>
                    </ImgWrap>
                    </Column2>
                    <Column1>
                    <TextWrapper>
                    
                    <Subtitle>Indicado en hombres con hipertrofia prostática benigna, también que estén
cursando los períodos de falta de lívido, deseo sexual, andropausia, entre otras
afecciones, más si esto se acompaña de alteraciones de la esfera emocional,
además va a apoyar en regular y adaptar el estado funcional hormonal, estado de
ánimo, fatiga, pérdida de energía, irritabilidad y cambio de actitud frente a la vida.
</Subtitle>
<Subtitle>Cabe aclarar que no contiene ningún tipo de hormonas, es un biorregulador
adaptogénico (adapta al cuerpo al nuevo nivel hormonal).</Subtitle>
<Compuestos>Compuestos florales electromagnéticos: Beech, Crab Apple, Mimulus, entre otras.  </Compuestos>
                    <BtnWrap>
                                <button className="boton">WhatsApp</button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductHombre
