import React, {useState} from 'react';
import {Button} from '../ButtonElement';
import { HeroContainer, HeroBg, HeroBgImage, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElementsE';
import Icon1 from '../../images/1-bioAnsiedadAngustia.png'
import Icon2 from '../../images/2-bioDepresion-01.png'
import Icon7 from '../../images/7-bioTristeza-01.png'
import {ProductsContainer, ProductsH1, ProductsWrapper, ProductsCard, ProductsIcon, ProductsIconBio, ProductsH2, ProductsP} from './ProductsElements'


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <HeroBgImage>
                    {/* <img className="HeroImage" src={Image} alt='bioluniel'/> */}
                </HeroBgImage>
            </HeroBg>
            <HeroContent>
            <ProductsContainer id="products">
            <ProductsH1>Nuestras Esencias</ProductsH1>
            <ProductsWrapper>
                <ProductsCard>
                    <ProductsIcon src={Icon1} />
                    <ProductsH2>Bio Ansiedad/Angustia</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon2} />
                    <ProductsH2>Bio Depresión</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon7} />
                    <ProductsH2>Bio Tristeza</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
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
