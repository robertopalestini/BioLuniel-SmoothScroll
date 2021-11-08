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
                    BioLuniel
                </HeroH1>
                <HeroP>
                    BioLuniel
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="singup" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true"
                    dark="true"

                    >
                        Get Contact! {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
