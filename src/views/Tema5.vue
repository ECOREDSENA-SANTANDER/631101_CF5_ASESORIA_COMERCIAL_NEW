<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Exhibición
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-md-12.col-lg-12
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img.d-none.d-lg-block(
              :style="{'background-image': `url(${require('@/assets/curso/temas/t5/1.png')})`}"
            )
            .bloque-texto-g__texto.p-5.d-flex.flex-column
              p.mb-3 Las actividades que permiten mostrar los productos en el punto de venta y colocarlos al alcance del cliente para su compra se denominan exhibición. Esta se concibe como la clasificación, selección, colocación y presentación de los productos en el lugar de venta, con el objetivo de atraer la atención tanto del comprador actual como del potencial.
              p.mb-0 La exhibición del producto, en el punto de venta, se realiza con el uso de muebles o elementos especiales que lo ponen al alcance de los clientes.
              
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        TabsC.color-acento-botones
          .py-3.px-4(titulo="Exhibición vertical").mb-0
            .row.justify-content-center
              .col-md-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t5/2.png')
              .col-md-7.mb-4.mb-md-0
                h4.mt-4 Exhibición vertical
                p En las exhibiciones verticales se organiza un mismo producto de arriba hacia abajo. Donde la exhibición de colores se recomienda hacerla de claro a oscuro y de izquierda a derecha.
          .py-3.px-4(titulo="Exhibición horizontal").mb-0
            .row.justify-content-center
              .col-md-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t5/3.png')
              .col-md-7.mb-4.mb-md-0
                h4.mt-4 Exhibición horizontal
                p El producto se dispone de izquierda a derecha en los distintos niveles de visibilidad: nivel de la cabeza, nivel de los ojos, nivel de las manos y nivel del suelo.
          .py-3.px-4(titulo="Exhibición bloque").mb-0
            .row.justify-content-center
              .col-md-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t5/4.png')
              .col-md-7.mb-4.mb-md-0
                h4.mt-4 Exhibición bloque
                p La marca se agrupa en una estantería ocupando dos o tres peldaños o entrepaños.
          .py-3.px-4(titulo="Exhibición mixta").mb-0
            .row.justify-content-center
              .col-md-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t5/5.png')
              .col-md-7.mb-4.mb-md-0
                h4.mt-4 Exhibición mixta
                p Puede decirse que es una combinación de la exhibición vertical y la horizontal. Se utiliza para llamar la atención de los consumidores de una forma más efectiva.
      p.mb-3(data-aos="fade-right") De acuerdo con la estrategia del comercio, pueden emplearse otras formas de exhibición, haciendo una combinación de las anteriores, o bien organizando los productos de una forma creativa, que pueda resultar asertiva al generar ventas.
      p.mb-5 Otro factor importante al momento de exhibir el producto es el uso de las vitrinas, aquí se muestra el producto en diferentes ángulos y, a pesar de que el consumidor no pueda acceder al producto, igualmente se siente atraído por este. Las vitrinas pueden clasificarse de la siguiente forma:      
 
      .row.mb-4(data-aos="fade-right")
        SlyderF(columnas="col-lg-6 col-xl-4 col-md-6").mb-4
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4.d-none.d-lg-block
              .col-6
                img(src='@/assets/curso/temas/t5/6.svg')
            .row.justify-content-center
              .col-9
                h5.bg-color-5.text-center.p-1 Vitrinas de prestigio
            .row.justify-content-center
              p.text-center Son aquellas donde la belleza de sus artículos expuestos supone un impacto visual que, ante todo, vende el prestigio del establecimiento. 
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4.d-none.d-lg-block
              .col-6
                img(src='@/assets/curso/temas/t5/7.svg')
            .row.justify-content-center
              .col-10
                h5.bg-color-5.text-center.p-1 Vitrinas de temporada
            .row.justify-content-center
              p.text-center Se exponen al comienzo de una temporada, informando de nuevos productos y tendencias del mercado. 
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4.d-none.d-lg-block
              .col-6
                img(src='@/assets/curso/temas/t5/8.svg')
            .row.justify-content-center
              .col-10
                h5.bg-color-5.text-center.p-1 Vitrinas promocionales
            .row.justify-content-center
              p.text-center Exponen productos promocionados o de oferta, identificando una clara oportunidad de compra.
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4.d-none.d-lg-block
              .col-6
                img(src='@/assets/curso/temas/t5/9.svg')
            .row.justify-content-center
              .col-9
                h5.bg-color-5.text-center.p-1 Vitrinas comerciales
            .row.justify-content-center
              p.text-center Presentan los productos que conforman el surtido del establecimiento con un claro directo mensaje de venta.
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4.d-none.d-lg-block
              .col-6
                img(src='@/assets/curso/temas/t5/10.svg')
            .row.justify-content-center
              .col-9
                h5.bg-color-5.text-center.p-1 Vitrinas de precios
            .row.justify-content-center
              p.text-center Son aquellas que, ante todo, destacan el precio del producto, siendo este el principal motivo de compra.
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4.d-none.d-lg-block
              .col-6
                img(src='@/assets/curso/temas/t5/11.svg')
            .row.justify-content-center
              .col-9
                h5.bg-color-5.text-center.p-1 Vitrinas informativas
            .row.justify-content-center
              p.text-center Su misión consiste en dar a conocer nuevos o desconocidos productos o servicios que supongan un cambio o un avance en la concepción de los mismos.
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4.d-none.d-lg-block
              .col-6
                img(src='@/assets/curso/temas/t5/12.svg')
            .row.justify-content-center
              .col-9
                h5.bg-color-5.text-center.p-1 Vitrinas estacionales
            .row.justify-content-center
              p.text-center Contienen productos sometidos a una fuerte estacionalidad en función de la época del año y motivados por la moda.
  
 
 
      .titulo-cus-1.mb-4(data-aos="fade-right")
          h3.mb-0 Tipos de publicidad en el punto de venta 
  
      p.mb-5(data-aos="fade-right") La publicidad en el punto de venta puede organizarse en tres grandes categorías, cada una con un criterio distinto:
      .tarjeta.bg-fondo-1.p-4.mb-5(data-aos="fade-right")
        SlyderA(tipo="b")
          .row.justify-content-center.mb-0.p-4
            .col-sm-12.col-lg-8
                h4.mb-4 Según el tiempo de permanencia, se refiere a la duración de la publicidad dentro del establecimiento
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.icon-list
                    p.mb-0 #[b Permanente:] elementos que se mantienen de forma continua, como rótulos, mobiliario o señalización fija.
                  li.d-flex
                    i.fas.fa-check-circle.icon-list
                    p.mb-0 #[b Temporal:] materiales que se instalan por un periodo corto, por ejemplo, durante una promoción o campaña especial.
                  li.d-flex.mb-0
                    i.fas.fa-check-circle.icon-list
                    p.mb-0 #[b Estacional:] piezas utilizadas en fechas específicas, como Navidad, Día de la madre o regreso a clases.
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/13.png', alt='')
 
          .row.justify-content-center.mb-0.p-4
            .col-sm-12.col-lg-8
                h4.mb-4 Según los materiales, clasifica la publicidad por el tipo de soporte físico empleado
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.icon-list
                    p.mb-0 #[b Cartón, papel o vinilo:] para afiches, displays o pendones.
                  li.d-flex
                    i.fas.fa-check-circle.icon-list
                    p.mb-0 #[b Plástico o acrílico:] para exhibidores resistentes y duraderos.
                  li.d-flex.mb-0
                    i.fas.fa-check-circle.icon-list
                    p.mb-0 #[b Digitales:] pantallas interactivas o LED que transmiten mensajes dinámicos.
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/14.png', alt='')

          .row.justify-content-center.mb-0.p-4
            .col-sm-12.col-lg-8
                h4.mb-4 Según el objetivo de comunicación, se considera la intención de la publicidad en el punto de venta
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.icon-list
                    p.mb-0 #[b Informativa:] transmite datos sobre el producto, precios o características.
                  li.d-flex
                    i.fas.fa-check-circle.icon-list
                    p.mb-0 #[b Persuasiva:] busca influir en la decisión de compra, apelando a emociones o beneficios.
                  li.d-flex.mb-0
                    i.fas.fa-check-circle.icon-list
                    p.mb-0 #[b Recordatoria:] refuerza la presencia de la marca para mantenerla en la mente del consumidor.
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/15.png', alt='')

      p.mb-5(data-aos="fade-right") La clasificación permite comprender que la publicidad en el punto de venta no es homogénea, sino que depende de cuánto tiempo se mantendrá, de qué materiales se construye y del propósito comunicativo que persigue.
      .titulo-cus-1.mb-4(data-aos="fade-right")
        h3.mb-0 Claves para una publicidad efectiva en el punto de venta
      p.mb-5(data-aos="fade-right") La publicidad en el punto de venta requiere de estrategias claras que permitan captar la atención del consumidor y generar confianza en la compra. Por tal razón se presentan los aspectos esenciales a tener en cuenta, desde el análisis de la competencia hasta el diseño y la comunicación del producto, con el fin de lograr un impacto positivo sin saturar el espacio comercial.
      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
        .col-sm-12.col-md-12.col-lg-10
          h4 Recomendaciones para el uso del P.O.P.

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-10
          LineaTiempoB.color-secundario.mb-5(:datos="datosLineaTiempoC")
          

      .titulo-cus-1.mb-4(data-aos="fade-right")
          h3.mb-0 Proceso de demostración de productos
 
      p.mb-5(data-aos="fade-right") La demostración de un producto es una estrategia clave para generar confianza y persuadir al cliente. Este proceso incluye una planificación anticipada, la presentación clara de ventajas y características, la interacción directa del cliente con el producto y el uso de recursos audiovisuales que lo cautiven. A lo largo de la demostración se busca comprometer progresivamente al cliente, hasta llegar al cierre de la venta con opciones claras y efectivas.
 
      SlyderF(columnas="col-lg-6 col-xl-4 col-md-6").mb-4(data-aos="fade-right")
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4
              .col-6
                img(src='@/assets/curso/temas/t5/23.svg' alt='AvatarTop')
            .row.justify-content-center
              p.text-center Planifique su demostración con anticipación.
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4
              .col-6
                img(src='@/assets/curso/temas/t5/24.svg' alt='AvatarTop')
            .row.justify-content-center
              p.text-center Muestre principalmente las ventajas que tiene el producto.
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4
              .col-6
                img(src='@/assets/curso/temas/t5/25.svg' alt='AvatarTop')
            .row.justify-content-center
              p.text-center Comience primero por las características obvias.
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4
              .col-6
                img(src='@/assets/curso/temas/t5/26.svg' alt='AvatarTop')
            .row.justify-content-center
              p.text-center Deje que el cliente tenga una experiencia directa con el producto.
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4
              .col-6
                img(src='@/assets/curso/temas/t5/27.svg' alt='AvatarTop')
            .row.justify-content-center
              p.text-center Aproveche la demostración para ir comprometiendo al cliente progresivamente.
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4
              .col-6
                img(src='@/assets/curso/temas/t5/28.svg' alt='AvatarTop')
            .row.justify-content-center
              p.text-center Utilice material audiovisual como videos, imágenes, animaciones, entre otros, para que cautive al cliente.
          .tarjeta.bg-color-7.p-4
            .row.justify-content-center.p-4
              .col-6
                img(src='@/assets/curso/temas/t5/29.svg' alt='AvatarTop')
            .row.justify-content-center
              p.text-center Esté listo para el cierre de la venta del producto, tenga a mano opciones para el cliente.
 
 
 
 
 
 </template>

<script>
export default {
  name: 'T5',
  data: () => ({
    // variables de vue
    datosLineaTiempoC: [
      {
        icono: require('@/assets/curso/temas/t5/16.svg'),
        titulo: 'Análisis de la competencia',
        texto:
          'Realizar un análisis de la competencia siempre será una buena opción para generar ideas innovadoras.',
      },
      {
        icono: require('@/assets/curso/temas/t5/17.svg'),
        titulo: '<i>Benchmarking</i>',
        texto:
          'Con el mercado en constante evolución, es importante estar siempre un paso adelante. Por eso, hay que pensar en estrategias a corto y a largo plazo.',
      },
      {
        icono: require('@/assets/curso/temas/t5/18.svg'),
        titulo: 'Conocimiento del producto',
        texto:
          'Tener claro cuál es la categoría que se está manejando para no afectar la proyección de la imagen.',
      },
      {
        icono: require('@/assets/curso/temas/t5/19.svg'),
        titulo: 'Beneficios del producto',
        texto:
          'Los mensajes en la publicidad en el punto de venta, deben enviar un mensaje al consumidor con los beneficios del producto, modo de uso, fecha de vencimiento, etc, para brindar una mayor confianza en la compra.',
      },
      {
        icono: require('@/assets/curso/temas/t5/20.svg'),
        titulo: 'Buen diseño',
        texto:
          'Es muy importante enfocar el desarrollo de la estrategia P.O.P. en la línea de diseño, así el cliente podrá reconocer la marca de manera fácil pues le es atractiva.',
      },
      {
        icono: require('@/assets/curso/temas/t5/21.svg'),
        titulo: 'Destacado',
        texto: 'Procurar que la publicidad en el punto de venta se destaque.',
      },
      {
        icono: require('@/assets/curso/temas/t5/22.svg'),
        titulo: 'No saturar',
        texto:
          'Si bien, es una publicidad muy importante para cada producto, se recomienda no saturar demasiado el punto de venta.',
      },
    ],
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
