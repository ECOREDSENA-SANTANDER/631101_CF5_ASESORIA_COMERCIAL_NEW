<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Concepto de comunicación

      
      .cajon.color-acento-contenido.mb-5(data-aos="fade-right")
        .row.align-items-center.justify-content-center
          .col-sm-12.col-md-12.col-lg-3.py-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/1.svg', alt='')
          .col-sm-12.col-md-12.col-lg-7.p-cus-2
            p.mb-3 La comunicación es un proceso mediante el cual dos o más personas intercambian información, ideas, sentimientos o conocimientos con el fin de generar comprensión mutua. No se limita a la transmisión de mensajes, sino que implica interpretación, retroalimentación y construcción de significado.
            p.mb-0 En el ámbito comercial, la comunicación es la base de las relaciones con los clientes, ya que permite transmitir propuestas de valor, negociar, fidelizar y resolver objeciones de manera efectiva.

      .titulo-cus-1.mb-4(data-aos="fade-right")
        h3.mb-0 Elemento de la comunicación
      p.mb-4(data-aos="fade-right") Para que el proceso comunicativo sea exitoso, intervienen los siguientes elementos:
      ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-right")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t3/2.png')
          .tarjeta.color-secundario.p-3(x="15%" y="54%" numero="1")
            p.mb-0 #[b 1. Emisor] 
            p.mb-0 La persona que emite el mensaje.
          .tarjeta.color-secundario.p-3(x="25%" y="54%" numero="2")
            p.mb-0 #[b 2. Receptor] 
            p.mb-0 La persona o personas que reciben el mensaje del emisor.
          .tarjeta.color-secundario.p-3(x="35%" y="54%" numero="3")
            p.mb-0 #[b 3. Mensaje] 
            p.mb-0 Es la información, los datos que transmite el emisor para que lleguen al receptor de forma óptima.
          .tarjeta.color-secundario.p-3(x="45%" y="54%" numero="4")
            p.mb-0 #[b 4. Canal]  
            p.mb-0 Es el medio por el que se transmite el mensaje. Pueden ser los diferentes medios de comunicación masiva, internet u otro medio.
          .tarjeta.color-secundario.p-3(x="55%" y="54%" numero="5")
            p.mb-0 #[b 5. Código]  
            p.mb-0 Son el conjunto de símbolos y signos que configuran el mensaje.
          .tarjeta.color-secundario.p-3(x="65%" y="54%" numero="6")
            p.mb-0 #[b 6. Contexto]  
            p.mb-0 Es el ambiente, lugar, tiempo desde donde se transmite el mensaje.
          .tarjeta.color-secundario.p-3(x="75%" y="54%" numero="7")
            p.mb-0 #[b 7. Retroalimentación]  
            p.mb-0 Respuesta que da el receptor, indicando si comprendió o no el mensaje.

          .tarjeta.color-secundario.p-3(x="85%" y="54%" numero="8")
            p.mb-0 #[b 8. Ruido]  
            p.mb-0 Cualquier interferencia que distorsiona la comunicación (falta de atención, distracciones, problemas técnicos).

      .titulo-cus-1.mb-4(data-aos="fade-right")
        h3.mb-0 Herramientas de comunicación
      p.mb-5(data-aos="fade-right") En el campo de la asesoría comercial, las herramientas comunicativas son recursos que facilitan el contacto y la interacción con clientes, proveedores o colegas. Entre ellas se destacan:
      
      .row.justify-content-center.cursor-pointer.mb-5(data-aos='fade-right')
        .col-xl-3.col-lg-3.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t3/3.png", alt="")
            .crd_hover_txt--body.text-center
              h4.mb-3 Tradicionales
              p.mb-0 Folletos, catálogos, muestras físicas, cartas de presentación.
        .col-xl-3.col-lg-3.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t3/4.png", alt="")
            .crd_hover_txt--body.text-center
              h4.mb-3 Digitales
              p.mb-0 Correo electrónico, mensajería instantánea, videollamadas, redes sociales, CRM.
        .col-xl-3.col-lg-3.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t3/5.png", alt="")
            .crd_hover_txt--body.text-center
              h4.mb-3 Audiovisuales
              p.mb-0 Presentaciones, videos promocionales, podcasts, infografías.
        .col-xl-3.col-lg-3.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t3/6.png", alt="")
            .crd_hover_txt--body.text-center
              h4.mb-3 Interpersonales
              p.mb-0 Habilidades blandas como: escucha activa, empatía, asertividad y manejo del lenguaje no verbal.
  
      .titulo-cus-1.mb-4(data-aos="fade-right")
        h3.mb-0 Funciones de la comunicación
      p.mb-4(data-aos="fade-right") En un contexto comercial, la comunicación cumple varias funciones clave:
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          ul.lista-ul--color.lista-ul--separador
            li.d-flex
              i.fas.fa-check-circle.icon-list
              p.mb-0 #[b Informativa:] transmitir datos sobre productos, servicios o procesos (ej. especificaciones técnicas).
            li.d-flex
              i.fas.fa-check-circle.icon-list
              p.mb-0 #[b Persuasiva:] influir en el cliente para motivar la compra o la fidelización.
            li.d-flex
              i.fas.fa-check-circle.icon-list
              p.mb-0 #[b Relacional:] construir y fortalecer vínculos de confianza con clientes y colegas.
            li.d-flex
              i.fas.fa-check-circle.icon-list
              p.mb-0 #[b Reguladora:] establecer normas, acuerdos y procedimientos de trabajo o negociación.
            li.d-flex
              i.fas.fa-check-circle.icon-list
              p.mb-0 #[b Formativa:] capacitar, instruir o educar a clientes y compañeros sobre el uso de un producto o servicio.
            li.d-flex
              i.fas.fa-check-circle.icon-list
              p.mb-0 #[b De retroalimentación:] recibir opiniones, sugerencias o reclamos para mejorar el servicio


        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/7.png', alt='')
      
      p.mb-5(data-aos="fade-right") La comunicación es la columna vertebral de la asesoría comercial porque permite al asesor no solo informar, sino también conectar con el cliente, persuadirlo, atender sus necesidades y mantener relaciones de largo plazo. Un asesor con buenas competencias comunicativas potencia su efectividad comercial y la satisfacción del cliente.
      
      
      
      
      
      
      Separador  
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Medios de comunicación
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6
          .cajon.color-acento-contenido.p-5.mb-0
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-6
                ul.lista-ul--color.fa-al
                  li.d-flex
                    i.fas.fa-check-circle
                    p.mb-0 Televisión.
                  li.d-flex
                    i.fas.fa-check-circle
                    p.mb-0 Radio.
                  li.d-flex
                    i.fas.fa-check-circle
                    p.mb-0 Prensa.
                  li.d-flex
                    i.fas.fa-check-circle
                    p.mb-0 Revistas.
                  li.d-flex
                    i.fas.fa-check-circle
                    p.mb-0 Internet.
              .col-sm-12.col-lg-6
                ul.lista-ul--color.fa-al
                  li.d-flex
                    i.fas.fa-check-circle
                    p.mb-0 Medios de comunicación exterior.
                  li.d-flex
                    i.fas.fa-check-circle
                    p.mb-0  Plegables.
                  li.d-flex
                    i.fas.fa-check-circle
                    p.mb-0  Material POP (Point of Purchase).
                  li.d-flex
                    i.fas.fa-check-circle
                    p.mb-0  Vallas fijas.
                  li.d-flex
                    i.fas.fa-check-circle
                    p.mb-0  Vallas electrónicas y digitales.

        .col-sm-12.col-lg-6.d-none.d-lg-block
          img.mt-5(src='@/assets/curso/temas/t3/8.png', alt='')
      
      .row.align-items-center.mb-4.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2  Tipos de medios
      p.mb-3(data-aos="fade-right") Estos medios se clasifican en:
      .row.justify-content-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-3
          .bg-color-6.p-4.br-1.mb-cus
            h3.text-white.mb-0.text-center Medios audiovisuales
        .col-sm-12.col-md-6.col-lg-3
          .bg-color-6.p-4.br-1.mb-cus
            h3.text-white.mb-0.text-center Medios radiofónicos
        .col-sm-12.col-md-6.col-lg-3
          .bg-color-6.p-4.br-1.mb-cus
            h3.text-white.mb-0.text-center Medios impresos
        .col-sm-12.col-md-6.col-lg-3
          .bg-color-6.p-4.br-1
            h3.text-white.mb-0.text-center Medios alternativos

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
