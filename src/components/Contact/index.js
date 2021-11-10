import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from './ContactElements';

const Contact = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">bioluniel</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Página de contacto</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Mensaje</FormLabel>
                            <FormInput type='text' required />
                            <FormButton type='submit'>Enviar</FormButton>
                            <Text>Enviar WhatsApp</Text>
                        </Form>

                    </FormContent>

                </FormWrap>

            </Container>
        </>
    )
}

export default Contact;
