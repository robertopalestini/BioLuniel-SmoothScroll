import React from 'react'
import Icon15 from '../../images/bigsize/15-bioMemoria.png'
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Column3, Heading, Subtitle, ImgWrap, Compuestos} from './ProductCElements';


const ProductMemoria = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                <Column3>
                    {/* <TopLine>BioBach</TopLine> */}
                    <Heading >Bio Memoria</Heading>
                    </Column3>
                <Column2>
                    <ImgWrap>
                    <img src={Icon15} className="productoImagen" alt="Bio Memoria"/>
                    </ImgWrap>
                    </Column2>
                    <Column1>
                    <TextWrapper>
                    
                    <Subtitle>Para mejorar la memoria tanto en pacientes jóvenes, estudiantes y personas de
edad avanzada, apoyo en terapias de aprendizaje.
Esta desconexión hace que fallen los mecanismos de adaptación de su entorno
más inmediato y que tengan pérdidas de referencias espaciales, de ubicación y
confusión, que provoca a menudo bloqueos.
 </Subtitle>
                    <Subtitle>Se recomienda en hipomnesia (es la disminución de la memoria en diversas
fases), paramnesis (perturbación de la memoria especialmente la que hace que
uno no pueda recordar el sentido de las palabras), alteraciones de la memoria de fijación.
Nuestro producto es ideal para toda persona que necesite este apoyo. </Subtitle>
<Compuestos>Compuestos florales electromagnéticos: Honey Suckle, Wild Oat, Clematis, entre otras.  </Compuestos>
                        </TextWrapper>
                    </Column1>
                    
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductMemoria
