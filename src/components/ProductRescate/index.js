import React from 'react'
import Icon8 from '../../images/bigsize/8-bioRescate.png'
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Column3, Heading, Subtitle, ImgWrap, Compuestos} from './ProductCElements';


const ProductRescate = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                <Column3>
                    {/* <TopLine>BioBach</TopLine> */}
                    <Heading >Bio Rescate</Heading>
                    </Column3>
                <Column2>
                    <ImgWrap>
                    <img src={Icon8} className="productoImagen" alt="Bio Rescate"/>
                    </ImgWrap>
                    </Column2>
                    <Column1>
                    <TextWrapper>
                    <Subtitle>Fórmula de emergencia (podemos tenerla en el botiquín), para ser usada en
situaciones mal definidas como pérdida de un ser querido, término de una
relación, pérdida del trabajo o cualquier situación que ese momento nos cause
un shock y por ello alteren nuestra salud emocional y física.</Subtitle>
<Subtitle>Como su nombre lo indica rescatamos a la persona para que no caiga en
cuadros de depresión y otras alteraciones emocionales que puedan causar
más daño. </Subtitle>
<Compuestos>Compuestos florales electromagnéticos: Vervain, Clematis, Impatiens, Star of Bethelehem, entre otros.  </Compuestos>
                        </TextWrapper>
                    </Column1>
                    
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductRescate
