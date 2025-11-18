<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.borderectoabajo
      .titulo-principal.color-primario
        .titulo-principal__numero
          span 6
        h1 Presentaciones
  
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-md-12.col-lg-12
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img.d-none.d-lg-block(
              :style="{'background-image': `url(${require('@/assets/curso/temas/t6/1.png')})`}"
            )
            .bloque-texto-g__texto.p-5.d-flex.flex-column
              p.mb-3 Una presentación de ventas se puede definir como un guión o argumento que el equipo de ventas de una organización utiliza para ofrecer sus productos a los clientes. Esta presentación puede llevarse a cabo en persona, por teléfono, videollamada, videoconferencia, o cualquier otro medio disponible. No obstante, algunas empresas consideran que el contacto personal es de mayor importancia.
              p.mb-0 Una presentación en el proceso de ventas no se limita a una llamada o a un encuentro personal; forma parte de un conjunto de acciones diseñadas para cerrar la venta. Esta presentación puede incluir una conversación inicial, una reunión, una llamada o videollamada, el envío de una propuesta e incluso una demostración.

      p.mb-5(data-aos="fade-right") Realizar una presentación requiere una inversión de tiempo tanto en su preparación como en su exposición o socialización. Esta puede incluir diapositivas digitales, videos u otros recursos que respalden el argumento del vendedor. Según la naturaleza de la presentación, pueden involucrarse varias personas del equipo de ventas, y el cliente puede estar representado por un equipo directivo u otros interesados en la adquisición del producto.
  
      .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
          p.mb-0 El proceso de elaboración de una presentación puede generar un alto nivel de estrés, incluso para el vendedor más experimentado. Por ello, es fundamental seguir una serie de pasos concretos, planificados y bajo un control estricto.
      
      .container.tarjeta.bg-color-6.mb-5(data-aos="fade-right")
        .row.align-items-center
          .col-lg-4.col-md-5.col-8.align-items-center.d-none.d-lg-block
            img.p-3(src="@/assets/curso/temas/t6/2.svg")
          .col-lg-7.col-md-12.col-sm-12
            .row.align-items-center
              .col.mb-3.md-sm-0.align-items-center
                h5.text-white.mb-4.mt-5 Ejemplo de una presentación
                p.text-white Como ejemplo, se tomará la presentación que Apple realizó del iPhone 7. Apple siempre ha logrado que sus presentaciones generen altas expectativas, manteniendo una estética profesional, limpia y atractiva, que rara vez decepciona.
                p.text-white Para entender mejor lo que es una presentación efectiva, consulte el siguiente video.
                .row.mb-5.me-3
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://youtu.be/R-sLPTUEq6E?si=kl-clg9ubVZiuqdn" target="_blank")
                      span Ir al sitio
                      i.fas.fa-video
      
      p.mb-3(data-aos="fade-right") Las presentaciones pueden ser de muchos tipos: de negocios, para producto nuevo o de relanzamiento, marca personal o de producto, profesionales o académicas, entre otras. También pueden estar dirigidas a públicos o personas de interés, por ejemplo, en la propia empresa, a un público general, accionistas o inversores.
      p.mb-5(data-aos="fade-right") Además, las presentaciones son consideradas recursos gráficos que apoyan en la promoción o venta de un producto, y que presenta una estructura donde se va dando a conocer diferentes áreas o aspectos de un discurso profesional, académico o publicitario; de ahí la importancia de acertar en el tipo de presentación que se perfila. En este contexto, las presentaciones se pueden clasificar de la siguiente manera:
      h5.text-center.mb-4(data-aos="fade-right") Clasificación de presentaciones
  
      .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
        .col-lg-4.col-md-8.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/3.png', alt='')
        .col-lg-6.col-md-12.col-sm-12
          .tarjeta.bg-color-7
            SlyderA(tipo="b").p-4
              .row.justify-content-center.align-items-center
                .col-lg-3.col-md-3.col-6
                  img(src='@/assets/curso/temas/t6/4.svg')
                .col-lg-8.mb-4.mb-md-0 
                  h5 Trabajo
                  p Suele tener un carácter más interno. El público son tus trabajadores o socios.
              .row.justify-content-center.align-items-center
                .col-lg-3.col-md-3.col-6
                  img(src='@/assets/curso/temas/t6/5.svg')
                .col-lg-8.mb-4.mb-md-0 
                  h5 Breve o #[em pitch]
                  p Presenta un producto o marca en un tiempo récord. En ocasiones las presentaciones requieren ajustarse a unas normas, como suele suceder en las rondas de búsqueda de inversiones.
              .row.justify-content-center.align-items-center
                .col-lg-3.col-md-3.col-6
                  img(src='@/assets/curso/temas/t6/6.svg')
                .col-lg-8.mb-4.mb-md-0 
                  h5 Línea
                  p Se caracteriza por estar en la web y se puede trasladar a cualquier lugar, puede estar almacenada en internet y ser enviada por correo electrónico.
              .row.justify-content-center.align-items-center
                .col-lg-3.col-md-3.col-6
                  img(src='@/assets/curso/temas/t6/7.svg')
                .col-lg-8.mb-4.mb-md-0 
                  h5 Marca
                  p En este tipo de presentación se puede hablar del proceso de configuración, de los valores que se quieren transmitir en la marca.
              .row.justify-content-center.align-items-center
                .col-lg-3.col-md-3.col-6
                  img(src='@/assets/curso/temas/t6/8.svg')
                .col-lg-8.mb-4.mb-md-0 
                  h5 Producto
                  p Presenta todo el proceso de desarrollo o de ciclo de vida del producto. La presentación de producto, puede ser la antesala a la demostración.
              .row.justify-content-center.align-items-center
                .col-lg-3.col-md-3.col-6
                  img(src='@/assets/curso/temas/t6/9.svg')
                .col-lg-8.mb-4.mb-md-0 
                  h5 Inversionistas
                  p Se deben resolver los puntos más importantes para aquellos que deben financiar el producto, servicio o iniciativa. En el caso de las rondas de inversión, son fundamentales varias partes: quién pide el dinero, para qué y cómo se va a devolver.
              .row.justify-content-center.align-items-center
                .col-lg-3.col-md-3.col-6
                  img(src='@/assets/curso/temas/t6/10.svg')
                .col-lg-8.mb-4.mb-md-0 
                  h5 Corporativa
                  p No existe un estilo único aunque sí es cierto que generalmente se piden modelos de presentación más serios y formales. Aquí se realiza una presentación de los valores organizacionales y elementos estratégicos de la empresa, tales como visión, misión, entre otros.
              .row.justify-content-center.align-items-center
                .col-lg-3.col-md-3.col-6
                  img(src='@/assets/curso/temas/t6/11.svg')
                .col-lg-8.mb-4.mb-md-0 
                  h5 Plan de negocio
                  p Usualmente, las presentaciones de los planes de negocio tienen una estructura definida de acuerdo con los inversores o aquellos a quienes vayamos a presentar la idea de negocio deben resolver todas sus dudas. En algunas convocatorias o invitaciones determinan qué estructura de presentación se debe realizar.
              .row.justify-content-center.align-items-center
                .col-lg-3.col-md-3.col-6
                  img(src='@/assets/curso/temas/t6/12.svg')
                .col-lg-8.mb-4.mb-md-0 
                  h5 Profesional
                  p Aquí se enmarcan aquellas que presentan un currículum u hoja de vida profesional, logros, títulos obtenidos, trabajos desarrollados, entre otros aspectos que ayudan a convencer a un empresario o empleador. Son creativas y diferentes de acuerdo con el tipo de profesión.
              .row.justify-content-center.align-items-center
                .col-lg-3.col-md-3.col-6
                  img(src='@/assets/curso/temas/t6/13.svg')
                .col-lg-8.mb-4.mb-md-0 
                  h5 Proyecto
                  p Similar que en la presentación de plan de negocio, tienen una estructura definida.
                  p Principalmente, presentan factores interesantes para los inversionistas.
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-10
          figcaption Nota. Contenido adaptado de Pipe Drive. (s.f.)

      p.mb-5(data-aos="fade-right") Más que el contenido, lo importante en una presentación, son aquellos elementos intangibles que juegan un papel importante durante el desarrollo. El lenguaje corporal, el tono de voz, la actitud, incluso, los movimientos, pueden ser determinantes para que el cliente pueda tomar la decisión de compra y cerrar el negocio. Algunos aspectos importantes por considerar para un buen desarrollo de una presentación se presentan en el siguiente video.
      .row.mb-5(data-aos="fade-right")
        figure
          .video
            iframe(iframe width="560" height="315" src="https://www.youtube.com/embed/kVSt0II8ABE?si=AtWmo4ODjU_iSPnK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video: Algunos #[em tips] importantes para un buen desarrollo de una presentación.
      p.mb-5(data-aos="fade-right") Así mismo, en cuanto al lenguaje corporal, se recomienda lo siguiente:
      Separador  
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 6.1  Lenguaje corporal
      p.m-cus-2(data-aos="fade-right") El lenguaje corporal es un recurso esencial en cualquier presentación, ya sea presencial o virtual. A través de los gestos, la postura, la mirada y la sonrisa, se transmite confianza, seguridad y cercanía con el público. Una adecuada expresión corporal permite captar la atención, reforzar el mensaje y proyectar credibilidad, favoreciendo así una comunicación más efectiva y convincente.

      .row.mt-5.mb-5(data-aos="fade-right")
        .col-lg-11.position-relative
          .avatar
            figure
              img(src="@/assets/curso/temas/t6/14.svg", alt="alt").img250
          .crd.crd--avatarHorizontal.crd--first.py-1
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t6/15.svg", alt="alt").img80
              .col
                p Si la presentación es en línea, o a través de videoconferencia, los gestos, la sonrisa y la forma de mirar son elementos fundamentales para convencer.
          .crd.crd--avatarHorizontal.crd--2.py-1
            .row.align-items-center
              .col-auto
                  img(src="@/assets/curso/temas/t6/16.svg", alt="alt").img80
              .col
                p Un buen uso del lenguaje corporal muestra confianza y seguridad el momento de realizar la presentación.
          .crd.crd--avatarHorizontal.crd--3.py-1
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t6/17.svg", alt="alt").img80
              .col
                p El objetivo es transmitir calma, confianza y seguridad para el cierre del trato, por tanto, el contacto visual demuestra que el presentador está interesado en los prospectos y en lo que ellos dicen. 
          .crd.crd--avatarHorizontal.crd--4.py-1
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t6/18.svg", alt="alt").img80
              .col
                p Si la presentación es “en persona”, sea en auditorio o sala de conferencia, es importante un buen uso del espacio. Si tiene un micrófono inalámbrico, se puede desplazar o caminar por el escenario.
          .crd.crd--avatarHorizontal.crd--5.py-1
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t6/19.svg", alt="alt").img80
              .col
                p Una buena postura también demuestra confianza. En el caso de la presentación en línea o por videoconferencia, está el modo de sentarse o ver a la cámara.
          .crd.crd--avatarHorizontal.crd--last.py-1
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t6/20.svg", alt="alt").img80
              .col
                p Si la presentación es presencial, se sugiere ofrecer un apretón de manos firme y decidido, pues genera una buena primera impresión.

      .container.tarjeta.bg-color-6.mb-5(data-aos="fade-right")
        .row.align-items-center
          .col-lg-4.col-md-5.col-8.align-items-center.d-none.d-lg-block
            img.p-3(src="@/assets/curso/temas/t6/2.svg")
          .col-lg-7.col-md-12.col-sm-12
            .row.align-items-center
              .col.mb-3.md-sm-0.align-items-center
                h5.text-white.mb-4.mt-5 Desarrollo de una presentación
                p.text-white Para profundizar el tema se invita a consultar el video: “Hablando con Julis”.
                .row.mb-5.me-3
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://youtu.be/0SjVNTAVdgs" target="_blank")
                      span Ir al sitio
                      i.fas.fa-video

      p.mb-5(data-aos="fade-right") Finalmente, existen diferentes herramientas y plataformas digitales para el diseño de presentaciones y que se pueden usar como apoyo al momento de presentar el producto ante el cliente. Algunas de las herramientas son:
      SlyderF(columnas="col-lg-6 col-xl-4 col-md-6")(data-aos="fade-right")
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/t6/21.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h5.bg-color-5.text-center.p-1 Knovio
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/t6/22.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h5.bg-color-5.text-center.p-1 PowToon
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/t6/23.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h5.bg-color-5.text-center.p-1 Prezi
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/t6/24.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h5.bg-color-5.text-center.p-1 Emaze
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/t6/25.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h5.bg-color-5.text-center.p-1 Hakiu Deck
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/t6/26.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h5.bg-color-5.text-center.p-1 Slidebean
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/t6/27.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h5.bg-color-5.text-center.p-1 Canva
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/t6/28.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h5.bg-color-5.text-center.p-1 Google Slides
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/t6/29.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h5.bg-color-5.text-center.p-1 Visme
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/t6/30.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h5.bg-color-5.text-center.p-1 Swipe





  </template>

<script>
export default {
  name: 'Tema6',
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
