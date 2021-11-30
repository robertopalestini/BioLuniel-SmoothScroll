import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductInsomnio from '../components/ProductInsomnio'
import Sidebar from '../components/Sidebar'

const BioInsomnio = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductInsomnio />

             <Footer />
        </>
    )
}

export default BioInsomnio
