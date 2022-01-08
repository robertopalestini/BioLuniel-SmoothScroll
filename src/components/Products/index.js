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
import Icon28 from '../../images/25-bioArtritis-01.png'
//BIO NATURA
import Icon25 from '../../images/biocristal-01.png'
import Icon26 from '../../images/biocabello-01.png'
import Icon27 from '../../images/bioarsilla-01.png'
import {ProductsContainer, ProductsH1, ProductsWrapper, ProductsCard, ProductsIcon, ProductsIconBio, ProductsH2, ProductsP} from './ProductsElements'
import Swal from 'sweetalert2';

    import { HashLink } from 'react-router-hash-link';
    import {Button} from '../ButtonElement';

const Products = () => {
    
// Bio Bach
const ansiedad=()=>{
        Swal.fire({
            imageUrl: require("../../images/1-bioAnsiedadAngustia.png").default,
            imageWidth: '200px',

            title: 'Bio Ansiedad/Angustia',
            text: 'Nuestro producto esta recomendado para personas tendientes a ser nerviosas, preocupadas en extremo, angustia progresiva, trastornos, crisis de ansiedad reactiva generalizada, sudoración en manos o cuerpo y trastornos psicosomáticos por ansiedad.',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#ansiedad">Ver más</a>',
            showCloseButton: true,
          })
    }
const depresion=()=>{
        Swal.fire({
            imageUrl: require("../../images/2-bioDepresion-01.png").default,
            imageWidth: '200px',

            title: 'Bio Depresión',
            text: 'Nuestro producto puede ser utilizado en personas con trastornos depresivos persistentes severos o moderados en cuadros como depresión reactiva, depresión bipolar o intentos fallidos de suicidio, (es importante anotar que no debe suspenderse ni reemplazar la medicación química que el paciente este tomando) puede administrarse sólo o con otros productos sin tener riesgo de contraindicaciones. ',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#depresion">Ver más</a>',
            showCloseButton: true,
          })
    }
const tristeza=()=>{
        Swal.fire({
            imageUrl: require("../../images/7-bioTristeza-01.png").default,
            imageWidth: '200px',

            title: 'Bio Tristeza',
            text: 'Nuestro producto está recomendado en individuos con personalidad triste, apagada, en circunstancias particulares, individuos tendientes a la soledad. Los síntomas más evidentes son el llanto, el desgano, el nerviosismo, suspiros frecuentes y profundos y el decaimiento moral. ',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#tristeza">Ver más</a>',
            showCloseButton: true,
          })
    }
const estres=()=>{
        Swal.fire({
            imageUrl: require("../../images/3-bioEstres-01.png").default,
            imageWidth: '200px',

            title: 'Bio Estrés',
            text: 'Nuestro producto para estrés es ideal en este tipo paciente cuyo estilo de vida con muchas exigencias, responsabilidades se manifiesten con signos generales o psicosomáticos de estrés, que generen alteraciones de adaptación.',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#estres">Ver más</a>',
            showCloseButton: true,
          })
    }
const ira=()=>{
        Swal.fire({
            imageUrl: require("../../images/4-bioIra-01.png").default,
            imageWidth: '200px',

            title: 'Bio Ira',
            text: 'Nuestro producto justamente está recomendado para equilibrar esta emoción llevando a la persona a un control de sus acciones y evitando complicaciones con otros órganos. ',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#ira">Ver más</a>',
            showCloseButton: true,
          })
    }
const resentimiento=()=>{
        Swal.fire({
            imageUrl: require("../../images/6-bioResentimiento-01.png").default,
            imageWidth: '200px',

            title: 'Bio Resentimiento',
            text: 'Nuestro producto ayuda a sanar este sentimiento y de esta manera devolviendo el bienestar emocional. ',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#resentimiento">Ver más</a>',
            showCloseButton: true,
          })
    }
const paz=()=>{
        Swal.fire({
            imageUrl: require("../../images/5-bioPaz-01.png").default,
            imageWidth: '200px',

            title: 'Bio Paz',
            text: 'Indicado para estabilizar el estado emocional en casos de intranquilidad, impaciencia, hiperactividad sin causa específica, pensamientos negativos y perturbadores, arrastra problemas del pasado, no está alineado con su propósito de vida. Muy apropiado en los niños y adultos con hiperactividad. ',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#paz">Ver más</a>',
            showCloseButton: true,
          })
    }
const rescate=()=>{
        Swal.fire({
            imageUrl: require("../../images/8-bioRescate-01.png").default,
            imageWidth: '200px',

            title: 'Bio Rescate',
            text: 'Como su nombre lo indica rescatamos a la persona para que no caiga en cuadros de depresión y otras alteraciones emocionales que puedan causar más daño. ',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#rescate">Ver más</a>',
            showCloseButton: true,
          })
    }
const resistencia=()=>{
        Swal.fire({
            imageUrl: require("../../images/9-bioResistencia-01.png").default,
            imageWidth: '200px',

            title: 'Bio Resistencia (Bullying)',
            text: 'Nuestro producto actúa brindándole al paciente la entereza, firmeza, seguridad y fortaleza para afrontar este tipo de maltrato. ',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#resistencia">Ver más</a>',
            showCloseButton: true,
          })
    }
const insomnio=()=>{
        Swal.fire({
            imageUrl: require("../../images/10-bioInsomnio-01.png").default,
            imageWidth: '200px',

            title: 'Bio Insomnio',
            text: 'Apoyo de tratamiento para lograr regular trastornos del sueño, problemas para mantener el sueño, produciéndose despertares nocturnos de más de 30 minutos de duración, o despertando definitivamente de manera precoz consiguiendo un tiempo total de sueño escaso, trastornos de sueño con pesadillas, hipersomnia (dormir demasiado).',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#insomnio">Ver más</a>',
            showCloseButton: true,
          })
    }
const migrana=()=>{
        Swal.fire({
            imageUrl: require("../../images/11-bioMigrana-01.png").default,
            imageWidth: '200px',

            title: 'Bio Migraña',
            text: 'Nuestro producto sirve como apoyo al tratamiento de migraña, logra que las crisis de cefalea sean menos frecuentes y menos intensas, en muchos casos la erradica definitivamente. ',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#migrana">Ver más</a>',
            showCloseButton: true,
          })
    }

const apetito=()=>{
        Swal.fire({
            imageUrl: require("../../images/12-bioApetito-01.png").default,
            imageWidth: '200px',

            title: 'Bio Apetito',
            text: 'Ideal si se está cursando peródos de falta de apetito tanto en adultos como en niños, los síntomas pueden ser desde comer menos de lo habitual a no sentir hambre para o sentirse saciados después de comer solo una pequeña cantidad. ',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#apetito">Ver más</a>',
            showCloseButton: true,
          })
    }

const hombre=()=>{
        Swal.fire({
            imageUrl: require("../../images/13-bioHombre-01.png").default,
            imageWidth: '200px',

            title: 'Bio Hombre',
            text: 'Indicado en hombres con hipertrofia prostática benigna, también que estén cursando los períodos de falta de lívido, deseo sexual, andropausia, entre otras afecciones, más si esto se acompaña de alteraciones de la esfera emocional, además va a apoyar en regular y adaptar el estado funcional hormonal, estado de ánimo, fatiga, pérdida de energía, irritabilidad y cambio de actitud frente a la vida.',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#hombre">Ver más</a>',
            showCloseButton: true,
          })
    }
const mujer=()=>{
        Swal.fire({
            imageUrl: require("../../images/14-bioMujer-01.png").default,
            imageWidth: '200px',

            title: 'Bio Mujer',
            text: 'Indicado en trastornos femeninos como: ciclos menstruales irregulares, alteraciones en la menopausia, sofocos, calores nocturnos, cambios de carácter, irritabilidad, disminución de la libido y todo lo que conlleva. ',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#mujer">Ver más</a>',
            showCloseButton: true,
          })
    }
const memoria=()=>{
        Swal.fire({
            imageUrl: require("../../images/15-bioMemoria-01.png").default,
            imageWidth: '200px',

            title: 'Bio Memoria',
            text: 'Para mejorar la memoria tanto en pacientes jóvenes, estudiantes y personas de edad avanzada, apoyo en terapias de aprendizaje.',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#memoria">Ver más</a>',
            showCloseButton: true,
          })
    }
const concentracion=()=>{
        Swal.fire({
            imageUrl: require("../../images/16-bioConcentracion-01.png").default,
            imageWidth: '200px',

            title: 'Bio Concentración',
            text: 'Indicado para lograr controlar problemas de la falta de concentración, esto es, no estar presente en lo que hacemos; significa distraído por algo que no está sucediendo ahora y que no tiene que ver con la acción concreta que se está llevando a cabo, problemas de Atención Dispersa.',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#concentracion">Ver más</a>',
            showCloseButton: true,
          })
    }
const digestion=()=>{
        Swal.fire({
            imageUrl: require("../../images/17-bioDigestion-01.png").default,
            imageWidth: '200px',

            title: 'Bio Digestión',
            text: 'Indicado en personas con problemas de la esfera digestiva, ya sea por alteraciones gástricas como reflujo, gastritis, alteraciones del tránsito intestinal como estreñimiento, colon irritable, diarreas funcionales o emocionales, etc.  ',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#digestion">Ver más</a>',
            showCloseButton: true,
          })
    }
const alergia=()=>{
        Swal.fire({
            imageUrl: require("../../images/18-bioAlergia-01.png").default,
            imageWidth: '200px',

            title: 'Bio Alergia',
            text: 'La función armonizadora de nuestros productos florales sobre estos desequilibrios, pueden ser de gran ayuda para las personas que padecen alergias diversas y apoyo terapéutico a otros medicamentos alopáticos.  ',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#alergia">Ver más</a>',
            showCloseButton: true,
          })
    }
const detox=()=>{
        Swal.fire({
            imageUrl: require("../../images/19-bioDetox-01.png").default,
            imageWidth: '200px',

            title: 'Bio Detox',
            text: 'Mezcla de elixires florales que favorecen los propios mecanismos de eliminación de toxinas de cualquier tipo, ayudan a limpiar el organismo, de hecho, ayudan a lograr un verdadero drenaje psicológico y físico, puesto que, a veces, lo que ensucia más el cuerpo llega a través de pensamientos negativos o malos recuerdos este proceso es hecho a través de los ganglios linfáticos.',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#detox">Ver más</a>',
            showCloseButton: true,
          })
    }
const defensas=()=>{
        Swal.fire({
            imageUrl: require("../../images/20-bioDefensas-01.png").default,
            imageWidth: '200px',

            title: 'Bio Defensas',
            text: 'Nuestro producto esta recomendado para personas enfermizas o que padecen infecciones a repetición, que necesitan elevar sus defensas y que su cuerpo aprenda defenderse de agresiones externas e internas.  ',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#defensas">Ver más</a>',
            showCloseButton: true,
          })
    }
const colageno=()=>{
        Swal.fire({
            imageUrl: require("../../images/21-bioColageno-01.png").default,
            imageWidth: '200px',

            title: 'Bio Colageno',
            text: 'Es un estimulador de la producción propia de colágeno de nuestro cuerpo, necesario para mantener los tejidos blandos como la piel, pelo y uñas saludables, lograr que se mantengan los tejidos peri articulares y articulares, así como las superficies articulares saludables. ',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#colageno">Ver más</a>',
            showCloseButton: true,
          })
    }
const pesocontrol=()=>{
        Swal.fire({
            imageUrl: require("../../images/22-bioPeso-01.png").default,
            imageWidth: '200px',

            title: 'Bio Peso Control',
            text: 'Tratamiento que hace una limpieza orgánica e intestinal inicial, apoya en el control del apetito aumentando y desordenado, regula el metabolismo, calma la ansiedad por comer.',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#pesocontrol">Ver más</a>',
            showCloseButton: true,
          })
    }

const miedotemor=()=>{
        Swal.fire({
            imageUrl: require("../../images/23-bioMiedo-01.png").default,
            imageWidth: '200px',

            title: 'Bio Miedo Temor',
            text: 'Nuestro producto actúa equilibrando las frecuencias alteradas por esta emoción dando el coraje y valor a la persona que lo padece para enfrentarlo y disminuyendo los niveles altos de inquietud asociado al miedo. ',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#miedotemor">Ver más</a>',
            showCloseButton: true,
          })
    }

const linfa=()=>{
        Swal.fire({
            imageUrl: require("../../images/24-bioLinfa-01.png").default,
            imageWidth: '200px',

            title: 'Bio Linfa',
            text: 'La linfa trabaja sin parar en nuestro interior, día y noche, para protegernos de enfermedades, eliminar el exceso de líquido y ayudarnos a mantener una calidad de vida óptima.',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#linfa">Ver más</a>',
            showCloseButton: true,
          })
    }

const artritis=()=>{
        Swal.fire({
            imageUrl: require("../../images/25-bioArtritis-01.png").default,
            imageWidth: '200px',

            title: 'Bio Artritis',
            text: 'Nuestro producto actúa modulando la respuesta autoinmune, tiene efecto antiinflamatorio, previene la deformación de las articulaciones.',
            footer: '<a href="https://api.whatsapp.com/send?phone=593988363602&text=Hola%2C+me+contacto+atravez+del+Sitio+de+BioLuniel" style="color:#000" target="_blank">Contactar por Whatsapp</a>',
            confirmButtonColor: '#73d629',
            confirmButtonText: '<a href="/infoproductos#artritis">Ver más</a>',
            showCloseButton: true,
          })
    }
// BIO NATURA
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
        <ProductsContainer id="biobach">
            <ProductsH1>Bio Bach</ProductsH1>
            <ProductsWrapper>
            <ProductsCard >
                    <ProductsIcon src={Icon1} onClick={()=>ansiedad()} />
                    <HashLink to="/infoproductos#ansiedadangustia"> 
                    <ProductsH2>Bio Ansiedad/Angustia</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
            </ProductsCard>
                <ProductsCard >
                    <ProductsIcon src={Icon2} onClick={()=>depresion()}/>
                    <HashLink to="/infoproductos#depresion"> 
                    <ProductsH2>Bio Depresión</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard >
                    <ProductsIcon src={Icon7} onClick={()=>tristeza()} />
                    <HashLink to="/infoproductos#tristeza"> 
                    
                    <ProductsH2>Bio Tristeza</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard >
                    <ProductsIcon src={Icon3} onClick={()=>estres()} />
                    <HashLink to="/infoproductos#estres">
                    <ProductsH2>Bio Estrés</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon4} onClick={()=>ira()} />
                    <HashLink to="/infoproductos#ira">
                    <ProductsH2>Bio Ira</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon6} onClick={()=>resentimiento()} />
                    <HashLink to="/infoproductos#resentimiento">
                    <ProductsH2>Bio Resentimiento</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon5} onClick={()=>paz()} />
                    <HashLink to="/infoproductos#paz" >
                    <ProductsH2>Bio Paz</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon8} onClick={()=>rescate()} />
                    <HashLink to="/infoproductos#rescate" >
                    <ProductsH2>Bio Rescate</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon9} onClick={()=>resistencia()} />
                    <HashLink to="/infoproductos#resistencia">
                    <ProductsH2>Bio Resistencia (Bullying)</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon10} onClick={()=>insomnio()} />
                    <HashLink to="/infoproductos#insomnio">
                    <ProductsH2>Bio Insomnio</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon11} onClick={()=>migrana()} />
                    <HashLink to="/infoproductos#migrana">
                    <ProductsH2>Bio Migraña</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
               <ProductsCard>
                    <ProductsIcon src={Icon12} onClick={()=>apetito()} />
                    <HashLink to="/infoproductos#apetito">
                    <ProductsH2>Bio Apetito</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon13} onClick={()=>hombre()} />
                    <HashLink to="/infoproductos#hombre">
                    <ProductsH2>Bio Hombre</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon14} onClick={()=>mujer()} />
                    <HashLink to="/infoproductos#mujer">
                    <ProductsH2>Bio Mujer</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon15} onClick={()=>memoria()} />
                    <HashLink to="/infoproductos#memoria">
                    <ProductsH2>Bio Memoria</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon16} onClick={()=>concentracion()} />
                    <HashLink to="/infoproductos#concentracion">
                    <ProductsH2>Bio Concentración</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon17} onClick={()=>digestion()} />
                    <HashLink to="/infoproductos#digestion">
                    <ProductsH2>Bio Digestión</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon18} onClick={()=>alergia()} />
                    <HashLink to="/infoproductos#alergia">
                    <ProductsH2>Bio Alergia</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon19} onClick={()=>detox()} />
                    <HashLink to="/infoproductos#detox">
                    <ProductsH2>Bio Detox</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard >
                    <ProductsIcon src={Icon20} onClick={()=>defensas()} />
                    <HashLink to="/infoproductos#defensas">
                    <ProductsH2>Bio Defensas</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon21} onClick={()=>colageno()} />
                    <HashLink to="/infoproductos#colageno">
                    <ProductsH2>Bio Colágeno</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon22} onClick={()=>pesocontrol()} />
                    <HashLink to="/infoproductos#pesocontrol">
                    <ProductsH2>Bio Peso Control</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon23} onClick={()=>miedotemor()} />
                    <HashLink to="/infoproductos#miedotemor">
                    <ProductsH2>Bio Miedo Temor</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon24} onClick={()=>linfa()} />
                    <HashLink to="/infoproductos#linfa">
                    <ProductsH2>Bio Linfa</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon28} onClick={()=>artritis()} />
                    <HashLink to="/infoproductos#artritis">
                    <ProductsH2>Bio Artritis</ProductsH2>
                    <ProductsP>Ver más</ProductsP>
                    </HashLink>
                </ProductsCard>
                 
            </ProductsWrapper>



            <ProductsH1 margin-top="20px">Bio Natura</ProductsH1>
            <ProductsWrapper id="bionatura">
            
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
    )
}

export default Products
