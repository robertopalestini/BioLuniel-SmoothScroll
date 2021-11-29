import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { ProductCContainer } from '../components/ProductC/ProductCElements'
import ProductLinfa from '../components/ProductLinfa'

import Sidebar from '../components/Sidebar'

const BioLinfa = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductLinfa />

             <Footer />
        </>
    )
}

export default BioLinfa
