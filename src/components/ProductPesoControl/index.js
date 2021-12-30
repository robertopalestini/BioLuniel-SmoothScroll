import React from 'react'
import Icon22 from '../../images/bigsize/22-bioPeso.png'
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Column3, Heading, Subtitle, BtnWrap, ImgWrap, Compuestos} from './ProductCElements';


const ProductPesoControl = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                <Column3>
                    {/* <TopLine>BioBach</TopLine> */}
                    <Heading >Bio Peso Control</Heading>
                    </Column3>
                <Column2>
                    <ImgWrap>
                    <img src={Icon22} className="productoImagen" alt="Bio Tristeza"/>
                    </ImgWrap>
                    </Column2>
                    <Column1>
                    <TextWrapper>
                    
                    <Subtitle>Tratamiento que hace una limpieza orgánica e intestinal inicial, apoya en el
control del apetito aumentando y desordenado, regula el metabolismo, calma
la ansiedad por comer.

</Subtitle>
                    <Subtitle>Se recomienda tomarlo no menos de 60 días, y es más efectivo si se acompaña
de ejercicio tipo cardio moderado por 30 minutos diario y alimentación sana y
equilibrada, tomar abundante agua.  </Subtitle>
<Compuestos>Compuestos florales electromagnéticos: Walnut, Hornbean, Larch, entre otras.  </Compuestos>
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

export default ProductPesoControl
