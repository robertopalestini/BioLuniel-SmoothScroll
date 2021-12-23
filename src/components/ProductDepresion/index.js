import React from 'react'
import Icon2 from '../../images/bigsize/2-bioDepresion.png'
import HeroSectionP from '../HeroSectionP';
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Compuestos} from './ProductCElements';


const ProductDepresion = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
        <HeroSectionP />
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                    <TopLine>BioBach</TopLine>
                    <Heading >Bio Depresión</Heading>
                    <Subtitle>La Depresión es un trastorno emocional que causa un sentimiento de tristeza
constante y una pérdida de interés en realizar diferentes actividades en
períodos largos de tiempo. Existen 2 tipos de depresión, exógena y endógena, la
primera causada por factores ambientales y psicológicos, la segunda causada
por factores genéticos, hereditarios, este tipo de depresión no depende de la
voluntad del paciente. La depresión puede comenzar a cualquier edad, pero
suele empezar en la juventud. Es mucho más común en las mujeres,
presentándose también la depresión postparto luego de dar a luz.
Compuestos florales electromagnéticos: Agrimony, Gentian, Larch, Gorse entre otros.
</Subtitle>
                    <Subtitle>Nuestro producto puede ser utilizado en personas con trastornos depresivos persistentes severos
o moderados en cuadros como depresión reactiva, depresión bipolar o intentos fallidos de suicidio,
(es importante anotar que no debe suspenderse ni reemplazar la medicación química que el
paciente este tomando) puede administrarse sólo o con otros productos sin tener riesgo de
contraindicaciones.</Subtitle>
<Compuestos>Compuestos florales electromagnéticos: Agrimony, Gentian, Larch, Gorse, entre otros.  </Compuestos>
                    <BtnWrap>
                                <button className="boton">WhatsApp</button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <img src={Icon2} className="productoImagen" alt="Bio Depresion"/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductDepresion
