import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ProductAlergia from '../components/ProductAlergia'

import { ProductCContainer } from '../components/ProductC/ProductCElements'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'

const BioAlergia = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductAlergia />

             <Footer />
        </>
    )
}

export default BioAlergia
