<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Proceso de ventas: conceptualización, etapas y herramientas
      
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-4.d-none.d-lg-block.p-cus-1
          img(src='@/assets/curso/temas/t1/1.png', alt='')
        .col-sm-12.col-lg-8.bg-color-1.justify-content-center.align-items-center.d-flex
          .p-4
            p.mb-0 La venta es un proceso estratégico, comunicativo y relacional mediante el cual una persona o empresa ofrece un producto o servicio a un cliente con el propósito de satisfacer una necesidad o resolver un problema, a cambio de una contraprestación económica. Desde una perspectiva académica, la venta no se limita a la simple transacción, sino que constituye un acto de interacción social y económica, basado en la identificación de necesidades, la generación de confianza y la creación de valor.

      .titulo-cus-1.mb-4(data-aos="fade-right")
        h3.mb-0 Etapas de la venta
      p.mb-5 Aunque existen diferentes modelos, la mayoría coinciden en que el proceso de venta se desarrolla en varias etapas secuenciales e interdependientes:
    

      SlyderF.circl-arrow.mb-5(columnas="col-md-6 col-lg-6 col-xl-4")(data-aos="fade-right")
        .tarjeta.bg-color-1.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t1/2.svg' alt='')
          .titulo-cus-2.px-3.py-1.mb-3.m-auto
            h5.text-center.mb-0 Prospección
          p.text-center.mb-0 Búsqueda e identificación de clientes potenciales (conocidos como prospectos). En esta fase se filtran aquellos que tienen interés, capacidad de compra y necesidad del producto o servicio.

        .tarjeta.bg-color-1.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t1/3.svg' alt='')
          .titulo-cus-2.px-3.py-1.mb-3.m-auto
            h5.text-center.mb-0 Preparación y planificación
          p.text-center.mb-0 El vendedor estudia al cliente, su sector, contexto y necesidades para personalizar la propuesta. Incluye la recopilación de información sobre el producto, la competencia y posibles objeciones.

        .tarjeta.bg-color-1.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t1/4.svg' alt='')
          .titulo-cus-2.px-3.py-1.mb-3.m-auto
            h5.text-center.mb-0 Acercamiento o contacto inicial
          p.text-center.mb-0 Primer vínculo entre vendedor y cliente. Se establece una comunicación cordial y profesional para captar la atención y generar interés.

        .tarjeta.bg-color-1.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t1/5.svg' alt='')
          .titulo-cus-2.px-3.py-1.mb-3.m-auto
            h5.text-center.mb-0 Presentación y demostración
          p.text-center.mb-0 Se exponen los beneficios y características del producto o servicio. Más que hablar de atributos, se busca mostrar cómo la oferta soluciona necesidades específicas del cliente.
        
        .tarjeta.bg-color-1.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t1/6.svg' alt='')
          .titulo-cus-2.px-3.py-1.mb-3.m-auto
            h5.text-center.mb-0 Manejo de objeciones
          p.text-center.mb-0 El cliente plantea dudas, inquietudes o resistencias. El vendedor debe escuchar, comprender y responder con argumentos sólidos, reforzando la confianza.

        .tarjeta.bg-color-1.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t1/7.svg' alt='')
          .titulo-cus-2.px-3.py-1.mb-3.m-auto
            h5.text-center.mb-0 Cierre de la venta
          p.text-center.mb-0 Momento en que el cliente toma la decisión de compra. Puede lograrse mediante técnicas de cierre (alternativa, prueba, incentivo, urgencia, etc.) que facilitan el acuerdo final.

        .tarjeta.bg-color-1.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t1/8.svg' alt='')
          .titulo-cus-2.px-3.py-1.mb-3.m-auto
            h5.text-center.mb-0 Posventa o fidelización
          p.text-center.mb-0 Acompañamiento posterior a la compra para garantizar la satisfacción, resolver inconvenientes y promover la lealtad del cliente. Es fundamental para generar repetición y recomendaciones.
      
      
      .titulo-cus-1.mb-4(data-aos="fade-right")
        h3.mb-0 Herramientas de ventas
      p.mb-5(data-aos="fade-right") Las herramientas de ventas se entienden como recursos, técnicas y tecnologías que apoyan el proceso comercial. Se pueden clasificar en:
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-7
          TabsA.color-acento-botones
            .tarjeta.bg-color-2.p-4(titulo="Tradicionales")
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-check-circle.icon-list
                  p.mb-0 Catálogos y brochures.
                li.d-flex
                  i.fas.fa-check-circle.icon-list
                  p.mb-0 Muestras físicas y demostraciones presenciales.
                li.d-flex
                  i.fas.fa-check-circle.icon-list
                  p.mb-0 Scripts de ventas y guiones telefónicos.
            .tarjeta.bg-color-2.p-4(titulo="Digitales")
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-check-circle.icon-list
                  p.mb-0 CRM (#[i Customer Relationship Management]) para gestionar clientes y relaciones.
                li.d-flex
                  i.fas.fa-check-circle.icon-list
                  p.mb-0  Plataformas de comercio electrónico.
                li.d-flex
                  i.fas.fa-check-circle.icon-list
                  p.mb-0 Redes sociales (#[i Social Selling]) y campañas de marketing digital.
                li.d-flex
                  i.fas.fa-check-circle.icon-list
                  p.mb-0 Videollamadas y presentaciones virtuales.
            .tarjeta.bg-color-2.p-4(titulo="Analíticas y de apoyo")
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-check-circle.icon-list
                  p.mb-0 Herramientas de inteligencia de negocios (#[i business intelligence]).
                li.d-flex
                  i.fas.fa-check-circle.icon-list
                  p.mb-0 Estudios de mercado y encuestas.
                li.d-flex
                  i.fas.fa-check-circle.icon-list
                  p.mb-0 #[i Dashboards] con métricas de ventas y comportamiento del cliente.
            .tarjeta.bg-color-2.p-4(titulo="De fidelización")
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-check-circle.icon-list
                  p.mb-0 Programas de lealtad.
                li.d-flex
                  i.fas.fa-check-circle.icon-list
                  p.mb-0 Envío de newsletters personalizadas.
                li.d-flex
                  i.fas.fa-check-circle.icon-list
                  p.mb-0 Seguimiento automatizado con herramientas de email marketing.

        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/9.png', alt='')

      


      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Herramientas clave para la gestión comercial
      p.mb-5(data-aos="fade-right") La gestión comercial requiere del dominio de diversas herramientas que permiten potenciar la efectividad del proceso de venta y garantizar relaciones sostenibles con los clientes. 
      .bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/10.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 Las herramientas comprenden el proceso de la venta, entendido como la secuencia ordenada desde la prospección hasta la posventa; las estrategias de ventas, que orientan la planificación y el logro de objetivos mediante la segmentación y la fidelización; y las técnicas de la venta, que aportan métodos como SPIN selling para guiar la interacción con el cliente. 
          p.mb-0 A su vez, la venta consultiva enfatiza la identificación de necesidades y la propuesta de soluciones personalizadas, mientras que las clínicas de venta constituyen espacios de práctica y entrenamiento para fortalecer habilidades de negociación y comunicación.

      .tarjeta.bg-fondo-1.p-4.mb-5(data-aos="fade-right")
        SlyderA(tipo="b")
          .row.justify-content-center.mb-0.p-4
            .col-sm-12.col-lg-8
                h4.mb-4 Proceso de la venta
                p.mb-0 Se compone de una serie de etapas que permiten estructurar la relación con el cliente de manera ordenada y eficiente. Inicia con la prospección, donde se identifican potenciales compradores; continúa con la presentación y demostración del producto o servicio, enfocada en despertar el interés; avanza hacia la negociación y el cierre, donde se concretan acuerdos; y culmina con la posventa, que busca mantener la satisfacción del cliente y fomentar su fidelización. Este proceso no solo busca una transacción puntual, sino la construcción de una relación de confianza a largo plazo.
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/11.svg', alt='')
          .row.justify-content-center.mb-0.p-4
            .col-sm-12.col-lg-8
              h4.mb-4 Estrategias de ventas
              p.mb-0 Constituyen los planes diseñados para alcanzar objetivos comerciales específicos. Incluyen la segmentación de mercados para identificar públicos objetivos, la definición de propuestas de valor diferenciadas que marquen ventaja competitiva, y la implementación de tácticas de fidelización para mantener clientes satisfechos y recurrentes. Una buena estrategia combina análisis del mercado, comprensión del comportamiento del consumidor y uso de recursos adecuados para generar posicionamiento sostenible.
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/12.png', alt='')

          .row.justify-content-center.mb-0.p-4
            .col-sm-12.col-lg-8
              h4.mb-4 Técnicas de la venta
              p.mb-0 Se refieren a los métodos aplicados para orientar la interacción con el cliente de forma efectiva. Entre ellas, destaca el modelo SPIN selling, que emplea preguntas estratégicas en cuatro fases. Estas técnicas permiten estructurar el diálogo de manera consultiva, aumentando las posibilidades de éxito en ventas complejas.
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/13.png', alt='')

          .row.justify-content-center.mb-0.p-4
            .col-sm-12.col-lg-8
              h4.mb-4 Venta consultiva
              p.mb-0 Es un enfoque moderno en el que el vendedor actúa como asesor, interesado en comprender profundamente las necesidades del cliente. Más que ofrecer un producto, se busca diseñar una solución personalizada que resuelva problemas concretos o mejore la situación del comprador. Este tipo de venta requiere habilidades de escucha activa, empatía, análisis y comunicación, convirtiendo al cliente en el centro del proceso.
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/14.png', alt='')

          .row.justify-content-center.mb-0.p-4
            .col-sm-12.col-lg-8
              h4.mb-4 Clínicas de venta
              p.mb-0 Son espacios de formación práctica que simulan situaciones reales de interacción comercial. En ellas, los participantes desarrollan y perfeccionan competencias como la persuasión, la comunicación efectiva, la argumentación de beneficios y la gestión de objeciones. Al replicar escenarios similares a los que enfrentan los vendedores en su día a día, estas clínicas se convierten en una herramienta didáctica clave para consolidar aprendizajes y aumentar la confianza del equipo comercial.
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/15.png', alt='')

          .row.justify-content-center.mb-0.p-4
            .col-sm-12.col-lg-8
              h4.mb-4 Manejo de objeciones
              p.mb-0 Corresponde al conjunto de técnicas utilizadas para atender las dudas, inquietudes o resistencias que presentan los clientes durante el proceso de compra. Su adecuada gestión evita que estas barreras se conviertan en obstáculos definitivos, transformándolas en oportunidades para reforzar argumentos de valor, resolver malentendidos y afianzar la confianza del cliente. El éxito en el manejo de objeciones depende de la preparación, la escucha activa y la capacidad de responder con soluciones claras y convincentes.
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/16.png', alt='')





      .titulo-cus-1.mb-5(data-aos="fade-right")
        h3.mb-0 Modelo #[i SPIN selling]
      
      ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-right")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/t1/17.svg', alt='')
        .tarjeta.bg-color-2.p-3(x="23.5%" y="36%" numero="1")
          p.mb-0 #[b Situación:] estas preguntas buscan reunir datos, hechos e información relevante sobre la situación actual del cliente. Es fundamental indagar sobre el cliente, su negocio y sus operaciones, centrándose en su necesidad. Se deben evitar preguntas obvias y aquellas cuya respuesta ya está disponible en otras fuentes. Es importante hacer preguntas relevantes y con un propósito claro, evitando preguntar por preguntar.
        .tarjeta.bg-color-2.p-3(x="47%" y="28%" numero="2")
          p.mb-0 #[b Problema:] si la empresa no puede resolver un problema del cliente, no habrá venta posible. Identificar y abordar los problemas que se pueden solucionar permite aportar valor. Es crucial investigar cuáles son los problemas, dificultades e insatisfacciones del cliente. De esta manera, se descubrirán sus necesidades implícitas y cómo encaja la oferta de la empresa para resolverlas.

        .tarjeta.bg-color-2.p-3(x="35%" y="88%" numero="3")
          p.mb-0 #[b Implicación:] estas preguntas toman un problema del cliente y exploran sus efectos o consecuencias. Ayudan al cliente a comprender la seriedad o urgencia del problema, amplificando su importancia en su mente. Se debe evitar proyectar escenarios apocalípticos, ya que esto podría deprimir o asustar al cliente. En cuanto el cliente comprenda las implicaciones del problema, es importante pasar a la siguiente fase de preguntas evitando demoras.

        .tarjeta.bg-color-2.p-3(x="58.5%" y="74%" numero="4")
          p.mb-0 #[b Necesidad / Beneficio:]  estas preguntas muestran el valor de la solución ante los ojos del cliente. Se centran en los aspectos positivos de la solución que combaten los efectos negativos del problema, ayudando a reenfocar la atención del cliente en la solución más que en el problema. Además, permiten que sea el propio cliente quien mencione las ventajas de la solución en lugar de que lo haga el vendedor. Este tipo de preguntas también reducen las objeciones. 
      
      .titulo-sexto.color-secundario(data-aos="fade-right")
          p.mb-0 #[b Figura 1.] La función de ventas
      figure.mb-5(data-aos="fade-right")
          img(src='@/assets/curso/temas/t1/18.svg', alt='La función de ventas se divide en tomadores de órdenes, creadores de órdenes y captadores de órdenes, donde cada grupo cumple roles específicos que van desde recibir pedidos y entregarlos, hasta generar nuevas oportunidades y apoyar la gestión comercial con representantes especializados. ')
          figcaption.mb-0 Nota. Adaptada de Jobber y Lancaster (2012).
      
      p.mb-5(data-aos="fade-right") Entre los vendedores tomadores de órdenes, siguiendo a Jobber y Lancaster (2012, p. 30), se encuentran vendedores con unas características diferenciadoras como:  
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-4.mb-cus
          .tarjeta-numerada.color-secundario.p-5.hcard-1
            .tarjeta-numerada__numero
              .h2 1
            h5.text-center Tomadores de órdenes internos o vendedores de pago inmediato. 
            p.mb-0.text-center Aquellos que reciben el pago y entregan la mercancía. También aplica al telemercadeo que toma pedidos por teléfono. 
        .col-sm-12.col-lg-4.mb-cus
          .tarjeta-numerada.color-acento-contenido.p-5.hcard-1
            .tarjeta-numerada__numero
              .h2.text-white 2
            h5.text-center Personal de entregas.
            p.mb-0.text-center Son aquellos que solo realizan la entrega del producto en el domicilio.
        .col-sm-12.col-lg-4.mb-cus
          .tarjeta-numerada.color-secundario.p-5.hcard-1
            .tarjeta-numerada__numero
              .h2 3
            h5.text-center  Tomadores de órdenes externos.
            p.mb-0.text-center Aquellos vendedores que solo toman el pedido revisan los inventarios y sugieren la venta. 
      .row.justify-content-center.mb-5.align-items-center(data-aos="fade-right")
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/19.svg', alt='')
        .col-sm-12.col-lg-7
            p.mb-3 Ahora, los vendedores creadores de órdenes son, por lo general, quienes laboran en laboratorios farmacéuticos solo realizan visitas y persuaden para que se solicite a los pacientes la marca sugerida al cuerpo médico. 
            p.mb-0 Y los vendedores captadores de órdenes son los vendedores que responden por una cuota de ventas, realizan el proceso de la venta, identifican nuevos prospectos y realizan persuasión y negociación. En este grupo de vendedores, Torres (2014) señala un grupo dedicado a las ventas y que se encuentra en la línea de fuego:
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-md-12.col-lg-10
          .cajon.color-acento-contenido.p-4
            .row.justify-content-center.align-items-center
              .col-12.col-md-12.col-lg-4
                ol.lista-ol--cuadro.fa-ol
                  li 
                    .lista-ol--cuadro__vineta
                      span a
                    | Representante de ventas.
                  li 
                    .lista-ol--cuadro__vineta
                      span b
                    | Promotor de ventas.
                  li 
                    .lista-ol--cuadro__vineta
                      span c
                    | Gerente de ventas.
                  li 
                    .lista-ol--cuadro__vineta
                      span d
                    | Gerente de cuentas clave.
                  li 
                    .lista-ol--cuadro__vineta
                      span e
                    | Gerente de categoría.
                  li 
                    .lista-ol--cuadro__vineta
                      span f
                    | Entrenado en ventas.
              .col-12.col-md-12.col-lg-4
                ol.lista-ol--cuadro.fa-ol
                  li 
                    .lista-ol--cuadro__vineta
                      span g
                    | Gerente de distrito.
                  li 
                    .lista-ol--cuadro__vineta
                      span h
                    | Gerente nacional de ventas.
                  li 
                    .lista-ol--cuadro__vineta
                      span i
                    | Ingeniero de ventas.
                  li 
                    .lista-ol--cuadro__vineta
                      span j
                    | Supervisor de ventas.
                  li 
                    .lista-ol--cuadro__vineta
                      span k
                    | Ejecutivo de cuentas.
                  li 
                    .lista-ol--cuadro__vineta
                      span l
                    | Superintendente de ventas.
              .col-8.col-md-8.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/20.svg', alt='')
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Modalidades de ventas
      p.mb-5(data-aos="fade-right") Hacen referencia a las diferentes formas en que las empresas y vendedores pueden interactuar con sus clientes para ofrecer productos o servicios. Cada modalidad responde a contextos específicos, desde el contacto directo en un establecimiento hasta estrategias más dinámicas como la venta ambulante, la venta multinivel o la comercialización en línea. Conocer estas modalidades permite identificar las técnicas más adecuadas para captar, fidelizar y satisfacer al consumidor en distintos escenarios comerciales, tanto tradicionales como digitales..
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-6
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.col-xl-11.m-auto(titulo="Venta de mostrador")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  p.mb-0 El encuentro del vendedor y comprador se da dentro del establecimiento comercial, donde el vendedor debe desarrollar técnicas de servicio al cliente y de ventas.
            .row.col-xl-11.m-auto(titulo="Ventas en mercados")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  p.mb-0 Este tipo de venta se da en los mercados, donde se encuentran una serie de locales comerciales que venden todo tipo de productos de abarrotes.
            .row.col-xl-11.m-auto(titulo="Ventas en autoservicio")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  p.mb-0 Aquí el vendedor despliega técnicas de #[i merchandising] para lograr captar el interés del cliente.
            .row.col-xl-11.m-auto(titulo="Ventas en feria y salones")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  p.mb-0 Esta es una actividad de venta utilizada por las empresas para promocionar sus productos y servicios.
            .row.col-xl-11.m-auto(titulo="Venta en la propia fábrica")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  p.mb-0 También conocido como venta de bodega, se venden productos con el mínimo de defectos, otros en buen estado, pero a precios cómodos para el cliente.
            .row.col-xl-11.m-auto(titulo="Venta industrial y a tiendas")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  p.mb-0 Son conocidos como mayorista, que les venden a otros pequeños negocios.
            .row.col-xl-11.m-auto(titulo="Venta a prescriptores")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  p.mb-0 Especialidad de la venta en la que el vendedor, basado en los beneficios y atributos de su portafolio, procura convencer a un referente para que otros compren. Ejemplo: los representantes de laboratorios, casas editoriales para colegios y universidades.
            .row.col-xl-11.m-auto(titulo="Venta domiciliaria")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  p.mb-0 Esta es una venta ya muy poco utilizada, generalmente se hace en frío, es decir, visitar locales o residencias sin previo aviso; últimamente se realiza como una actividad promocional temporal.
            .row.col-xl-11.m-auto(titulo="Venta ambulante")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  p.mb-0 Es una venta que se realiza temporalmente en algunos puntos seleccionados para vender productos agrícolas o de la canasta familiar, también son puestos móviles algo permanentes. Generalmente no cuentan con permisos locales.
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(data-aos="zoom-in-left")(src="@/assets/curso/temas/t1/21.svg" alt="")
      
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Venta multinivel

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/22.svg', alt='')
        .col-sm-12.col-lg-9
          .bg-fondo-2.py-3
            p.mb-0.p-5 La venta multinivel consiste en una estructura de negocio donde una red de personas adquiere productos directamente de una empresa y recibe un código único. Con este código, pueden distribuir los productos a otras personas, quienes a su vez también pueden generar ingresos a través de sus propias ventas. Este modelo permite que los distribuidores ganen comisiones tanto por sus ventas directas como por las ventas realizadas por su red de reclutados, fomentando así el crecimiento y la expansión del negocio de manera exponencial.

      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Venta #[em online] o comercio electrónico

      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-lg-9
          .bg-fondo-2.py-3
            p.mb-0.p-5 El comercio electrónico, o venta #[em online], hace uso del Internet y la #[em web] para realizar transacciones de solicitud y pago de negocios (Mejía, 2017, p. 24). Este tipo de venta permite a los negocios ofrecer sus productos y servicios a una audiencia global, facilitando la solicitud y el pago de manera rápida y segura. El comercio electrónico ha revolucionado la forma en que las empresas y los consumidores interactúan, proporcionando comodidad, eficiencia y una amplia variedad de opciones a un solo clic de distancia.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/23.svg', alt='')
      

      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.3 Proceso de la venta
      
      p.mb-3(data-aos="fade-right") Tras segmentar el mercado, definir los clientes objetivo y establecer el posicionamiento, la empresa debe poner en práctica lo planificado en el plan de mercadeo. Vender no es un acto improvisado, sino un proceso estructurado que requiere estrategia, organización y preparación.
      p.mb-3(data-aos="fade-right") Según Hair et al. (2010), el ciclo de la venta incluye fases como la prospección (identificación de clientes potenciales), el acercamiento (recolección de información y preparación), la entrevista (crear confianza, escuchar y detectar necesidades), el manejo de objeciones (resolver dudas con argumentos claros), el cierre (formalizar el acuerdo) y la posventa (seguimiento, soporte y fidelización). Cada etapa demanda habilidades específicas: conocer al cliente, generar empatía, superar obstáculos y ofrecer soluciones personalizadas. 
      p.mb-5(data-aos="fade-right") De este modo, el proceso de venta se convierte en una disciplina que asegura la satisfacción del cliente y la sostenibilidad del negocio. Como complemento se expone la figura 2.
      
      .row.justify-content-center.mb-0(data-aos="fade-right")
        .col-sm-12.col-lg-10
          .titulo-sexto.color-secundario
              p.mb-0 #[b Figura 2.] Ciclo de la venta
          figure.mb-5
              img.mb-3(src='@/assets/curso/temas/t1/24.svg', alt='El esquema representa el ciclo de la venta como un proceso continuo que inicia con la prospección de clientes potenciales y avanza hacia el acercamiento, la entrevista y la presentación o demostración del producto o servicio. Posteriormente, se desarrolla la etapa de negociación, seguida del cierre de la venta. Finalmente, se incluyen las acciones de posventa y relaciones de largo plazo (ALP), que permiten mantener la fidelización del cliente y generar referidos, lo cual retroalimenta nuevamente el ciclo. ')
              figcaption.mb-0 Nota. Adaptada de Hair et al.(2010).

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
