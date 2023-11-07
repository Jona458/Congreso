import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {
  informacion=[
    {
      id:1,
      escuela:'TECNOLÓGICO NACIONAL DE MÉXICO',
      imagen:'assets/tecn.png',
      descripcion1:'Se caracteriza por tener una presencia activa tanto en las áreas de negocio como de innovación tecnológica por parte de sus ingenierías. Tiene una de las mejores escuelas de negocios en México y fue la universidad mejor posicionada del país en el año 2020.Además, es una de las 45 universidades en el mundo nombradas con 5 QS Stars.',
      descripcion2:'Se destaca por ser la universidad privada con más patentes registradas en todo el país, gracias a su investigación destinada principalmente a biotecnología, salud, sector automotor, alimentos e industria manufacturera.',
      descripcion3:'Fue el primer instituto de educación superior de Iberoamérica en conectarse a la red de BITNET en 1986 y la primera a la red de internet en 1989,​ además de haber creado el organismo NIC México, encargado de las primeras gestiones de conexión a internet en el país y de la administración y creación de los subdominios (o códigos territoriales) MX; es uno de los pioneros principales de las tecnologías de la información y la comunicación actuales en Iberoamérica y en México.',
      enlace1: "/instituciones/",
      enlace2: "/instituciones/2",
      enlace3: "https://www.tecnm.mx/",
      anterior:'Ir a la página de Instituciones',
      siguiente:'Siguiente',
    },
    {
      id:2, 
      escuela:'TECNOLOGICO DE ESTUDIOS SUPERIORES DE ECATEPEC',
      imagen:'assets/tese.jpg',
      descripcion1:'El Tecnológico de Estudios Superiores de Ecatepec se creó en 1990 por Decreto de la Legislatura del Estado, como Organismo Descentralizado del Estado de México con personalidad jurídica y patrimonio propio, Opera mediante el financiamiento de los Gobiernos Federal y Estatal, así como por la generación de ingresos propios es el primer Tecnológico creado con carácter Descentralizado en el país, actualmente oferta 11 programas educativos de nivel licenciatura, dos son de reciente creación, el programa de Ingeniería en Gestión Empresarial y el de Ingeniería Aeronáutica, todos los demás están reconocidos por su calidad por COPAES, además oferta 6 programas de Maestría, tres en la categoría de investigación y tres con orientación profesional, el programa de Maestría en ciencias en Ingeniería Bioquímica está reconocido por el CONACyT por su calidad, pertenece al PNPC.',
      descripcion2:'Actualmente se atiende una matrícula de 6, 764 estudiantes de licenciatura y posgrado, la cual es atendida por 351 docentes, 147 de tiempo completo, de los cuales 28 se reconocen como perfil deseable y 10 tienen reconocimiento CONACYT por pertenecer al S.N.I.',
      descripcion3:'En sus instalaciones se forman los profesionales que requieren los sectores productivo y de servicios, fortaleciendo esta gran labor con la acreditación externa de los programas educativos que se imparten así como las Certificación en Calidad ISO9001:2008 así como avances dentro de la norma ISO14000 enfocada a los aspectos ambientales.',
      enlace1: "/instituciones/1",
      enlace2: "/instituciones/3",
      anterior:'Anterior',
      siguiente:'Siguiente',
    },
    {
      id:3,
      escuela:'BADAK - INNOVACIÓN Y DESARROLLO',
      imagen:'assets/badak1.png',
      descripcion1:'Somos una consultoría de software enfocada en ayudar a nuestros clientes a transformar sus negocios a través del uso y adopción de tecnologías que les permitan no sólo automatizar sus procesos de negocio sino a alcanzar la excelencia operativa.',
      descripcion2:'Utilizamos nuestra amplia experiencia en el desarrollo de software para asistir a nuestros clientes en la creación de equipos de trabajo altamente efectivos, que les faciliten la adopción tecnologías modernas y metodologías ágiles para lograr sus objetivos en tiempo y presupuesto.',
      descripcion3:'La gama de productos y servicios de TI y software que Badak ofrece van desde la implementación de CRM, soluciones CX, computación en la nube, arquitecturas híbridas, big data, aplicaciones web y móviles de gran escala, hasta la creación de modelos de aprendizaje automático y soluciones de inteligencia artificial.',
      enlace1: "/instituciones/2",
      enlace2: "/instituciones/4",
      anterior:'Anterior',
      siguiente:'Siguiente',
    },
    {
      id:4,
      escuela:'INSTITUTO TECNOLÓGICO Y DE ESTUDIOS SUPERIORES DE MONTERREY',
      imagen:'assets/tecmonterrey.png',
      descripcion1:'El Tecnológico de Monterrey fue fundado en 1943 gracias a la visión de don Eugenio Garza Sada y de un grupo de empresarios, quienes constituyeron una asociación civil denominada Enseñanza e Investigación Superior, A. C.',
      descripcion2:'El Tec es una institución de carácter privado, sin fines de lucro, independiente y ajena a partidarismos políticos y religiosos. La labor del Tec de Monterrey y de todos sus campus es apoyada por asociaciones civiles, integradas por un numeroso grupo de destacados líderes de todo el país comprometido con la calidad de la educación superior.',
      descripcion3:'Cada año, los consejeros de estas asociaciones civiles se reúnen para establecer las metas que deben orientar las grandes decisiones, dirigidas a que el Tecnológico de Monterrey cumpla con su objetivo de convertirse en motor de desarrollo de las comunidades y del país.',
      descripcion4:'El Tec de Monterrey cuenta con el apoyo de la comunidad nacional, que participa en los sorteos que la propia institución organiza para ampliar el programa de becas y la inversión en infraestructura. A 80 años de la fundación del Tec de Monterrey, estos son algunos de los principales acontecimientos históricos que distinguen a nuestra Institución.',
      enlace1: "/instituciones/3",
      enlace2: "/instituciones/5",
      anterior:'Anterior',
      siguiente:'Siguiente',
    },
    {
      id:5,
      escuela:'INSTITUTO TECNOLÓGICO DE ZITÁCUARO',
      imagen:'assets/zita.png',
      descripcion1:'El Instituto Tecnológico de Zitácuaro (ITZ) inició formalmente sus actividades el día 6 de febrero de 1991 con una matrícula de 106 estudiantes inscritos en las dos carreras que se ofrecieron inicialmente: Ingeniería Industrial y Licenciatura en Informática.',
      descripcion2:'La fundación del ITZ fue la culminación de los esfuerzos de la comunidad zitacuarense por dotar a sus jóvenes de una institución de estudios superiores. Estos esfuerzos se iniciaron cinco años antes, cuando varios egresados del Instituto Politécnico Nacional gestionaron ante instancias locales y federales la posibilidad de dotar a la región de un Instituto Tecnológico.',
      descripcion3:'Estas gestiones se cristalizaron en 1988 cuando el entonces Presidente de la República Mexicana , Carlos Salinas de Gortari, visitó la Heroica Ciudad de Zitácuaro y autorizó la donación de la ex Hacienda de Manzanillos para que ahí se erigiera el Instituto Tecnológico.',
      descripcion4:'En 1992 se abrió una carrera más la de Licenciado en Administración y en 1995 egresaron los primeros 58 profesionistas formados totalmente por el ITZ. En 1999, se ofrecieron a los jóvenes zitacuarenses dos carrera más, de gran actualidad, la de Ingeniería en Sistemas Computacionales y la de Contaduría.',
      enlace1: "/instituciones/4",
      enlace2: "/instituciones/6",
      anterior:'Anterior',
      siguiente:'Siguiente',
    },
    {
      id:6,
      escuela:'INSTITUTO POLITÉCNICO NACIONAL',
      imagen:'assets/ipn logo1.png',
      descripcion1:'El Instituto Politécnico Nacional (IPN), popularmente conocido como el Politécnico o el Poli, es una institución pública mexicana de investigación y educación en niveles medio superior, superior y posgrado de las más antiguas de México. Fue fundada en la Ciudad de México en 1936, durante el gobierno del presidente Lázaro Cárdenas del Río.',
      descripcion2:'Creada para consolidar, a través de la educación, la Independencia Económica, Científica, Tecnológica, Cultural y Política para alcanzar el progreso social de la Nación, de acuerdo con los objetivos Históricos de la Revolución Mexicana, contenidos en la Constitución Política de los Estados Unidos Mexicanos.',
      descripcion3:'Esta casa de estudios se creó siguiendo los ideales revolucionarios de reconstrucción, desarrollo industrial y económico, con el fin de ofrecer educación profesional sobre todo a las clases menos favorecidas.15​ Con los años, se ha posicionado como una de las mejores universidades del país.',
      descripcion4:'El Instituto Politécnico Nacional es considerada una de las instituciones educativas más importantes de México y de América Latina por su nivel académico, y su matrícula tiene un total de 187,9992​ alumnos inscritos en sus 293 programas educativos, impartidos en sus 82 unidades académicas. La calificación promedio requerida es de 7.0 a 10.0. También es una de las principales instituciones mexicanas en la formación de técnicos y profesionales en los campos de la administración, ciencia, ingeniería y nuevas tecnologías.',
      enlace1: "/instituciones/5",
      enlace2: "/instituciones/7",
      anterior:'Anterior',
      siguiente:'Siguiente',
    },
    {
      id:7,
      escuela:'TECNOLÓGICO DE ESTUDIOS SUPERIORES DE COACALCO',
      imagen:'assets/tesco.webp',
      descripcion1:'El TESCo fue creado el 4 de Septiembre de 1996, como Organismo Público Descentralizado de Carácter Estatal, con Personalidad Jurídica y Patrimonio Propios; con objeto de formar profesionales e investigadores aptos para la aplicación y generación de conocimientos, con capacidad crítica y analítica en la solución de problemas, con sentido innovador para incorporar los avances científicos y tecnológicos al ejercicio responsable de la profesión, de acuerdo a los requerimientos del entorno, el Estado y el País.',
      descripcion2:'El Tecnológico de Estudios Superiores de Coacalco forma parte del Sistema Nacional de Institutos Tecnológicos, SNIT, que está constituido por 131 Institutos Tecnológicos Descentralizados, 126 Institutos Tecnológicos Federales y seis Centros de Investigación, que suman un total de 263 instituciones, en las que se atiende a una población escolar de 491,165 estudiantes en Licenciatura y Posgrado.',
      descripcion3:'El TESCo se sitúa como uno de los Tecnológicos más equipados al contar con 30 Talleres y Laboratorios, además de cuatro Edificios de Aulas, dos Unidades Académicas de Talleres y Laboratorios, Unidad de Estudios de Posgrado e Investigación, Centro de Información y Documentación, Auditorio, Cafetería, Edificio de Control Escolar, dos Explanadas, dos Estacionamientos, Campo de Fútbol, Áreas Deportivas y Áreas Verdes, Biblioteca Digital e Incubadora de Empresas.',
      descripcion4:'El TESCo ha logrado niveles de calidad importantes en sus programas educativos; por ello, la Secretaría de Educación Pública le ha otorgado el Reconocimiento de “Excelencia Académica”, por mantener acreditados el 100% de sus programas susceptibles de acreditar.',
      enlace1: "/instituciones/6",
      enlace2: "/instituciones/8",
      anterior:'Anterior',
      siguiente:'Siguiente',
    },
    {
      id:8,
      escuela:'TECNOLÓGICO DE ESTUDIOS SUPERIORES DE CHIMALHUACÁN',
      imagen:'assets/teschi1.png',
      descripcion1:'El origen del Tecnológico de Estudios Superiores de Chimalhuacán (TESChi) se inscribe en el Programa de Desarrollo de la Educación Media Superior y Superior del Estado de México, cuyos objetivos destaca ampliar las oportunidades educativas de nivel superior en puntos geográficos reconocidos como estratégicos.',
      descripcion2:'En tal virtud y como resultado de un análisis federal, estatal y municipal de la oferta y demanda de servicios educativos, de las características económicas, sociales, de mercado laboral, culturales y demográficas, entre otras, se identificó como prioritaria la región oriente del Estado de México.',
      descripcion3:'Con el TESChi, el Estado de México incursiona en modelos educativos de vanguardia, congruentes con las necesidades sociales y productivas que contribuyan al desarrollo económico y social de la comunidad, formando profesionistas con alto nivel de competitividad; decisivo para el impulso educativo en la entidad y con una oferta educativa de excelencia.',
      descripcion4:'El TESChi inició actividades académicas el 16 de noviembre de 2000, en instalaciones habilitadas dentro del Colegio de Bachilleres del Estado de México Plantel No. 3, con la oferta de dos carreras: Licenciatura en Administración e Ingeniería Industrial, con una matrícula de 90 alumnos. Para el año 2004 nuestra institución opera en sus propias instalaciones, ocupando el primer edificio; e inicia actividades en el 2005 con las carreras de Ingeniería Industrial y la Licenciatura en Administración, en la modalidad de sistema abierto.',
      enlace1: "/instituciones/7",
      enlace2: "/instituciones/9",
      anterior:'Anterior',
      siguiente:'Siguiente',
    },
    {
      id:9,
      escuela:'UNIVERSIDAD DE SAN BUENAVENTURA',
      imagen:'assets/sanbuena.png',
      descripcion1:'Nuestra institución ha concebido, a través de su historia, el saber como el desarrollo de las múltiples posibilidades de la inteligencia que posee el hombre, orientando el quehacer universitario hacia un compromiso que le permita, a través del ejercicio del saber y del cultivo de la ciencia, dignificar al hombre y contribuir a la construcción de una sociedad más justa, fraterna, digna y solidaria.',
      descripcion2:'Inició labores bajo la dirección del padre franciscano fray Diego Barroso y fue aprobada el 19 de septiembre por la Real Cédula de Fernando VI. Los estudiantes vinculados a esta iniciativa adelantaban sus estudios en el mismo Colegio Mayor, donde tenían su hospedaje hasta obtener alguno de los títulos permitidos en artes, filosofía y teología. De manera particular, el Colegio Mayor de San Buenaventura fue más abierto en la admisión de estudiantes, es decir, se formaban sacerdotes, españoles, hijos de españoles o civiles en general, siempre respondiendo a la preocupación franciscana de brindar educación a quienes no tenían todas las posibilidades para acceder a este servicio 1861 El Colegio fue clausurado',
      descripcion3:'Pese al evidente aporte de los franciscanos a la formación de las juventudes del país, el 5 de noviembre de este año fue clausurado el antiguo Colegio Mayor de San Buenaventura por orden de Tomás Cipriano de Mosquera, quien dispuso la extinción de las comunidades religiosas en todo el territorio nacional.',
      enlace1: "/instituciones/8",
      enlace2: "/instituciones",
      anterior:'Anterior',
      siguiente:'Ir a la página de Instituciones',
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
