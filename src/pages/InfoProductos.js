import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSectionIP from '../components/HeroSectionIP'
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
             <HeroSectionIP />
             <InfoProducts />
             <Footer />
        </>
    )
}

export default InfoProductos