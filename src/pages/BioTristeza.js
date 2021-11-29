import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductTristeza from '../components/ProductTristeza'
import Sidebar from '../components/Sidebar'

const BioTristeza = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductTristeza />

             <Footer />
        </>
    )
}

export default BioTristeza
