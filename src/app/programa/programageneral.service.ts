import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramageneralService {
  prog=
  [
    {
      dia:'28-Sep-Presencial',
      nomProg:'CONFERENCIA MAGISTRAL UNA INTRODUCCIÓN A LOS ROBOTS DE SERVICIO DE PROPÓSITO GENERAL',
      hora:'De 10:30 hrs a 11:20 hrs',
      imag:'assets/LuisAngel.jpg',
      nomConf: 'DR. LUIS ANGEL CONTRERAS TOLEDO',
      descripcion:'Realicé la Licenciatura y Maestría en Ingeniería Eléctrica (área: Procesamiento Digital de Señales) en la Facultad de Ingeniería de la Universidad Nacional Autónoma de México (UNAM). Recibí mi Doctorado en Ciencias de la Computación en el Laboratorio de Información Visual del Departamento de Visión por Computadora, Universidad de Bristol, Reino Unido, trabajando en problemas relacionados con la visión artificial y robótica. Actualmente soy investigador adjunto en el Centro de Investigación en Inteligencia Avanzada y Robótica de la Universidad de Tamagawa, Japón.'
    },
    {
      nomProg:'TALLER-APLICACIONES DE SENSORES EN ROBÓTICA',
      hora:'De 11:30 hrs a 18:00 hrs',
      imag:'assets/JuanFra.jpeg',
      nomConf: 'MTRO. JUAN FRANCISCO MELÉNDEZ ELIZALDE',
      descripcion:'De 1987-1993 desempeño dando Mantenimiento de equipo de cómputo e instructor de software de cómputo en general e instalación de Redes en diferentes filiales de IBM y de manera independiente hasta la fecha (más de 30 años). Desde 1992 como Docente en el Tecnológico de Estudios superiores de Ecatepec (TESE) Impartiendo diversas materias como: Ingeniería de Software, Bases de Datos, Teleproceso y Redes, Sistemas Abiertos, Análisis y diseño de sistemas, Sistemas Digitales, Arquitectura de computadoras, Teoría general de sistemas, Software de sistemas, Principios eléctricos y aplicaciones digitales, Física General, Matemáticas Discretas, Sistemas Programables.'
    },
    {
      nomProg:'TALLER-INTEGRAL NEXUS: DESENCADENANDO LA INNOVACIÓN CON IA GENERATIVA',
      hora:'De 11:30 hrs a 18:00 hrs',
      imag:'assets/ruben.png',
      nomConf: 'M. EN I.S.C. RUBÉN RAYA DELGADO',
      descripcion:'Orgullosamente titulado en el Tecnológico de Estudios Superiores de Ecatepec como M.I.S.C. especializado en desarrollo multiplataforma y soluciones tecnológicas avanzadas. Experto en integración de servicios de inteligencia artificial enfocados en la banca, atención a clientes y amplia experiencia en desarrollo de aplicaciones de software.'
    },
    {
      nomProg:'TALLER-INTRODUCCIÓN A ROS Y OPENCV',
      hora:'De 11:30 hrs a 18:00 hrs',
      imag:'assets/noe.png',
      nomConf: 'DR. NOÉ VELÁZQUEZ LÓPEZ',
      descripcion:'Profesor investigador de tiempo completo en el Departamento de Irrigación de la Universidad Autónoma Chapingo y parte del núcleo académico básico del Programa de Posgrado en Ingeniería Agrícola y Uso Integral del Agua (IAUIA). Graduado como Ingeniero Mecánico en Agricultura (2005) por la Universidad Autónoma Chapingo. Cuenta con Maestría en Ingeniería Agrícola con especialización en visión artificial (2008-2010) y Doctorado en Ingeniería Agrícola con especialización en robótica agrícola (2010-2013) por la Universidad de Agricultura de Tokio (TUA).'
    },
    {
      nomProg:'TALLER-PROGRAMACIÓN CON PYTHON: NIVEL BÁSICO',
      hora:'De 11:30 hrs a 18:00 hrs',
      imag:'assets/stein.png',
      nomConf: 'M. EN A.D.N. JUAN MANUEL STEIN CARRILLO',
      descripcion:'Es ingeniero en sistemas computacionales, Egresado del Tecnológico de Estudios Superiores de Ecatepec, estudió dos maestrías, la primera en Ingeniería en Sistemas Computacionales, y la segunda en Administración y Desarrollo de Negocios con doble titulación por parte de la Universidad del Valle de Toluca (México) y la Universidad Politécnica de Cataluña (España).'
    },
    {
      nomProg:'NODE.JS & COHERE: SENTIMENT ANALYSIS',
      hora:'De 11:30 hrs a 18:00 hrs',
      imag:'assets/LuisFe.jpeg',
      nomConf: 'ING. LUIS FERNANDO FÉRNANDEZ',
      descripcion:'Tengo experiencia en tecnologías de la información, con enfoque en desarrollo de front-end. Soy el tipo de persona que aprovecha cada oportunidad para aprender algo nuevo. Por eso disfruto de los desafíos. Me encanta trabajar y colaborar con gente diferente. En Uber & Cornershop se trabajó con React y otras bibliotecas o metodologías como Jest, Enzyme, Sass, BEM, Mock Service Worker, etc.'
    },
    {
      nomProg:'TALLER-INTRODUCCIÓN A LA PROGRAMACIÓN CON KOTLIN',
      hora:'De 11:30 hrs a 18:00 hrs',
      imag:'assets/joseal.jpg',
      nomConf: 'L.I. JOSÉ ALFREDO JIMÉNEZ MEZA',
      descripcion:'Licenciado en Informática con más de 25 años de experiencia docente en el TecNM campus Zitácuaro. Candidato a Maestro en Ciencias Computacionales. Especializado en desarrollo de software para aplicaciones desktop, tecnologías móviles y tecnologías web. Certificaciones técnicas en Fundamentos de Programación, Java y Android.'
    },
    {
      nomProg:'ANÁLISIS DE CLUSTERING PARA CLASIFICACIÓN DE CLIENTES',
      hora:'De 11:30 hrs a 18:00 hrs',
      imag:'assets/franc.jpg',
      nomConf: 'DR. FRANCISCO JACOB ÁVILA CAMACHO',
      descripcion:'Ingeniero en Electrónica y Computación, con Maestría en Ingeniería en Sistemas Computacionales, Maestría en Ciencias en Administración de Negocios y Doctorado en Sistemas Computacionales. Se ha desempeñado en las áreas de desarrollo de software y soluciones tecnológicas, cuenta con más de 18 años de experiencia docente e investigación en las áreas de inteligencia artificial, reconocimiento de patrones, internet de las cosas, diseño de bases de datos, programación y desarrollo web.'
    },
    {

      dia:'28-Sep-Conferencias Virtuales',
      nomProg:'CONFERENCIA MAGISTRAL-LA CIENCIA DE DATOS UTILIZA Y APROVECHA LA INTELIGENCIA ARTIFICIAL',
      hora:'De 11:35:00 hrs. a 12:25:00 hrs.',
      imag:'assets/adolfog.jpg',
      nomConf: 'DR. ADOLFO GUZMÁN ARENAS.',
      descripcion:'El Dr. Adolfo Guzmán Arenas es Ingeniero en Comunicaciones y Electrónica de la ESIME del Instituto Politécnico Nacional (IPN). Obtuvo su Maestría y su Doctorado en Ciencias de la Computación en el Instituto Tecnológico de Massachusetts (MIT), EE.UU. Fue profesor del Departamento de Ingeniería Eléctrica del MIT del Departamento de Inteligencia Mecánica de la Universidad de Edimburgo del Centro de Investigación y Estudios Avanzados del IPN, donde fundó la Maestría y Doctorado en Computación del Instituto de Investigación en Matemáticas Aplicadas y Sistemas, de la UNAM, donde fue jefe del Departamento de Computación y de la Unidad Interdisciplinaria (UPIICSA) del IPN. Fue director del Centro Científico IBM para América Latina, IBM de México, S.A. Ha sido Investigador Senior de la empresa MicroElectronics and Computer Corporation y vicepresidente de Ingeniería en International Software Systems, con sede en Austin, TX.'    },

    {

      nomProg:'TURING, CHATGPT Y LAS PROMESAS DE LA INTELIGENCIA ARTIFICIAL',
      hora:'De 12:30:00 hrs. a 13:20:00 hrs.',
      imag:'assets/luisal.jpg',
      nomConf: 'DR. LUIS ALBERTO PINEDA CORTÉS',
      descripcion:'Ingeniero Electrónico por la Universidad Anahuac (1976-1980), M. en C. en Ciencias Computacionales, por el ITESM (1983-1985), Campus Morelos y doctor (PhD) por la Universidad de Edimburgo, Escocia (1986-1990). Se desempeñó como ingeniero de diseño en la empresa Puromex (1979-1981) y como gerente del centro de cómputo de NCR de México (1981-1983). Inició sus labores de investigación en el Instituto de Investigaciones Eléctricas (IIE) donde se desempeñó como investigador en dos ocasiones (1983-1986 y 1992-1998). Fue investigador asociado en la Universidad de Edimburgo (1989-1992).'

    },
{

      nomProg:'NEUROTECHNOLOGÍA DEL FUTURO Y EL HUMANO 2.0',
      hora:'De 13:30:00 hrs. a 14:20:00 hrs.',
      imag:'assets/cristian.png',
      nomConf: 'DR. CHRISTIAN ISAAC PEÑALOZA',
      descripcion:'El Dr. Christian Peñaloza cuenta con un doctorado en neurociencia cognitiva aplicada a la robótica por la Universidad de Osaka y se especializa en robótica, inteligencia artificial y neurotecnología. Actualmente, es director ejecutivo del Instituto de Investigaciones en Tecnologías Emergentes Mirai Innovation en Osaka y científico investigador del Instituto de Investigaciones de Telecomunicaciones Avanzadas en Kioto, Japón. En el 2016 la revista MIT Technology Review reconoció al Dr. Peñaloza como “Innovador del Año”. En el 2018 y 2019, recibió el premio de “Excelencia a la Investigación” del mismo instituto de Kioto por desarrollar sistemas robóticos innovadores controlados con las señales del cerebro. En el 2018, el gobierno mexicano le dio el reconocimiento de “Mexicano Distinguido” de la mano del embajador de México en Japón, por su labor de vincular el ecosistema tecnológico de México y Japón.'
    },
    {
      dia:'29-Sep-Conferencias Presencial',
      nomProg:'CONCURSO DE PROGRAMACIÓN DE ALGORITMOS APLICADOS A LA CIBERSEGURIDAD',
      hora:'De 10:00:00 hrs. a 14:00:00 hrs.',
      imag:'assets/algoritmos.jpeg',
      nomConf:'PERSONAL INSTITUCIONAL',
      descripcion:'Que los estudiantes de cada una de instituciones participantes, en equipos de cuatro integrantes, pongan a prueba sus competencias en la programación de algoritmos, matemáticas y seguridad en dar solución a problemas de las Ciberseguridad. Este concurso tendrá lugar en el Centro de Cómputo del Instituto Tecnológico de Zitácuaro y en modalidad a distancia a través de la plataforma omegaup.',
      
      },
      {
      nomProg:'SEGURIDAD INFORMÁTICA: LA IMPORTANCIA EN LAS EMPRESAS',
      hora:'De 15:00:00 hrs. a 15:50:00 hrs.',
      imag:'assets/edua.png',
      nomConf:'ING. EDUARDO ANTONIO RODRÍGUEZ ROSADO',
      descripcion:'Actualmente es director de Tecnología, estoy encargado de las áreas de proyectos, IA, estimaciones, infraestructura y desarrollo de productos, en la cual mi misión es ayudar a crecer a las áreas y desarrollar los equipos con una cultura de alta performance. Fue desarrollador fullstack, miembro de las tribus de mobile, del team de portafolio o ﬁnOps, encargado de la creación de la versión de México de la aplicación mobile de la startup brasileño Creditas y también participe en el desarrollo de microservicios con springboot, Kotlin, con arquitecturas orientadas a eventos y SQRS. Participe en las arquitecturas para México, y en la creación de herramientas para optimizar los procesos.',
      },
      {
      nomProg:'DESMITIFICANDO LA INTELIGENCIA ARTIFICIAL: SEPARANDO LA REALIDAD DE LA FICCIÓN',
      hora:'De 15:00:00 hrs. a 15:50:00 hrs.',
      imag:'assets/hugog.jpg',
      nomConf:'ING. HUGO GARCÍA FLORES',
      descripcion:'Egresado en 2010 del Tecnológico de Monterrey en la carrera de Ingeniería en Mecatrónica. En su vida profesional estuvo vinculado a la academia por 7 años, dando diversas materias de ciencias en el Tecnológico de Monterrey dónde también entrenó y administró los equipos de robótica "buluk" y "Balam" en la competencia internacional First Robotics Competition. También atendió competencias de carros autónomos "racecar" y "cognitive assistant" en el MIT quedando dentro de los primeros lugares en dos años consecutivos. Actualmente pertenece a la consultoría Badak Soluciones desde hace 2 años dónde ha desarrollado diferentes aplicativos en las diversas áreas de la inteligencia artificial, principalmente en procesamiento de lenguaje natural y visión por computadora, imagen y video.',

      },
      {
      nomProg:'EXPOSICIÓN DE POSTERS',
      hora:'De 16:00:00 hrs. a 17:30:00 hrs.',
      nomConf:'ESTUDIANTES',
      imag:'assets/estu.jpeg',
      descripcion:'El propósito es que los estudiantes tengan la oportunidad de comunicar a la comunidad la forma en que desarrollan proyectos que dan solución a problemas planeados en sus ámbitos de convivencia, así como ejercitar su competencia de comunicación efectiva tanto oral como escrita.',
      },
      {
      nomProg:'PRESENTACIÓN DE PROYECTOS',
      hora:'De 15:00:00 hrs. a 18:00:00 hrs.',
      nomConf:'ESTUDIANTES',
      imag:'assets/estudiantes.jpeg',
      descripcion:'El objetivo es que los estudiantes de nivel superior y posgrado den a conocer los desarrollos de sus trabajos de tesis, residencias profesionales e investigación y las formas en que atienden y dan solución a problemas que involucran el usar sus competencias en sus áreas de conocimiento.',
      },
      {
        nomProg:'CONFERENCIA MAGISTRAL DONDE ESTÁN LOS DATOS PARA TRABAJAR PROCESOS DE ANALÍTICA',
        hora:'De 09:00:00 hrs. a 09:50:00 hrs.',
        imag:'assets/aleja.png',
        nomConf: 'DRA. ALEJANDRA CATHERINE MONTAÑA ACEVEDO',
        descripcion:'Profesional con experiencia liderando y orientando áreas de la cadena de suministro/supply chain desde compras, importaciones, logística, ventas y servicio al cliente a través de la analítica e inteligencia artificial. Es Ingeniera de Sistemas, docente en ciencias de datos, experiencia complementaria en Inteligencia del negocio, telecomunicaciones (infraestructura/instalaciones) como especialista en telemática e ingeniería de sistemas.',
        },
        {
        nomProg:'¿QUÉ ES UN ERP Y PORQUÉ ES IMPORTANTE IMPLEMENTARLO?',
        imag:'assets/alanra.png',
        hora:'De 10:00:00 hrs. a 10:35:00 hrs.',
        nomConf:'ING. ALAN RAFAEL ARCOS LÓPEZ',
        descripcion:'Lic. en Administración de Negocios Internacionales por la universidad veracruzana, graduado con honores del diplomado “International Business Management” por Greystone College en Vancouver, Canadá. Cuenta con más de cinco años de experiencia nacional e internacional en administración directiva, emprendimiento, administración de cuentas en el sector empresarial. A lo largo de su trayectoria ha desarrollado y coordinado programas de radio y televisión en temas de emprendimiento y orientación vocacional. De igual manera, ha impartido capacitaciones de emprendimiento y educación financiera a maestros y alumnos de nivel bachillerato y universidad a nivel nacional, colaborando con organizaciones como: CONDUSEF, MIDE, BANXICO y diversas instituciones gubernamentales. Actualmente se desempeña como director Educativo en LATAM para Odoo Technologies, donde funge como vínculo entre Odoo Technologies e instituciones académicas de nivel medio superior y superior, brindado acceso al programa educativo que ofrece Odoo para que los docentes y alumnos puedan digitalizar sus clases, capacitarse en el uso del software y brindar la oportunidad de certificarse manera gratuita.',
        },
        {
        nomProg:'PRESENTACIÓN DE PROYECTOS',
        hora:'De 15:00:00 hrs. a 18:00:00 hrs.',
        nomConf:'ESTUDIANTES',
        imag:'assets/estudiantes.jpeg',
        descripcion:'El objetivo es que los estudiantes de nivel superior y posgrado den a conocer los desarrollos de sus trabajos de tesis, residencias profesionales e investigación y las formas en que atienden y dan solución a problemas que involucran el usar sus competencias en sus áreas de conocimiento.',
        },
        {
        nomProg:'MAGISTER EN SEGURIDAD INFORMÁTICA',
        hora:'De 10:40:00 hrs. a 11:35:00 hrs.',
        imag:'assets/john.jpeg',
        nomConf:'MSC. JOHNN EDUARD CRIOLLO SALAMANCA',
        descripcion:'Ingeniero de sistemas, master en seguridad Informática, especialista en redes de alta velocidad y distribuida, especialista en tecnologías de la Información aplicadas a la educación, Auditor interno ISO 27001 2013 pentester con formación aplicada en criptografía, profesional orientado a la infraestructura de IT y la seguridad informática, Cisco CCNA Switching Routing 5 0. Docente universitario, co-investigador, y líder de semilleros en diferentes universidades Actualmente soy líder de maestría en ingeniería informática de la Universidad San Buenaventura Sede Bogotá próxima a ser ofertada en 2022, Líder de semillero de investigación SegInfo H4cke3s La4b y docente tiempo completo de la misma universidad, docente hora cátedra de la U Areandina, integrante del equipo de trabajo de UID (Unidad de Investigación Criminal de la defensa Colombia), docente de programa de Maestría en Ciberseguridad y Defensa de la escuela de tecnologías dela información y las comunicaciones "Teniente Coronel Jorge Luis Mauledoux Báron" ESTIC Policía Nacional de Colombia.'
        },
        {

          dia:'30-Sep-Presencial',
          nomProg:'DONDE ESTÁN LOS DATOS PARA TRABAJAR PROCESOS DE ANALÍTICA',
          hora:'De 09:00:00 hrs. a 09:55:00 hrs.',
          imag:'assets/walter.png',
          nomConf: 'DR. WALTERIO MAYOL CUEVAS',
          descripcion:'Investigador de la Universidad de Bristol en el Reino Unido, impartiendo cursos de robótica, visión por computadora y sistemas móviles. Se unió al grupo de Amazon Académico, Seatle en 2017, su trabajo involucra desarrollar nuevas ideas para el negocio, en sistemas de visión por computadora en tiempo real e inteligencia artificial.'
        },
    
        {
          nomProg:'TORNEO DE ROBOTS',
          hora:'De 10:00:00 hrs. a 13:00:00 hrs.',
          imag:'assets/robot.jpeg',
          nomConf: 'PERSONAL INSTITUCIONAL',
          descripcion:'El personal administrativo esta conformada por educadores, directivos docentes y administradores escolares. Todos ellos, según su competencia, deben participar en el diseño, ejecución y evaluación del Proyecto Educativo Institucional y en la buena marcha del respectivo establecimiento educativo.'
    
        },
         {
          nomProg:'PREMIACIÓN Y CLAUSURA',
          hora:'De 13:00:00 hrs. a 14:00:00 hrs.',
          imag:'assets/premiacion.jpeg',
          nomConf: 'PERSONAL INSTITUCIONAL',
          descripcion:'El personal administrativo esta conformada por educadores, directivos docentes y administradores escolares. Todos ellos, según su competencia, deben participar en el diseño, ejecución y evaluación del Proyecto Educativo Institucional y en la buena marcha del respectivo establecimiento educativo.'
    
        },
        {
          nomProg:'INSTITUCIONES PARTICIPANTES',
          hora:'De 10:00:00 hrs. a 18:00:00 hrs.',
          imag:'assets/partic.jpeg',
          descripcion:'Instituciones participantes dentro del congreso internacional de proyectos de investigación e innovación tecnológica y robótica 2023.'
    
        },
        {
          nomProg:'REGISTRO',
          hora:'22 Sep 2023 - 23:00 HRS',
          imag:'assets/qr.jpeg',
          nomConf: 'CONGRESO INTERNACIONAL DE PROYECTOS DE INVESTIGACIÓN E INNOVACIÓN TECNOLÓGICA Y ROBÓTICA 2023'
        },



  ]  

  constructor() { }
  getProg() { 
    return this.prog;
    }
}
