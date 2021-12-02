import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'

import { Link } from 'react-router-dom'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon fill="rgb(0, 0, 0)"/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                <SidebarLink to="/" onClick={toggle}>
                    <Link to="/" onClick={toggle}>
                    Inicio
                    </Link>
                </SidebarLink> 
                <SidebarLink to="/nosotros" onClick={toggle}>
                    <Link to="/nosotros" onClick={toggle}>
                    Nosotros
                    </Link>
                </SidebarLink> 
                <SidebarLink to="/productos" onClick={toggle}>
                    <Link to="/productos" onClick={toggle} >
                        Productos
                    </Link>
                </SidebarLink>
                <SidebarLink to="/contacto" onClick={toggle}>
                    <Link to="/contacto" onClick={toggle}>
                        Contacto
                    </Link>
                </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contact">
                    <Link to="//api.whatsapp.com/send?phone=5930981701732&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" onClick={toggle}>
                        <FaWhatsapp />
                        </Link>
                        </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
