import React, {useState} from 'react';
import Image from '../../images/hero.jpg';
import {Button} from '../ButtonElement';
import { HeroContainer, HeroBg, HeroBgImage, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <HeroBgImage>
                    <img className="HeroImage" src={Image} alt='bioluniel'/>
                </HeroBgImage>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                Mejorando tu vida
                </HeroH1>
                
                <HeroBtnWrapper>
                    <Button to="/productos" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true"
                    dark="true" smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >
                        Productos Bio Bach {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                        
                </HeroBtnWrapper>
                <HeroBtnWrapper>
                    <Button to="/productos" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true"
                    dark="true" smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >
                        Productos Bio Natura {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                        
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
