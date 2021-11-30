import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductColageno from '../components/ProductColageno'
import Sidebar from '../components/Sidebar'

const BioColageno = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductColageno />

             <Footer />
        </>
    )
}

export default BioColageno
