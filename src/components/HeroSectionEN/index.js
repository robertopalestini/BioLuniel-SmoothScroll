import React, {useState} from 'react';
import {Button} from '../ButtonElement';
import { HeroContainer, HeroBg, HeroBgImage, HeroContent, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElementsEN';
import {ProductsIconBio,ProductsContainer, ProductsH1, ProductsWrapper, ProductsCard, ProductsIcon, ProductsH2, ProductsP} from './ProductsElements'
import { Link } from 'react-router-dom'
import {animateScroll as scroll} from 'react-scroll';
import Swal from 'sweetalert2';
import Icon25 from '../../images/biocristal-01.png'
import Icon26 from '../../images/biocabello-01.png'
import Icon27 from '../../images/bioarsilla-01.png'
import { HashLink } from 'react-router-hash-link';


const HeroSection = () => {


    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    const arcilla=()=>{
        Swal.fire({
            imageUrl: require("../../images/bioarsilla-01.png").default,
            imageWidth: '200px',

            title: 'Bio Arcilla',
            text: 'Arcilla Natural Amazónica. Pose propiedades curativas, antibacterianas, cicatrizante, desintoxicante, regulador del pH, antinflamatorias, estimulantes de la inmunidad y regeneración epitelial, es hipoalergénica, no tiene preservantes ni colorantes. Al ser antibacteriano, regula el sebo y elimina impurezas de la piel mediante exfoliación, actúa también como calmante. Siendo ideal para las personas con acné y pieles grasas. Su propiedad desintoxicante, hidratante gracias a su alto contenido de minerales es perfecta para ayudar a las pieles secas, ya que aporta luminosidad y efecto suave. Excelente para pieles con problema de dermatitis y psoriasis debido a que aporta alivio y evita la descamación de la zona. Como un producto equilibrante aporta beneficios a todo tipo de piel sean secas, mixtas o grasas. Ideal para faciales y corporales.',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#arcilla">Ver más</a>',
            showCloseButton: true,
          })
    }
    const cabelloSano=()=>{
        Swal.fire({
            imageUrl: require("../../images/biocabello-01.png").default,
            imageWidth: '200px',

            title: 'Bio Cabello Sano',
            text: 'Producto elaborado con tecnología electromagnética, para adicionar al shampoo y acondicionador de su preferencia. Mejora la circulación sanguínea del cuero cabelludo, nivela el estrés y como consecuencia detiene la caída del cabello (alopecia). Normaliza el funcionamiento glándulas sebáceas por esta razón elimina la caspa producida por seborrea o resequedad. Elimina puntas quebradizas devolviendo brillo y sedosidad a los cabellos opacos y maltratados.',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#cabello">Ver más</a>',
            showCloseButton: true,
          })
    }
    const cristal=()=>{
        Swal.fire({
            imageUrl: require("../../images/biocristal-01.png").default,
            imageWidth: '200px',
            title: 'Bio Cristal',
            text: 'Antitranspirante elaborado con productos naturales a base de sales minerales, agua purificada y magnetizada. Elimina el mal olor causado por bacterias que se multiplican e la piel y disminuye la cantidad de sudoración en cualquier superficie de la piel. No enmascara el mal olor, lo elimina inmediatamente cuando es aplicado directamente sobre la piel y sobre la prenda de vestir. Puede ser usada incluso en partes íntimas del cuerpo. Nivela el pH de la piel, es hipoalergénico ya que no contiene alcohol o perfumes, no irrita la piel ya que está elaborado en agua magnetizada, purificada. Puede ser pulverizada en el interior de los zapatos.',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#cristal" >Ver más</a>',
            showCloseButton: true,
          })
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <HeroBgImage>
                    {/* <img className="HeroImage" src={Image} alt='bioluniel'/> */}
                </HeroBgImage>
            </HeroBg>
            <HeroContent>
            <ProductsContainer id="products">
            <ProductsH1>Bio Bach</ProductsH1>
            <ProductsWrapper>
            <ProductsCard>
                    <ProductsIconBio src={Icon25} onClick={()=>cristal()}/>
                    <HashLink to="/infoproductos#cristal">
                    <ProductsH2>Bio Cristal</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIconBio src={Icon26} onClick={()=>cabelloSano()} />
                    <HashLink to="/infoproductos#cabello">
                    <ProductsH2>Bio Cabello Sano</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIconBio src={Icon27} onClick={()=>arcilla()} />
                    <HashLink to="/infoproductos#arcilla">
                    <ProductsH2>Bio Arcilla</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                </ProductsWrapper>
                </ProductsContainer>
                <HeroBtnWrapper>
                    <Button to="/productos#bionatura" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true"
                    dark="true" smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            

                    >
                        Ver todos los Productos {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
