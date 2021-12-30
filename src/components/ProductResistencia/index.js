import React from 'react'
import Icon9 from '../../images/bigsize/9-bioResistencia.png'
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Column3, Heading, Subtitle, BtnWrap, ImgWrap, Compuestos} from './ProductCElements';


const ProductResistencia = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                <Column3>
                    {/* <TopLine>BioBach</TopLine> */}
                    <Heading >Bio Resistencia (Bullying)</Heading>
                    </Column3>
                <Column2>
                    <ImgWrap>
                    <img src={Icon9} className="productoImagen" alt="Bio Resistencia"/>
                    </ImgWrap>
                    </Column2>
                    <Column1>
                    <TextWrapper>
                    
                    <Subtitle>Ideal para personas (niños y adultos) que están sufriendo daños físicos y
psicológicos de forma intencionada y reiterada por parte de otra persona o de un
grupo de personas (BULLYNG).
El acosado se siente indefenso y puede desarrollar una serie de problemas
psicológicos (baja autoestima), que afectan directamente a su salud o incluso, en
situaciones extremas propiciar que quiera acabar con su vida mediante el suicidio
o de ira extrema pueda llevar a terminar con la vida de otras personas.
</Subtitle>
                    <Subtitle>Nuestro producto actúa brindándole al paciente la entereza, firmeza, seguridad y fortaleza para
afrontar este tipo de maltrato. </Subtitle>
<Compuestos>Compuestos florales electromagnéticos: Larch, Centaury, Cherry Plum, Star of Bethlehem, entre otras.  </Compuestos>
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

export default ProductResistencia
