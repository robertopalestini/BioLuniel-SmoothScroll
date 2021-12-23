import React from 'react'
import Icon10 from '../../images/bigsize/10-bioInsomnio.png'
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Compuestos} from './ProductCElements';


const ProductInsomnio = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                    <TopLine>BioBach</TopLine>
                    <Heading >Bio Insomnio</Heading>
                    <Subtitle>Apoyo de tratamiento para lograr regular trastornos del sueño, problemas para
mantener el sueño, produciéndose despertares nocturnos de más de 30
minutos de duración, o despertando definitivamente de manera precoz
consiguiendo un tiempo total de sueño escaso, trastornos de sueño con
pesadillas, hipersomnia (dormir demasiado).
Bio Insomnio regula las fases REM (movimiento ocular rápido), esta fase participa
en el proceso de almacenamiento de recuerdos y aprendizaje, también ayuda a
equilibrar el estado de ánimo, estas fases hacen que el cerebro se reorganice y el
organismo se energice, para de esta manera lograr un sueño reparador. La falta de sueño puede
afectar de modo negativo a la vida de la persona que lo sufre, provocando deterioro social,
ocupacional u otras áreas.</Subtitle>
                    <Subtitle>Es importante señalar que nuestro producto NO ES UN INDUCTOR DEL SUEÑO, es un
BIOREGULADOR del ciclo circadiano (es el reloj biológico que regula y programa las funciones
fisiológicas del organismo en un período de un día o 24 horas), por lo tanto, se debe tomar aún en el
día sin riesgo de producir somnolencia. </Subtitle>
<Compuestos>Compuestos florales electromagnéticos: Hombeam, Vervain, Mimulus, entre otros.  </Compuestos>
                    <BtnWrap>
                                <button className="boton">WhatsApp</button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <img src={Icon10} className="productoImagen" alt="Bio Insomnio"/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductInsomnio
