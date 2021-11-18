import React, {useState} from 'react';
import Image from '../../images/herop2.jpg';
import {Button} from '../ButtonElement';
import { HeroContainerP, HeroBg, HeroBgImage, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';

const HeroSectionP = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainerP id="home">
            <HeroBg>
                <HeroBgImage>
                    <img className="HeroImage" src={Image} alt='bioluniel'/>
                </HeroBgImage>
            </HeroBg>
            <HeroContent>
                
                
            </HeroContent>
        </HeroContainerP>
    )
}

export default HeroSectionP
