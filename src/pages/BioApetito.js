import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductApetito from '../components/ProductApetito'
import Sidebar from '../components/Sidebar'

const BioApetito = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductApetito />

             <Footer />
        </>
    )
}

export default BioApetito
