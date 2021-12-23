import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSectionP from '../components/HeroSectionP'
import Navbar from '../components/Navbar'
import ProductAnsiedadAngustia from '../components/ProductAnsiedadAngustia'
import Sidebar from '../components/Sidebar'

const BioAnsiedadAngustia = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSectionP />
            <ProductAnsiedadAngustia />

             <Footer />
        </>
    )
}

export default BioAnsiedadAngustia
