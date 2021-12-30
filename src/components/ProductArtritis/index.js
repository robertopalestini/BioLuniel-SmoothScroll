import React from 'react';
import Icon28 from '../../images/bigsize/25-bioArtritis.png';
import './productbio.css';
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Column3, Heading, Subtitle, Compuestos, BtnWrap, ImgWrap} from './ProductCElements';


const ProductArtritis = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                <Column3>
                {/* <TopLine>Bio Bach</TopLine> */}
                <Heading >Bio Artritis</Heading>
                </Column3>
                <Column2>
                    <ImgWrap>
                    <img src={Icon28} className="productoImagen" alt="Bio Artritis"/>
                    </ImgWrap>
                    </Column2>
                    <Column1>
                    <TextWrapper>
                    <Subtitle>Es una enfermedad que provoca inflamación, dolor y rigidez de 
                        una o más articulaciones, y puede empeorar con el tiempo, no es una 
                        patalogía que ponga en peligro la vida del paciente, sin embargo, 
                        si produce un deterioro de la calidad de vida debido al dolor y a 
                        la pérdida de la movilidad.</Subtitle>
                        <Subtitle>Nuestro producto actúa modulando la respuesta autoinmune, 
                            tiene efecto antiinflamatorio, previene la deformación de las 
                            articulaciones.</Subtitle>
<Compuestos>Compuestos florales electromagnéticos: Elm, Willow, Rock water, Vervain, entre otros.</Compuestos>
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

export default ProductArtritis
