import React, {useState, useEffect} from 'react';
import {FaBars, FaWhatsapp} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll, Link} from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, SocialIcons } from './NavbarElements';


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
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/productos'
                            smooth={true} duration={700} spy={true} exact='true' offset={-80}
                            >Productos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/nosotros' >Nosotros</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/contacto' >Contacto</NavLinks>
                        </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/contact"><FaWhatsapp /></NavBtnLink>
                        </NavBtn>

                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
