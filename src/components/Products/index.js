import React from 'react'

import Icon1 from '../../images/1-bioAnsiedadAngustia.png'
import Icon2 from '../../images/2-bioDepresion-01.png'
import Icon3 from '../../images/3-bioEstres-01.png'
import Icon4 from '../../images/4-bioIra-01.png'
import Icon5 from '../../images/5-bioPaz-01.png'
import Icon6 from '../../images/6-bioResentimiento-01.png'
import Icon7 from '../../images/7-bioTristeza-01.png'
import Icon8 from '../../images/8-bioRescate-01.png'
import Icon9 from '../../images/9-bioResistencia-01.png'
import Icon10 from '../../images/10-bioInsomnio-01.png'
import Icon11 from '../../images/11-bioMigrana-01.png'
import Icon12 from '../../images/12-bioApetito-01.png'
import Icon13 from '../../images/13-bioHombre-01.png'
import Icon14 from '../../images/14-bioMujer-01.png'
import Icon15 from '../../images/15-bioMemoria-01.png'
import Icon16 from '../../images/16-bioConcentracion-01.png'
import Icon17 from '../../images/17-bioDigestion-01.png'
import Icon18 from '../../images/18-bioAlergia-01.png'
import Icon19 from '../../images/19-bioDetox-01.png'
import Icon20 from '../../images/20-bioDefensas-01.png'
import Icon21 from '../../images/21-bioColageno-01.png'
import Icon22 from '../../images/22-bioPeso-01.png'
import Icon23 from '../../images/23-bioMiedo-01.png'
import Icon24 from '../../images/24-bioLinfa-01.png'
//BIO NATURA
import Icon25 from '../../images/biocristal-01.png'
import Icon26 from '../../images/biocabello-01.png'
import Icon27 from '../../images/bioarsilla-01.png'
import {ProductsContainer, ProductsH1, ProductsWrapper, ProductsCard, ProductsIcon, ProductsIconBio, ProductsH2, ProductsP} from './ProductsElements'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'


const Products = () => {
    
    const ansiedad=()=>{
        Swal.fire({
            imageUrl: require("../../images/1-bioAnsiedadAngustia.png").default,
            imageWidth: '200px',

            title: 'Bio Ansiedad/Angustia',
            text: 'Estado mental que se caracteriza por una gran inquietud, una intensa excitación y una extrema inseguridad. Las emociones presentes en los trastornos de ansiedad van desde el simple nerviosismo a episodios de terror o pánico, acompañada de angustia que muchas veces desencadena en neurosis. Nuestro producto esta recomendado para personas tendientes a ser nerviosas, preocupadas en extremo, angustia progresiva, trastornos, crisis de ansiedad reactiva generalizada, sudoración en manos o cuerpo y trastornos psicosomáticos por ansiedad. ',
            footer: '<a href="">Contactar por Whatsapp</a>'
          })
    }
    const depresion=()=>{
        Swal.fire({
            imageUrl: require('../../images/2-bioDepresion-01.png').default,
            imageWidth: '200px',

            title: 'Bio Depresión',
            text: 'La Depresión es un trastorno emocional que causa un sentimiento de tristeza constante y una pérdida de interés en realizar diferentes actividades en períodos largos de tiempo. Existen 2 tipos de depresión, exógena y endógena, la primera causada por factores ambientales y psicológicos, la segunda causada por factores genéticos, hereditarios, este tipo de depresión no depende de la voluntad del paciente. La depresión puede comenzar a cualquier edad, pero suele empezar en la juventud. Es mucho más común en las mujeres, presentándose también la depresión postparto luego de dar a luz. Compuestos florales electromagnéticos: Agrimony, Gentian, Larch, Gorse entre otros. Nuestro producto puede ser utilizado en personas con trastornos depresivos persistentes severos o moderados en cuadros como depresión reactiva, depresión bipolar o intentos fallidos de suicidio, (es importante anotar que no debe suspenderse ni reemplazar la medicación química que el paciente este tomando) puede administrarse sólo o con otros productos sin tener riesgo de contraindicaciones.',
            footer: '<a href="">Contactar por Whatsapp</a>'
          })
    }
    const tristeza=()=>{
        Swal.fire({
            imageUrl: require('../../images/3-bioEstres-01.png').default,
            imageWidth: '200px',
 
            title: 'Bio Tristeza',
            text: 'La Tristeza puede ser también un síntoma de distimia, que se caracteriza, además, por un abatimiento general de la persona, por el descenso de la autoestima y los sentimientos de pesimismo, desesperanza y desamparo, causando tristeza profunda y crónica que puede incluir también pesimismo y disminución de la motivación, labilidad emocional. Nuestro producto está recomendado en individuos con personalidad triste, apagada, en circunstancias particulares, individuos tendientes a la soledad. Los síntomas más evidentes son el llanto, el desgano, el nerviosismo, suspiros frecuentes y profundos y el decaimiento moral.',
            footer: '<a href="">Contactar por Whatsapp</a>'
          })
    }
    const arcilla=()=>{
        Swal.fire({
            imageUrl: require("../../images/bioarsilla-01.png").default,
            imageWidth: '200px',

            title: 'Bio Arsilla',
            text: 'Arcilla Natural Amazónica. Pose propiedades curativas, antibacterianas, cicatrizante, desintoxicante, regulador del pH, antinflamatorias, estimulantes de la inmunidad y regeneración epitelial, es hipoalergénica, no tiene preservantes ni colorantes. Al ser antibacteriano, regula el sebo y elimina impurezas de la piel mediante exfoliación, actúa también como calmante. Siendo ideal para las personas con acné y pieles grasas. Su propiedad desintoxicante, hidratante gracias a su alto contenido de minerales es perfecta para ayudar a las pieles secas, ya que aporta luminosidad y efecto suave. Excelente para pieles con problema de dermatitis y psoriasis debido a que aporta alivio y evita la descamación de la zona. Como un producto equilibrante aporta beneficios a todo tipo de piel sean secas, mixtas o grasas. Ideal para faciales y corporales.',
            footer: '<a href="">Contactar por Whatsapp</a>',
          })
    }
    const cabelloSano=()=>{
        Swal.fire({
            imageUrl: require("../../images/biocabello-01.png").default,
            imageWidth: '200px',

            title: 'Bio Cabello Sano',
            text: 'Producto elaborado con tecnología electromagnética, para adicionar al shampoo y acondicionador de su preferencia. Mejora la circulación sanguínea del cuero cabelludo, nivela el estrés y como consecuencia detiene la caída del cabello (alopecia). Normaliza el funcionamiento glándulas sebáceas por esta razón elimina la caspa producida por seborrea o resequedad. Elimina puntas quebradizas devolviendo brillo y sedosidad a los cabellos opacos y maltratados.',
            footer: '<a href="">Contactar por Whatsapp</a>',
          })
    }
    const cristal=()=>{
        Swal.fire({
            imageUrl: require("../../images/biocristal-01.png").default,
            imageWidth: '200px',
            title: 'Bio Cristal',
            text: 'Antitranspirante elaborado con productos naturales a base de sales minerales, agua purificada y magnetizada. Elimina el mal olor causado por bacterias que se multiplican e la piel y disminuye la cantidad de sudoración en cualquier superficie de la piel. No enmascara el mal olor, lo elimina inmediatamente cuando es aplicado directamente sobre la piel y sobre la prenda de vestir. Puede ser usada incluso en partes íntimas del cuerpo. Nivela el pH de la piel, es hipoalergénico ya que no contiene alcohol o perfumes, no irrita la piel ya que está elaborado en agua magnetizada, purificada. Puede ser pulverizada en el interior de los zapatos.',
            footer: '<a href="">Contactar por Whatsapp</a>',
          })
    }



    return (
        <ProductsContainer id="products">
            <ProductsH1>Nuestras Esencias</ProductsH1>
            <ProductsWrapper>
                <ProductsCard  onClick={()=>ansiedad()}>
                    <ProductsIcon src={Icon1} />
                    <ProductsH2>Bio Ansiedad/Angustia</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard onClick={()=>depresion()}>
                    <ProductsIcon src={Icon2} />
                    <ProductsH2>Bio Depresión</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard onClick={()=>tristeza()}>
                    <ProductsIcon src={Icon7} />
                    <ProductsH2>Bio Tristeza</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <Link to="/bioproduct"><ProductsCard >
                    <ProductsIcon src={Icon3} />
                    <ProductsH2>Bio Estrés</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard></Link>
                <Link to="/bioproductd"><ProductsCard>
                    <ProductsIcon src={Icon4} />
                    <ProductsH2>Bio Ira</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard></Link>
                <Link to="/bioproduct"><ProductsCard>
                    <ProductsIcon src={Icon6} />
                    <ProductsH2>Bio Resentimiento</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard></Link>
                <ProductsCard>
                    <ProductsIcon src={Icon5} />
                    <ProductsH2>Bio Paz</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon8} />
                    <ProductsH2>Bio Rescate</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon9} />
                    <ProductsH2>Bio Resistencia (Bullying)</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon10} />
                    <ProductsH2>Bio Insomnio</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon11} />
                    <ProductsH2>Bio Migraña</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon12} />
                    <ProductsH2>Bio Apetito</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon13} />
                    <ProductsH2>Bio Hombre</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon14} />
                    <ProductsH2>Bio Mujer</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon15} />
                    <ProductsH2>Bio Memoria</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon16} />
                    <ProductsH2>Bio Concentración</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon17} />
                    <ProductsH2>Bio Digestión</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon18} />
                    <ProductsH2>Bio Alergia</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon19} />
                    <ProductsH2>Bio Detox</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon20} />
                    <ProductsH2>Bio Defensas</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon21} />
                    <ProductsH2>Bio Colágeno</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon22} />
                    <ProductsH2>Bio Peso Control</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon23} />
                    <ProductsH2>Bio Miedo Temor</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon24} />
                    <ProductsH2>Bio Linfa</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                 
            </ProductsWrapper>



            <ProductsH1 margin-top="20px">Bio Natura</ProductsH1>
            <ProductsWrapper>
            
                <ProductsCard onClick={()=>cristal()}>
                    <ProductsIconBio src={Icon25} />
                    <ProductsH2>Bio Cristal</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard onClick={()=>cabelloSano()}>
                    <ProductsIconBio src={Icon26} />
                    <ProductsH2>Bio Cabello Sano</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
                <ProductsCard onClick={()=>arcilla()}>
                    <ProductsIconBio src={Icon27} />
                    <ProductsH2>Bio Arcilla</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                </ProductsCard>
            </ProductsWrapper>
              </ProductsContainer>
    )
}

export default Products
