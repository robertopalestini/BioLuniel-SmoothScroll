import React from 'react'
import Icon1 from '../../images/1-bioAnsiedadAngustia.png'
import Icon2 from '../../images/1-bioAnsiedadAngustia.png'
import Icon3 from '../../images/1-bioAnsiedadAngustia.png'
import {ProductsContainer, ProductsH1, ProductsWrapper, ProductsCard, ProductsIcon, ProductsH2, ProductsP } from './ProductsElements'
const Products = () => {
    return (
        <ProductsContainer>
            <ProductsH1>Our Products</ProductsH1>
            <ProductsWrapper>
                <ProductsCard>
                    <ProductsIcon src={Icon1} />
                    <ProductsH2>Bio Ansiedad/Angustia</ProductsH2>
                    <ProductsP>Caracteristicas del po</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon2} />
                    <ProductsH2>Bio Ira</ProductsH2>
                    <ProductsP>Caracteristicas del po</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon3} />
                    <ProductsH2>Bio Digestion</ProductsH2>
                    <ProductsP>Caracteristicas del po</ProductsP>
                </ProductsCard>
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default Products
