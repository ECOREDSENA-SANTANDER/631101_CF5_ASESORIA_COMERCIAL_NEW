<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El proceso de ventas, la comunicación y el #[i merchandising] se integran como ejes fundamentales de la actividad comercial. La venta implica un conjunto de fases estructuradas que orientan la interacción con el cliente, mientras que la comunicación se convierte en el medio esencial para transmitir mensajes claros y persuasivos. El #[i merchandising], por su parte, fortalece la experiencia del consumidor en el punto de venta, favoreciendo la decisión de compra. En conjunto, estos elementos permiten a las organizaciones alcanzar sus objetivos comerciales mediante estrategias que optimizan la relación con el cliente y la presentación de los productos.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="La venta, la comunicación y el merchandising constituyen tres pilares esenciales en la gestión comercial: la venta como un proceso estructurado de interacción con el cliente, la comunicación como el medio clave para persuadir y transmitir mensajes claros, y el merchandising como estrategia que influye en la decisión de compra en el punto de venta. La integración de estos elementos permite generar experiencias positivas para el consumidor y mejores resultados para la empresa.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
