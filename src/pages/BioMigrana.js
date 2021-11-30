import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductMigrana from '../components/ProductMigrana'
import Sidebar from '../components/Sidebar'

const BioMigrana = () => {

        const [isOpen, setIsOpen] = useState(false)
    
        const toggle = () => {
            setIsOpen(!isOpen)
        }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProductMigrana />

             <Footer />
        </>
    )
}

export default BioMigrana
