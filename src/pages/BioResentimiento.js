import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductResentimiento from '../components/ProductResentimiento'
import Sidebar from '../components/Sidebar'

const BioResentimiento = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductResentimiento />

             <Footer />
        </>
    )
}

export default BioResentimiento
