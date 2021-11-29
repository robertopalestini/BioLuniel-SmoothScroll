import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ProductC from '../components/ProductC'
import { ProductCContainer } from '../components/ProductC/ProductCElements'
import ProductHombre from '../components/ProductHombre'
import ProductMemoria from '../components/ProductMemoria'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'

const BioMemoria = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductMemoria />

             <Footer />
        </>
    )
}

export default BioMemoria
