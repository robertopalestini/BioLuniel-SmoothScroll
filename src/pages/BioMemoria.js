import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductMemoria from '../components/ProductMemoria'
import Sidebar from '../components/Sidebar'

const BioMemoria = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductMemoria />

             <Footer />
        </>
    )
}

export default BioMemoria
