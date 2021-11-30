import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductMujer from '../components/ProductMujer'
import Sidebar from '../components/Sidebar'

const BioMujer = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductMujer />

             <Footer />
        </>
    )
}

export default BioMujer
