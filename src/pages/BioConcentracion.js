import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ProductConcentracion from '../components/ProductConcentracion'
import HeroSectionP from '../components/HeroSectionP'

const BioConcentracion = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSectionP />
            <ProductConcentracion />

             <Footer />
        </>
    )
}

export default BioConcentracion
