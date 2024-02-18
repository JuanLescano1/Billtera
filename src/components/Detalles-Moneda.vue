<template>
  <div id="cuerpo">
    <div id="contenedor">
      <img
        src="https://directivosygerentes.es/wp-content/uploads/2020/08/Qu%C3%A9-son-las-monedas-virtuales-o-criptomonedas.jpeg"
      />
      <div id="datos2">
        <h1 id="infoTitulo">INFORMACION DE LA MONEDA:</h1>
        <div class="detalles" v-if="detalles">
          <p id="titulo">{{ coin }}</p>
          <p>Precio de venta: {{ detalles.ask }}</p>
          <p>Precio final para venta: {{ detalles.totalAsk }}</p>
          <p>Precio de compra: {{ detalles.bid }}</p>
          <p>Precio final para compra: {{ detalles.totalBid }}</p>
          <p>Tiempo: {{ detalles.fechaLegible }}</p>
          <div id="compraCant">
            <p>Escriba la cantidad a comprar:</p>
            <input v-model.trim="cantidadCompra" id="cant" />
            <button id="btnComprar" v-on:click="confirmarCompra">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "@/services/EventService.js";
export default {
  props: ["coin"],
  data() {
    return {
      detalles: null,
    };
  },
  mounted() {
    this.CargarDatos();
  },
  methods: {
    CargarDatos() {
      axios
        .get(`/${this.coin}`)
        .then((response) => {
          this.detalles = response.data;
          const timestamp = response.data.time;
          const fecha = new Date(timestamp * 1000);
          response.data.fechaLegible = fecha;
          this.detalles = response.data;
        })
        .catch((error) => {
          console.error("Error al obtener detalles de la API:", error);
        });
    },
    confirmarCompra() {
      const cant = this.cantidadCompra;
      const validacion = /^[0-9]+([.,][0-9]+)?$/;

      if (!validacion.test(cant)) {
        alert("Cantidad no valida.");
      } else {
        this.$router.push({ name: "cripto" });
      }
    },
  },
};
</script>
<style>
#cuerpo {
  max-width: 100vmax;
  min-height: 91.7vh;
}
.detalles {
  display: grid;
  width: 90%;
  border-style: ridge;
  border-radius: 5px;
  margin-left: 5%;
  margin-right: 5%;
  border-color: rgb(44, 23, 102);
  position: relative;
  background-color: transparent;
  justify-items: left;
}
.detalles p {
  margin-left: 10px;
  font-weight: 1000;
  margin-left: 3px;
  font-size: 17px;
  text-shadow: 2px 1px 3px rgb(0, 0, 0);
  color: rgb(180, 179, 179);
}
#titulo {
  justify-self: center;
  font-size: 25px;
  text-transform: capitalize;
  color: rgb(255, 255, 255);
}
#infoTitulo {
  color: rgb(44, 23, 102);
  text-shadow: 1px 1px 5px rgb(255, 255, 255);
  font-size: 40px;
  font-weight: 1000;
  position: relative;
  align-items: center;
  align-self: center;
  align-content: center;
}
#datos2 {
  position: absolute;
  max-height: 80%;
  min-height: 80%;
  min-width: 100%;
  border-top: 50px;
  border-bottom: 50px;
  align-self: center;
  display: grid;
  grid-template-rows: 10% 90%;
}
#compraCant {
  display: flex;
}
#cant {
  width: 150px;
  height: 20px;
  align-self: center;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  text-align: end;
  font-size: 17px;
}
#btnComprar {
  width: 150px;
  height: 30px;
  align-self: center;
  border-radius: 10px;
  cursor: pointer;
  background-color: transparent;
  text-shadow: 2px 1px 3px rgb(0, 0, 0);
  color: rgb(180, 179, 179);
  font-size: 20px;
  border-color: rgb(44, 23, 102);
}
</style>
