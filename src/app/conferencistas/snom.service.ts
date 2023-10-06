import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnomService {

  conf=
  [
    {
      confe:'CONFERENCIA MAGISTRAL UNA INTRODUCCIÓN A LOS ROBOTS DE SERVICIO DE PROPÓSITO GENERAL',
 nomConf:'DR. LUIS ANGEL CONTRERAS TOLEDO',
 imagen:"assets/Dr Luis.jpg" ,
 historial: 'Realicé la Licenciatura y Maestría en Ingeniería Eléctrica (área: Procesamiento Digital de Señales) en la Facultad de Ingeniería de la Universidad Nacional Autónoma de México (UNAM). Recibí mi Doctorado en Ciencias de la Computación en el Laboratorio de Información Visual del Departamento de Visión por Computadora, Universidad de Bristol, Reino Unido, trabajando en problemas relacionados con la visión artificial y robótica. Actualmente soy investigador adjunto en el Centro de Investigación en Inteligencia Avanzada y Robótica de la Universidad de Tamagawa, Japón. He estado trabajando en robots móviles y robots de servicio durante los últimos catorce años y he presentado los resultados de nuestra investigación en revistas, conferencias y torneos de robótica nacionales e internacionales.'
    },
    {
      confe:'TURING, CHATGPT Y LAS PROMESAS DE LA INTELIGENCIA ARTIFICIAL',
      nomConf:'DR. LUIS ALBERTO PINEDA CORTÉS',
      imagen:"assets/Dr Alberto.jpg" ,
      historial:'Ingeniero Electrónico por la Universidad Anahuac (1976-1980), M. en C. en Ciencias Computacionales, por el ITESM (1983-1985), Campus Morelos y doctor (PhD) por la Universidad de Edimburgo, Escocia (1986-1990). Se desempeñó como ingeniero de diseño en la empresa Puromex (1979-1981) y como gerente del centro de cómputo de NCR de México (1981-1983). Inició sus labores de investigación en el Instituto de Investigaciones Eléctricas (IIE) donde se desempeñó como investigador en dos ocasiones (1983-1986 y 1992-1998). Fue investigador asociado en la Universidad de Edimburgo (1989-1992). En 1998 se incorporó al IIMAS, UNAM, donde fue jefe del Departamento de Ciencias de la Computación de 1998 a 2002, del 2005 al 2010, y lo es nuevamente a partir de abril de 2018. Realizó una estancia en la Universidad Estatal de Ohio de enero a junio de 2003 y un año sabático en la Universidad Técnica de Viena en el 2011. En el aspecto de investigación es autor del libro Racionalidad Computacional (2020, 252 p.) de 32 artículos incluidos en el JCR de los cuales 16 están actualmente en el quartil Q1 y 9 en el Q2 de 12 artículos adicionales publicados en revistas arbitradas incluidas en otros índices nacionales e internacionales de 3 artículos en repositorios internacionales de 35 capítulos de libro y memorias publicados por editoriales de prestigio internacional de 8 artículos de política científica y vinculación y de 6 artículos adicionales disponibles en su página de web. Asimismo, es coordinador y editor dos libros de política cientifica y vinculación. Sus especialidades son inteligencia artificial (representación del conocimiento, inferencia automatizada y fundamentos de la computación y IA) lingüística computacional (semántica del lenguaje natural y multimodal, reconocimiento del habla y procesamiento del lenguaje natural) robots de servicio (lenguaje, representación del conocimiento y razonamiento) computación gráfica (interfaces multimodales) y memoria asociativa. Es autor de las primeras publicaciones hechas en México en las revistas Computational Linguistics y Artificial Intelligence, máximos foros mundiales de las especialidades correspondientes, en 2000 y 2007 respectivamente y su última publicación abre una línea novedosa en memorias asociativas computacionales, sin antecedentes a nivel internacional, y se incluye en una revista de la editorial Nature. Es el primer autor y/o autor por correspondencia, así como redactor principal de la gran mayoría de sus publicaciones. Su trabajo ha sido objeto de 562 citas tipo “A” y 42 tipo “B” (https://turing.iimas.unam.mx/~luis/citas/Citas-Totales-LAPC.html).'
  }, 
    {
      confe:'CONFERENCIA MAGISTRAL DONDE ESTÁN LOS DATOS PARA TRABAJAR PROCESOS DE ANALÍTICA',
      nomConf:'DRA. ALEJANDRA CATHERINE MONTAÑA ACEVEDO',
      imagen:"assets/Alejandra.png" ,
      historial:'Profesional con experiencia liderando y orientando áreas de la cadena de suministro/supply chain desde compras, importaciones, logística, ventas y servicio al cliente a través de la analítica e inteligencia artificial. Es Ingeniera de Sistemas, docente en ciencias de datos, experiencia complementaria en Inteligencia del negocio, telecomunicaciones (infraestructura/instalaciones) como especialista en telemática e ingeniería de sistemas.' 
    }, 
    {
      confe:'SEGURIDAD INFORMÁTICA: LA IMPORTANCIA EN LAS EMPRESAS',
      nomConf:'ING. EDUARDO ANTONIO RODRÍGUEZ ROSADO',
      imagen:"assets/Eduardo.png" ,
      historial:'Actualmente es director de Tecnología, estoy encargado de las áreas de proyectos, IA, estimaciones, infraestructura y desarrollo de productos, en la cual mi misión es ayudar a crecer a las áreas y desarrollar los equipos con una cultura de alta performance. Fue desarrollador fullstack, miembro de las tribus de mobile, del team de portafolio o ﬁnOps, encargado de la creación de la versión de México de la aplicación mobile de la startup brasileño Creditas y también participe en el desarrollo de microservicios con springboot, Kotlin, con arquitecturas orientadas a eventos y SQRS. Participe en las arquitecturas para México, y en la creación de herramientas para optimizar los procesos.'
    }, 
    {
      confe:'DONDE ESTÁN LOS DATOS PARA TRABAJAR PROCESOS DE ANALÍTICA',
      nomConf:'DR. WALTERIO MAYOL CUEVAS',
      imagen:"assets/Walterio.png" ,
      historial:'Investigador de la Universidad de Bristol en el Reino Unido, impartiendo cursos de robótica, visión por computadora y sistemas móviles. Se unió al grupo de Amazon Académico, Seatle en 2017, su trabajo involucra desarrollar nuevas ideas para el negocio, en sistemas de visión por computadora en tiempo real e inteligencia artificial.'
    }, 
  ]


  conf2=
  [
  {
  confe1:'CONFERENCIA MAGISTRAL-LA CIENCIA DE DATOS UTILIZA Y APROVECHA LA INTELIGENCIA ARTIFICIAL',
nomConf1:'DR. ADOLFO GUZMÁN ARENAS.',
imagen1:"assets/Dr Adolfo.jpg" ,
historial1: 'El Dr. Adolfo Guzmán Arenas es Ingeniero en Comunicaciones y Electrónica de la ESIME del Instituto Politécnico Nacional (IPN). Obtuvo su Maestría y su Doctorado en Ciencias de la Computación en el Instituto Tecnológico de Massachusetts (MIT), EE.UU. Fue profesor del Departamento de Ingeniería Eléctrica del MIT del Departamento de Inteligencia Mecánica de la Universidad de Edimburgo del Centro de Investigación y Estudios Avanzados del IPN, donde fundó la Maestría y Doctorado en Computación del Instituto de Investigación en Matemáticas Aplicadas y Sistemas, de la UNAM, donde fue jefe del Departamento de Computación y de la Unidad Interdisciplinaria (UPIICSA) del IPN. Fue director del Centro Científico IBM para América Latina, IBM de México, S.A. Ha sido Investigador Senior de la empresa MicroElectronics and Computer Corporation y vicepresidente de Ingeniería en International Software Systems, con sede en Austin, TX. Recibió de manos del presidente Zedillo (1996) el Premio Nacional de Ciencias y Artes (1996) y la Presea “Lázaro Cárdenas” (1997). Fue director fundador (1996-2002) del Centro de Investigación en Computación (CIC) del IPN. Adolfo es miembro de la Academia Mexicana de Ciencias, Académico de Honor de la Academia de Ingeniería, e investigador nacional emérito del SNI. Es Doctor Honoris Causa del Instituto Nacional de Astrofísica, Óptica y Electrónica. Es Fellow del Institute of Electrical and Electronic Engineers (IEEE), de la Association for Computing Machinery (ACM) y de la Asia-Pacific Artificial Intelligence Association (AAAI). En el CIC usa la Inteligencia Artificial en el análisis de grandes cantidades de datos para predicción y clasificación. Blog: a-guzman.blogspot.com'
  },
  {
  confe1:'NEUROTECHNOLOGÍA DEL FUTURO Y EL HUMANO 2.0',
nomConf1:'DR. CHRISTIAN ISAAC PEÑALOZA',
imagen1:"assets/Dr Christian.png" ,
historial1: 'El Dr. Christian Peñaloza cuenta con un doctorado en neurociencia cognitiva aplicada a la robótica por la Universidad de Osaka y se especializa en robótica, inteligencia artificial y neurotecnología. Actualmente, es director ejecutivo del Instituto de Investigaciones en Tecnologías Emergentes Mirai Innovation en Osaka y científico investigador del Instituto de Investigaciones de Telecomunicaciones Avanzadas en Kioto, Japón. En el 2016 la revista MIT Technology Review reconoció al Dr. Peñaloza como “Innovador del Año”. En el 2018 y 2019, recibió el premio de “Excelencia a la Investigación” del mismo instituto de Kioto por desarrollar sistemas robóticos innovadores controlados con las señales del cerebro. En el 2018, el gobierno mexicano le dio el reconocimiento de “Mexicano Distinguido” de la mano del embajador de México en Japón, por su labor de vincular el ecosistema tecnológico de México y Japón. En el 2021, la academia de ciencias de Nueva York reconoció al Dr. Peñaloza como uno de los 60 jóvenes investigadores alrededor del mundo con las carreras más prometedoras y lo seleccionó para trabajar en la iniciativa Interestelar 2021-2022 la cual se enfoca en resolver problemas médicos globales usando la tecnología avanzada.'
},
{
  confe1:'DONDE ESTÁN LOS DATOS PARA TRABAJAR PROCESOS DE ANALÍTICA',
nomConf1:'ING. ALAN RAFAEL ARCOS LÓPEZ',
imagen1:"assets/Alan.png" ,
historial1: 'Lic. en Administración de Negocios Internacionales por la universidad veracruzana, graduado con honores del diplomado “International Business Management” por Greystone College en Vancouver, Canadá. Cuenta con más de cinco años de experiencia nacional e internacional en administración directiva, emprendimiento, administración de cuentas en el sector empresarial. A lo largo de su trayectoria ha desarrollado y coordinado programas de radio y televisión en temas de emprendimiento y orientación vocacional. De igual manera, ha impartido capacitaciones de emprendimiento y educación financiera a maestros y alumnos de nivel bachillerato y universidad a nivel nacional, colaborando con organizaciones como: CONDUSEF, MIDE, BANXICO y diversas instituciones gubernamentales. Actualmente se desempeña como director Educativo en LATAM para Odoo Technologies, donde funge como vínculo entre Odoo Technologies e instituciones académicas de nivel medio superior y superior, brindado acceso al programa educativo que ofrece Odoo para que los docentes y alumnos puedan digitalizar sus clases, capacitarse en el uso del software y brindar la oportunidad de certificarse manera gratuita.'
},
{
  confe1:'DESMITIFICANDO LA INTELIGENCIA ARTIFICIAL: SEPARANDO LA REALIDAD DE LA FICCIÓN',
nomConf1:'ING. HUGO GARCÍA FLORES',
imagen1:"assets/Hugo.jpg" ,
historial1: 'Egresado en 2010 del Tecnológico de Monterrey en la carrera de Ingeniería en Mecatrónica. En su vida profesional estuvo vinculado a la academia por 7 años, dando diversas materias de ciencias en el Tecnológico de Monterrey dónde también entrenó y administró los equipos de robótica "buluk" y "Balam" en la competencia internacional First Robotics Competition. También atendió competencias de carros autónomos "racecar" y "cognitive assistant" en el MIT quedando dentro de los primeros lugares en dos años consecutivos. Actualmente pertenece a la consultoría Badak Soluciones desde hace 2 años dónde ha desarrollado diferentes aplicativos en las diversas áreas de la inteligencia artificial, principalmente en procesamiento de lenguaje natural y visión por computadora, imagen y video.'
},
]

  constructor() { }
  getnom(){
    return this.conf
   }
    getnom1(){
      return this.conf2  
  }
}
/*Velázquez Galván Aldair*/
