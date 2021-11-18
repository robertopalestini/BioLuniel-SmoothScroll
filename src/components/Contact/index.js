import React from 'react'
import { Column1, Column2 } from '../ProductC/ProductCElements';
import Map from '../../images/map-19.jpg'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text, ContactoWrapper, ContactoRow, ContactoH3} from './ContactElements';
import './contactopage.css'
import { BsFillEnvelopeFill, BsFillGeoAltFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaWhatsapp} from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            <Container>
                <ContactoWrapper>
                    <ContactoRow>
                        <Column1>
                        <img src={Map} className="mapaImagen"/>
                            
                       </Column1>
                        <Column2>
                        <FormH1>Página de contacto</FormH1>
                            <ContactoH3><BsFillEnvelopeFill class="iconos" />  bioluniel@hotmail.com</ContactoH3>
                            <ContactoH3><FaFacebook class="iconos" />  /Acupunturaenquito</ContactoH3>
                            <ContactoH3><BsFillTelephoneFill class="iconos" />  510 1800 / 0981 701 732</ContactoH3>
                            <ContactoH3><BsFillGeoAltFill class="iconos" />  Franciscvo Pizarro N26-14 y Santa María, Edif. Salgado</ContactoH3>

                            <Text> <button className="boton"><FaWhatsapp class="iconos" /> WhatsApp</button></Text>
                        </Column2>
                        
                        </ContactoRow>
                        </ContactoWrapper>
            </Container>
        </>
    )
}

export default Contact;
