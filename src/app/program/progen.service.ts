import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgenService {
  prog=[
    {
      tarj:'Jueves 28 de Septiembre 2023.',
      id: '1',
      titulo:'INAGURACION',
      foto:'/assets/maest.jpg',
      horario:'De 10:00 am a 10:30 am',
      descrip:'Sera impartida por el personal administrativo del T.E.S.E. el cual está conformado por educadores, directivos docentes y administradores escolares,deberan participar en el diseño, ejecución y evaluación del Proyecto Educativo Institucional.'
    },
    {
      id: '2',
      titulo:'CONFERENCIA MAGISTRAL UNA INTRODUCCIÓN A LOS ROBOTS DE SERVICIO DE PROPÓSITO GENERAL.',
      foto:'/assets/robotica.jpg',
      horario:'De 10:45 am a 11:35 am',
      descrip:'Impartida por el DR. LUIS ANGEL CONTRERAS TOLEDO.'
    }
    ,
    {
      id: '3',
      titulo:'TALLER-APLICACIONES DE SENSORES EN ROBÓTICA.',
      foto:'/assets/sensoresrob.jpg',
      horario:' De 12:00 pm a 6:00 pm',
      descrip:'Impartido por el MTRO. JUAN FRANCISCO MELÉNDEZ ELIZALDE.'
    },
    {
      id: '4',
      titulo:'TALLER-INTEGRAL NEXUS: DESENCADENANDO LA INNOVACIÓN CON IA GENERATIVA.',
      foto:'/assets/nexus.jpg',
      horario:'  De 12:00 pm a 6:00 pm',
      descrip:'Impartido por el M. EN I.S.C. RUBÉN RAYA DELGADO.'
    },
    {
      id: '5',
      titulo:'TALLER-INTRODUCCIÓN A ROS Y OPENCV.',
      foto:'/assets/introduccion.jpg',
      horario:'  De 12:00 pm a 6:00 pm',
      descrip:'Impartido por el DR. NOÉ VELÁZQUEZ LÓPEZ.'
    },
    {
      id: '6',
      titulo:'TALLER-GATHERING INFORMATION',
      foto:'assets/gathering.jpg',
      horario:'  De 12:00 pm a 6:00 pm',
      descrip:'Impartido por el DR. ADOLFO MELÉNDEZ RAMÍREZ.'
    },
    {
      id: '7',
      titulo:'TALLER-INTRODUCCIÓN A LA PROGRAMACIÓN CON KOTLIN',
      foto:'/assets/kotlin.jpg',
      horario:'  De 12:00 pm a 6:00 pm',
      descrip:'Impartido por el L.I. JOSÉ ALFREDO JIMÉNEZ MEZA.'
    },
    {
      id: '8',
      titulo:'TALLER ANÁLISIS DE CLUSTERING PARA CLASIFICACIÓN DE CLIENTES',
      foto:'/assets/clustering.jpg',
      horario:'  De 12:00 pm a 6:00 pm',
      descrip:'Impartido por el DR. FRANCISCO JACOB ÁVILA CAMACHO.'
    },
    {
      id: '9',
      titulo:'TALLER HERRAMIENTAS DE CYBERSEGURIDAD CON KALI LINUX',
      foto:'/assets/kali.jpg',
      horario:'  De 12:00 pm a 6:00 pm',
      descrip:'Impartido por el DR. EMMANUEL TONATIHU JUÁREZ VELÁZQUEZ.'
    },
    {
      id: '10',
      titulo:'CONFERENCIA MAGISTRAL-LA CIENCIA DE DATOS UTILIZA Y APROVECHA LA INTELIGENCIA ARTIFICIAL',
      foto:'/assets/ai.jpg',
      horario:'De 11:50 am a 12:40 pm',
      descrip:'Impartida por el DR. ADOLFO GUZMÁN ARENAS.'
    },
    {
      id: '11',
      titulo:'TALLER TURING, CHATGPT Y LAS PROMESAS DE LA INTELIGENCIA ARTIFICIAL',
      foto:'/assets/chatgpt.jpg',
      horario:'De 01:15 pm a 02:05 pm',
      descrip:'Impartido por el DR. LUIS ALBERTO PINEDA CORTÉS.'
    },
    {
      id: '12',
      tarjd:'VIERNES 29 DE SEPTIEMBRE 2023',
      titulo:'CONFERENCIA MAGISTRAL DONDE ESTÁN LOS DATOS PARA TRABAJAR PROCESOS DE ANALÍTICA.',
      foto:'/assets/analitica.jpg',
      horario:'De 09:00 am a 09:50 am',
      descrip:'Impartida por la DRA. ALEJANDRA CATHERINE MONTAÑA ACEVEDO.'
    },
    {
      id: '13',
      titulo:'PRESENTACIÓN DE PROYECTOS',
      foto:'/assets/proyects.jpg',
      horario:'De 04:00 pm a 06:00 pm',
      descrip:'Impartida por los estudiantes de nivel superior y posgrado, los cuales daran a conocer los desarrollos de sus trabajos de tesis, residencias profesionales e investigación.'
    },
    {
      id: '14',
      titulo:'TALLER IA ATAQUE DE LOS ENDPOINTS',
      foto:'/assets/endpoint.webp',
      horario:'De 11:10 am a 12:00 pm',
      descrip:'Impartido por el MSC. JOHNN EDUARD CRIOLLO SALAMANCA.'
    },
    {
      id: '15',
      titulo:'CONCURSO DE PROGRAMACIÓN DE ALGORITMOS APLICADOS A LA CIBERSEGURIDAD',
      foto:'/assets/cyber.jpg',
      horario:'De 10:00 am a 02:00 pm',
      descrip:'Impartido por los estudiantes de cada una de las diferentes instituciones participantes.'
    },
    {
      id: '16',
      titulo:'CONFERENCIA SEGURIDAD INFORMÁTICA: LA IMPORTANCIA EN LAS EMPRESAS',
      foto:'/assets/ciberseg.jpg',
      horario:'De 03:00 pm a 03:50 pm',
      descrip:'Impartida por el ING. EDUARDO ANTONIO RODRÍGUEZ ROSADO.'
    },
    {
      id: '17',
      titulo:'DESMITIFICANDO LA INTELIGENCIA ARTIFICIAL: SEPARANDO LA REALIDAD DE LA FICCIÓN',
      foto:'/assets/desmi.jpg',
      horario:'De 12:30 pm a 01:30 pm',
      descrip:'Impartida por el ING. HUGO GARCÍA FLORES.'
    },
    {
      id: '18',
      titulo:'EXPOSICIÓN DE POSTERS',
      foto:'/assets/ins.jpeg',
      horario:'De 04:00 pm a 05:30 pm',
      descrip:'Impartida por los estudiantes que tengan la oportunidad de comunicar a la comunidad la forma en que desarrollan proyectos que dan solución a problemas planeados en sus ámbitos de convivencia.'
    },
    {
      id: '19',
      titulo:'EVALUACIÓN DE PONENCIAS',
      foto:'/assets/eval.jpg',
      horario:'De 06:00 pm a 06:30 pm',
      descrip:'Impartida por los estudiantes participantes y el personal institucional.'
    },
    {
      id: '20',
      titulo:'CONFERENCIA HUMANOS EN EL LAZO: XR, ROBÓTICA E IA.',
      foto:'/assets/xr.jpg',
      horario:'De 09:00 am a 09:50 am',
      descrip:'Impartida por el DR. WALTERIO MAYOL CUEVAS.'
    },
    {
      id: '21',
      titulo:'TORNEO DE ROBOTS',
      foto:'/assets/concurso.jpg',
      horario:'De 10:00 am a 01:00 pm',
      descrip:'Impartido por el personal administrativo y esta conformado por educadores, directivos docentes y administradores escolares, para su evaluación.'
    },
    {
      id: '22',
      titulo:'PREMIACIÓN Y CLAUSURA',
      foto:'/assets/prem.png',
      horario:'De 01:00 pm a 02:00 pm',
      descrip:'Impartida por personal administrativo y personal docente de las instituciones.'
    },

  ]

  constructor() { }
  gedProg(){
    return this.prog;
}
}
