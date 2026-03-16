export default {
  global: {
    Name: 'Ventas, comunicación y <i>merchandising</i>',
    Description:
      'Este componente formativo integra de manera articulada las dimensiones de la venta, la comunicación y el <i>merchandising</i> como ejes fundamentales del proceso comercial. Se abordan los conceptos, herramientas, estrategias y técnicas de ventas, junto con la importancia de las transacciones comerciales y los procesos de comunicación. Además, se profundiza en el <i>merchandising</i>, la exhibición de productos, las demostraciones y presentaciones en el punto de venta, reconociendo cómo estas prácticas generan impacto en el consumidor.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Proceso de ventas: conceptualización, etapas y herramientas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Herramientas clave para la gestión comercial',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Modalidades de ventas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Proceso de la venta',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Transacciones comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Documentos comerciales',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Concepto de comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Medios de comunicación',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '<i>Merchandising</i>',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Exhibición',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Presentaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Lenguaje corporal',
            hash: 't_6_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/631101_CF5_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '<i>Merchandising</i>',
      referencia:
        'Ortiz, G., C., y López, M., K. (2021). Estrategias de innovación en <i>merchandising</i> aplicadas a pymes del sector misceláneas en la localidad de Chapinero en Bogotá.',
      tipo: 'Documento',
      link: 'https://digitk.areandina.edu.co/handle/areandina/3838',
    },
    {
      tema: 'Presentaciones',
      referencia: 'Apple. (2016). Apple – september event 2016.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=NS0txu_Kzl8',
    },
    {
      tema: 'Presentaciones',
      referencia:
        'TEDx Talks. (2016). Hablando con Julis | Daniela Galindo | TEDxUniversidadPiloto.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0SjVNTAVdgs',
    },
  ],
  glosario: [
    {
      termino: 'Cabecera de góndola',
      significado:
        'extremo de una góndola o una estantería donde se colocan artículos de manera promocional (<i>visualmerchandisingmkt</i>, 2016).',
    },
    {
      termino: '<i>Display</i>',
      significado:
        'pequeños carteles independientes de cualquier material y que pueden contener publicidad sobre uno o varios artículos.',
    },
    {
      termino: 'Escaparatismo',
      significado:
        'arte de organizar y adornar un establecimiento para que resulten atrayentes al público, aplicando las técnicas de diseño y montaje de los escaparates. El escaparatismo se puede resumir en cuatro palabras: pare, mire, infórmese y compre.',
    },
    {
      termino: 'Imagen corporativa',
      significado:
        'imagen generalmente aceptada de lo que una compañía “significa”. La creación de una imagen corporativa es un ejercicio en la dirección de la percepción.',
    },
    {
      termino: 'Lineal',
      significado:
        'expositores basados en su longitud, espacio para la venta vinculado a las paredes.',
    },
    {
      termino: '<i>Merchandising</i>',
      significado:
        'su objetivo principal es llamar la atención, dirigir al cliente hacia el producto y facilitar la compra.',
    },
    {
      termino: '<i>Merchandising</i> de gestión',
      significado:
        'acción de poner un producto estratégicamente para su fácil acceso y venta. Por ello hay que ajustar y gestionar correctamente el espacio.',
    },
    {
      termino: '<i>Merchandising</i> estratégico',
      significado:
        'conjunto de técnicas basadas principalmente en la presentación, rotación y rentabilidad de un producto en el punto de venta.',
    },
    {
      termino: 'PLV',
      significado:
        'publicidad en el lugar de venta que engloba expositores, carteles, <i>displays</i> y otros elementos que sean portadores de un mensaje publicitario y estén colocados en un punto de venta. También se conoce como «POS <i>display</i>», abreviatura de la expresión en inglés <i>Point of Sale Display</i>.',
    },
    {
      termino: 'Puntos calientes',
      significado:
        'lugares dentro del establecimiento donde los clientes observan más los productos y tienen mayor actividad, esos lugares suelen ser probadores, mostradores y cajas.',
    },
    {
      termino: 'Puntos calientes naturales',
      significado:
        'son situados en las cajas, el cruce de pasillos, un claro ejemplo las zonas por donde tienen que pasar para pagar donde se logra exponer gran cantidad de artículos para generar venta por impulso.',
    },
    {
      termino: 'Puntos fríos',
      significado:
        'son aquellos que están mal situados y que el consumidor apenas visita, los clientes apenas se fijan en los productos situados en esos puntos por lo que tenemos que potenciarlo o convertirlos en puntos calientes.',
    },
    {
      termino: 'Rotación',
      significado:
        'tiempo que tarda en ser renovado el <i>stock</i> de un producto.',
    },
    {
      termino: 'Señalización',
      significado:
        'todo tipo de rotulación, textos, etiquetas, expositores utilizados en el interior de un escaparate o de un establecimiento.',
    },
    {
      termino: 'Surtido',
      significado:
        'conjunto de artículos que un establecimiento ofrece a la venta. Se refiere a la variedad de artículos presentes en la sala de ventas, no a la cantidad de un producto en concreto.',
    },
    {
      termino: 'Visual <i>merchandising</i>',
      significado:
        'parte esencial para cualquier establecimiento ya que ayuda a incrementar las ventas, mejorando la imagen y la marca ya sea por escaparates atractivos que inciten al público a contemplarlos más tiempo y hacer que entren al establecimiento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Fernández, R, M., y Pastor, J. (2007). Diccionario Below the Line. CEU.',
    },
    {
      referencia:
        'Kotler, P., Bowen, J., y Makens, J. (2008). Marketing para el turismo. Pearson Prentice Hall.',
    },
    {
      referencia: 'Mundo constructor. (2019). Visual merchandising. [Gráfico].',
    },
    {
      referencia:
        'Palomares, R. B. (2009). Merchandising, teoría, práctica estrategia. Gestión 2000.',
    },
    {
      referencia:
        'Pérez López, L. M., Pérez, F., & Cristo, Y. (2018). Aplicación del merchandising de seducción y del merchandising visual en el Palenque de los congos reales de la empresa ARTEX Sucursal Sancti Spíritus. Revista Infociencia, 22(3), 1-12.',
    },
    {
      referencia:
        'Pipe Drive. (s. f.). Presentaciones de ventas exitosas: plantillas, ejemplos e ideas.',
      link: 'https://www.pipedrive.com/es/blog/presentacion-ventas',
    },
    {
      referencia:
        'Real Academia Española. (2020). Diccionario de la lengua española.',
    },
    {
      referencia:
        'Robles, M. L. (2009). La publicidad en el punto de venta: su realidad y tendencias. Revista de Comunicación de la SEECI, (18)79-128.',
      link: 'https://www.redalyc.org/pdf/5235/523552804003.pdf',
    },
    {
      referencia: 'Seggiaro, M. (2017). Zonas y circulación. [Infografía].',
      link: 'https://www.marcelaseggiaro.com/wp-content/uploads/2017/11/6.png',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johana Gómez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paolo Andrés Cantillo Largo',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio - Regional Antioquia',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>full-stack</i> Junior',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
