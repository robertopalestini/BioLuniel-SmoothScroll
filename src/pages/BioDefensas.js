import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ProductDefensas from '../components/ProductDefensas'
import { ProductCContainer } from '../components/ProductC/ProductCElements'
import Sidebar from '../components/Sidebar'

const BioDefensas = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductDefensas />

             <Footer />
        </>
    )
}

export default BioDefensas;
