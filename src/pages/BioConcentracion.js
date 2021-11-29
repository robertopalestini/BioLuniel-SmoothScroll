import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ProductColageno from '../components/ProductColageno'
import { ProductCContainer } from '../components/ProductC/ProductCElements'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'
import ProductConcentracion from '../components/ProductConcentracion'

const BioConcentracion = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductConcentracion />

             <Footer />
        </>
    )
}

export default BioConcentracion
