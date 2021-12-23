import React from 'react'
import { Column1, Column2 } from '../ProductC/ProductCElements';
import Map from '../../images/map-19.jpg'
import { Container, FormH1, Text, ContactoWrapper, ContactoRow, ContactoH3} from './ContactElements';
import './contactopage.css'
import { FaFacebook, FaWhatsapp} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ImMail4 } from 'react-icons/im'
import { MdShareLocation } from 'react-icons/md'


const Contact = () => {
    return (
        <>
            <Container>
                <ContactoWrapper>
                    <ContactoRow>
                        <Column1>
                        <img src={Map} className="mapaImagen" alt="Mapa de contacto Bio Luniel"/>
                            
                       </Column1>
                        <Column2>
                        <FormH1>Página de contacto</FormH1>
                            <ContactoH3><ImMail4 class="iconos" size="1.5em" fill="rgb(0, 0, 0)"/> bioluniel@hotmail.com</ContactoH3>
                            <ContactoH3><FaFacebook class="iconos" size="1.5em" fill="rgb(0, 0, 0)"/> /Acupunturaenquito</ContactoH3>
                            <ContactoH3><FaWhatsapp class="iconos" size="1.5em" fill="rgb(0, 0, 0)"/> +593 988-363602 / 0981 701 732</ContactoH3>
                            <ContactoH3><MdShareLocation class="iconos" size="1.5em" fill="rgb(0, 0, 0)"/> Franciscvo Pizarro N26-14 y Santa María, Edif. Salgado</ContactoH3>

                            <Link to="//api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" target="_blank"><Text> <button className="boton"><FaWhatsapp class="iconos" /> WhatsApp</button></Text></Link>
                        </Column2>
                        
                        </ContactoRow>
                        </ContactoWrapper>
            </Container>
        </>
    )
}

export default Contact;
