import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSectionP from '../components/HeroSectionP'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'


const Productos = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
             <HeroSectionP />
             <Products />
             <Footer />
        </>
    )
}

export default Productos