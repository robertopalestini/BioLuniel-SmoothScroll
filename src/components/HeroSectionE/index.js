import React, {useState} from 'react';
import {Button} from '../ButtonElement';
import { HeroContainer, HeroBg, HeroBgImage, HeroContent, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElementsE';
import Icon1 from '../../images/1-bioAnsiedadAngustia.png'
import Icon2 from '../../images/2-bioDepresion-01.png'
import Icon7 from '../../images/7-bioTristeza-01.png'
import {ProductsContainer, ProductsH1, ProductsWrapper, ProductsCard, ProductsIcon, ProductsH2, ProductsP} from './ProductsElements'
import { Link } from 'react-router-dom'
import {animateScroll as scroll} from 'react-scroll';
import Swal from 'sweetalert2';


const HeroSection = () => {

// Bio Bach
const ansiedad=()=>{
    Swal.fire({
        imageUrl: require("../../images/1-bioAnsiedadAngustia.png").default,
        imageWidth: '200px',

        title: 'Bio Ansiedad/Angustia',
        text: 'Nuestro producto esta recomendado para personas tendientes a ser nerviosas, preocupadas en extremo, angustia progresiva, trastornos, crisis de ansiedad reactiva generalizada, sudoración en manos o cuerpo y trastornos psicosomáticos por ansiedad.',
        footer: '<a href="">Contactar por Whatsapp</a>',
      })
}
const depresion=()=>{
    Swal.fire({
        imageUrl: require("../../images/2-bioDepresion-01.png").default,
        imageWidth: '200px',

        title: 'Bio Depresión',
        text: 'Nuestro producto puede ser utilizado en personas con trastornos depresivos persistentes severos o moderados en cuadros como depresión reactiva, depresión bipolar o intentos fallidos de suicidio, (es importante anotar que no debe suspenderse ni reemplazar la medicación química que el paciente este tomando) puede administrarse sólo o con otros productos sin tener riesgo de contraindicaciones. ',
        footer: '<a href="">Contactar por Whatsapp</a>',
      })
}
const tristeza=()=>{
    Swal.fire({
        imageUrl: require("../../images/7-bioTristeza-01.png").default,
        imageWidth: '200px',

        title: 'Bio Tristeza',
        text: 'Nuestro producto está recomendado en individuos con personalidad triste, apagada, en circunstancias particulares, individuos tendientes a la soledad. Los síntomas más evidentes son el llanto, el desgano, el nerviosismo, suspiros frecuentes y profundos y el decaimiento moral. ',
        footer: '<a href="">Contactar por Whatsapp</a>',
      })
}

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <HeroContainer id="home">
            <HeroBg>
                <HeroBgImage>
                    {/* <img className="HeroImage" src={Image} alt='bioluniel'/> */}
                </HeroBgImage>
            </HeroBg>
            <HeroContent>
            <ProductsContainer id="products">
            <ProductsH1>Bio Bach</ProductsH1>
            <ProductsWrapper>
            <ProductsCard >
                    <ProductsIcon src={Icon1} onClick={()=>ansiedad()} />
                    <Link to="/bioansiedadangustia" onClick={toggleHome}>
                    <ProductsH2>Bio Ansiedad/Angustia</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </Link>
            </ProductsCard>
                <ProductsCard >
                    <ProductsIcon src={Icon2} onClick={()=>depresion()}/>
                    <Link to="/biodepresion" onClick={toggleHome}>   
                    <ProductsH2>Bio Depresión</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </Link>
                </ProductsCard>
                <ProductsCard >
                    <ProductsIcon src={Icon7} onClick={()=>tristeza()} />
                    <Link to="/biotristeza" onClick={toggleHome}>
                    <ProductsH2>Bio Tristeza</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </Link>
                </ProductsCard>
                </ProductsWrapper>
                </ProductsContainer>
                <HeroBtnWrapper>
                    <Button to="/productos" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true"
                    dark="true" smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            

                    >
                        Todos los Productos {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
