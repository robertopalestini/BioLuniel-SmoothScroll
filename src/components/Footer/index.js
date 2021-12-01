import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import {FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper, FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
    <FooterContainer>
        <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Bio Luniel</FooterLinkTitle>
                        <FooterLink to="/productos">Productos</FooterLink>
                        <FooterLink to="/nosotros">Nosotros</FooterLink>
                        <FooterLink to="/contacto">Contacto</FooterLink>
                 </FooterLinkItems>
                 <FooterLinkItems>
                    <FooterLinkTitle>Bio Bach</FooterLinkTitle>
                        <FooterLink to="/bioansiedad">Bio Ansiedad/Angustia</FooterLink>
                        <FooterLink to="/biodepresion">Bio Depresion</FooterLink>
                        <FooterLink to="/biodigestion">Bio Digestion</FooterLink>
                        <FooterLink to="/productos">Todos los Productos</FooterLink>
                        <FooterLink to="/">Productos mas vendidos</FooterLink>
                        <FooterLink to="/">Ofertas</FooterLink>
                 </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Bio Natura</FooterLinkTitle>
                        <FooterLink to="/biohombre">Bio Hombre</FooterLink>
                        <FooterLink to="/biomujer">Bio Mujer</FooterLink>
                        <FooterLink to="/bioapetito">Bio Apetito</FooterLink>
                 </FooterLinkItems>
                 <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to="/">WhatsApp</FooterLink>
                        <FooterLink to="/">Instagram</FooterLink>
                        <FooterLink to="/">Facebook</FooterLink>
                        <FooterLink to="/">Youtube</FooterLink>
                        <FooterLink to="/">Twitter</FooterLink>
                        
                 </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                    bioluniel
                </SocialLogo>
                <WebsiteRights>bioluniel º {new Date().getFullYear()} copyright. All rights reserved </WebsiteRights>
                </SocialMediaWrap>
                <SocialMediaWrap>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label=">Twitter"><FaTwitter /></SocialIconLink>
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="WhatsApp"><FaWhatsapp /></SocialIconLink>
                    </SocialIcons>
                    </SocialMediaWrap>
        
        </SocialMedia>
         </FooterWrap>
     </ FooterContainer>
    )
}

export default Footer
