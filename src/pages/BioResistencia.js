import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductResistencia from '../components/ProductResistencia'
import Sidebar from '../components/Sidebar'

const BioResistencia = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductResistencia />

             <Footer />
        </>
    )
}

export default BioResistencia
