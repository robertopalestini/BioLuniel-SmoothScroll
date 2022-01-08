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
                    <FooterLinkTitle>Esencias Florales</FooterLinkTitle>
                    <FooterLink to="/productos" onClick={toggleHome}>Todos los Productos</FooterLink>
                        <FooterLink to="/productos#biobach" >Bio Bach</FooterLink>
                        <FooterLink to="/productos#bionatura" >Bio Natura</FooterLink>
                        
                        
                        <FooterLink to="/">Productos mas vendidos</FooterLink>
                        <FooterLink to="/">Ofertas</FooterLink>
                 </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Nosotros</FooterLinkTitle>
                    
                        <FooterLink to="/nosotros#equipo"  >Nuestro Equipo</FooterLink>
                        <FooterLink to="/nosotros#beneficios" >Beneficios de las esencias florales</FooterLink>
                        <FooterLink to="/nosotros#cualidad" >¿Como actúan las esencias florales?</FooterLink>
                        
                        <FooterLink to="/nosotros#comotomar" >¿Como tomar las esencias florales?</FooterLink>
                        <FooterLink to="/nosotros#contraindicaciones" >¿Hay contraindicaciones de las esencias florales?</FooterLink>
                        <FooterLink to="/nosotros#limpiezaycatarsis" >Limpieza y Catarsis</FooterLink>
                        <FooterLink to="/nosotros#efectossecundarios" >¿Que hacer si se tienen efectos secundarios?</FooterLink>
                        <FooterLink to="/nosotros#adiccion" >¿Las esencias florales crean adicción?</FooterLink>
                        <FooterLink to="/nosotros#tiempo" >Tiempo en que tienen efecto las esencias florales</FooterLink>
                        <FooterLink to="/nosotros#conservacion" >Conservación</FooterLink>
                 </FooterLinkItems>
                 <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to="//api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" target="_blank" >WhatsApp</FooterLink>
                        
                        <FooterLink to="//https://www.facebook.com/acupunturaenquito/">Facebook</FooterLink>
                        
                        
                 </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                    Bio Luniel
                </SocialLogo>
                <WebsiteRights>Bio Luniel © {new Date().getFullYear()} copyright. All rights reserved </WebsiteRights>
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
                        <SocialIconLink href='//api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel"' target="_blank" aria-label="WhatsApp"><FaWhatsapp /></SocialIconLink>
                    </SocialIcons>
                    </SocialMediaWrap>
        
        </SocialMedia>
         </FooterWrap>
     </ FooterContainer>
    )
}

export default Footer
