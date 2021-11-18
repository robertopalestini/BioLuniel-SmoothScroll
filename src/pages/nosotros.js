import React, {useState} from 'react'
import Footer from '../components/Footer';
import HeroSectionN from '../components/HeroSectionN';
import HeroSectionP from '../components/HeroSectionP';
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'

const Nosotros = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSectionN />
             <InfoSection {...homeObjFour}/>
             <InfoSection {...homeObjFive}/>

             <Footer />
        </>
    )
}

export default Nosotros