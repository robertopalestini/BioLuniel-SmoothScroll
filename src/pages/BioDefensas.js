import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductDefensas from '../components/ProductDefensas'
import Sidebar from '../components/Sidebar'

const BioDefensas = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductDefensas />

             <Footer />
        </>
    )
}

export default BioDefensas
