import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSectionC from '../components/HeroSectionC'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact';
import Sidebar from '../components/Sidebar'


const ContactPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
             <HeroSectionC />
             <Contact />
             <Footer />
            
        </>
    )
}

export default ContactPage
