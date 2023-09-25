import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  actividad=[
    {
      id:'1',
      nomAct:'Aplicaciones de sensores en Robótica',
      imagen:'assets/ING_JUAN_FRANCISCO_MELENDEZ_ELIZALDE.jpg',
      descripcion:'Mtro. Juan Francisco Meléndez Elizalde',
      escuela:"Tecnológico de Estudios Superiores de Ecatepec",
      enlace: "/aplicaciones",
  },
  {
    id:'2', 
    nomAct:'IntegrAI Nexus',
    imagen:'assets/M_EN_I_S_C_RUBÉN_RAYA_DELGADO.jpg',
    descripcion:'M. en I.S.C. Rubén Raya Delgado NDS Cognitive Labs',
    escuela:"Tecnológico de Estudios Superiores de Ecatepec",
    enlace: "/integrai",
  },
  {
    id:'3',
    nomAct:'Introducción a ROS y OPENCV',
    imagen:'assets/DR_NOÉ_VELÁZQUEZ_LÓPEZ.jpg',
    descripcion:'Dr. Noé Velázquez López',
    escuela:"Universidad Autónoma Chapingo",
    enlace: "/rosypencv",
  },
  {
    id:'4',
    nomAct:'Gathering information',
    imagen:'assets/DR_ADOLFO_MELÉNDEZ_RAMÍREZ.jpg',
    descripcion:'Dr. Adolfo Meléndez Ramírez',
    escuela:"Tecnológico de Estudios Superiores de Ecatepec",
    enlace: "/gathering",
  },
  {
    id:'5',
    nomAct:'Programación con Python: Nivel Básico',
    imagen:'assets/M_EN A.D.N. JUAN MANUEL STEIN CARRILLO.png',
    descripcion:'M. en A.D.N. Juan Manuel Stein Carrillo',
    escuela:"Tecnológico de Estudios Superiores de Ecatepec",
    enlace: "/python",
  },
  {
    id:'6',
    nomAct:'Análisis Forense con Kali Linux',
    imagen:'assets/Dr. EMMANUEL TONATIHU_JUAREZ_VELAZQUEZ.jpeg',
    descripcion:'Dr. Emmanuel Tonatihu Juárez Velázquez',
    escuela:"Ingeniero en Electrónica y Comunicaciones",
    enlace: "/kali",
  },
  {
    id:'7',
    nomAct:'Introducción a la programación con kotlin',
    imagen:'assets/L.I. JOSÉ ALFREDO JIMÉNEZ MEZA.jpg',
    descripcion:'L.I. José Alfredo Jiménez Meza',
    escuela:"Instituto Tecnológico de Zitácuaro",
    enlace: "/kotlin",
  },
  {
    id:'8',
    nomAct:'Análisis de Clustering',
    imagen:'assets/DR. FRANCISCO JACOB ÁVILA CAMACHO.jpg',
    descripcion:'Dr. Francisco Jacob Ávila Camacho',
    escuela:"Tecnológico de Estudios Superiores de Ecatepec",
    enlace: "/clustering",
  },
  {
    id:'9',
    nomAct:'Node.Js y Cohere: Sentiment Analysis',
    imagen:'assets/ING_LUIS_FERNANDO_FERNANDEZ_CRUZ.jpg',
    descripcion:'Ing. Luis Fernando Fernandez Cruz',
    escuela:"Badak",
    enlace: "/node",
  },
  
]
  constructor() { }
  gedActividad(){
    return this.actividad;
}
}
