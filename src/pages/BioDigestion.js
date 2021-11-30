import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductDigestion from '../components/ProductDigestion'
import Sidebar from '../components/Sidebar'

const BioDigestion = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductDigestion />

             <Footer />
        </>
    )
}

export default BioDigestion
