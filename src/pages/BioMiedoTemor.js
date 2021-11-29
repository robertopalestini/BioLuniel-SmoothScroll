import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ProductMiedoTemor from '../components/ProductMiedoTemor'
import { ProductCContainer } from '../components/ProductC/ProductCElements'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'

const BioMiedoTemor = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductMiedoTemor />

             <Footer />
        </>
    )
}

export default BioMiedoTemor
