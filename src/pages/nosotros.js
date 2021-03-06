import React, {useState} from 'react'
import Footer from '../components/Footer';
import HeroSectionN from '../components/HeroSectionN';
import InfoSection from '../components/InfoSection'
import { homeObjFour, homeObjFive, homeObjSix, homeObjSeven, homeObjEight, homeObjNine, homeObjTen, homeObjEleven, homeObjTwelve, homeObjThirdteen } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'

// or less ideally

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
            <InfoSection {...homeObjSix}/>
             <InfoSection {...homeObjFive}/>
             <InfoSection {...homeObjSeven}/>
             <InfoSection {...homeObjEight}/>
             <InfoSection {...homeObjNine}/>
             <InfoSection {...homeObjTen}/>
             <InfoSection {...homeObjEleven}/>
             <InfoSection {...homeObjTwelve}/>
             <InfoSection {...homeObjThirdteen}/>
             <Footer />
        </>
    )
}

export default Nosotros