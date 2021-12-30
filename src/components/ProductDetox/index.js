import React from 'react'
import Icon19 from '../../images/bigsize/19-bioDetox.png'
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Column3, Heading, Subtitle, BtnWrap, ImgWrap, Compuestos} from './ProductCElements';


const ProductD = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                <Column3>
                    {/* <TopLine>BioBach</TopLine> */}
                    <Heading >Bio Detox</Heading>
                    </Column3>
                <Column2>
                    <ImgWrap>
                    <img src={Icon19} className="productoImagen" alt="Bio Detox"/>
                    </ImgWrap>
                    </Column2>
                    <Column1>
                    <TextWrapper>
                    
                    <Subtitle>Mezcla de elixires florales que favorecen los propios mecanismos de
eliminación de toxinas de cualquier tipo, ayudan a limpiar el organismo, de
hecho, ayudan a lograr un verdadero drenaje psicológico y físico, puesto que, a
veces, lo que ensucia más el cuerpo llega a través de pensamientos negativos o
malos recuerdos este proceso es hecho a través de los ganglios linfáticos.
</Subtitle>
                    <Subtitle>Para que eso sea más eficaz debemos tomar abundante agua (mínimo 2 litros
al día). </Subtitle>
<Compuestos>Compuestos florales electromagnéticos: Crab Apple, Walnut, Beech, entre otras.  </Compuestos>
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

export default ProductD
