import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductDetox from '../components/ProductDetox'
import Sidebar from '../components/Sidebar'

const BioDetox = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductDetox />

             <Footer />
        </>
    )
}

export default BioDetox
