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
                    <NavLogo to='/' onClick={toggleHome}>bioluniel</NavLogo>
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
                            <NavBtnLink to="//api.whatsapp.com/send?phone=5930981701732&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" onClick={toggleHome}><FaWhatsapp /></NavBtnLink>
                        </NavBtn>

                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
