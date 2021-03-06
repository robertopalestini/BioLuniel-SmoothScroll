import React, {useState, useEffect} from 'react';
import {FaWhatsapp} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, MenuIcon } from './NavbarElements';



const Navbar = ({ toggle }) => {
const [scrollNav, setScrollNav] = useState(false)

const changeNav = () => {
    if(window.scrollY >= 80){
        setScrollNav(true)
    } else {
        setScrollNav(false)
    }
}
useEffect(() => {
    window.addEventListener('scroll', changeNav)
}, []);

const toggleHome = () => {
    scroll.scrollToTop()
};


    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>Bio Luniel</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <MenuIcon />
                    </MobileIcon>
                    <NavMenu>
                    <NavItem>
                            <NavLinks to='/' onClick={toggleHome} 
                            >Inicio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/productos' onClick={toggleHome} 
                            >Productos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/nosotros' onClick={toggleHome} >Nosotros</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/contacto' onClick={toggleHome} >Contacto</NavLinks>
                        </NavItem>
                        </NavMenu>
                        <NavBtn>
                        <NavBtnLink to="//api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" target="_blank" onClick={toggleHome}><FaWhatsapp /><span>+593 988-363602</span></NavBtnLink>
                        </NavBtn>

                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
