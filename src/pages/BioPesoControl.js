import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSectionP from '../components/HeroSectionP'
import Navbar from '../components/Navbar'
import ProductPesoControl from '../components/ProductPesoControl'
import Sidebar from '../components/Sidebar'

const BioPesoControl = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSectionP />
            <ProductPesoControl />

             <Footer />
        </>
    )
}

export default BioPesoControl
