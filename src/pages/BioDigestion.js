import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ProductC from '../components/ProductC'
import { ProductCContainer } from '../components/ProductC/ProductCElements'
import ProductDigestion from '../components/ProductDigestion'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'

const BioDigestion = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductDigestion />

             <Footer />
        </>
    )
}

export default BioDigestion
