import React, {useState} from 'react';
import Image from '../../images/hero.jpg';
import {Button} from '../ButtonElement';
import { HeroContainer, HeroBg, HeroBgImage, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';

const HeroSectionP = () => {
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
                
                
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSectionP
