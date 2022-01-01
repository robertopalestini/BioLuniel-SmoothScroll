import React from 'react'
import Icon24 from '../../images/bigsize/24-bioLinfa.png'
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Column3, Heading, Subtitle, ImgWrap, Compuestos} from './ProductCElements';


const ProductLinfa = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                <Column3>
                    {/* <TopLine>BioBach</TopLine> */}
                    <Heading >Bio Linfa</Heading>
                    </Column3>
                <Column2>
                    <ImgWrap>
                    <img src={Icon24} className="productoImagen" alt="Bio Linfa"/>
                    </ImgWrap>
                    </Column2>
                    <Column1>
                    <TextWrapper>
                    
                    <Subtitle>La linfa trabaja sin parar en nuestro interior, día y noche, para protegernos de
enfermedades, eliminar el exceso de líquido y ayudarnos a mantener una calidad
de vida óptima.
La linfa es un plasma sanguíneo, que fluye de manera paralela al sistema
circulatorio, y es capaz de movilizar moléculas más grandes y el líquido sobrante
con sustancias de desecho resultantes de los intercambios celulares hasta la
sangre para que el organismo pueda desprenderse de ellos, por eso los edemas y
retenciones se producen cuando el sistema linfático no puede depurar estas zonas, debido a que se
encuentran demasiado encharcadas.</Subtitle>
                    <Subtitle>
El drenaje linfático estimula la microcirculación y reduce la hinchazón, muy utilizados en postoperatorios
para mejorar la circulación sanguínea, eliminación de líquido intersticial y de las moléculas de gran
tamaño, facilitando su evacuación, de esta manera ayudar a reducir los tiempos de recuperación.
Reduce la sensación de piernas pesadas e hinchadas. </Subtitle>
<Compuestos>Compuestos florales electromagnéticos: Beech, Vervain, Healing Herb, entre otros.  </Compuestos>
                        </TextWrapper>
                    </Column1>
                    
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductLinfa
