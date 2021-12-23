import React from 'react'
import {animateScroll as scroll} from 'react-scroll';
//BIO NATURA
import Icon25 from '../../images/biocristal-01.png'
import Icon26 from '../../images/biocabello-01.png'
import Icon27 from '../../images/bioarsilla-01.png'
import {ProductsContainer, ProductsH1, ProductsWrapper, ProductsCard, ProductsIcon, ProductsIconBio, ProductsH2, ProductsP} from './ProductsElements'

    import { Link } from 'react-router-dom'
import ProductAnsiedadAngustia from '../ProductAnsiedadAngustia';
import ProductDepresion from '../ProductDepresion';
import ProductTristeza from '../ProductTristeza';
import ProductC from '../ProductC';
import ProductD from '../ProductColageno';
import ProductResentimiento from '../ProductResentimiento';
import ProductPaz from '../ProductPaz';
import ProductRescate from '../ProductRescate';
import ProductResistencia from '../ProductResistencia';
import ProductInsomnio from '../ProductInsomnio';
import ProductMigrana from '../ProductMigrana';
import ProductApetito from '../ProductApetito';
import ProductHombre from '../ProductHombre';
import ProductMujer from '../ProductMujer';
import ProductMemoria from '../ProductMemoria';
import ProductConcentracion from '../ProductConcentracion';
import ProductDigestion from '../ProductDigestion';
import ProductAlergia from '../ProductAlergia';
import ProductDetox from '../ProductDetox';
import ProductDefensas from '../ProductDefensas';
import ProductColageno from '../ProductColageno';
import ProductPesoControl from '../ProductPesoControl';
import ProductMiedoTemor from '../ProductMiedoTemor';
import ProductLinfa from '../ProductLinfa';
import ProductArtritis from '../ProductArtritis';
import ProductCristal from '../ProductCristal';
import ProductCabello from '../ProductCabello';
import ProductArcilla from '../ProductArcilla';



const InfoProducts = () => {
    

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <ProductsContainer id="biobach">
            <ProductsH1>Bio Bach</ProductsH1>
            <ProductAnsiedadAngustia />
            <ProductDepresion />
            <ProductTristeza />
            <ProductC />
            <ProductD />
            <ProductResentimiento />
            <ProductPaz />
            <ProductRescate />
            <ProductResistencia />
            <ProductInsomnio />
            <ProductMigrana />
            <ProductApetito />
            <ProductHombre />
            <ProductMujer />
            <ProductMemoria />
            <ProductConcentracion />
            <ProductDigestion />
            <ProductAlergia />
            <ProductDetox />
            <ProductDefensas />
            <ProductColageno />
            <ProductPesoControl />
            <ProductMiedoTemor />
            <ProductLinfa />
            <ProductArtritis />
            <ProductsH1>Bio Natura</ProductsH1>
            <ProductCristal />
            <ProductCabello />
            <ProductArcilla />

              </ProductsContainer>
    )
}

export default InfoProducts
