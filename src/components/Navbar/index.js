import React, {useState, useEffect} from 'react';
import {FaBars, FaWhatsapp} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';
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
                            <NavLinks to='about'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            
                            >Esencias florales</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'
                            smooth={true} duration={600} spy={true} exact='true' offset={-80}
                            >Descubri</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='products'
                            smooth={true} duration={700} spy={true} exact='true' offset={-80}
                            >Productos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='beneficios'
                            smooth={true} duration={800} spy={true} exact='true' offset={-80}
                            >Beneficios</NavLinks>
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
