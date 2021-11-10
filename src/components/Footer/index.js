import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FaFacebook, FaInstagram, FaTwitter, } from 'react-icons/fa'
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
                    <FooterLinkTitle>Titulo</FooterLinkTitle>
                        <FooterLink to="/">Contacto</FooterLink>
                        <FooterLink to="/">Acerca de nosotros</FooterLink>
                        <FooterLink to="/">Bio Luniel</FooterLink>
                        <FooterLink to="/">Bio Bach</FooterLink>
                        <FooterLink to="/">Bio Natura</FooterLink>
                 </FooterLinkItems>
                 <FooterLinkItems>
                    <FooterLinkTitle>Productos</FooterLinkTitle>
                        <FooterLink to="/">Bio Ansiedad/Angustia</FooterLink>
                        <FooterLink to="/">Bio Depresion</FooterLink>
                        <FooterLink to="/">Bio Digestion</FooterLink>
                        <FooterLink to="/">Bio Ira</FooterLink>
                        <FooterLink to="/">Bio Peso/Control</FooterLink>
                 </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Productos</FooterLinkTitle>
                        <FooterLink to="/">Bio Hombre</FooterLink>
                        <FooterLink to="/">Bio Mujer</FooterLink>
                        <FooterLink to="/">Todos los Productos</FooterLink>
                        <FooterLink to="/">Productos mas vendidos</FooterLink>
                        <FooterLink to="/">Ofertas</FooterLink>
                 </FooterLinkItems>
                 <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
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
                <WebsiteRights>bioluniel º {new Date().getFullYear()}copyright. All rights reserved </WebsiteRights>
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
                        <SocialIconLink href='/' target="_blank" aria-label="WhatsApp"><FaFacebook /></SocialIconLink>
                    </SocialIcons>
                    </SocialMediaWrap>
        
        </SocialMedia>
         </FooterWrap>
     </ FooterContainer>
    )
}

export default Footer
