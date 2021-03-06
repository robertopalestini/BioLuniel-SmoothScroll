import React from 'react'
import Icon14 from '../../images/bigsize/14-bioMujer.png'
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Column3, Heading, Subtitle, ImgWrap, Compuestos} from './ProductCElements';


const ProductMujer = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                <Column3>
                    {/* <TopLine>BioBach</TopLine> */}
                    <Heading >Bio Mujer</Heading>
                    </Column3>
                <Column2>
                    <ImgWrap>
                    <img src={Icon14} className="productoImagen" alt="Bio Mujer"/>
                    </ImgWrap>
                    </Column2>
                    <Column1>
                    <TextWrapper>
                    
                    <Subtitle>Indicado en trastornos femeninos como: ciclos menstruales irregulares,
alteraciones en la menopausia, sofocos, calores nocturnos, cambios de carácter,
irritabilidad, disminución de la libido y todo lo que conlleva.
</Subtitle>
                    <Subtitle>Cabe aclarar que NO CONTIENE NINGUN TIPO DE HORMONAS, es un
biorregulador adaptogénico (adapta al cuerpo al nuevo nivel hormonal). </Subtitle>
<Compuestos>Compuestos florales electromagnéticos: Clematis, Larch, Olive, Star of Bethlehem, entre otras.  </Compuestos>
                        </TextWrapper>
                    </Column1>
                </InfoRow>
                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductMujer
