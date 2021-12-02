import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
min-height: 600px;
position: fiex;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;

`;
export const ContactoWrapper = styled.div`
display: grid;
z-index: 1;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 30px 24px;
justify-content: center;

@media screen and (max-width: 768px) {
    padding: 0 24px;
    height: 800px;
}
@media screen and (max-width:480px) {
    padding: 0 24px;
    height: 750px;
}
@media screen and (max-width:479px) {
    padding: 0 24px;
    height: 800px;
}


`

export const ContactoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px) {

    grid-template-areas ${({imgStart}) => (imgStart ? `'col 1' 'col2'` : `'col1 col 1' 'col2 col2'`)};
}
`
export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`
export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`

export const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 400px) {
    height: 80%;
}
`;

export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #eee;
font-weight: 700;
font-size: 32px;

@media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
}
`;

export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-contet: center;

@media screen and (max-width: 480px) {
    padding: 10px;
}
`;

export const Form = styled.form`
background: #eeeeee;
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0,0,0, 0.9);

@media screen and (max-width: 400px) {
    padding: 32px 32px;
}
`;

export const FormH1 = styled.h1`
margin-bottom: 40px;
color: #444;
font-size: 23px;
font-weight: 400;
text-align: left;
`;

export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #eee;
`;

export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`;

export const FormButton = styled.button`
background: #73d629;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #444;
font-size: 20px;
cursor: pointer;
`;

export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #444;
font-size: 14px;
`;

export const ContactoH3 = styled.h3`
margin-bottom: 30px;
color: #444;
font-size: 14px;
text-align: left;
`
