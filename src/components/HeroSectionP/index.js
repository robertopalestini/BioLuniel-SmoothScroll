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
            <HeroH1>
                Nuestras Esencias
                </HeroH1>
                <HeroP>
                Florales Bio-Bach
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/productos" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true"
                    dark="true" smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            

                    >
                        Productos Bio BACH {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
                
            </HeroContent>
        </HeroContainerP>
    )
}

export default HeroSectionP
