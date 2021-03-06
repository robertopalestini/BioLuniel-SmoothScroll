import React from 'react'
import Icon7 from '../../images/bigsize/7-bioTristeza.png'
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Column3, Heading, Subtitle, ImgWrap, Compuestos} from './ProductCElements';


const ProductTristeza = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                <Column3>
                    {/* <TopLine>BioBach</TopLine> */}
                    <Heading >Bio Tristeza</Heading>
                    </Column3>
                <Column2>
                    <ImgWrap>
                    <img src={Icon7}className="productoImagen" alt="Bio Tristeza"/>
                    </ImgWrap>
                    </Column2>
                    <Column1>
                    <TextWrapper>
                    <Subtitle>La Tristeza puede ser también un síntoma de distimia, que se caracteriza,
además, por un abatimiento general de la persona, por el descenso de la
autoestima y los sentimientos de pesimismo, desesperanza y desamparo,
causando tristeza profunda y crónica que puede incluir también pesimismo y
disminución de la motivación, labilidad emocional.
</Subtitle>
                    <Subtitle>Nuestro producto está recomendado en individuos con personalidad triste,
apagada, en circunstancias particulares, individuos tendientes a la soledad. Los
síntomas más evidentes son el llanto, el desgano, el nerviosismo, suspiros
frecuentes y profundos y el decaimiento moral.  </Subtitle>
<Compuestos>Compuestos florales electromagnéticos: Mustard, Pine, Wild Oat, Wild Rose, entre otros.  </Compuestos>
                        </TextWrapper>
                    </Column1>
                </InfoRow>
                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductTristeza
