import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {
  informacion=[
    {
    id:1,
    titulo:'Aplicaciones de sensores en Robótica',
    imagen:'assets/ING_JUAN_FRANCISCO_MELENDEZ_ELIZALDE.jpg',
    descripcion1: 'De 1987–1993 desempeño dando Mantenimiento de equipo de cómputo e instructor de software de cómputo en general e instalación de Redes en diferentes filiales de IBM y de manera independiente hasta la fecha (más de 30 años). Desde 1992 como Docente en el Tecnológico de Estudios superiores de Ecatepec (TESE) Impartiendo diversas materias como: Ingeniería de Software, Bases de Datos, Teleproceso y Redes, Sistemas Abiertos, Análisis y diseño de sistemas, Sistemas Digitales, Arquitectura de computadoras, Teoría general de sistemas, Software de sistemas, Principios eléctricos y aplicaciones digitales, Física General, Matemáticas Discretas, Sistemas Programables.',
    descripcion2: 'Desde 1992 como Docente en el Tecnológico de Estudios superiores de Ecatepec (TESE) Impartiendo diversas materias como: Ingeniería de Software, Bases de Datos, Teleproceso y Redes, Sistemas Abiertos, Análisis y diseño de sistemas, Sistemas Digitales, Arquitectura de computadoras, Teoría general de sistemas, Software de sistemas, Principios eléctricos y aplicaciones digitales, Física General, Matemáticas Discretas, Sistemas Programables.',
    descripcion3: 'Desde 2002 como docente en el CECyT #3 “Estanislao Ramírez Ruiz” (Voca 3) impartiendo materias como: Dispositivos electrónicos, Redes Digitales, Instrumentación Electrónica, Programación Visual. Estudios 1987–1992 ESIME-ZAC (Escuela Superior de Ingeniería Mecánica y Eléctrica) IPN. Ingeniero en Comunicaciones y Electrónica. 2000–2002 ESIME-ZAC-SEPI (Escuela Superior de Ingeniería Mecánica y Eléctrica) IPN (Sección de Estudios de Postgrado), MAESTRIA EN INGENIERIA EN SISTEMAS. 2011–2013 UNIVERSIDAD PEDAGÓGICA NACIONAL U.P.N. UNIDAD 092 AJUSCO (CENTRAL), ESPECIALIDAD EN EDUCACIÓN MEDIA SUPERIOR LÍNEA I. COMPETENCIAS DOCENTES. 2021–2022 Centro Interdisciplinario de Innovación y Posgrado, Maestría en Educación y Profesionalización Docente.',
    enlace1: "/talleristas/",
    enlace2: "/talleristas/2",
    anterior:'Ir a la página de Talleristas',
    siguiente:'Siguiente',
  },
  {
    id:2, 
    titulo:'IntegrAI Nexus',
    imagen:'assets/M_EN_I_S_C_RUBÉN_RAYA_DELGADO.jpg',
    descripcion1:'Orgullosamente titulado en el Tecnológico de Estudios Superiores de Ecatepec como M.I.S.C. especializado en desarrollo multiplataforma y soluciones tecnológicas avanzadas.',
    descripcion2:'Experto en integración de servicios de inteligencia artificial enfocados en la banca, atención a clientes y amplia experiencia en desarrollo de aplicaciones de software.',
    descripcion3:'Apasionado por la implementación de soluciones empresariales disruptivas y la integración de tecnologías de IoT de vanguardia para abordar desafíos en la industria de TI. Líder técnico en la empresa NDS Cognitive Labs y profesor de cátedra en el Instituto Tecnológico y de Estudios Superiores de Monterrey campus Santa Fe.',
    enlace1: "/talleristas/1",
    enlace2: "/talleristas/3",
    anterior:'Anterior',
    siguiente:'Siguiente',
  },
  {
    id:3,
    titulo:'Introducción a ROS y OPENCV',
    imagen:'assets/DR_NOÉ_VELÁZQUEZ_LÓPEZ.jpg',
    descripcion1:'Profesor investigador de tiempo completo en el Departamento de Irrigación de la Universidad Autónoma Chapingo y parte del núcleo académico básico del Programa de Posgrado en Ingeniería Agrícola y Uso Integral del Agua (IAUIA). Graduado como Ingeniero Mecánico en Agricultura (2005) por la Universidad Autónoma Chapingo.    ',
    descripcion2:'Cuenta con Maestría en Ingeniería Agrícola con especialización en visión artificial (2008-2010) y Doctorado en Ingeniería Agrícola con especialización en robótica agrícola (2010-2013) por la Universidad de Agricultura de Tokio (TUA). Sus áreas de investigación son automatización y robótica en agricultura.',
    descripcion3:'Cuenta con experiencia laboral como investigador en el programa de mecanización agrícola del INIFAP (2013-2014). Es líder del proyecto “robot agricultor” desarrollado en la Universidad Autónoma Chapingo y del cual obtuvo 6 diseños industriales y un modelo de utilidad (2020). Cuenta también con un modelo de utilidad de una sembradora automática de granos pequeños (2021) y un modelo de utilidad de una sembradora de granos medianos (Maíz y frijol), un modelo de utilidad de una clasificadora de granos y una peladora de tuna semiautomática. Todos resultados de tesis tanto de licenciatura como de posgrado de las cuales fungió como director.',
    descripcion4:'Es líder del proyecto institucional denominado “Desarrollo de un vehículo terrestre no tripulado para laborares agrícolas (Iniciado en 2018)” y fue responsable técnico del proyecto. “Robotización del manejo integrado de plagas y enfermedades en sistemas de agricultura protegida (2020)”. Financiado por COMECYT.',
    enlace1: "/talleristas/2",
    enlace2: "/talleristas/4",
    anterior:'Anterior',
    siguiente:'Siguiente',
  },
  {
    id:4,
    titulo:'Gathering information para la gestion de seguridad',
    imagen:'assets/DR_ADOLFO_MELÉNDEZ_RAMÍREZ.jpg',
    descripcion1:'Es profesor de tiempo completo en el Tecnológico de Estudios Superiores de Ecatepec, en la División de Ingeniería de Sistemas Computacionales.',
    descripcion2:'Además, es el líder del cuerpo académico en inteligencia artificial aplicada, colaborando dentro del Centro de Cooperación Academia-Industria del TESE.',
    descripcion3:'Debido a su destacado trabajo, ha recibido reconocimiento como un perfil deseable acreditado por PROMEP.',
    enlace1: "/talleristas/3",
    enlace2: "/talleristas/5",
    anterior:'Anterior',
    siguiente:'Siguiente',
  },
  {
    id:5,
    titulo:'Programación con Python: Nivel Básico',
    imagen:'assets/M_EN A.D.N. JUAN MANUEL STEIN CARRILLO.png',
    descripcion1:'Es ingeniero en sistemas computacionales, Egresado del Tecnológico de Estudios Superiores de Ecatepec, estudió dos maestrías, la primera en Ingeniería en Sistemas Computacionales, y la segunda en Administración y Desarrollo de Negocios con doble titulación por parte de la Universidad del Valle de Toluca (México) y la Universidad Politécnica de Cataluña (España).',
    descripcion2:'Realiza actividades de profesor investigador en distintas áreas como son: Inteligencia Artificial, Redes Neuronales Artificiales e Interacción Humano-Computadora, entre otras. Cabe mencionar que actualmente he desarrollado proyectos con Inteligencia Artificial y Redes neuronales integradas en placas embebidas, participando en convocatorias del TecNM, COMECYT y CONAHCYT.',
    enlace1: "/talleristas/4",
    enlace2: "/talleristas/6",
    anterior:'Anterior',
    siguiente:'Siguiente',
  },
  {
    id:6,
    titulo:'Análisis Forense con Kali Linux',
    imagen:'assets/Dr. EMMANUEL TONATIHU_JUAREZ_VELAZQUEZ.jpeg',
    descripcion1:'El Dr. Emmanuel Tonatihu Juárez Velázquez, es Ingeniero en Electrónica y Comunicaciones, Maestro en Ingeniería en Sistemas Computacionales y Doctor en Comunicaciones y Electrónica.',
    descripcion2:'Actualmente se desempeña como profesor investigador y profesor de posgrado en diferentes instituciones educativas',
    descripcion3:'Entre sus principales áreas de de desarrollo se encuentran las redes de computadoras, los sistemas operativos, los sistemas embebidos, la seguridad informática, y la inteligencia artificial.',
    enlace1: "/talleristas/5",
    enlace2: "/talleristas/7",
    anterior:'Anterior',
    siguiente:'Siguiente',
  },
  {
    id:7,
    titulo:'Introducción a la programación con kotlin',
    imagen:'assets/L.I. JOSÉ ALFREDO JIMÉNEZ MEZA.jpg',
    descripcion1:'Licenciado en Informática con más de 25 años de experiencia docente en el TecNM campus Zitácuaro.',
    descripcion2:'Candidato a Maestro en Ciencias Computacionales. Especializado en desarrollo de software para aplicaciones desktop, tecnologías móviles y tecnologías web. Certificaciones técnicas en Fundamentos de Programación, Java y Android.',
    enlace1: "/talleristas/6",
    enlace2: "/talleristas/8",
    anterior:'Anterior',
    siguiente:'Siguiente',
  },
  {
    id:8,
    titulo:'Análisis de Clustering',
    imagen:'assets/DR. FRANCISCO JACOB ÁVILA CAMACHO.jpg',
    descripcion1:'Ingeniero en Electrónica y Computación, con Maestría en Ingeniería en Sistemas Computacionales, Maestría en Ciencias en Administración de Negocios y Doctorado en Sistemas Computacionales.',
    descripcion2:'Se ha desempeñado en las áreas de desarrollo de software y soluciones tecnológicas, cuenta con más de 18 años de experiencia docente e investigación en las áreas de inteligencia artificial, reconocimiento de patrones, internet de las cosas, diseño de bases de datos, programación y desarrollo web.',
    descripcion3:'Actualmente es también Coordinador del Centro de Cooperación Academia Industria del TESE.',
    enlace1: "/talleristas/7",
    enlace2: "/talleristas/9",
    anterior:'Anterior',
    siguiente:'Siguiente',
  },
  {
    id:9,
    titulo:'Node.Js y Cohere: Sentiment Analysis',
    imagen:'assets/ING_LUIS_FERNANDO_FERNANDEZ_CRUZ.jpg',
    descripcion1:'Tengo experiencia en tecnologías de la información, con enfoque en desarrollo de front-end. Soy el tipo de persona que aprovecha cada oportunidad para aprender algo nuevo.',
    descripcion2:'Por eso disfruto de los desafíos. Me encanta trabajar y colaborar con gente diferente. En Uber & Cornershop se trabajó con React y otras bibliotecas o metodologías como Jest, Enzyme, Sass, BEM, Mock Service Worker, etc.',
    descripcion3:'Actualmente estoy trabajando para la empresa Badak en actividades como cambio cultural, programas de capacitación, charlas tecnológicas. Disfruto codificando, así que sigo programando y revisando código.',
    enlace1: "/talleristas/8",
    enlace2: "/talleristas",
    anterior:'Anterior',
    siguiente:'Ir a la página de Talleristas',
  },
  
]
  constructor() { }
  gedInformacion(){
    return this.informacion;
}
  gedinformacionid(id:number){
    //let i=parseInt(id);
    return this.informacion[id];
  }
}