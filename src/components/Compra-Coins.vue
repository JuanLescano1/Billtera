<template>
  <div class="vista-compra">
    <div class="contenedor-compra">
      <img
        src="https://directivosygerentes.es/wp-content/uploads/2020/08/Qu%C3%A9-son-las-monedas-virtuales-o-criptomonedas.jpeg"
        id="imagenFondo"
      />
      <h1 id="tienda">Tienda</h1>
      <div id="lista">
        <div v-for="nombre in nombres" :key="nombre" id="monedas">
          <div id="datosMonedas">
            <p id="nombre">{{ nombre }}</p>
            <p id="precioCompra">Precio: ${{ cryptos[nombre].ask }}</p>
            <p>Total a pagar ${{ cryptos[nombre].totalAsk }}</p>
          </div>
          <div id="boton">
            <button @click="mostrarDetalles(nombre)">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { detallesMoneda } from "@/services/EventService.js";
export default {
  data() {
    return {
      cryptos: [],
      nombres: "",
    };
  },
  mounted() {
    detallesMoneda()
      .then((data) => {
        this.cryptos = data;
        this.nombres = Object.keys(this.cryptos);
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API:", error);
      });
  },
  methods: {
    ComprarMoneda() {},
    mostrarDetalles(nombre) {
      this.$router.push({ name: "detalles", params: { coin: nombre } });
    },
  },
};
</script>
<style>
.vista-compra {
  width: 100%;
  height: 91.7vh;
  position: relative;
  display: grid;
}
#tienda {
  position: relative;
}
.contenedor-compra {
  width: 80%;
  height: 80%;
  border-style: ridge;
  border-color: black;
  justify-self: center;
  align-self: center;
  border-radius: 50px;
  display: grid;
  position: absolute;
}
#imagenFondo {
  width: 100%;
  border-radius: 50px;
  height: 100%;
  position: absolute;
}
.contenedor-compra #lista {
  position: absolute;
  display: grid;
  overflow: overlay;
  width: 100%;
  height: 60%;
  justify-self: center;
  align-self: center;
}
#datosMonedas {
  width: 80%;
  height: 90%;
  position: relative;
  display: grid;
  grid-template-columns: 20% 30% 40% 10%;
  justify-items: start;
}
#boton {
  width: 20%;
  height: 80%;
  position: relative;
}
#boton button {
  border-radius: 5px;
  border-color: transparent;
  width: 90%;
  height: 100%;
  margin: 5px;
  font-size: 25px;
  transition: background-color 0.4s ease;
  background-color: rgb(44, 23, 102);
  cursor: pointer;
  position: relative;
}
#monedas p {
  margin: 5px;
  align-self: center;
  font-size: 20px;
  font-weight: 1000;
  margin-left: 10px;
  text-shadow: 2px 1px 3px rgb(0, 0, 0);
  color: rgb(180, 179, 179);
  text-transform: capitalize;
}
#monedas {
  width: 100%;
  position: relative;
  display: flex;
  width: 98%;
  height: 60px;
  border-style: solid;
  border-color: rgb(44, 23, 102);
  border-radius: 5px;
  margin-left: 1%;
  margin-right: 1%;
}
#lista::-webkit-scrollbar {
  width: 5px;
  border-radius: 5px;
}
#monedas button:hover {
  background-color: transparent;
}
</style>
