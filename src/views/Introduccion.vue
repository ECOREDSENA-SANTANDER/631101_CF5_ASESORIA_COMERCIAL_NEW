<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/intro/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.d-flex.flex-column
        p.mb-3 La actividad comercial se sustenta en la interacción dinámica entre vendedores y clientes, donde la venta se convierte en el motor que impulsa el crecimiento y la sostenibilidad de las organizaciones. Más allá de un simple intercambio de bienes y servicios, el proceso de venta constituye un espacio de construcción de valor, confianza y fidelización. En este componente se exploran los procesos de venta y las transacciones comerciales, analizando cómo la comunicación efectiva, la empatía y la capacidad de persuasión se convierten en elementos esenciales para garantizar la satisfacción del cliente y fortalecer la relación a largo plazo.
        p.mb-0 De igual manera, se profundiza en el estudio del #[i merchandising] como una herramienta estratégica de gran impacto en el punto de venta, pues su correcta aplicación influye en la percepción del cliente, en la decisión de compra y en la diferenciación de la marca frente a la competencia.
    
    p.mb-5 Asimismo, se abordan las exhibiciones, demostraciones y presentaciones comerciales, entendidas como prácticas clave para proyectar credibilidad, generar experiencias positivas y consolidar una relación comercial basada en la confianza y el beneficio mutuo. De esta forma, el componente integra teoría y práctica, preparando al aprendiz para desempeñarse de manera competente en escenarios reales de negociación y gestión comercial.
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/GPUPFqO-rMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Ventas y comunicación introducción

</template>

<script>
export default {
  name: 'Introduccion',
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
