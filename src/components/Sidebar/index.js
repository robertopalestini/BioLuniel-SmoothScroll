import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                <SidebarLink to="/nosotros" onClick={toggle}>
                    <Link to="/nosotros" onClick={toggle}>
                    Nosotros
                    </Link>
                </SidebarLink> 
                <SidebarLink to="/productos" onClick={toggle}>
                    <Link to="/productos" onClick={toggle}>
                        Productos
                    </Link>
                </SidebarLink>
                <SidebarLink to="/contacto" onClick={toggle}>
                    <Link to="/productos" onClick={toggle}>
                        Beneficios
                    </Link>
                </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contact">
                    <Link to="/" onClick={toggle}>
                        <FaWhatsapp />
                        </Link>
                        </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
