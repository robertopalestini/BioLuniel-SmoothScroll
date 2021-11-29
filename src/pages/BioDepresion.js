import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ProductC from '../components/ProductC'
import { ProductCContainer } from '../components/ProductC/ProductCElements'
import ProductDepresion from '../components/ProductDepresion'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'

const BioDepresion = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductDepresion />

             <Footer />
        </>
    )
}

export default BioDepresion
