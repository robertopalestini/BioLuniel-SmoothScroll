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
                        <FooterLink to="/productos" onClick={toggleHome}>Productos</FooterLink>
                        <FooterLink to="/nosotros" onClick={toggleHome}>Nosotros</FooterLink>
                        <FooterLink to="/contacto" onClick={toggleHome}>Contacto</FooterLink>
                 </FooterLinkItems>
                 <FooterLinkItems>
                    <FooterLinkTitle>Lista de Productos</FooterLinkTitle>
                        <FooterLink to="/bioansiedadangustia" onClick={toggleHome}>Bio Ansiedad/Angustia</FooterLink>
                        <FooterLink to="/biodepresion" onClick={toggleHome}>Bio Depresion</FooterLink>
                        <FooterLink to="/biodigestion" onClick={toggleHome}>Bio Digestion</FooterLink>
                        <FooterLink to="/productos" onClick={toggleHome}>Todos los Productos</FooterLink>
                        <FooterLink to="/">Productos mas vendidos</FooterLink>
                        <FooterLink to="/">Ofertas</FooterLink>
                 </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Nosotros</FooterLinkTitle>
                        <FooterLink to="/nosotros"  onClick={toggleHome}>Nuestro Equipo</FooterLink>
                        <FooterLink to="/nosotros#five" onClick={toggleHome}>Beneficios de las esencias florales</FooterLink>
                        <FooterLink to="/nosotros#six" onClick={toggleHome}>¿Como actúan las esencias florales?</FooterLink>
                        <FooterLink to="/nosotros#seven" onClick={toggleHome}>¿Como tomar las esencias florales?</FooterLink>
                        <FooterLink to="/nosotros#eight" onClick={toggleHome}>¿Hay contraindicaciones de las esencias florales?</FooterLink>
                        <FooterLink to="/nosotros#nine" onClick={toggleHome}>Limpieza y Catarsis</FooterLink>
                        <FooterLink to="/nosotros#ten" onClick={toggleHome}>¿Que hacer si se tienen efectos secundarios?</FooterLink>
                        <FooterLink to="/nosotros#eleven" onClick={toggleHome}>¿Las esencias florales crean adicción?</FooterLink>
                        <FooterLink to="/nosotros#twelve" onClick={toggleHome}>Tiempo en que tienen efecto las esencias florales</FooterLink>
                        <FooterLink to="/nosotros#thirdteen" onClick={toggleHome}>Conservación</FooterLink>
                 </FooterLinkItems>
                 <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to="//api.whatsapp.com/send?phone=5930981701732&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" target="_blank" >WhatsApp</FooterLink>
                        <FooterLink to="/">Instagram</FooterLink>
                        <FooterLink to="//https://www.facebook.com/acupunturaenquito/">Facebook</FooterLink>
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
                <WebsiteRights>bioluniel © {new Date().getFullYear()} copyright. All rights reserved </WebsiteRights>
                </SocialMediaWrap>
                <SocialMediaWrap>
                    <SocialIcons>
                        <SocialIconLink href='https://www.facebook.com/acupunturaenquito/' target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label=">Twitter"><FaTwitter /></SocialIconLink>
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink href='//api.whatsapp.com/send?phone=5930981701732&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel"' target="_blank" aria-label="WhatsApp"><FaWhatsapp /></SocialIconLink>
                    </SocialIcons>
                    </SocialMediaWrap>
        
        </SocialMedia>
         </FooterWrap>
     </ FooterContainer>
    )
}

export default Footer
