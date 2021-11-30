import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductDepresion from '../components/ProductDepresion'
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
