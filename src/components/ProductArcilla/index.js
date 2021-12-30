import React from 'react'
import Icon27 from '../../images/bioarsilla-01.png'
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, Column3, TextWrapper, Heading, Subtitle, Compuestos, BtnWrap, ImgWrap} from './ProductCElements';


const ProductArcilla = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                <Column3>
                <Heading >Bio Arcilla</Heading>
                </Column3>
                <Column2>
                    <ImgWrap>
                    <img src={Icon27} className="productoImagen" alt="Bio Arcilla"/>
                    </ImgWrap>
                    </Column2>
                   
                    <Column1>
                    <TextWrapper>
                    <Subtitle>Arcilla Natural Amazónica<br/>
Pose propiedades curativas, antibacterianas, cicatrizante, desintoxicante, regulador del pH, antinflamatorias, estimulantes de la inmunidad y regeneración epitelial, es hipoalergénica, no tiene preservantes ni colorantes. Al ser antibacteriano, regula el sebo y elimina impurezas de la piel mediante exfoliación, actúa también como calmante. Siendo ideal para las personas con acné y pieles grasas.
Su propiedad desintoxicante, hidratante gracias a su alto contenido de minerales es perfecta para ayudar a las pieles secas, ya que aporta luminosidad y efecto suave.
</Subtitle>
                        <Subtitle>Excelente para pieles con problema de dermatitis y psoriasis debido a que aporta alivio y evita la descamación de la zona.
Como un producto equilibrante aporta beneficios a todo tipo de piel sean secas, mixtas o grasas.
Ideal para faciales y corporales.  
</Subtitle>
<Compuestos>Modo de Uso: Colocar la cantidad a utilizar de BIO ARCILLA en un recipiente limpio preferentemente de acero inoxidable o vidrio, adicionar agua fría o caliente, libre de cloro, disolver hasta formar una pasta cremosa. 
Indicaciones: Piel seca, piel con acné, seborrea, piel maltratada, laceraciones, mantiene la juventud de la piel.</Compuestos>

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

export default ProductArcilla
