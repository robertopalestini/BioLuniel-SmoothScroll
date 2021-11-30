import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductHombre from '../components/ProductHombre'
import Sidebar from '../components/Sidebar'

const BioHombre = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductHombre />

             <Footer />
        </>
    )
}

export default BioHombre
