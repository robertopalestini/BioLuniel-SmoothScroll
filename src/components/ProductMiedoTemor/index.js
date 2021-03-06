import React from 'react'
import Icon23 from '../../images/bigsize/23-bioMiedo.png'
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Column3, Heading, Subtitle, ImgWrap, Compuestos} from './ProductCElements';


const ProductMiedoTemor = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                <Column3>
                    {/* <TopLine>BioBach</TopLine> */}
                    <Heading >Bio Miedo Temor</Heading>
                    </Column3>
                <Column2>
                    <ImgWrap>
                    <img src={Icon23} className="productoImagen" alt="Bio Miedo Temor"/>
                    </ImgWrap>
                    </Column2>
                    <Column1>
                    <TextWrapper>
                    
                    <Subtitle>El miedo es una reacción caracterizada por una intensa sensación
desagradable, las personas pueden presentar una fuerte reacción física,
sudoración excesiva, latidos rápidos del corazón y sienten como si no pudieran
respirar o pensar. Esto es provocado por la percepción de un peligro real o
supuesto, presente, futuro o pasado, siendo estos algunos de los síntomas para
identificar a una persona que sufre de miedo.
</Subtitle>
                    <Subtitle>Nuestro producto actúa equilibrando las frecuencias alteradas por esta
emoción dando el coraje y valor a la persona que lo padece para enfrentarlo y
disminuyendo los niveles altos de inquietud asociado al miedo. </Subtitle>
<Compuestos>Compuestos florales electromagnéticos: Clematis, ELM, Olive, entre otras.  </Compuestos>
                        </TextWrapper>
                    </Column1>
                    
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductMiedoTemor
