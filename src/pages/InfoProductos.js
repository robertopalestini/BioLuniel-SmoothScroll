import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSectionP from '../components/HeroSectionP'
import InfoProducts from '../components/InfoProducts'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'



const InfoProductos = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
             <HeroSectionP />
             <InfoProducts />
             <Footer />
        </>
    )
}

export default InfoProductos