import React from 'react'
import Icon1 from '../../images/bigsize/1-bioAnsiedadAngustia.png'

import { Compuestos } from '../ProductAlergia/ProductCElements';
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, Column3, TextWrapper, Heading, Subtitle, BtnWrap, ImgWrap} from './ProductCElements';


const ProductAnsiedadAngustia = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>

            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                <Column3>
                <Heading >Bio Ansiedad Angustia</Heading>
                </Column3>
                <Column2>
                    <ImgWrap>
                    <img src={Icon1} className="productoImagen" alt="Bio Ansiedad Angustia"/>
                    </ImgWrap>
                    </Column2>
                    <Column1>
                    <TextWrapper>
                    {/* <TopLine>BioBach</TopLine> */}
                    
                    <Subtitle>Estado mental que se caracteriza por una gran inquietud, una intensa excitación
y una extrema inseguridad. Las emociones presentes en los trastornos de
ansiedad van desde el simple nerviosismo a episodios de terror o pánico,
acompañada de angustia que muchas veces desencadena en neurosis.
</Subtitle>
                    <Subtitle>Nuestro producto esta recomendado para personas tendientes a ser nerviosas,
preocupadas en extremo, angustia progresiva, trastornos, crisis de ansiedad
reactiva generalizada, sudoración en manos o cuerpo y trastornos
psicosomáticos por ansiedad.   </Subtitle>
<Compuestos>Compuestos florales electromagnéticos: Holly, Aspen, Sweet, Chestnut, entre otros.  </Compuestos>
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

export default ProductAnsiedadAngustia
