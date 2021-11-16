import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ProductD from '../components/ProductD'
import { ProductCContainer } from '../components/ProductC/ProductCElements'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'

const BioProductD = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductD />

             <Footer />
        </>
    )
}

export default BioProductD
