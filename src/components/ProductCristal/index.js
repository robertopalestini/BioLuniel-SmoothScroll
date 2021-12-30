import React from 'react'
import Icon25 from '../../images/biocristal-01.png'
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Column3, Heading, Subtitle, BtnWrap, ImgWrap} from './ProductCElements';


const ProductCristal = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                <Column3>
                    {/* <TopLine>Bio Natura</TopLine> */}
                    <Heading >Bio Cristal</Heading>
                    </Column3>
                <Column2>
                    <ImgWrap>
                    <img src={Icon25} className="productoImagen" alt="Bio Cristal"/>
                    </ImgWrap>
                    </Column2>
                    <Column1>
                    <TextWrapper>
                    
                    <Subtitle>Antitranspirante elaborado con productos naturales a base de 
                        sales minerales, agua purificada y magnetizada. 
                        Elimina el mal olor causado por bacterias que se multiplican e la 
                        piel y disminuye la cantidad de sudoración en cualquier superficie 
                        de la piel.
</Subtitle>
                        <Subtitle>No enmascara el mal olor, lo elimina inmediatamente cuando es aplicado directamente sobre la piel y sobre la prenda de vestir. Puede ser usada incluso en partes íntimas del cuerpo. Nivela el pH de la piel, es hipoalergénico ya que no contiene alcohol o perfumes, no irrita la piel   ya que está elaborado en agua magnetizada, purificada. Puede ser pulverizada en el interior de los zapatos. </Subtitle>

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

export default ProductCristal
