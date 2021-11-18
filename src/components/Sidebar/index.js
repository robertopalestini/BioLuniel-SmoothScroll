import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'
import { Link } from 'react-scroll';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        Esencias Florales
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Descubri
                    </SidebarLink>
                    <SidebarLink to="products" onClick={toggle}>
                        Productos
                    </SidebarLink>
                    <Link to="/nosotros"><SidebarLink to="/nosotros" onClick={toggle}>
                        Nosotros
                    </SidebarLink></Link>
                    <SidebarLink to="signup" onClick={toggle}>
                        Beneficios
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contact"><FaWhatsapp /></SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
