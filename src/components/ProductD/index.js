import React from 'react'
import Icon4 from '../../images/bigsize/4-bioIra.png'
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Column3, Heading, Subtitle, ImgWrap, Compuestos} from './ProductCElements';


const ProductD = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                <Column3>
                    {/* <TopLine>BioBach</TopLine> */}
                    <Heading >Bio Ira</Heading>
                    </Column3>
                <Column2>
                    <ImgWrap>
                    <img src={Icon4} className="productoImagen" alt="Bio Ira"/>
                    </ImgWrap>
                    </Column2>
                    <Column1>
                    <TextWrapper>
                    
                    <Subtitle>Puede tener muchas consecuencias físicas y mentales, la ira, cólera (colerín),
rabia, enojo o furia es una emoción que se expresa a través de la irritabilidad.
Los efectos físicos de la ira incluyen aumento del ritmo cardíaco, de la
irritabilidad, de la presión sanguínea y de los niveles de adrenalina.
Cuando este estado de excitación permanece estamos más predispuestos a
actuar en forma impulsiva llegando a emitir conductas agresivas, algunos ven la
ira como parte de la respuesta cerebral de atacar o huir de una amenaza o daño
percibido en otros casos este estimulo externo se pierde en el tiempo, pero
persiste esta alteración emocional sin causa aparente.</Subtitle>
                    <Subtitle>Nuestro producto justamente está recomendado para equilibrar esta emoción llevando a la
persona a un control de sus acciones y evitando complicaciones con otros órganos. </Subtitle>
<Compuestos>Compuestos florales electromagnéticos: Tefilin, Gutles Mutter, Cherry Plum, entre otras.  </Compuestos>

                        </TextWrapper>
                    </Column1>
                    
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductD
