import React from 'react'
import Icon26 from '../../images/biocabello-01.png'
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Column3, Heading, Subtitle, Compuestos, ImgWrap} from './ProductCElements';


const ProductCabello = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                <Column3>
                    {/* <TopLine>Bio Natura</TopLine> */}
                    <Heading >Bio Cabello Sano</Heading>
                    </Column3>
                <Column2>
                    <ImgWrap>
                    <img src={Icon26} className="productoImagen" alt="Bio Cabello Sano"/>
                    </ImgWrap>
                    </Column2>
                    <Column1>
                    <TextWrapper>
                    
                    <Subtitle>Producto elaborado con tecnología electromagnética, para adicionar al shampoo y acondicionador de su preferencia. Mejora la circulación sanguínea del cuero cabelludo, nivela el estrés y como consecuencia detiene la caída del cabello (alopecia). Normaliza el funcionamiento glándulas sebáceas por esta razón elimina la caspa producida por seborrea o resequedad. 
Elimina puntas quebradizas devolviendo brillo y sedosidad a los cabellos opacos y maltratados.  
</Subtitle>
                        <Compuestos>Modo de Uso: Coloque 20 grageas en el frasco de shampoo nuevo de su preferencia (400 o 500ml) y 20 grageas en el acondicionador. Agite bien, deje reposar por 8 horas, antes de usar nuevamente agite y coloque es su cabello deje actuar por 10 minutos y enjuague con abundante agua. 
</Compuestos>
                        </TextWrapper>
                    </Column1>
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductCabello
