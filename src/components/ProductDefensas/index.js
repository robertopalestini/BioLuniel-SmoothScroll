import React from 'react'
import Icon20 from '../../images/bigsize/20-bioDefensas.png'
import HeroSectionP from '../HeroSectionP';
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Compuestos} from './ProductCElements';


const ProductDefensas = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
        <HeroSectionP />
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                    <TopLine>BioBach</TopLine>
                    <Heading >Bio Defensas</Heading>
                    <Subtitle>Los elixires florales trabajan tanto en el campo emocional como en el físico,
sabiendo que cuando la salud emocional está alterada las defensas bajan
dando paso a que aparezcan disfunciones, además de que con frecuencias
vibracionales apropiadas pueden destruir las capas superficiales de virus y
bacterias de esta manera inactivarlos.
El sistema inmunológico es la defensa natural del cuerpo contra las infecciones,
por medio de una serie de pasos, su cuerpo combate y destruye organismos
infecciosos invasores antes de que causen daño. Cuando su sistema inmune no
trabaja como debe comienza a atacar a su propio cuerpo, dando como resultado las enfermedades
autoinmunes.</Subtitle>
                    <Subtitle>Nuestro producto esta recomendado para personas enfermizas o que padecen infecciones a
repetición, que necesitan elevar sus defensas y que su cuerpo aprenda defenderse de agresiones
externas e internas. </Subtitle>
<Compuestos>Compuestos florales electromagnéticos: Aulaga, Mimulus, Start of Belem, Rose Rose, entre otras.  </Compuestos>
                    <BtnWrap>
                                <button className="boton">WhatsApp</button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <img src={Icon20} className="productoImagen" alt="Bio Defensas"/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductDefensas
