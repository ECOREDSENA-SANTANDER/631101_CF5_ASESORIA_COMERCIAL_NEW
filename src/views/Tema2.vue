<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Transacciones comerciales

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-12.col-lg-7
          p Cuando el proceso de la venta finaliza con el consentimiento de las partes de la aceptación del bien o servicio, se inicia un proceso de formalización de ese acuerdo, y las transacciones comerciales, dan respuesta a esos acuerdos y transferencia de la propiedad. 
          p Las transacciones comerciales abarcan todas las actividades económicas que se realizan entre empresas mediante una serie de movimientos comerciales en el mercado, donde compradores y vendedores intercambian bienes y servicios para satisfacer sus necesidades.
          p Pero ¿qué son las transacciones comerciales? 
          .cajon.color-acento-contenido.p-4.mb-2
            .h5.ps-3 Coll (2020)
            p.ps-3 Una transacción comercial es una operación mercantil en la que un vendedor y un comprador acuerdan la transferencia de la propiedad sobre algo, a cambio de un precio previamente acordado.
          .cajon.color-acento-contenido.p-4.mb-2
            .h5.ps-3 Sy (2019)
            p.ps-3 Son actividades o eventos económicos que implican interacciones entre dos o más partes, en las que se intercambian productos, servicios o valores por algún tipo de retribución, con frecuencia en la forma de dinero.
        .col-10.col-md-10.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/1.png', alt='')

      p.mb-5(data-aos='fade-right') Los elementos que hacen parte de una transacción comercial de acuerdo con Coll (2020), son:
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-md-6.col-lg-3.col-sm-12.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/2.svg' alt='').img120
            .tarjeta.nueva
              .p-3.mt-5
                h4.mb-4.text-center El comprador
                p.mb-0.text-center La persona que necesita el bien o servicio. 
        .col-md-6.col-lg-3.col-sm-12.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/3.svg' alt='').img120
            .tarjeta.nueva
              .p-3.mt-5
                h4.mb-4.text-center El vendedor
                p.mb-0.text-center Es la persona o entidad que ofrece el bien o servicio. Este puede ser un sujeto de producción o distribución o ser un sujeto de consumo.
        .col-md-6.col-lg-3.col-sm-12.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/4.svg' alt='').img120
            .tarjeta.nueva
              .p-3.mt-5
                h4.mb-4.text-center El componente monetario
                p.mb-0.text-center Este pago se puede realizar de contado o en efectivo.
        .col-md-6.col-lg-3.col-sm-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/5.svg' alt='').img120
            .tarjeta.nueva
              .p-3.mt-5
                h4.mb-4.text-center.mx-5 El bien o servicio
                p.mb-0.text-center  Es el objeto de la transacción entre el comprador y el vendedor.

      
      .titulo-sexto.color-secundario.mb-4(data-aos='fade-right')
        h5 Tabla 1. 
        | Relaciones documentales entre comprador y vendedor

      .tabla-b.color-acento-contenido.mb-4(data-aos='fade-right')
        table(alt='La tabla sintetiza los documentos que se intercambian en el proceso de compraventa: el comprador solicita ofertas y realiza pedidos, el vendedor responde con catálogos, confirmaciones y documentos de envío, además de emitir facturas y recibos. El comprador puede generar medios de pago como letras, cheques o pagarés. Finalmente, el vendedor liquida el IVA ante la Hacienda pública.')
          caption Nota. Tomada de Lobato et al. (2010)
          thead
            tr
              th.text-white Operación
              th.text-white Documento
              th.text-white Emisor
              th.text-white Receptor
          tbody
            tr
              td El comprador pide información al vendedor
              td Petición de ofertas
              td Comprador
              td Vendedor
            tr
              td El vendedor informa al cliente
              td Catálogo y tarifa de precios
              td Vendedor
              td Comprador
            tr.bg-color-5
              td(rowspan="2") El comprador pide productos
              td Pedido
              td Vendedor
              td Comprador
            tr.bg-color-5
              td Aceptación de pedido
              td Vendedor
              td Comprador
            tr.bg-color-4
              td(rowspan="4") El vendedor envía la mercancía
              td Albarán
              td Vendedor
              td Comprador
            tr.bg-color-4
              td Nota de gastos
              td Transportista
              td Vendedor / Comprador
            tr.bg-color-4
              td Carta de portes
              td Aseguradora
              td Vendedor / Comprador
            tr.bg-color-4
              td Póliza de seguros
              td Vendedor
              td Comprador
            tr.bg-color-5
              td(rowspan="5") El vendedor envía la mercancía
              td Factura
              td Vendedor
              td Comprador
            tr.bg-color-5
              td Recibo
              td Vendedor
              td Comprador
            tr.bg-color-5
              td Letra de cambio
              td Comprador
              td Vendedor
            tr.bg-color-5
              td Cheque
              td Comprador
              td Vendedor
            tr.bg-color-5
              td Pagaré
              td Comprador
              td Vendedor
            tr.bg-color-4
              td El vendedor liquida el IVA
              td Liquidaciones de IVA
              td Vendedor
              td Hacienda pública
  
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Documentos comerciales
      
      p.mb-5(data-aos='fade-right') Son respaldos físicos o digitales de las transacciones mercantiles, exigidos por la ley y que deben conservarse por 10 años. Su importancia radica en que:  
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5
          .cajon.color-acento-contenido.p-5.mb-0
            .p-3
                h5 De contado:
                ul.lista-ul--color.fa-al
                  li.d-flex
                    i.fas.fa-check-circle
                    p.mb-0 Registran los derechos y obligaciones de la transacción.
                  li.d-flex
                    i.fas.fa-check-circle
                    p.mb-0 Sirven como prueba legal y contable.
                  li.d-flex
                    i.fas.fa-check-circle
                    p.mb-0 Facilitan el control de operaciones empresariales.

        .col-sm-12.col-lg-7.d-none.d-lg-block
          img.mt-5(src='@/assets/curso/temas/t2/6.png', alt='')
      .titulo-cus-1.mb-4(data-aos="fade-right")
        h3.mb-0 Clasificación de documentos comerciales (GestioPolis, 2020)
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-9
          ul.lista-ul--color.lista-ul--separador
            li.d-flex
              i.fas.fa-check-circle.icon-list
              p.mb-0 #[b Negociables:] pagaré, cheque, letra de cambio, libranza, factura cambiaria. Se pueden convertir en dinero o usarse en transacciones.
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 #[b No negociables:] cotización, pedido, remisión, factura, recibo de caja, comprobante de pago, consignaciones, notas débito y crédito. Respaldan la transacción, pero no permiten negociaciones.
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 #[b Privados:] elaborados entre particulares para efectos comerciales.
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 #[b Públicos:] emitidos por notarios o funcionarios judiciales.
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 #[b Informativos:] brindan datos sobre la mercancía (valor, condiciones de pago, etc.).
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 #[b De soporte:] prueban una acción realizada y respaldan obligaciones monetarias.

        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/7.png', alt='')
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
